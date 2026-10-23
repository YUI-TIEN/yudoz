import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { L } from '../i18n'
import { ms } from '../time'
import { playPing } from '../sound'
import type { Action, AppId, ChatMsg, PhoneStory, ReplyBranch, Room } from './types'

export type Screen = { kind: 'lock' } | { kind: 'passcode' } | { kind: 'home' } | { kind: 'app'; app: AppId }

/** 진행 중에 추가된 메시지 */
export type LiveMsg = ChatMsg & { id: string; room: string; seq: number; unreadByThem?: boolean }

export type Banner = { key: string; room: string; sender: L; text: L }
export type Call = { key: string; from: string; lines: L[]; declinedMsg?: L; state: 'ringing' | 'active' }

type Progress = {
  fired: string[]
  done: string[]
  added: LiveMsg[]
  readIds: string[]
  readRooms: string[]
  clock: string
  /** 답장을 기다리는 방과 분기들 (action id 포함) */
  pendingReply: { actionId: string; room: string; branches: ReplyBranch[] } | null
  seq: number
  calls: { at: string; contactId: string; type: 'incoming' | 'missed'; seconds: number }[]
}

const GAP = 1400

function initial(story: PhoneStory): Progress {
  return { fired: [], done: [], added: [], readIds: [], readRooms: [], clock: story.startAt, pendingReply: null, seq: 1, calls: [] }
}

function load(story: PhoneStory): Progress {
  try {
    const raw = window.sessionStorage.getItem(`yudoz-${story.id}-v1`)
    if (raw) return { ...initial(story), ...(JSON.parse(raw) as Progress) }
  } catch {
    // 무시
  }
  return initial(story)
}

const norm = (s: string) => s.replace(/[\s.,!?~…ㅋㅎㅠㅜ^]+/g, '').toLowerCase()

export function matchBranch(branches: ReplyBranch[], text: string): ReplyBranch | null {
  const n = norm(text)
  if (!n) return null
  for (const b of branches) if (b.keys.some((k) => n.includes(norm(k)))) return b
  return null
}

type Ctx = {
  story: PhoneStory
  screen: Screen
  setScreen: (s: Screen) => void
  unlock: () => void
  clock: string
  rooms: (Room & { live: LiveMsg[] })[]
  unreadByRoom: Record<string, number>
  totalUnread: number
  openRoom: string | null
  setOpenRoom: (id: string | null) => void
  canReply: (room: string) => boolean
  send: (room: string, text: string) => void
  banner: Banner | null
  dismissBanner: () => void
  call: Call | null
  acceptCall: () => void
  declineCall: () => void
  finishCall: (seconds: number) => void
  extraCalls: Progress['calls']
  restart: () => void
}

const StoryCtx = createContext<Ctx | null>(null)

export function StoryProvider({ story, children }: { story: PhoneStory; children: React.ReactNode }) {
  const [screen, setScreen] = useState<Screen>({ kind: 'lock' })
  const [openRoom, setOpenRoomState] = useState<string | null>(null)
  const [progress, setProgress] = useState<Progress>(() => load(story))
  const [banner, setBanner] = useState<Banner | null>(null)
  const [call, setCall] = useState<Call | null>(null)
  const ref = useRef(progress)
  const view = useRef({ screen, openRoom })
  view.current = { screen, openRoom }
  const timers = useRef<number[]>([])
  const running = useRef(new Set<string>())

  const commit = useCallback((next: Progress) => {
    ref.current = next
    setProgress(next)
  }, [])

  useEffect(() => {
    try {
      window.sessionStorage.setItem(`yudoz-${story.id}-v1`, JSON.stringify(progress))
    } catch {
      // 무시
    }
  }, [progress, story.id])

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), [])

  const later = (fn: () => void, wait: number) => {
    timers.current.push(window.setTimeout(fn, wait))
  }

  const nameOf = useCallback(
    (id: string) => {
      const c = story.contacts[id]
      return c ? c.name : id
    },
    [story],
  )

  const roomSender = useCallback(
    (roomId: string, from: string): L => {
      const room = story.rooms.find((r) => r.id === roomId)
      if (room?.group) {
        const n = nameOf(from)
        const g = room.group.name
        const pick = (s: L, l: 'ko' | 'zh') => (typeof s === 'string' ? s : s[l])
        return { ko: `${pick(g, 'ko')} · ${pick(n, 'ko')}`, zh: `${pick(g, 'zh')} · ${pick(n, 'zh')}` }
      }
      return nameOf(from)
    },
    [story, nameOf],
  )

  const deliver = useCallback(
    (id: string, room: string, from: string, content: { text: L } | { sticker: string }) => {
      const p = ref.current
      if (p.added.some((m) => m.id === id)) return
      const msg = { id, room, from, at: p.clock, seq: p.seq, ...content } as LiveMsg
      const viewing = view.current.screen.kind === 'app' && view.current.screen.app === 'kakao' && view.current.openRoom === room
      commit({ ...p, seq: p.seq + 1, added: [...p.added, msg], readIds: viewing ? [...p.readIds, id] : p.readIds })
      playPing()
      if (!viewing) {
        setBanner({
          key: id,
          room,
          sender: roomSender(room, from),
          text: 'text' in content ? content.text : { ko: '이모티콘을 보냈습니다.', zh: '傳送了貼圖。' },
        })
      }
    },
    [commit, roomSender],
  )

  const emitRef = useRef<(ev: string) => void>(() => {})

  /** 트리거의 액션을 순서대로 실행. 이미 끝난 액션은 건너뛰므로 새로고침 후에도 이어진다. */
  const run = useCallback(
    (triggerId: string, actions: Action[], startDelay: number) => {
      if (running.current.has(triggerId)) return
      running.current.add(triggerId)
      let i = 0
      const step = () => {
        while (i < actions.length && ref.current.done.includes(`${triggerId}#${i}`)) i++
        if (i >= actions.length) {
          running.current.delete(triggerId)
          return
        }
        const a = actions[i]
        const aid = `${triggerId}#${i}`
        const markDone = () => {
          const p = ref.current
          if (!p.done.includes(aid)) commit({ ...p, done: [...p.done, aid] })
          i++
        }
        switch (a.t) {
          case 'msg':
          case 'sticker': {
            const room = story.rooms.find((r) => r.id === a.room)
            const from = a.from ?? room?.contactId ?? ''
            deliver(aid, a.room, from, a.t === 'msg' ? { text: a.text } : { sticker: a.sticker })
            markDone()
            later(step, a.gap ?? GAP)
            return
          }
          case 'clock':
            commit({ ...ref.current, clock: a.at })
            markDone()
            later(step, 300)
            return
          case 'wait':
            markDone()
            later(step, a.ms)
            return
          case 'reply':
            // 답장을 기다린다. send()가 분기를 확정하면 done 처리 후 이 트리거를 다시 진행한다.
            if (!ref.current.pendingReply) commit({ ...ref.current, pendingReply: { actionId: aid, room: a.room, branches: a.branches } })
            running.current.delete(triggerId)
            return
          case 'call':
            setCall({ key: aid, from: a.from, lines: a.lines, declinedMsg: a.declinedMsg, state: 'ringing' })
            running.current.delete(triggerId)
            return
        }
      }
      later(step, startDelay)
    },
    [commit, deliver, story],
  )

  const emit = useCallback(
    (ev: string) => {
      for (const tg of story.script) {
        if (tg.when !== ev || ref.current.fired.includes(tg.id)) continue
        commit({ ...ref.current, fired: [...ref.current.fired, tg.id] })
        run(tg.id, tg.actions, tg.delay ?? 800)
      }
    },
    [story, commit, run],
  )
  emitRef.current = emit

  // 새로고침 후: 시작됐지만 끝나지 않은 트리거를 이어서 실행
  useEffect(() => {
    for (const tg of story.script) {
      if (!ref.current.fired.includes(tg.id)) continue
      const unfinished = tg.actions.some((_, i) => !ref.current.done.includes(`${tg.id}#${i}`))
      if (unfinished) run(tg.id, tg.actions, 1200)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resume = (actionId: string) => {
    const tg = story.script.find((s) => actionId.startsWith(`${s.id}#`))
    if (tg) run(tg.id, tg.actions, 600)
  }

  const setOpenRoom = (id: string | null) => {
    setOpenRoomState(id)
    if (!id) return
    setBanner((b) => (b?.room === id ? null : b))
    const p = ref.current
    const ids = p.added.filter((m) => m.room === id && m.from !== 'me' && !p.readIds.includes(m.id)).map((m) => m.id)
    const staticUnread = story.rooms.find((r) => r.id === id)?.unread && !p.readRooms.includes(id)
    if (ids.length || staticUnread) commit({ ...p, readIds: [...p.readIds, ...ids], readRooms: staticUnread ? [...p.readRooms, id] : p.readRooms })
    emit(`open:${id}`)
  }

  const send = (room: string, raw: string) => {
    const text = raw.trim()
    const p = ref.current
    if (!text || p.pendingReply?.room !== room) return
    const id = `me-${p.seq}`
    const msg: LiveMsg = { id, room, from: 'me', at: p.clock, seq: p.seq, text, unreadByThem: true }
    const branch = matchBranch(p.pendingReply.branches, text)
    if (!branch) {
      // 조건에 맞지 않으면 상대가 읽지 않는다
      commit({ ...p, seq: p.seq + 1, added: [...p.added, msg] })
      return
    }
    const pending = p.pendingReply
    commit({ ...p, seq: p.seq + 1, added: [...p.added, msg], pendingReply: null })
    later(() => {
      const q = ref.current
      commit({ ...q, added: q.added.map((m) => (m.room === room && m.from === 'me' ? { ...m, unreadByThem: false } : m)) })
    }, 700)
    branch.replies.forEach((r, i) => {
      later(() => {
        const roomDef = story.rooms.find((x) => x.id === room)
        deliver(`${pending.actionId}:${branch.id}:${i}`, room, r.from ?? roomDef?.contactId ?? '', { text: r.text })
      }, 1800 + i * GAP)
    })
    later(() => {
      const q = ref.current
      commit({ ...q, done: [...q.done, pending.actionId] })
      emit(`branch:${room}`)
      emit(`branch:${room}:${branch.id}`)
      resume(pending.actionId)
    }, 1800 + branch.replies.length * GAP + 400)
  }

  const finishCallAction = (type: 'incoming' | 'missed', seconds: number) => {
    if (!call) return
    const p = ref.current
    commit({ ...p, done: [...p.done, call.key], calls: [...p.calls, { at: p.clock, contactId: call.from, type, seconds }] })
    const key = call.key
    setCall(null)
    if (type === 'missed' && call.declinedMsg) {
      const roomId = story.rooms.find((r) => r.contactId === call.from)?.id
      if (roomId) later(() => deliver(`${key}:declined`, roomId, call.from, { text: call.declinedMsg as L }), 1500)
    }
    emit(type === 'missed' ? 'call:declined' : 'call:accepted')
    emit('call:done')
    resume(key)
  }

  const rooms = useMemo(
    () =>
      story.rooms
        .map((r) => ({ ...r, live: progress.added.filter((m) => m.room === r.id) }))
        .sort((a, b) => {
          const la = a.live.length ? a.live[a.live.length - 1].at : a.messages[a.messages.length - 1]?.at ?? ''
          const lb = b.live.length ? b.live[b.live.length - 1].at : b.messages[b.messages.length - 1]?.at ?? ''
          const byTime = ms(lb) - ms(la)
          if (byTime) return byTime
          const sa = a.live.length ? a.live[a.live.length - 1].seq : 0
          const sb = b.live.length ? b.live[b.live.length - 1].seq : 0
          return sb - sa
        }),
    [story, progress.added],
  )

  const unreadByRoom = useMemo(() => {
    const out: Record<string, number> = {}
    for (const r of story.rooms) if (r.unread && !progress.readRooms.includes(r.id)) out[r.id] = r.unread
    for (const m of progress.added) if (m.from !== 'me' && !progress.readIds.includes(m.id)) out[m.room] = (out[m.room] ?? 0) + 1
    return out
  }, [story, progress])

  const value: Ctx = {
    story,
    screen,
    setScreen: (s) => {
      if (s.kind !== 'app' || s.app !== 'kakao') setOpenRoomState(null)
      setScreen(s)
    },
    unlock: () => {
      setScreen({ kind: 'home' })
      emit('unlock')
    },
    clock: progress.clock,
    rooms,
    unreadByRoom,
    totalUnread: Object.values(unreadByRoom).reduce((a, b) => a + b, 0),
    openRoom,
    setOpenRoom,
    canReply: (room) => progress.pendingReply?.room === room,
    send,
    banner,
    dismissBanner: () => setBanner(null),
    call,
    acceptCall: () => setCall((c) => (c ? { ...c, state: 'active' } : c)),
    declineCall: () => finishCallAction('missed', 0),
    finishCall: (seconds) => finishCallAction('incoming', seconds),
    extraCalls: progress.calls,
    restart: () => {
      timers.current.forEach((t) => window.clearTimeout(t))
      timers.current = []
      running.current.clear()
      commit(initial(story))
      setBanner(null)
      setCall(null)
      setOpenRoomState(null)
      setScreen({ kind: 'lock' })
    },
  }

  return <StoryCtx.Provider value={value}>{children}</StoryCtx.Provider>
}

export function useStory() {
  const c = useContext(StoryCtx)
  if (!c) throw new Error('useStory outside provider')
  return c
}

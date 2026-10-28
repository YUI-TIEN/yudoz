import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { L } from '../i18n'
import { ms } from '../time'
import { playPing } from '../sound'
import type { Action, AppId, ChatMsg, PhoneStory, ReplyBranch, Room } from './types'
import { PEOPLE, pickReply } from './personas'

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
  calls: { at: string; contactId: string; type: 'incoming' | 'outgoing' | 'missed'; seconds: number }[]
  /** 알림 센터·잠금화면에 쌓이는 알림 */
  notices: (Banner & { at: string })[]
  /** 자유 대화에서 사람마다 몇 번 답했는지 */
  freeCount: Record<string, number>
  /** 스크립트가 시각을 바꾼 뒤부터는 실제 시간만큼 흐른다 (그때의 실제 ms) */
  liveFrom?: number
  ended?: boolean
}

const GAP = 1400

function initial(story: PhoneStory): Progress {
  return { fired: [], done: [], added: [], readIds: [], readRooms: [], clock: story.startAt, pendingReply: null, seq: 1, calls: [], notices: [], freeCount: {} }
}

function load(story: PhoneStory): Progress {
  try {
    const raw = window.sessionStorage.getItem(`yudoz-${story.key ?? story.id}-v1`)
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
  ended: boolean
  screen: Screen
  setScreen: (s: Screen) => void
  unlock: () => void
  /** 잠금 상태에서 알림을 누르면 암호 입력 뒤 그 방으로 간다 */
  queueRoom: (id: string) => void
  clock: string
  rooms: (Room & { live: LiveMsg[] })[]
  unreadByRoom: Record<string, number>
  totalUnread: number
  openRoom: string | null
  setOpenRoom: (id: string | null) => void
  canReply: (room: string) => boolean
  /** 스토리가 이 방에서 답을 기다리는 중인지 */
  awaiting: (room: string) => boolean
  send: (room: string, payload: string | { sticker: string } | { photo: L; src?: string }) => void
  pushMessage: (contactId: string, text: L) => void
  banner: Banner | null
  dismissBanner: () => void
  call: Call | null
  acceptCall: () => void
  declineCall: () => void
  finishCall: (seconds: number) => void
  extraCalls: Progress['calls']
  addCall: (contactId: string, type: 'outgoing' | 'missed', seconds: number) => void
  notices: Progress['notices']
  clearNotices: () => void
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
  const pendingRoom = useRef<string | null>(null)
  const early = useRef<Record<string, string>>({})
  const flushRef = useRef<() => void>(() => {})
  const resolveRef = useRef<(room: string, text: string) => void>(() => {})

  const commit = useCallback((next: Progress) => {
    ref.current = next
    setProgress(next)
  }, [])

  /** 지금 폰에 표시되는 시각 */
  const nowIso = useCallback(() => {
    const p = ref.current
    return p.liveFrom ? new Date(ms(p.clock) + Date.now() - p.liveFrom).toISOString() : p.clock
  }, [])
  const [, setTick] = useState(0)
  useEffect(() => {
    if (!progress.liveFrom) return
    const id = window.setInterval(() => setTick((x) => x + 1), 5000)
    return () => window.clearInterval(id)
  }, [progress.liveFrom])

  useEffect(() => {
    try {
      window.sessionStorage.setItem(`yudoz-${story.key ?? story.id}-v1`, JSON.stringify(progress))
    } catch {
      // 무시
    }
  }, [progress, story.key, story.id])

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
    (id: string, room: string, from: string, content: { text: L } | { sticker: string } | { photo: L }) => {
      const p = ref.current
      if (p.added.some((m) => m.id === id)) return
      const msg = { id, room, from, at: nowIso(), seq: p.seq, ...content } as LiveMsg
      const viewing = view.current.screen.kind === 'app' && view.current.screen.app === 'kakao' && view.current.openRoom === room
      commit({ ...p, seq: p.seq + 1, added: [...p.added, msg], readIds: viewing ? [...p.readIds, id] : p.readIds })
      playPing()
      if (!viewing) {
        const b: Banner = {
          key: id,
          room,
          sender: roomSender(room, from),
          text: 'text' in content ? content.text : 'photo' in content ? { ko: '사진을 보냈습니다.', zh: '傳送了照片。' } : { ko: '이모티콘을 보냈습니다.', zh: '傳送了貼圖。' },
        }
        setBanner(b)
        ref.current = { ...ref.current, notices: [...ref.current.notices, { ...b, at: nowIso() }] }
        setProgress(ref.current)
      }
    },
    [commit, roomSender, nowIso],
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
          window.setTimeout(() => flushRef.current(), 1200)
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
          case 'photo': {
            const room = story.rooms.find((r) => r.id === a.room)
            deliver(aid, a.room, a.from ?? room?.contactId ?? '', { photo: a.caption })
            markDone()
            later(step, a.gap ?? GAP)
            return
          }
          case 'end':
            commit({ ...ref.current, ended: true })
            markDone()
            later(step, 100)
            return
          case 'clock':
            commit({ ...ref.current, clock: a.at, liveFrom: Date.now() })
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
            // 스크립트가 말하는 도중에 사용자가 먼저 답을 보냈으면 그걸로 판정한다
            if (early.current[a.room]) {
              const tx = early.current[a.room]
              delete early.current[a.room]
              later(() => resolveRef.current(a.room, tx), 900)
            }
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
    const notices = p.notices.filter((n) => n.room !== id)
    if (ids.length || staticUnread || notices.length !== p.notices.length)
      commit({ ...p, notices, readIds: [...p.readIds, ...ids], readRooms: staticUnread ? [...p.readRooms, id] : p.readRooms })
    emit(`open:${id}`)
  }

  /** 보낸 메시지 내용: 글자, 이모티콘, 사진 */
  type Payload = string | { sticker: string } | { photo: L; src?: string }

  // 아직 진행 중인 스크립트가 이 방에 메시지를 보낼 예정이면 자유 대화 답장은 하지 않는다
  const scriptBusy = (room: string) =>
    story.script.some(
      (tg) =>
        ref.current.fired.includes(tg.id) &&
        tg.actions.some((a, i) => !ref.current.done.includes(`${tg.id}#${i}`) && 'room' in a && a.room === room),
    )

  const freeTimers = useRef<Record<string, number>>({})

  /** 스크립트가 끝났는데 답을 못 받은 메시지가 있으면 자유 대화로 답한다 */
  flushRef.current = () => {
    for (const [room, tx] of Object.entries(early.current)) {
      if (scriptBusy(room) || ref.current.pendingReply?.room === room) continue
      delete early.current[room]
      freeReply(room, 'text', tx)
    }
  }

  const freeReply = (room: string, lastKind: 'text' | 'sticker' | 'photo', lastText: string) => {
    const roomDef = story.rooms.find((x) => x.id === room)
    if (!roomDef || scriptBusy(room)) return
    const people = PEOPLE[story.key ?? story.id] ?? {}
    // 1:1이면 상대, 단톡이면 한두 명
    const candidates = roomDef.contactId ? [roomDef.contactId] : (roomDef.group?.members ?? [])
    const p0 = ref.current
    const responders = roomDef.contactId ? candidates : candidates.filter((_, i) => (p0.seq + i) % 3 === 0).slice(0, 2)
    if (!responders.length && candidates.length) responders.push(candidates[p0.seq % candidates.length])
    // 읽음 처리
    later(() => {
      const q = ref.current
      commit({ ...q, added: q.added.map((m) => (m.room === room && m.from === 'me' ? { ...m, unreadByThem: false } : m)) })
    }, 900 + Math.random() * 900)
    let t = 2200
    responders.forEach((who) => {
      const persona = people[who]
      if (!persona) return
      const n = ref.current.freeCount[who] ?? 0
      const lines = lastKind === 'sticker' ? persona.sticker[n % persona.sticker.length] : lastKind === 'photo' ? persona.photo[n % persona.photo.length] : pickReply(persona, lastText, n)
      commit({ ...ref.current, freeCount: { ...ref.current.freeCount, [who]: n + 1 } })
      lines.forEach((line, i) => {
        const id = `free-${room}-${who}-${n}-${i}`
        later(() => deliver(id, room, who, { text: line }), t + i * 1300)
      })
      t += lines.length * 1300 + 600
    })
  }

  const send = (room: string, payload: Payload) => {
    const p = ref.current
    const text = typeof payload === 'string' ? payload.trim() : ''
    if (typeof payload === 'string' && !text) return
    const id = `me-${p.seq}`
    const content = typeof payload === 'string' ? { text } : payload
    const msg = { id, room, from: 'me', at: nowIso(), seq: p.seq, unreadByThem: true, ...content } as LiveMsg

    // 스토리가 답을 기다리는 방
    if (p.pendingReply?.room === room) {
      commit({ ...p, seq: p.seq + 1, added: [...p.added, msg] })
      if (text) resolvePending(room, text)
      return
    }

    // 스크립트가 아직 이 방에서 말하는 중이면, 답을 기다리기 시작할 때 판정하도록 보관
    if (scriptBusy(room)) {
      commit({ ...p, seq: p.seq + 1, added: [...p.added, msg] })
      if (text) early.current[room] = text
      return
    }

    // 자유 대화: 연달아 보내면 마지막 메시지에 한 번만 답한다
    commit({ ...p, seq: p.seq + 1, added: [...p.added, msg] })
    window.clearTimeout(freeTimers.current[room])
    const kind = typeof payload === 'string' ? 'text' : 'sticker' in payload ? 'sticker' : 'photo'
    freeTimers.current[room] = window.setTimeout(() => freeReply(room, kind, text), 1600)
  }

  /** 기다리던 답을 판정한다. 맞지 않으면 상대가 읽지 않은 채로 둔다. */
  const resolvePending = (room: string, text: string) => {
    const p = ref.current
    if (p.pendingReply?.room !== room) return
    const branch = matchBranch(p.pendingReply.branches, text)
    if (!branch) return
    const pending = p.pendingReply
    commit({ ...p, pendingReply: null })
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
  resolveRef.current = resolvePending

  /** 전화·FaceTime 뒤 등에 상대가 보내는 카톡 */
  const pushMessage = (contactId: string, text: L) => {
    const room = story.rooms.find((r) => r.contactId === contactId)
    if (room) deliver(`push-${contactId}-${ref.current.seq}-${Date.now()}`, room.id, contactId, { text })
  }

  const finishCallAction = (type: 'incoming' | 'missed', seconds: number) => {
    if (!call) return
    const p = ref.current
    commit({ ...p, done: [...p.done, call.key], calls: [...p.calls, { at: nowIso(), contactId: call.from, type, seconds }] })
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
      const room = pendingRoom.current
      pendingRoom.current = null
      setScreen(room ? { kind: 'app', app: 'kakao' } : { kind: 'home' })
      emit('unlock')
      if (room) window.setTimeout(() => setOpenRoom(room), 0)
    },
    queueRoom: (id) => {
      pendingRoom.current = id
    },
    clock: nowIso(),
    ended: !!progress.ended,
    rooms,
    unreadByRoom,
    totalUnread: Object.entries(unreadByRoom).reduce((a, [id, n]) => a + (story.rooms.find((r) => r.id === id)?.hidden ? 0 : n), 0),
    openRoom,
    setOpenRoom,
    canReply: () => true,
    awaiting: (room) => progress.pendingReply?.room === room,
    send,
    pushMessage,
    banner,
    dismissBanner: () => setBanner(null),
    call,
    acceptCall: () => setCall((c) => (c ? { ...c, state: 'active' } : c)),
    declineCall: () => finishCallAction('missed', 0),
    finishCall: (seconds) => finishCallAction('incoming', seconds),
    extraCalls: progress.calls,
    addCall: (contactId, type, seconds) => {
      const p = ref.current
      commit({ ...p, calls: [...p.calls, { at: nowIso(), contactId, type, seconds }] })
    },
    notices: progress.notices,
    clearNotices: () => commit({ ...ref.current, notices: [] }),
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

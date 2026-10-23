import { useEffect, useRef, useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { fullDate, listDate, sameDay, time } from '../../time'
import { useStory, type LiveMsg } from '../../story/engine'
import type { ChatMsg, Room } from '../../story/types'
import { Avatar, HomeBar, PhotoTile, StatusBar } from '../common'

type AnyMsg = (ChatMsg & { id?: string; unreadByThem?: boolean; seq?: number }) | LiveMsg

function preview(m: AnyMsg | undefined, t: (s: L) => string) {
  if (!m) return ''
  if ('text' in m) return typeof m.text === 'string' ? m.text : t(m.text)
  if ('photo' in m) return t({ ko: '사진', zh: '照片' })
  return t({ ko: '이모티콘', zh: '貼圖' })
}

export function KakaoApp() {
  const { openRoom } = useStory()
  return openRoom ? <ChatRoom id={openRoom} /> : <ChatList />
}

function roomTitle(room: Room, contacts: Record<string, { name: L }>, t: (s: L) => string) {
  if (room.group) return t(room.group.name)
  return room.contactId ? t(contacts[room.contactId].name) : ''
}

function ChatList() {
  const { rooms, unreadByRoom, story, setOpenRoom, clock, setScreen } = useStory()
  const { t, lang } = useLang()
  return (
    <div className="kakao-list">
      <StatusBar />
      <div className="kl-head">
        <button className="kl-back" onClick={() => setScreen({ kind: 'home' })} aria-label={t(UI.back)}>
          ‹
        </button>
        <h1>{t(UI.chats)}</h1>
        <span className="kl-tools">🔍 💬 ⚙︎</span>
      </div>
      <div className="kl-items">
        {rooms.map((r) => {
          const all: AnyMsg[] = [...r.messages, ...r.live]
          const last = all[all.length - 1]
          const unread = unreadByRoom[r.id] ?? 0
          const members = r.group ? r.group.members.length + 1 : 0
          return (
            <button key={r.id} className="kl-item" onClick={() => setOpenRoom(r.id)}>
              <Avatar size={46} group={members} src={r.contactId ? story.contacts[r.contactId]?.avatar : undefined} />
              <span className="kl-mid">
                <b>
                  {roomTitle(r, story.contacts, t)}
                  {members > 0 && <em>{members}</em>}
                </b>
                <small>{preview(last, t)}</small>
              </span>
              <span className="kl-right">
                <small>{last ? listDate(last.at, clock, lang) : ''}</small>
                {unread > 0 && <i className="kl-badge">{unread}</i>}
              </span>
            </button>
          )
        })}
      </div>
      <div className="kl-tabs">
        <span>👤</span>
        <span className="on">💬</span>
        <span>🛍</span>
        <span>⋯</span>
      </div>
      <HomeBar />
    </div>
  )
}

function ChatRoom({ id }: { id: string }) {
  const { rooms, story, setOpenRoom, canReply, send } = useStory()
  const { t, lang } = useLang()
  const room = rooms.find((r) => r.id === id)
  const [draft, setDraft] = useState('')
  const scroller = useRef<HTMLDivElement>(null)
  const msgs: AnyMsg[] = room ? [...room.messages, ...room.live] : []
  const enabled = canReply(id)

  useEffect(() => {
    const el = scroller.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [msgs.length])

  if (!room) return null
  const title = roomTitle(room, story.contacts, t)

  const submit = () => {
    if (!draft.trim()) return
    send(id, draft)
    setDraft('')
  }

  return (
    <div className="chat">
      <StatusBar />
      <div className="chat-head">
        <button onClick={() => setOpenRoom(null)} aria-label={t(UI.back)}>
          ‹
        </button>
        <b>
          {title}
          {room.group && <em>{room.group.members.length + 1}</em>}
        </b>
        <span>🔍 ☰</span>
      </div>
      <div className="chat-body" ref={scroller}>
        {msgs.map((m, i) => {
          const prev = msgs[i - 1]
          const next = msgs[i + 1]
          const newDay = !prev || !sameDay(prev.at, m.at)
          const mine = m.from === 'me'
          const firstOfRun = newDay || !prev || prev.from !== m.from
          const lastOfRun = !next || next.from !== m.from || time(next.at, lang) !== time(m.at, lang) || !sameDay(next.at, m.at)
          const who = story.contacts[m.from]
          return (
            <div key={('id' in m && m.id) || `${m.at}-${i}`}>
              {newDay && <div className="chat-day">{fullDate(m.at, lang)}</div>}
              <div className={`msg ${mine ? 'me' : 'them'} ${firstOfRun ? 'first' : ''}`}>
                {!mine && (
                  <span className="msg-avatar">{firstOfRun && <Avatar size={36} src={who?.avatar} />}</span>
                )}
                <span className="msg-col">
                  {!mine && firstOfRun && <span className="msg-name">{who ? t(who.name) : ''}</span>}
                  <span className="msg-row">
                    {mine && (
                      <span className="msg-meta">
                        {'unreadByThem' in m && m.unreadByThem && <i>1</i>}
                        {lastOfRun && <small>{time(m.at, lang)}</small>}
                      </span>
                    )}
                    <Bubble m={m} mine={mine} tail={firstOfRun} />
                    {!mine && lastOfRun && (
                      <span className="msg-meta">
                        <small>{time(m.at, lang)}</small>
                      </span>
                    )}
                  </span>
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <form
        className={`chat-input ${enabled ? '' : 'off'}`}
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <span className="ci-plus">＋</span>
        <input
          value={draft}
          disabled={!enabled}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t(enabled ? UI.messageInput : UI.messageLocked)}
          enterKeyHint="send"
        />
        <button type="submit" disabled={!enabled || !draft.trim()} className={draft.trim() ? 'go' : ''}>
          {draft.trim() ? '↑' : '#'}
        </button>
      </form>
      <HomeBar />
    </div>
  )
}

function Bubble({ m, mine, tail }: { m: AnyMsg; mine: boolean; tail: boolean }) {
  const { t } = useLang()
  if ('sticker' in m) return <span className="sticker">{m.sticker}</span>
  if ('photo' in m)
    return (
      <span className="msg-photo">
        <PhotoTile src={m.src} emoji="🖼️" tint="#dfe7f1" label={t(m.photo)} />
        <small>{t(m.photo)}</small>
      </span>
    )
  return (
    <span className={`bubble ${mine ? 'me' : 'them'} ${tail ? 'tail' : ''}`}>
      {m.reply && (
        <span className="bubble-reply">
          <b>{t(m.reply.to)}</b>
          <small>{t(m.reply.text)}</small>
        </span>
      )}
      {typeof m.text === 'string' ? m.text : t(m.text)}
    </span>
  )
}

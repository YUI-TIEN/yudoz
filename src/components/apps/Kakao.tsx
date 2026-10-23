import { useEffect, useRef, useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { fullDate, listDate, sameDay, time } from '../../time'
import { useStory, type LiveMsg } from '../../story/engine'
import type { ChatMsg, Room } from '../../story/types'
import { useBackHandler } from '../../device'
import { Avatar, PhotoTile } from '../common'
import { StatusBar } from '../system'
import { G } from '../icons'

type AnyMsg = (ChatMsg & { id?: string; unreadByThem?: boolean; seq?: number }) | LiveMsg
type Tab = 'friends' | 'chats' | 'open' | 'shop' | 'more'

function preview(m: AnyMsg | undefined, t: (s: L) => string) {
  if (!m) return ''
  if ('text' in m) return t(m.text)
  if ('photo' in m) return t({ ko: '사진을 보냈습니다.', zh: '傳送了照片。' })
  return t({ ko: '이모티콘을 보냈습니다.', zh: '傳送了貼圖。' })
}

function roomTitle(room: Room, contacts: Record<string, { name: L }>, t: (s: L) => string) {
  if (room.group) return t(room.group.name)
  return room.contactId ? t(contacts[room.contactId].name) : ''
}

export function KakaoApp() {
  const { openRoom } = useStory()
  const [tab, setTab] = useState<Tab>('chats')
  const [profile, setProfile] = useState<string | null>(null)
  if (openRoom) return <ChatRoom id={openRoom} />
  return (
    <div className="kakao">
      <StatusBar />
      {tab === 'friends' && <Friends onProfile={setProfile} />}
      {tab === 'chats' && <ChatList />}
      {(tab === 'open' || tab === 'shop' || tab === 'more') && <Empty tab={tab} />}
      <KakaoTabs tab={tab} setTab={setTab} />
      {profile && <Profile id={profile} onClose={() => setProfile(null)} />}
    </div>
  )
}

function KakaoTabs({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  const { totalUnread } = useStory()
  const items: [Tab, string][] = [
    ['friends', 'person'],
    ['chats', 'bubble'],
    ['open', 'bubbles'],
    ['shop', 'bag'],
    ['more', 'more'],
  ]
  return (
    <nav className="k-tabs">
      {items.map(([id, icon]) => (
        <button key={id} className={tab === id ? 'on' : ''} onClick={() => setTab(id)}>
          <G n={icon} size={26} w={tab === id ? 2.3 : 1.7} />
          {id === 'chats' && totalUnread > 0 && <i className="k-tab-badge">{totalUnread}</i>}
        </button>
      ))}
    </nav>
  )
}

function KHead({ title, icons }: { title: L; icons: string[] }) {
  const { t } = useLang()
  return (
    <div className="k-head">
      <h1>{t(title)}</h1>
      <span>
        {icons.map((n) => (
          <G key={n} n={n} size={23} w={1.9} />
        ))}
      </span>
    </div>
  )
}

function Empty({ tab }: { tab: Tab }) {
  const { t } = useLang()
  const title: Record<string, L> = {
    open: { ko: '오픈채팅', zh: '開放聊天' },
    shop: { ko: '쇼핑', zh: '購物' },
    more: { ko: '더보기', zh: '更多' },
  }
  return (
    <>
      <KHead title={title[tab]} icons={['search', 'gear']} />
      <div className="k-empty">
        <G n={tab === 'shop' ? 'bag' : tab === 'open' ? 'bubbles' : 'grid'} size={44} w={1.4} />
        <p>{t({ ko: '이 화면은 이야기와 관계없어요.', zh: '這個畫面和故事無關喔。' })}</p>
      </div>
    </>
  )
}

function Friends({ onProfile }: { onProfile: (id: string) => void }) {
  const { story } = useStory()
  const { t } = useLang()
  const friends = Object.entries(story.contacts).filter(([id]) => story.rooms.some((r) => r.contactId === id || r.group?.members.includes(id)))
  return (
    <>
      <KHead title={UI.friends} icons={['search', 'plus', 'gear']} />
      <div className="k-scroll">
        <button className="k-me" onClick={() => onProfile('me')}>
          <Avatar size={58} src={story.owner.avatar} />
          <span>
            <b>{t(story.owner.name)}</b>
            <small>{t(story.owner.status)}</small>
          </span>
        </button>
        <div className="k-section">{t({ ko: `친구 ${friends.length}`, zh: `好友 ${friends.length}` })}</div>
        {friends.map(([id, c]) => (
          <button key={id} className="k-friend" onClick={() => onProfile(id)}>
            <Avatar size={44} src={c.avatar} />
            <span>
              <b>{t(c.name)}</b>
              {c.status && <small>{t(c.status)}</small>}
            </span>
          </button>
        ))}
      </div>
    </>
  )
}

function Profile({ id, onClose }: { id: string; onClose: () => void }) {
  const { story, setOpenRoom } = useStory()
  const { t } = useLang()
  useBackHandler(true, onClose)
  const me = id === 'me'
  const c = me ? { name: story.owner.name, status: story.owner.status, avatar: story.owner.avatar } : story.contacts[id]
  const room = story.rooms.find((r) => r.contactId === id)
  return (
    <div className="k-profile">
      <StatusBar dark />
      <div className="k-profile-top">
        <button onClick={onClose} aria-label="close">
          <G n="close" size={24} w={2} />
        </button>
        <span>
          <G n="gift" size={22} />
        </span>
      </div>
      <div className="k-profile-mid">
        <Avatar size={100} src={c.avatar} />
        <b>{t(c.name)}</b>
        {c.status && <small>{t(c.status)}</small>}
      </div>
      <div className="k-profile-btns">
        <button
          onClick={() => {
            if (room) {
              onClose()
              setOpenRoom(room.id)
            }
          }}
        >
          <G n="bubble" size={26} w={1.6} />
          <span>{me ? t({ ko: '나와의 채팅', zh: '與自己聊天' }) : t({ ko: '1:1 채팅', zh: '1:1 聊天' })}</span>
        </button>
        {!me && (
          <>
            <button>
              <G n="phone" size={26} w={1.6} />
              <span>{t({ ko: '통화하기', zh: '語音通話' })}</span>
            </button>
            <button>
              <G n="camera" size={26} w={1.6} />
              <span>{t({ ko: '페이스톡', zh: '視訊通話' })}</span>
            </button>
          </>
        )}
        {me && (
          <button>
            <G n="compose" size={26} w={1.6} />
            <span>{t({ ko: '프로필 편집', zh: '編輯個人檔案' })}</span>
          </button>
        )}
      </div>
    </div>
  )
}

function ChatList() {
  const { rooms, unreadByRoom, story, setOpenRoom, clock } = useStory()
  const { t, lang } = useLang()
  return (
    <>
      <KHead title={UI.chats} icons={['search', 'compose', 'gear']} />
      <div className="k-scroll">
        <div className="k-banner">
          <b>{t({ ko: '🎂 오늘 생일인 친구를 확인해 보세요', zh: '🎂 看看今天生日的好友' })}</b>
          <small>{t({ ko: '선물하기 · 광고', zh: '送禮 · 廣告' })}</small>
        </div>
        {rooms.map((r) => {
          const all: AnyMsg[] = [...r.messages, ...r.live]
          const last = all[all.length - 1]
          const unread = unreadByRoom[r.id] ?? 0
          const members = r.group ? r.group.members.length + 1 : 0
          return (
            <button key={r.id} className="k-room" onClick={() => setOpenRoom(r.id)}>
              <Avatar size={48} group={members} src={r.contactId ? story.contacts[r.contactId]?.avatar : undefined} />
              <span className="k-room-mid">
                <b>
                  <span>{roomTitle(r, story.contacts, t)}</span>
                  {members > 0 && <em>{members}</em>}
                </b>
                <small>{preview(last, t)}</small>
              </span>
              <span className="k-room-right">
                <small>{last ? listDate(last.at, clock, lang) : ''}</small>
                {unread > 0 && <i>{unread > 300 ? '300+' : unread}</i>}
              </span>
            </button>
          )
        })}
      </div>
    </>
  )
}

function ChatRoom({ id }: { id: string }) {
  const { rooms, story, setOpenRoom, canReply, send } = useStory()
  const { t, lang } = useLang()
  const room = rooms.find((r) => r.id === id)
  const [draft, setDraft] = useState('')
  const [drawer, setDrawer] = useState(false)
  const [viewer, setViewer] = useState<AnyMsg | null>(null)
  const scroller = useRef<HTMLDivElement>(null)
  const msgs: AnyMsg[] = room ? [...room.messages, ...room.live] : []
  const enabled = canReply(id)
  useBackHandler(true, () => (viewer ? setViewer(null) : drawer ? setDrawer(false) : setOpenRoom(null)))

  useEffect(() => {
    const el = scroller.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: msgs.length > 40 ? 'auto' : 'smooth' })
  }, [msgs.length])

  // 처음 열 때는 맨 아래로 바로 이동
  useEffect(() => {
    const el = scroller.current
    if (el) el.scrollTop = el.scrollHeight
  }, [id])

  if (!room) return null
  const title = roomTitle(room, story.contacts, t)
  const submit = () => {
    if (!draft.trim()) return
    send(id, draft)
    setDraft('')
  }
  const members = room.group ? room.group.members : room.contactId ? [room.contactId] : []

  return (
    <div className="k-chat">
      <StatusBar />
      <div className="k-chat-head">
        <button onClick={() => setOpenRoom(null)} aria-label={t(UI.back)}>
          <G n="back" size={24} w={2.2} />
        </button>
        <b>
          {title}
          {room.group && <em>{room.group.members.length + 1}</em>}
        </b>
        <span>
          <G n="search" size={22} w={1.9} />
          <button onClick={() => setDrawer(true)} aria-label="menu">
            <G n="menu" size={22} w={1.9} />
          </button>
        </span>
      </div>
      <div className="k-chat-body" ref={scroller}>
        {msgs.map((m, i) => {
          const prev = msgs[i - 1]
          const next = msgs[i + 1]
          const newDay = !prev || !sameDay(prev.at, m.at)
          const mine = m.from === 'me'
          const firstOfRun = newDay || !prev || prev.from !== m.from || time(prev.at, lang) !== time(m.at, lang)
          const lastOfRun = !next || next.from !== m.from || time(next.at, lang) !== time(m.at, lang) || !sameDay(next.at, m.at)
          const who = story.contacts[m.from]
          return (
            <div key={('id' in m && m.id) || `${m.at}-${i}`}>
              {newDay && (
                <div className="k-day">
                  <G n="clock" size={12} w={2} />
                  {fullDate(m.at, lang)}
                </div>
              )}
              <div className={`k-msg ${mine ? 'me' : 'them'} ${firstOfRun ? 'first' : ''} ${'seq' in m && m.seq ? 'live' : ''}`}>
                {!mine && <span className="k-msg-avatar">{firstOfRun && <Avatar size={38} src={who?.avatar} />}</span>}
                <span className="k-msg-col">
                  {!mine && firstOfRun && <span className="k-msg-name">{who ? t(who.name) : ''}</span>}
                  <span className="k-msg-row">
                    {mine && (
                      <span className="k-meta">
                        {'unreadByThem' in m && m.unreadByThem && <i>1</i>}
                        {lastOfRun && <small>{time(m.at, lang)}</small>}
                      </span>
                    )}
                    <Bubble m={m} mine={mine} tail={firstOfRun} onPhoto={() => setViewer(m)} />
                    {!mine && lastOfRun && (
                      <span className="k-meta">
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
        className={`k-input ${enabled ? '' : 'off'}`}
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <button type="button" className="k-plus" aria-label="plus">
          <G n="plus" size={22} w={2} />
        </button>
        <label className="k-field">
          <input
            value={draft}
            disabled={!enabled}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={t(enabled ? UI.messageInput : UI.messageLocked)}
            enterKeyHint="send"
            autoComplete="off"
          />
          <G n="emoji" size={22} w={1.8} />
        </label>
        {draft.trim() ? (
          <button type="submit" className="k-send" aria-label={t(UI.send)}>
            <G n="arrowUp" size={20} w={2.6} />
          </button>
        ) : (
          <button type="button" className="k-hash" aria-label="#">
            <G n="hash" size={21} w={2} />
          </button>
        )}
      </form>
      {drawer && (
        <div className="k-drawer-bg" onClick={() => setDrawer(false)}>
          <div className="k-drawer" onClick={(e) => e.stopPropagation()}>
            <StatusBar />
            <h3>{t({ ko: '채팅방 서랍', zh: '聊天室抽屜' })}</h3>
            <div className="k-drawer-row">
              <G n="photo" size={20} />
              {t({ ko: '사진·동영상', zh: '照片・影片' })}
            </div>
            <div className="k-drawer-row">
              <G n="folder" size={20} />
              {t({ ko: '파일', zh: '檔案' })}
            </div>
            <h4>{t({ ko: '대화상대', zh: '聊天成員' })}</h4>
            <div className="k-drawer-member">
              <Avatar size={36} src={story.owner.avatar} />
              <span>
                <em>{t({ ko: '나', zh: '我' })}</em>
                {t(story.owner.name)}
              </span>
            </div>
            {members.map((mid) => (
              <div key={mid} className="k-drawer-member">
                <Avatar size={36} src={story.contacts[mid]?.avatar} />
                <span>{story.contacts[mid] ? t(story.contacts[mid].name) : mid}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {viewer && 'photo' in viewer && (
        <div className="k-viewer" onClick={() => setViewer(null)}>
          <StatusBar dark />
          <div className="k-viewer-img">
            <PhotoTile src={viewer.src} emoji="🖼️" tint="#4a5568" label={t(viewer.photo)} />
          </div>
          <p>{t(viewer.photo)}</p>
        </div>
      )}
    </div>
  )
}

function Bubble({ m, mine, tail, onPhoto }: { m: AnyMsg; mine: boolean; tail: boolean; onPhoto: () => void }) {
  const { t } = useLang()
  if ('sticker' in m) return <span className="k-sticker">{m.sticker}</span>
  if ('photo' in m)
    return (
      <button className="k-photo" onClick={onPhoto}>
        <PhotoTile src={m.src} emoji="🖼️" tint="#dfe7f1" label={t(m.photo)} />
        {!m.src && <small>{t(m.photo)}</small>}
      </button>
    )
  return (
    <span className={`k-bubble ${mine ? 'me' : 'them'} ${tail ? 'tail' : ''}`}>
      {m.reply && (
        <span className="k-reply">
          <b>{t({ ko: `${t(m.reply.to)}에게 답장`, zh: `回覆 ${t(m.reply.to)}` })}</b>
          <small>{t(m.reply.text)}</small>
        </span>
      )}
      {t(m.text)}
    </span>
  )
}

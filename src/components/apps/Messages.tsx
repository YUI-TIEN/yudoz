import { useEffect, useRef, useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { listDate, monthDay, ms, time } from '../../time'
import { useStory } from '../../story/engine'
import { useBackHandler, useDevice } from '../../device'
import { ContactAvatar, Page } from '../common'
import { StatusBar } from '../system'
import { G } from '../icons'

type Row = { key: string; title: L; contactId?: string; threadId?: string; last: { text: L; at: number }; unread?: boolean }

export function MessagesApp() {
  const { story, clock } = useStory()
  const { im } = useDevice()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<{ threadId?: string; contactId?: string } | null>(null)
  const [picker, setPicker] = useState(false)
  if (open) return <Thread {...open} onBack={() => setOpen(null)} />

  const rows: Row[] = story.sms.map((s) => {
    const last = s.messages[s.messages.length - 1]
    const extra = s.contactId ? im[s.contactId] : undefined
    const lx = extra?.[extra.length - 1]
    return {
      key: s.id,
      title: s.from,
      contactId: s.contactId,
      threadId: s.id,
      unread: s.unread,
      last: lx ? { text: lx.text, at: ms(clock) + (lx.at % 1000) } : { text: last.text, at: ms(last.at) },
    }
  })
  for (const [cid, list] of Object.entries(im)) {
    if (rows.some((r) => r.contactId === cid) || !list.length) continue
    const c = story.contacts[cid]
    rows.push({ key: `im-${cid}`, title: c?.name ?? cid, contactId: cid, last: { text: list[list.length - 1].text, at: ms(clock) + 1 } })
  }
  rows.sort((a, b) => b.last.at - a.last.at)

  return (
    <>
      <Page
        title={UI.messages}
        large
        bg="#fff"
        search={UI.search}
        right={
          <>
            <G n="more" size={24} />
            <button onClick={() => setPicker(true)} aria-label="compose">
              <G n="compose" size={23} />
            </button>
          </>
        }
      >
        <div className="m-list">
          {rows.map((r) => (
            <button key={r.key} className="m-row" onClick={() => setOpen({ threadId: r.threadId, contactId: r.contactId })}>
              <span className={`m-dot ${r.unread ? 'on' : ''}`} />
              <ContactAvatar name={t(r.title)} size={46} src={r.contactId ? story.contacts[r.contactId]?.avatar : undefined} />
              <span className="m-mid">
                <span className="m-top">
                  <b>{t(r.title)}</b>
                  <small>
                    {listDate(new Date(Math.min(r.last.at, ms(clock))).toISOString(), clock, lang)}
                    <G n="chevron" size={13} w={2.6} />
                  </small>
                </span>
                <small className="clamp2">{t(r.last.text).replace(/\n/g, ' ')}</small>
              </span>
            </button>
          ))}
        </div>
      </Page>
      {picker && (
        <div className="sheet-bg" onClick={() => setPicker(false)}>
          <div className="sheet tall" onClick={(e) => e.stopPropagation()}>
            <div className="m-new-head">
              <span />
              <b>{t({ ko: '새로운 메시지', zh: '新訊息' })}</b>
              <button onClick={() => setPicker(false)}>{t(UI.cancel)}</button>
            </div>
            <div className="m-to">
              <span>{t({ ko: '받는 사람:', zh: '收件人：' })}</span>
            </div>
            {Object.entries(story.contacts)
              .filter(([, c]) => c.phone)
              .map(([id, c]) => (
                <button
                  key={id}
                  className="m-pick"
                  onClick={() => {
                    setPicker(false)
                    const th = story.sms.find((s) => s.contactId === id)
                    setOpen({ threadId: th?.id, contactId: id })
                  }}
                >
                  <ContactAvatar name={t(c.name)} size={36} src={c.avatar} />
                  <span>
                    <b>{t(c.name)}</b>
                    <small>{c.phone}</small>
                  </span>
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  )
}

function Thread({ threadId, contactId, onBack }: { threadId?: string; contactId?: string; onBack: () => void }) {
  const { story } = useStory()
  const { im, typing, sendIm, dial } = useDevice()
  const { t, lang } = useLang()
  const thread = story.sms.find((s) => s.id === threadId)
  const contact = contactId ? story.contacts[contactId] : undefined
  const title = thread ? thread.from : contact?.name ?? ''
  const [failed, setFailed] = useState<string[]>([])
  const [draft, setDraft] = useState('')
  const body = useRef<HTMLDivElement>(null)
  useBackHandler(true, onBack)
  const live = contactId ? im[contactId] ?? [] : []
  const isTyping = !!contactId && typing.includes(contactId)
  useEffect(() => {
    body.current?.scrollTo({ top: 1e6, behavior: 'smooth' })
  }, [live.length, failed.length, isTyping])
  const imessage = !!contactId
  return (
    <div className="m-thread">
      <div className="m-thread-top">
        <StatusBar />
        <div className="m-thread-nav">
          <button onClick={onBack} className="nav-back" style={{ color: '#007aff' }}>
            <G n="back" size={22} w={2.6} />
          </button>
          <span className="m-thread-who">
            <ContactAvatar name={t(title)} size={52} src={contact?.avatar} />
            <small>
              {t(title)}
              <G n="chevron" size={10} w={3} />
            </small>
          </span>
          <button className="m-video" onClick={() => contactId && dial(contactId, true)} aria-label="FaceTime">
            <G n="video" size={26} w={1.8} />
          </button>
        </div>
      </div>
      <div className="m-body" ref={body}>
        <div className="m-kind">{imessage ? 'iMessage' : t({ ko: '문자 메시지 · 이 발신자는 연락처에 없습니다', zh: '簡訊 · 此寄件人不在聯絡人中' })}</div>
        {thread?.messages.map((m, i) => (
          <div key={i}>
            {(i === 0 || ms(m.at) - ms(thread.messages[i - 1].at) > 3600_000) && <div className="m-stamp">{`${monthDay(m.at, lang)} ${time(m.at, lang)}`}</div>}
            <div className={`m-bubble ${m.me ? 'me' : ''} ${imessage ? 'im' : ''} ${!thread.messages[i + 1] || thread.messages[i + 1].me !== m.me ? 'tail' : ''}`}>{t(m.text)}</div>
          </div>
        ))}
        {live.length > 0 && <div className="m-stamp">{t({ ko: '오늘', zh: '今天' })}</div>}
        {live.map((m, i) => (
          <div key={`l${i}`} className={`m-bubble fade-in ${m.me ? 'me im' : ''} ${!live[i + 1] || live[i + 1].me !== m.me ? 'tail' : ''}`}>
            {t(m.text)}
          </div>
        ))}
        {live.length > 0 && live[live.length - 1].me && !isTyping && <div className="m-read">{t({ ko: '읽음', zh: '已讀' })}</div>}
        {isTyping && (
          <div className="m-typing">
            <i />
            <i />
            <i />
          </div>
        )}
        {failed.map((m, i) => (
          <div key={`f${i}`}>
            <div className="m-bubble me tail">{m}</div>
            {i === failed.length - 1 && <div className="m-fail">{t({ ko: '전송되지 않음', zh: '未傳送' })} ⓘ</div>}
          </div>
        ))}
      </div>
      <form
        className="m-input"
        onSubmit={(e) => {
          e.preventDefault()
          const text = draft.trim()
          if (!text) return
          if (contactId) sendIm(contactId, text)
          else setFailed((x) => [...x, text])
          setDraft('')
        }}
      >
        <span className="m-plus">
          <G n="plus" size={20} w={2.4} />
        </span>
        <label>
          <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={imessage ? 'iMessage' : t({ ko: '문자 메시지', zh: '簡訊' })} />
          {draft.trim() ? (
            <button className={`m-send ${imessage ? 'im' : ''}`} aria-label={t(UI.send)}>
              <G n="arrowUp" size={16} w={3} />
            </button>
          ) : (
            <G n="mic" size={18} w={2} />
          )}
        </label>
      </form>
    </div>
  )
}

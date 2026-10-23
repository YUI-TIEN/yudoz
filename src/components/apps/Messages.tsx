import { useEffect, useRef, useState } from 'react'
import { useLang, UI } from '../../i18n'
import { listDate, monthDay, ms, time } from '../../time'
import { useStory } from '../../story/engine'
import { useBackHandler } from '../../device'
import { ContactAvatar, Page } from '../common'
import { StatusBar } from '../system'
import { G } from '../icons'

export function MessagesApp() {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<string | null>(null)
  if (open) return <Thread id={open} onBack={() => setOpen(null)} />
  const list = [...story.sms].sort((a, b) => ms(b.messages[b.messages.length - 1].at) - ms(a.messages[a.messages.length - 1].at))
  return (
    <Page
      title={UI.messages}
      large
      bg="#fff"
      search={UI.search}
      right={
        <>
          <G n="more" size={24} />
          <G n="compose" size={23} />
        </>
      }
    >
      <div className="m-list">
        {list.map((s) => {
          const last = s.messages[s.messages.length - 1]
          return (
            <button key={s.id} className="m-row" onClick={() => setOpen(s.id)}>
              <span className={`m-dot ${s.unread ? 'on' : ''}`} />
              <ContactAvatar name={t(s.from)} size={46} />
              <span className="m-mid">
                <span className="m-top">
                  <b>{t(s.from)}</b>
                  <small>
                    {listDate(last.at, clock, lang)}
                    <G n="chevron" size={13} w={2.6} />
                  </small>
                </span>
                <small className="clamp2">{t(last.text).replace(/\n/g, ' ')}</small>
              </span>
            </button>
          )
        })}
      </div>
    </Page>
  )
}

function Thread({ id, onBack }: { id: string; onBack: () => void }) {
  const { story } = useStory()
  const { t, lang } = useLang()
  const thread = story.sms.find((s) => s.id === id)!
  const [mine, setMine] = useState<{ text: string; at: number }[]>([])
  const [draft, setDraft] = useState('')
  const body = useRef<HTMLDivElement>(null)
  useBackHandler(true, onBack)
  useEffect(() => {
    body.current?.scrollTo({ top: 1e6 })
  }, [mine.length])
  const isPerson = !!Object.values(story.contacts).find((c) => t(c.name) === t(thread.from))
  return (
    <div className="m-thread">
      <div className="m-thread-top">
        <StatusBar />
        <div className="m-thread-nav">
          <button onClick={onBack} className="nav-back" style={{ color: '#007aff' }}>
            <G n="back" size={22} w={2.6} />
          </button>
          <span className="m-thread-who">
            <ContactAvatar name={t(thread.from)} size={52} />
            <small>
              {t(thread.from)}
              <G n="chevron" size={10} w={3} />
            </small>
          </span>
          <G n="video" size={26} w={1.8} className="m-video" />
        </div>
      </div>
      <div className="m-body" ref={body}>
        <div className="m-kind">{isPerson ? t({ ko: '문자 메시지', zh: '簡訊' }) : t({ ko: '문자 메시지 · 이 발신자는 연락처에 없습니다', zh: '簡訊 · 此寄件人不在聯絡人中' })}</div>
        {thread.messages.map((m, i) => (
          <div key={i}>
            {(i === 0 || ms(m.at) - ms(thread.messages[i - 1].at) > 3600_000) && <div className="m-stamp">{`${monthDay(m.at, lang)} ${time(m.at, lang)}`}</div>}
            <div className={`m-bubble ${m.me ? 'me' : ''} ${!thread.messages[i + 1] || thread.messages[i + 1].me !== m.me ? 'tail' : ''}`}>{t(m.text)}</div>
          </div>
        ))}
        {mine.map((m, i) => (
          <div key={`mine-${i}`}>
            <div className="m-bubble me sms tail">{m.text}</div>
            {i === mine.length - 1 && <div className="m-fail">{t({ ko: '전송되지 않음', zh: '未傳送' })} ⓘ</div>}
          </div>
        ))}
      </div>
      <form
        className="m-input"
        onSubmit={(e) => {
          e.preventDefault()
          if (!draft.trim()) return
          setMine((x) => [...x, { text: draft.trim(), at: Date.now() }])
          setDraft('')
        }}
      >
        <span className="m-plus">
          <G n="plus" size={20} w={2.4} />
        </span>
        <label>
          <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t({ ko: '문자 메시지', zh: '簡訊' })} />
          {draft.trim() ? (
            <button className="m-send" aria-label={t(UI.send)}>
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

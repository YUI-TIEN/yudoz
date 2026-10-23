import { useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { duration, fullDate, listDate, monthDay, ms, time } from '../../time'
import { useStory } from '../../story/engine'
import type { CallLog } from '../../story/types'
import { Avatar, HomeBar, NavHeader, PhotoTile, StatusBar } from '../common'

function Shell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`ios ${className}`}>
      <StatusBar />
      {children}
      <HomeBar />
    </div>
  )
}

const firstLine = (s: string) => s.split('\n').find((l) => l.trim()) ?? ''

/* ---------------- 메시지(SMS) ---------------- */
export function MessagesApp() {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<string | null>(null)
  const thread = story.sms.find((s) => s.id === open)
  if (thread)
    return (
      <Shell className="sms">
        <NavHeader title={thread.from} onBack={() => setOpen(null)} backLabel={UI.messages} />
        <div className="sms-body">
          {thread.messages.map((m, i) => (
            <div key={i}>
              {(i === 0 || !sameMinute(thread.messages[i - 1].at, m.at)) && <div className="sms-stamp">{`${monthDay(m.at, lang)} ${time(m.at, lang)}`}</div>}
              <div className={`sms-msg ${m.me ? 'me' : ''}`}>{t(m.text)}</div>
            </div>
          ))}
        </div>
      </Shell>
    )
  return (
    <Shell>
      <NavHeader title={UI.messages} large />
      <div className="list">
        {[...story.sms]
          .sort((a, b) => ms(b.messages[b.messages.length - 1].at) - ms(a.messages[a.messages.length - 1].at))
          .map((s) => {
            const last = s.messages[s.messages.length - 1]
            return (
              <button key={s.id} className="row" onClick={() => setOpen(s.id)}>
                <Avatar size={42} radius={21} />
                <span className="row-mid">
                  <b>{t(s.from)}</b>
                  <small className="clamp2">{t(last.text).replace(/\n/g, ' ')}</small>
                </span>
                <small className="row-date">{listDate(last.at, clock, lang)}</small>
              </button>
            )
          })}
      </div>
    </Shell>
  )
}

const sameMinute = (a: string, b: string) => Math.abs(ms(a) - ms(b)) < 60_000 * 30

/* ---------------- 전화 ---------------- */
export function PhoneApp() {
  const { story, extraCalls, clock } = useStory()
  const { t, lang } = useLang()
  const all: CallLog[] = [...story.calls, ...extraCalls].sort((a, b) => ms(b.at) - ms(a.at))
  const label: Record<CallLog['type'], L> = { incoming: UI.incoming, outgoing: UI.outgoing, missed: UI.missed }
  return (
    <Shell>
      <NavHeader title={UI.recents} large />
      <div className="list">
        {all.map((c, i) => {
          const who = story.contacts[c.contactId]
          return (
            <div key={i} className="row">
              <span className="call-kind">{c.type === 'outgoing' ? '↗︎' : ''}</span>
              <span className="row-mid">
                <b className={c.type === 'missed' ? 'red' : ''}>{who ? t(who.name) : c.contactId}</b>
                <small>
                  {t(label[c.type])}
                  {c.seconds > 0 && ` · ${duration(c.seconds, lang)}`}
                </small>
              </span>
              <small className="row-date">{listDate(c.at, clock, lang)}</small>
            </div>
          )
        })}
      </div>
    </Shell>
  )
}

/* ---------------- 사진 ---------------- */
export function PhotosApp() {
  const { story } = useStory()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)
  const list = [...story.photos].sort((a, b) => ms(a.at) - ms(b.at))
  const p = open !== null ? list[open] : null
  if (p)
    return (
      <Shell className="viewer">
        <NavHeader title={{ ko: fullDate(p.at, 'ko'), zh: fullDate(p.at, 'zh') }} onBack={() => setOpen(null)} backLabel={UI.library} />
        <div className="viewer-img" onClick={() => setOpen((open! + 1) % list.length)}>
          <PhotoTile src={p.src} emoji={p.emoji} tint={p.tint} label={t(p.caption)} />
        </div>
        <p className="viewer-cap">
          {t(p.caption)}
          <small>{time(p.at, lang)}</small>
        </p>
      </Shell>
    )
  return (
    <Shell>
      <NavHeader title={UI.library} large />
      <div className="photo-grid">
        {list.map((ph, i) => (
          <button key={ph.id} onClick={() => setOpen(i)}>
            <PhotoTile src={ph.src} emoji={ph.emoji} tint={ph.tint} label={t(ph.caption)} />
          </button>
        ))}
      </div>
    </Shell>
  )
}

/* ---------------- 메모 ---------------- */
export function NotesApp() {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<string | null>(null)
  const note = story.notes.find((n) => n.id === open)
  if (note)
    return (
      <Shell className="notes">
        <NavHeader title="" onBack={() => setOpen(null)} backLabel={UI.notes} />
        <div className="note-body">
          <small>{`${fullDate(note.at, lang)} ${time(note.at, lang)}`}</small>
          <pre>{t(note.body)}</pre>
        </div>
      </Shell>
    )
  const sorted = [...story.notes].sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned) || ms(b.at) - ms(a.at))
  return (
    <Shell className="notes">
      <NavHeader title={UI.notes} large />
      <div className="list card">
        {sorted.map((n) => (
          <button key={n.id} className="row note-row" onClick={() => setOpen(n.id)}>
            <span className="row-mid">
              <b>
                {n.pinned && '📌 '}
                {t(n.title)}
              </b>
              <small>
                {listDate(n.at, clock, lang)} &nbsp;{firstLine(t(n.body).split('\n').slice(1).join('\n'))}
              </small>
            </span>
          </button>
        ))}
      </div>
    </Shell>
  )
}

/* ---------------- 검색 (네이버 느낌) ---------------- */
export function SearchApp() {
  const { story, setScreen } = useStory()
  const { t } = useLang()
  const [q, setQ] = useState<number | null>(null)
  const item = q !== null ? story.searches[q] : null
  return (
    <div className="search">
      <StatusBar />
      <div className="search-bar">
        <button onClick={() => (item ? setQ(null) : setScreen({ kind: 'home' }))} aria-label={t(UI.back)}>
          ‹
        </button>
        <span className="search-n">N</span>
        <span className="search-q">{item ? t(item.q) : ''}</span>
        <span>🔍</span>
      </div>
      {item ? (
        <div className="search-results">
          {item.result.map((r, i) => (
            <div key={i} className="sr">
              <small>blog · cafe</small>
              <b>{t(r.title)}</b>
              <p>{t(r.body)}</p>
            </div>
          ))}
          <div className="sr muted">{t({ ko: '검색 결과는 가상의 내용입니다.', zh: '搜尋結果為虛構內容。' })}</div>
        </div>
      ) : (
        <div className="search-hist">
          <h3>{t(UI.recentSearches)}</h3>
          {story.searches.map((s, i) => (
            <button key={i} onClick={() => setQ(i)}>
              <span>🕘</span>
              {t(s.q)}
            </button>
          ))}
        </div>
      )}
      <HomeBar />
    </div>
  )
}

/* ---------------- AI ---------------- */
export function AiApp() {
  const { story } = useStory()
  const { t } = useLang()
  const [open, setOpen] = useState(story.ai[0]?.id ?? null)
  const [menu, setMenu] = useState(false)
  const chat = story.ai.find((c) => c.id === open)
  return (
    <Shell className="ai">
      <NavHeader title={UI.ai} right={<button onClick={() => setMenu((m) => !m)}>☰</button>} />
      {menu && (
        <div className="ai-menu">
          <h4>{t(UI.recentChats)}</h4>
          {story.ai.map((c) => (
            <button
              key={c.id}
              className={c.id === open ? 'on' : ''}
              onClick={() => {
                setOpen(c.id)
                setMenu(false)
              }}
            >
              {t(c.title)}
            </button>
          ))}
        </div>
      )}
      <div className="ai-body">
        {chat?.turns.map((turn, i) => (
          <div key={i}>
            <div className="ai-q">{t(turn.q)}</div>
            <div className="ai-a">
              <span className="ai-logo">✳︎</span>
              <p>{t(turn.a)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="ai-input">
        <span>{t(UI.aiInput)}</span>
      </div>
      <small className="ai-disc">{t(UI.aiDisclaimer)}</small>
    </Shell>
  )
}

/* ---------------- 캘린더 ---------------- */
export function CalendarApp() {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const now = new Date(ms(clock) + 9 * 3600_000)
  const y = now.getUTCFullYear()
  const m = now.getUTCMonth()
  const first = new Date(Date.UTC(y, m, 1)).getUTCDay()
  const days = new Date(Date.UTC(y, m + 1, 0)).getUTCDate()
  const key = (d: number) => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  const [sel, setSel] = useState(now.getUTCDate())
  const events = story.calendar.filter((e) => e.date === key(sel))
  const wds = lang === 'ko' ? ['일', '월', '화', '수', '목', '금', '토'] : ['日', '一', '二', '三', '四', '五', '六']
  return (
    <Shell>
      <NavHeader title={lang === 'ko' ? `${y}년 ${m + 1}월` : `${y}年${m + 1}月`} large />
      <div className="cal">
        {wds.map((w) => (
          <small key={w}>{w}</small>
        ))}
        {Array.from({ length: first }).map((_, i) => (
          <span key={`e${i}`} />
        ))}
        {Array.from({ length: days }).map((_, i) => {
          const d = i + 1
          const has = story.calendar.some((e) => e.date === key(d))
          return (
            <button key={d} className={`${d === now.getUTCDate() ? 'today' : ''} ${d === sel ? 'sel' : ''}`} onClick={() => setSel(d)}>
              {d}
              {has && <i />}
            </button>
          )
        })}
      </div>
      <div className="cal-events">
        {events.length === 0 && <p className="muted">{t(UI.noItems)}</p>}
        {events.map((e, i) => (
          <div key={i} className="cal-ev" style={{ borderColor: e.color }}>
            <b>{t(e.title)}</b>
            <small>{e.time ?? t(UI.allDay)}</small>
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* ---------------- 음성 메모 ---------------- */
export function VoiceApp() {
  const { story } = useStory()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<string | null>(null)
  return (
    <Shell className="voice">
      <NavHeader title={UI.voiceMemos} large />
      <div className="list">
        {story.voice.map((v) => (
          <div key={v.id} className="voice-item">
            <button className="row" onClick={() => setOpen(open === v.id ? null : v.id)}>
              <span className="row-mid">
                <b>{t(v.title)}</b>
                <small>{`${monthDay(v.at, lang)} · ${duration(v.seconds, lang)}`}</small>
              </span>
              <span className="voice-play">{open === v.id ? '❚❚' : '▶'}</span>
            </button>
            {open === v.id && (
              <div className="voice-tr">
                <div className="wave">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <i key={i} style={{ height: `${20 + ((i * 37) % 70)}%`, animationDelay: `${i * 40}ms` }} />
                  ))}
                </div>
                <p>{t(v.transcript)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Shell>
  )
}

/* ---------------- 설정 ---------------- */
export function SettingsApp({ onExit }: { onExit: () => void }) {
  const { story, restart, setScreen } = useStory()
  const { t, lang, setLang } = useLang()
  const [about, setAbout] = useState(false)
  return (
    <Shell className="settings">
      <NavHeader title={UI.settings} large />
      <div className="set-group">
        <div className="set-row profile">
          <Avatar size={56} radius={28} src={story.owner.avatar} />
          <span>
            <b>{t(story.owner.name)}</b>
            <small>{t({ ko: 'Apple 계정, iCloud 등', zh: 'Apple 帳號、iCloud 等' })}</small>
          </span>
        </div>
      </div>
      <div className="set-group">
        <div className="set-row">
          <span>📶 Wi-Fi</span>
          <small>{story.wifi}</small>
        </div>
        <div className="set-row">
          <span>🎧 Bluetooth</span>
          <small>{t(story.devices[0])}</small>
        </div>
      </div>
      <div className="set-group">
        <div className="set-row">
          <span>🌐 {t(UI.language)}</span>
          <span className="seg">
            <button className={lang === 'ko' ? 'on' : ''} onClick={() => setLang('ko')}>
              한국어
            </button>
            <button className={lang === 'zh' ? 'on' : ''} onClick={() => setLang('zh')}>
              中文
            </button>
          </span>
        </div>
      </div>
      <div className="set-group">
        <button className="set-row" onClick={() => setScreen({ kind: 'lock' })}>
          <span>🔒 {t(UI.toLock)}</span>
        </button>
        <button className="set-row" onClick={restart}>
          <span className="red">↺ {t(UI.restart)}</span>
        </button>
        <button className="set-row" onClick={onExit}>
          <span>📱 {t(UI.toSelect)}</span>
        </button>
        <button className="set-row" onClick={() => setAbout((a) => !a)}>
          <span>ⓘ {t(UI.about)}</span>
        </button>
        {about && <p className="set-about">{t(UI.aboutText)}</p>}
      </div>
    </Shell>
  )
}

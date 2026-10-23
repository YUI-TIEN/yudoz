import { useEffect, useRef, useState } from 'react'
import { useLang, UI } from '../i18n'
import { clock as fmtClock, lockDate } from '../time'
import { useStory } from '../story/engine'
import type { AppId } from '../story/types'
import { startRing, stopRing, unlockAudio } from '../sound'
import { Avatar, HomeBar, StatusBar } from './common'

export function LockScreen() {
  const { story, clock, setScreen } = useStory()
  const { t, lang } = useLang()
  const startY = useRef<number | null>(null)
  const open = () => {
    unlockAudio()
    setScreen({ kind: 'passcode' })
  }
  return (
    <div
      className="lock"
      style={{ background: story.wallpaper }}
      onPointerDown={(e) => (startY.current = e.clientY)}
      onPointerUp={(e) => {
        if (startY.current !== null && startY.current - e.clientY > 40) open()
        startY.current = null
      }}
    >
      <StatusBar dark />
      <div className="lock-top">
        <div className="lock-icon">🔒</div>
        <div className="lock-date">{lockDate(clock, lang)}</div>
        <div className="lock-clock">{fmtClock(clock)}</div>
      </div>
      <div className="lock-notices">
        {story.lockNotices.map((n, i) => (
          <button key={i} className="notice" onClick={open}>
            <span className="notice-icon">{n.icon}</span>
            <span className="notice-body">
              <span className="notice-head">
                <b>{t(n.title)}</b>
                <small>{t(n.time)}</small>
              </span>
              <span className="notice-text">{t(n.body)}</span>
            </span>
          </button>
        ))}
      </div>
      <button className="lock-open" onClick={open}>
        <span className="lock-emoji">{story.lockEmoji}</span>
        {t(UI.slideToOpen)}
      </button>
      <HomeBar dark />
    </div>
  )
}

const KEYS: [string, string][] = [
  ['1', ''],
  ['2', 'ABC'],
  ['3', 'DEF'],
  ['4', 'GHI'],
  ['5', 'JKL'],
  ['6', 'MNO'],
  ['7', 'PQRS'],
  ['8', 'TUV'],
  ['9', 'WXYZ'],
]

export function Passcode() {
  const { story, unlock, setScreen } = useStory()
  const { t } = useLang()
  const [code, setCode] = useState('')
  const [shake, setShake] = useState(false)
  const [fails, setFails] = useState(0)

  const press = (d: string) => {
    if (shake || code.length >= 4) return
    const next = code + d
    setCode(next)
    if (next.length < 4) return
    if (next === story.passcode) {
      window.setTimeout(unlock, 150)
      return
    }
    window.setTimeout(() => setShake(true), 120)
    window.setTimeout(() => {
      setShake(false)
      setCode('')
      setFails((f) => f + 1)
    }, 560)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) press(e.key)
      else if (e.key === 'Backspace') setCode((c) => c.slice(0, -1))
      else if (e.key === 'Escape') setScreen({ kind: 'lock' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="passcode" style={{ background: story.wallpaper }}>
      <div className="passcode-dim" />
      <StatusBar dark />
      <div className="pc-title">{t(UI.enterPasscode)}</div>
      <div className={`pc-dots ${shake ? 'shake' : ''}`}>
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={i < code.length ? 'on' : ''} />
        ))}
      </div>
      <div className="pc-hint">{fails >= 2 ? t(UI.hint) : ' '}</div>
      <div className="pc-keys">
        {KEYS.map(([d, l]) => (
          <button key={d} onClick={() => press(d)}>
            <b>{d}</b>
            <small>{l}</small>
          </button>
        ))}
        <span />
        <button onClick={() => press('0')}>
          <b>0</b>
        </button>
        <span />
      </div>
      <div className="pc-bottom">
        <button>{t(UI.emergency)}</button>
        <button onClick={() => (code ? setCode((c) => c.slice(0, -1)) : setScreen({ kind: 'lock' }))}>{t(code ? UI.erase : UI.cancel)}</button>
      </div>
      <HomeBar dark />
    </div>
  )
}

type AppDef = { id: AppId; label: keyof typeof UI; icon: React.ReactNode; bg: string }

const APPS: AppDef[] = [
  { id: 'calendar', label: 'calendar', icon: <CalIcon />, bg: '#fff' },
  { id: 'photos', label: 'photos', icon: <span>🌸</span>, bg: '#fff' },
  { id: 'notes', label: 'notes', icon: <span className="ic-notes" />, bg: 'linear-gradient(#ffd75e 30%,#fff 30%)' },
  { id: 'voice', label: 'voiceMemos', icon: <span className="ic-wave">▍▌▍▎▍</span>, bg: '#1c1c1e' },
  { id: 'search', label: 'search', icon: <b className="ic-n">N</b>, bg: '#03c75a' },
  { id: 'ai', label: 'ai', icon: <span>✳︎</span>, bg: 'linear-gradient(140deg,#cc785c,#a0523d)' },
  { id: 'settings', label: 'settings', icon: <span>⚙️</span>, bg: 'linear-gradient(#a3a3a8,#6e6e73)' },
]
const DOCK: AppDef[] = [
  { id: 'phone', label: 'phone', icon: <span>📞</span>, bg: 'linear-gradient(#5df27a,#26c043)' },
  { id: 'messages', label: 'messages', icon: <span>💬</span>, bg: 'linear-gradient(#5df27a,#26c043)' },
  { id: 'kakao', label: 'kakao', icon: <b className="ic-talk">TALK</b>, bg: '#fee500' },
]

function CalIcon() {
  const { clock } = useStory()
  const { lang } = useLang()
  const d = new Date(new Date(clock).getTime() + 9 * 3600_000)
  const wd = (lang === 'ko' ? ['일', '월', '화', '수', '목', '금', '토'] : ['日', '一', '二', '三', '四', '五', '六'])[d.getUTCDay()]
  return (
    <span className="ic-cal">
      <small>{lang === 'ko' ? `${wd}요일` : `星期${wd}`}</small>
      <b>{d.getUTCDate()}</b>
    </span>
  )
}

export function HomeScreen() {
  const { story, setScreen, totalUnread, setOpenRoom } = useStory()
  const { t } = useLang()
  const badge = (id: AppId) => (id === 'kakao' ? totalUnread : id === 'messages' ? story.sms.filter((s) => s.unread).length : 0)
  const Icon = ({ a, dock }: { a: AppDef; dock?: boolean }) => (
    <button
      className="app"
      onClick={() => {
        if (a.id === 'kakao') setOpenRoom(null)
        setScreen({ kind: 'app', app: a.id })
      }}
    >
      <span className="app-icon" style={{ background: a.bg }}>
        {a.icon}
        {badge(a.id) > 0 && <i className="badge">{badge(a.id)}</i>}
      </span>
      {!dock && <span className="app-label">{t(UI[a.label])}</span>}
    </button>
  )
  return (
    <div className="home" style={{ background: story.wallpaper }}>
      <StatusBar dark />
      <div className="widget">
        <Avatar size={52} src={story.owner.avatar} />
        <div>
          <b>{t(story.owner.device)}</b>
          <small>{t(story.owner.status)}</small>
        </div>
      </div>
      <div className="grid">
        {APPS.map((a) => (
          <Icon key={a.id} a={a} />
        ))}
      </div>
      <div className="dock">
        {DOCK.map((a) => (
          <Icon key={a.id} a={a} dock />
        ))}
      </div>
      <HomeBar dark />
    </div>
  )
}

export function BannerView() {
  const { banner, dismissBanner, setScreen, setOpenRoom } = useStory()
  const { t } = useLang()
  useEffect(() => {
    if (!banner) return
    const id = window.setTimeout(dismissBanner, 4200)
    return () => window.clearTimeout(id)
  }, [banner, dismissBanner])
  if (!banner) return null
  return (
    <button
      key={banner.key}
      className="banner"
      onClick={() => {
        dismissBanner()
        setScreen({ kind: 'app', app: 'kakao' })
        setOpenRoom(banner.room)
      }}
    >
      <span className="banner-icon">
        <b className="ic-talk">TALK</b>
      </span>
      <span className="banner-body">
        <span className="notice-head">
          <b>{t(banner.sender)}</b>
          <small>{t(UI.now)}</small>
        </span>
        <span className="notice-text">{t(banner.text)}</span>
      </span>
    </button>
  )
}

export function CallScreen() {
  const { call, story, acceptCall, declineCall, finishCall } = useStory()
  const { t } = useLang()
  const [sec, setSec] = useState(0)
  const [shown, setShown] = useState(0)
  const active = call?.state === 'active'

  useEffect(() => {
    if (call?.state === 'ringing') startRing()
    else stopRing()
    return stopRing
  }, [call?.state])

  useEffect(() => {
    if (!active) {
      setSec(0)
      setShown(0)
      return
    }
    const tick = window.setInterval(() => setSec((s) => s + 1), 1000)
    return () => window.clearInterval(tick)
  }, [active])

  useEffect(() => {
    if (!active || !call) return
    if (shown >= call.lines.length) return
    const id = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 900 : 2300)
    return () => window.clearTimeout(id)
  }, [active, shown, call])

  if (!call) return null
  const who = story.contacts[call.from]
  const mm = String(Math.floor(sec / 60)).padStart(2, '0')
  const ss = String(sec % 60).padStart(2, '0')
  return (
    <div className="call" style={{ background: story.wallpaper }}>
      <div className="call-dim" />
      <StatusBar dark />
      <div className="call-who">
        <Avatar size={84} src={who?.avatar} radius={42} />
        <h2>{who ? t(who.name) : ''}</h2>
        <p>{active ? `${mm}:${ss}` : t(UI.incomingCall)}</p>
      </div>
      {active && (
        <div className="call-lines">
          {call.lines.slice(0, shown).map((l, i) => (
            <p key={i} className="fade-in">
              {t(l)}
            </p>
          ))}
        </div>
      )}
      <div className="call-actions">
        {active ? (
          <button className="call-btn end" onClick={() => finishCall(sec)} aria-label={t(UI.endCall)}>
            <PhoneGlyph down />
            <span>{t(UI.endCall)}</span>
          </button>
        ) : (
          <>
            <button className="call-btn end" onClick={declineCall}>
              <PhoneGlyph down />
              <span>{t(UI.decline)}</span>
            </button>
            <button className="call-btn ok" onClick={acceptCall}>
              <PhoneGlyph />
              <span>{t(UI.accept)}</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

function PhoneGlyph({ down }: { down?: boolean }) {
  return (
    <i style={{ transform: down ? 'rotate(135deg)' : undefined }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
      </svg>
    </i>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useLang, UI, type L } from '../i18n'
import { clock as fmtClock, lockDate, time as fmtTime } from '../time'
import { useStory } from '../story/engine'
import type { AppId } from '../story/types'
import { useDevice } from '../device'
import { playTick, playUnlock, startDialTone, startRing, stopRing, unlockAudio } from '../sound'
import { AppIcon, G } from './icons'
import { Avatar } from './common'
import { wallpaperOf } from '../wallpapers'
import { PEOPLE } from '../story/personas'

/* ---------------- 공통: 드래그 ---------------- */

export function useDrag(opts: { onMove?: (dx: number, dy: number) => void; onEnd?: (dx: number, dy: number, vy: number) => void }) {
  const st = useRef<{ x: number; y: number; t: number; lastY: number; lastT: number } | null>(null)
  return {
    onPointerDown: (e: React.PointerEvent) => {
      st.current = { x: e.clientX, y: e.clientY, t: e.timeStamp, lastY: e.clientY, lastT: e.timeStamp }
      ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
    },
    onPointerMove: (e: React.PointerEvent) => {
      if (!st.current) return
      st.current.lastY = e.clientY
      st.current.lastT = e.timeStamp
      opts.onMove?.(e.clientX - st.current.x, e.clientY - st.current.y)
    },
    onPointerUp: (e: React.PointerEvent) => {
      if (!st.current) return
      const dt = Math.max(1, e.timeStamp - st.current.t)
      const dy = e.clientY - st.current.y
      opts.onEnd?.(e.clientX - st.current.x, dy, dy / dt)
      st.current = null
    },
    onPointerCancel: () => {
      st.current = null
      opts.onMove?.(0, 0)
    },
  }
}

/* ---------------- 상태바 ---------------- */

export function StatusBar({ dark = false, lock = false }: { dark?: boolean; lock?: boolean }) {
  const { clock, story, setScreen } = useStory()
  const { s, setOverlay, now } = useDevice()
  const pl = now?.playing ? story.extra.music.find((p) => p.id === now.playlist) : null
  const pull = (side: 'left' | 'right') =>
    useDragPull((dy) => {
      if (dy > 30) setOverlay(side === 'right' ? 'control' : 'notifications')
    })
  const left = pull('left')
  const right = pull('right')
  return (
    <div className={`statusbar ${dark ? 'dark' : ''}`}>
      <span className="sb-left" {...left}>
        {lock ? <span className="sb-carrier">{s.airplane ? '' : 'SKT'}</span> : <span className="sb-time">{fmtClock(clock)}</span>}
      </span>
      {pl ? (
        <button className="sb-island live" onClick={() => setScreen({ kind: 'app', app: 'music' })} aria-label="Now playing">
          <span className="sb-island-art" style={{ background: pl.pic.tint }}>
            {pl.pic.emoji}
          </span>
          <span className="sb-island-eq">
            <i />
            <i />
            <i />
            <i />
          </span>
        </button>
      ) : (
        <span className="sb-island" />
      )}
      <span className="sb-icons" {...right}>
        {s.airplane ? (
          <G n="plane" size={15} />
        ) : (
          <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
            {[0, 1, 2, 3].map((i) => (
              <rect key={i} x={i * 4.6} y={9 - i * 3} width="3.2" height={3 + i * 3} rx="0.9" opacity={s.cellular ? 1 : 0.3} />
            ))}
          </svg>
        )}
        {s.wifi && !s.airplane && (
          <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
            <path d="M8 2.3c2.3 0 4.4.9 5.9 2.3l1.2-1.2A10 10 0 0 0 8 .6 10 10 0 0 0 .9 3.4l1.2 1.2A8.3 8.3 0 0 1 8 2.3zm0 3.4c1.4 0 2.6.5 3.5 1.4l1.2-1.2a6.7 6.7 0 0 0-9.4 0l1.2 1.2c.9-.9 2.1-1.4 3.5-1.4zm0 3.4c.5 0 .9.2 1.2.5L8 10.8 6.8 9.6c.3-.3.7-.5 1.2-.5z" />
          </svg>
        )}
        {s.focus && <G n="moon" size={13} />}
        <span className="sb-batt">
          <span style={{ width: '78%' }} />
        </span>
      </span>
    </div>
  )
}

/** 위에서 아래로 끌어내리는 제스처 */
function useDragPull(onPull: (dy: number) => void) {
  return useDrag({ onEnd: (_dx, dy) => onPull(dy) })
}

/* ---------------- 홈 인디케이터 ---------------- */

export function HomeIndicator({ dark = false, onSwipe, onDrag }: { dark?: boolean; onSwipe: () => void; onDrag?: (dy: number) => void }) {
  const drag = useDrag({
    onMove: (_dx, dy) => onDrag?.(Math.min(0, dy)),
    onEnd: (_dx, dy, vy) => {
      onDrag?.(0)
      if (dy < -40 || vy < -0.5 || Math.abs(dy) < 6) onSwipe()
    },
  })
  return (
    <div className={`homebar ${dark ? 'dark' : ''}`} {...drag} aria-label="Home" role="button">
      <span />
    </div>
  )
}

/* ---------------- 잠금화면 ---------------- */

export function LockScreen() {
  const { story, clock, setScreen, notices, queueRoom } = useStory()
  const { s, flashlight, setFlashlight, haptic } = useDevice()
  const { t, lang } = useLang()
  const [dy, setDy] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const open = () => {
    unlockAudio()
    setLeaving(true)
    window.setTimeout(() => setScreen({ kind: 'passcode' }), 220)
  }
  const drag = useDrag({
    onMove: (_dx, d) => setDy(Math.min(0, d)),
    onEnd: (_dx, d, vy) => {
      if (d < -90 || vy < -0.6) open()
      else setDy(0)
    },
  })
  const live = [...notices].reverse()
  return (
    <div
      className={`lock ${leaving ? 'leaving' : ''}`}
      style={{ background: wallpaperOf(story, s.wallpaper), transform: dy ? `translateY(${dy * 0.6}px)` : undefined, transition: dy ? 'none' : undefined }}
    >
      <StatusBar dark lock />
      <div className="lock-top">
        <G n="lock" size={18} w={2.2} />
        <div className="lock-date">{lockDate(clock, lang)}</div>
        <div className="lock-clock">{fmtClock(clock)}</div>
      </div>
      <div className="lock-notices" onPointerDown={(e) => e.stopPropagation()}>
        <LockPlayer />
        {live.length > 0 && <div className="lock-section">{t({ ko: '알림 센터', zh: '通知中心' })}</div>}
        {live.slice(0, 4).map((n) => (
          <button
            key={n.key}
            className="notice"
            onClick={() => {
              queueRoom(n.room)
              open()
            }}
          >
            <span className="notice-icon">
              <AppIcon id="kakao" />
            </span>
            <span className="notice-body">
              <span className="notice-head">
                <b>{t(n.sender)}</b>
                <small>{fmtTime(n.at, lang)}</small>
              </span>
              <span className="notice-text">{t(n.text)}</span>
            </span>
          </button>
        ))}
        {story.lockNotices.map((n, i) => (
          <button key={i} className="notice" onClick={open}>
            <span className="notice-icon">
              <AppIcon id={n.app} day={30} weekday="" />
            </span>
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
      <div className="lock-bottom" {...drag}>
        <button
          className={`lock-btn ${flashlight ? 'on' : ''}`}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => {
            haptic(15)
            setFlashlight(!flashlight)
          }}
          aria-label="Flashlight"
        >
          <G n="flashlight" size={22} />
        </button>
        <span className="lock-swipe">{t(UI.slideToOpen)}</span>
        <button className="lock-btn" onPointerDown={(e) => e.stopPropagation()} onClick={() => setScreen({ kind: 'app', app: 'camera' })} aria-label="Camera">
          <G n="camera" size={22} />
        </button>
      </div>
      <div className="lock-drag" {...drag} />
      <div className="homebar dark static">
        <span />
      </div>
    </div>
  )
}

/* ---------------- 암호 ---------------- */

const KEYS: [string, string][] = [
  ['1', ''],
  ['2', 'A B C'],
  ['3', 'D E F'],
  ['4', 'G H I'],
  ['5', 'J K L'],
  ['6', 'M N O'],
  ['7', 'P Q R S'],
  ['8', 'T U V'],
  ['9', 'W X Y Z'],
]

export function Passcode() {
  const { story, unlock, setScreen } = useStory()
  const { s, haptic } = useDevice()
  const { t } = useLang()
  const [code, setCode] = useState('')
  const [shake, setShake] = useState(false)
  const [fails, setFails] = useState(0)
  const [done, setDone] = useState(false)

  const press = (d: string) => {
    if (shake || done || code.length >= 4) return
    playTick()
    haptic(6)
    const next = code + d
    setCode(next)
    if (next.length < 4) return
    if (next === story.passcode) {
      playUnlock()
      setDone(true)
      window.setTimeout(unlock, 260)
      return
    }
    window.setTimeout(() => {
      setShake(true)
      haptic(120)
    }, 120)
    window.setTimeout(() => {
      setShake(false)
      setCode('')
      setFails((f) => f + 1)
    }, 600)
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
    <div className={`passcode ${done ? 'done' : ''}`} style={{ background: wallpaperOf(story, s.wallpaper) }}>
      <div className="passcode-dim" />
      <StatusBar dark />
      <div className="pc-lock">
        <G n={done ? 'unlock' : 'lock'} size={20} w={2.2} />
      </div>
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
    </div>
  )
}

/* ---------------- 홈 화면 ---------------- */

type AppDef = { id: AppId; label: L }

const GRID: AppDef[] = [
  { id: 'calendar', label: UI.calendar },
  { id: 'photos', label: UI.photos },
  { id: 'clock', label: { ko: '시계', zh: '時鐘' } },
  { id: 'notes', label: UI.notes },
  { id: 'voice', label: UI.voiceMemos },
  { id: 'search', label: { ko: '네이버', zh: 'NAVER' } },
  { id: 'ai', label: UI.ai },
  { id: 'settings', label: UI.settings },
  { id: 'instagram', label: { ko: 'Instagram', zh: 'Instagram' } },
  { id: 'x', label: 'X' },
  { id: 'music', label: { ko: '음악', zh: '音樂' } },
  { id: 'maps', label: { ko: '지도', zh: '地圖' } },
  { id: 'mail', label: { ko: '메일', zh: '郵件' } },
  { id: 'weather', label: { ko: '날씨', zh: '天氣' } },
]
const DOCK: AppDef[] = [
  { id: 'phone', label: UI.phone },
  { id: 'messages', label: UI.messages },
  { id: 'kakao', label: UI.kakao },
  { id: 'camera', label: { ko: '카메라', zh: '相機' } },
]

export function kstParts(iso: string) {
  const d = new Date(new Date(iso).getTime() + 9 * 3600_000)
  return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), wd: d.getUTCDay(), h: d.getUTCHours(), min: d.getUTCMinutes() }
}

export const WD = {
  ko: ['일', '월', '화', '수', '목', '금', '토'],
  zh: ['日', '一', '二', '三', '四', '五', '六'],
}

export function HomeScreen({ onOpen }: { onOpen: (app: AppId, rect: DOMRect) => void }) {
  const { story, totalUnread, clock, setOpenRoom } = useStory()
  const { s } = useDevice()
  const { t, lang } = useLang()
  const p = kstParts(clock)
  const smsUnread = story.sms.filter((x) => x.unread).length
  const badge = (id: AppId) => (id === 'kakao' ? totalUnread : id === 'messages' ? smsUnread : 0)
  const today = story.calendar.filter((e) => e.date === `${p.y}-${String(p.m).padStart(2, '0')}-${String(p.d).padStart(2, '0')}`)
  const next = today.length ? today : story.calendar.filter((e) => e.date > `${p.y}-${String(p.m).padStart(2, '0')}-${String(p.d).padStart(2, '0')}`).slice(0, 2)

  const Icon = ({ a, dock }: { a: AppDef; dock?: boolean }) => (
    <button
      className="app"
      onClick={(e) => {
        if (a.id === 'kakao') setOpenRoom(null)
        onOpen(a.id, (e.currentTarget.querySelector('.app-icon') as HTMLElement).getBoundingClientRect())
      }}
    >
      <span className="app-icon">
        <AppIcon id={a.id} day={p.d} weekday={lang === 'ko' ? `${WD.ko[p.wd]}요일` : `星期${WD.zh[p.wd]}`} />
        {badge(a.id) > 0 && <i className="badge">{badge(a.id)}</i>}
      </span>
      {!dock && <span className="app-label">{t(a.label)}</span>}
    </button>
  )
  const [page, setPage] = useState(0)
  const { now } = useDevice()
  const pl = story.extra.music.find((x) => x.id === now?.playlist) ?? story.extra.music[0]
  const song = now && pl ? pl.songs[now.index] : null
  return (
    <div className="home" style={{ background: wallpaperOf(story, s.wallpaper) }}>
      <StatusBar dark />
      <div
        className="home-pages"
        onScroll={(e) => {
          const el = e.currentTarget
          setPage(Math.round(el.scrollLeft / el.clientWidth))
        }}
      >
        <div className="home-page">
      <div className="widgets">
        <button className="wg wg-weather" onClick={(e) => onOpen('weather', e.currentTarget.getBoundingClientRect())}>
          <small>{t({ ko: '서울', zh: '首爾' })}</small>
          <b>{story.id === 'shinyu' ? '-4°' : '9°'}</b>
          <span>{story.id === 'shinyu' ? '🌙' : '☁️'}</span>
          <small>{story.id === 'shinyu' ? t({ ko: '맑음 · 최고 1° 최저 -7°', zh: '晴 · 高 1° 低 -7°' }) : t({ ko: '흐림 · 최고 14° 최저 6°', zh: '多雲 · 高 14° 低 6°' })}</small>
        </button>
        <button className="wg wg-cal" onClick={(e) => onOpen('calendar', e.currentTarget.getBoundingClientRect())}>
          <small className="red">{lang === 'ko' ? `${WD.ko[p.wd]}요일` : `星期${WD.zh[p.wd]}`}</small>
          <b>{p.d}</b>
          {next.slice(0, 2).map((e, i) => (
            <span key={i} className="wg-ev" style={{ borderColor: e.color }}>
              {t(e.title)}
            </span>
          ))}
        </button>
      </div>
      <div className="wg-labels">
        <span>{t({ ko: '날씨', zh: '天氣' })}</span>
        <span>{t(UI.calendar)}</span>
      </div>
      <div className="grid">
        {GRID.slice(0, 8).map((a) => (
          <Icon key={a.id} a={a} />
        ))}
      </div>
        </div>
        <div className="home-page">
          <button className="wg wg-music" onClick={(e) => onOpen('music', e.currentTarget.getBoundingClientRect())}>
            <span className="wg-music-art">
              <span style={{ background: pl?.pic.tint }}>{pl?.pic.emoji}</span>
            </span>
            <span>
              <small>{song ? t({ ko: '지금 재생 중', zh: '正在播放' }) : t({ ko: '최근 재생', zh: '最近播放' })}</small>
              <b>{song ? song.title : pl ? t(pl.title) : ''}</b>
              <small>{song ? song.artist : pl ? t(pl.by) : ''}</small>
            </span>
          </button>
          <div className="wg-labels one">
            <span>{t({ ko: '음악', zh: '音樂' })}</span>
          </div>
          <div className="grid">
            {GRID.slice(8).map((a) => (
              <Icon key={a.id} a={a} />
            ))}
          </div>
        </div>
      </div>
      <div className="home-dots">
        {[0, 1].map((i) => (
          <i key={i} className={page === i ? 'on' : ''} />
        ))}
      </div>
      <div className="dock">
        {DOCK.map((a) => (
          <Icon key={a.id} a={a} dock />
        ))}
      </div>
    </div>
  )
}

/* ---------------- 알림 배너 ---------------- */

export function BannerView() {
  const { banner, dismissBanner, setScreen, setOpenRoom, screen, queueRoom } = useStory()
  const { s, overlay } = useDevice()
  const { t } = useLang()
  const [dy, setDy] = useState(0)
  // dismissBanner는 렌더마다 새로 만들어지므로 배너 key가 바뀔 때만 타이머를 다시 건다
  const dismissRef = useRef(dismissBanner)
  dismissRef.current = dismissBanner
  useEffect(() => {
    if (!banner) return
    const id = window.setTimeout(() => dismissRef.current(), 4500)
    return () => window.clearTimeout(id)
  }, [banner?.key])
  const drag = useDrag({
    onMove: (_dx, d) => setDy(Math.min(0, d)),
    onEnd: (_dx, d) => {
      setDy(0)
      if (d < -25) dismissBanner()
      else if (Math.abs(d) < 6) {
        dismissBanner()
        if (screen.kind === 'lock' || screen.kind === 'passcode') {
          queueRoom(banner!.room)
          setScreen({ kind: 'passcode' })
          return
        }
        setScreen({ kind: 'app', app: 'kakao' })
        setOpenRoom(banner!.room)
      }
    },
  })
  if (!banner || s.focus || overlay !== 'none') return null
  return (
    <div key={banner.key} className="banner" style={{ transform: dy ? `translateY(${dy}px)` : undefined }} {...drag} role="button">
      <span className="banner-icon">
        <AppIcon id="kakao" />
      </span>
      <span className="banner-body">
        <span className="notice-head">
          <b>{t(banner.sender)}</b>
          <small>{t(UI.now)}</small>
        </span>
        <span className="notice-text">{t(banner.text)}</span>
      </span>
    </div>
  )
}

/* ---------------- 제어 센터 ---------------- */

export function ControlCenter() {
  const { s, set, toggle, overlay, setOverlay, flashlight, setFlashlight, haptic } = useDevice()
  const { setScreen } = useStory()
  const { t } = useLang()
  const [closing, setClosing] = useState(false)
  if (overlay !== 'control') return null
  const close = () => {
    setClosing(true)
    window.setTimeout(() => {
      setClosing(false)
      setOverlay('none')
    }, 200)
  }
  const tg = (k: keyof typeof s) => () => {
    haptic(10)
    toggle(k)
  }
  const slider = (k: 'brightness' | 'volume') => (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const apply = (y: number) => {
      const r = el.getBoundingClientRect()
      const v = Math.min(1, Math.max(k === 'brightness' ? 0.25 : 0, 1 - (y - r.top) / r.height))
      set(k, Math.round(v * 100) / 100)
    }
    apply(e.clientY)
    el.setPointerCapture(e.pointerId)
    const move = (ev: PointerEvent) => apply(ev.clientY)
    const up = () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerup', up)
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
  }
  return (
    <div className={`cc ${closing ? 'closing' : ''}`} onClick={close}>
      <div className="cc-grid" onClick={(e) => e.stopPropagation()}>
        <div className="cc-tile cc-conn">
          <button className={`cc-round ${s.airplane ? 'on orange' : ''}`} onClick={tg('airplane')} aria-label="Airplane">
            <G n="plane" size={22} />
          </button>
          <button className={`cc-round ${s.cellular ? 'on green' : ''}`} onClick={tg('cellular')} aria-label="Cellular">
            <G n="antenna" size={22} />
          </button>
          <button className={`cc-round ${s.wifi ? 'on blue' : ''}`} onClick={tg('wifi')} aria-label="Wi-Fi">
            <G n="wifi" size={22} />
          </button>
          <button className={`cc-round ${s.bluetooth ? 'on blue' : ''}`} onClick={tg('bluetooth')} aria-label="Bluetooth">
            <G n="bluetooth" size={22} />
          </button>
        </div>
        <CcMusic />
        <button className={`cc-tile sq ${s.rotationLock ? 'on' : ''}`} onClick={tg('rotationLock')} aria-label="Rotation lock">
          <G n="lockRotate" size={26} />
        </button>
        <button className={`cc-tile sq ${s.silent ? 'on red' : ''}`} onClick={tg('silent')} aria-label="Silent">
          <G n={s.silent ? 'bellSlash' : 'bell'} size={26} />
        </button>
        <button className={`cc-tile wide ${s.focus ? 'on purple' : ''}`} onClick={tg('focus')}>
          <G n="moon" size={22} />
          <span>
            <b>{t({ ko: '집중 모드', zh: '專注模式' })}</b>
            <small>{s.focus ? t({ ko: '방해 금지 켬', zh: '勿擾模式已開啟' }) : t({ ko: '끔', zh: '關閉' })}</small>
          </span>
        </button>
        <div className="cc-slider" onPointerDown={slider('brightness')}>
          <i style={{ height: `${s.brightness * 100}%` }} />
          <G n="sun" size={24} />
        </div>
        <div className="cc-slider" onPointerDown={slider('volume')}>
          <i style={{ height: `${s.volume * 100}%` }} />
          <G n="speaker" size={24} />
        </div>
        <button
          className={`cc-tile sq ${flashlight ? 'on white' : ''}`}
          onClick={() => {
            haptic(10)
            setFlashlight(!flashlight)
          }}
          aria-label="Flashlight"
        >
          <G n="flashlight" size={26} />
        </button>
        <button
          className="cc-tile sq"
          onClick={() => {
            setOverlay('none')
            setScreen({ kind: 'app', app: 'clock' })
          }}
          aria-label="Timer"
        >
          <G n="timer" size={26} />
        </button>
        <button
          className="cc-tile sq"
          onClick={() => {
            setOverlay('none')
            setScreen({ kind: 'app', app: 'camera' })
          }}
          aria-label="Camera"
        >
          <G n="camera" size={26} />
        </button>
        <button className="cc-tile sq" aria-label="Calculator">
          <G n="calc" size={26} />
        </button>
      </div>
    </div>
  )
}

/* ---------------- 알림 센터 ---------------- */

export function NotificationCenter() {
  const { overlay, setOverlay, s } = useDevice()
  const { story, clock, notices, clearNotices, setScreen, setOpenRoom } = useStory()
  const { t, lang } = useLang()
  if (overlay !== 'notifications') return null
  const live = [...notices].reverse()
  return (
    <div className="nc" style={{ background: wallpaperOf(story, s.wallpaper) }} onClick={() => setOverlay('none')}>
      <div className="nc-dim" />
      <StatusBar dark lock />
      <div className="lock-top">
        <div className="lock-date">{lockDate(clock, lang)}</div>
        <div className="lock-clock">{fmtClock(clock)}</div>
      </div>
      <div className="lock-notices" onClick={(e) => e.stopPropagation()}>
        <div className="lock-section">
          {t({ ko: '알림 센터', zh: '通知中心' })}
          {live.length > 0 && (
            <button className="nc-clear" onClick={clearNotices}>
              <G n="close" size={12} w={3} />
            </button>
          )}
        </div>
        {live.length === 0 && <p className="nc-empty">{t({ ko: '이전 알림 없음', zh: '沒有較早的通知' })}</p>}
        {live.map((n) => (
          <button
            key={n.key}
            className="notice"
            onClick={() => {
              setOverlay('none')
              setScreen({ kind: 'app', app: 'kakao' })
              setOpenRoom(n.room)
            }}
          >
            <span className="notice-icon">
              <AppIcon id="kakao" />
            </span>
            <span className="notice-body">
              <span className="notice-head">
                <b>{t(n.sender)}</b>
                <small>{fmtTime(n.at, lang)}</small>
              </span>
              <span className="notice-text">{t(n.text)}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

/* ---------------- 전화 (수신) ---------------- */

const CALL_BTNS: { n: string; l: L }[] = [
  { n: 'mic', l: { ko: '소리 끔', zh: '靜音' } },
  { n: 'grid', l: { ko: '키패드', zh: '撥號鍵盤' } },
  { n: 'speaker', l: { ko: '스피커', zh: '揚聲器' } },
  { n: 'plus', l: { ko: '통화 추가', zh: '加入通話' } },
  { n: 'camera', l: { ko: 'FaceTime', zh: 'FaceTime' } },
  { n: 'person', l: { ko: '연락처', zh: '聯絡人' } },
]

function CallButtons() {
  const { t } = useLang()
  const [on, setOn] = useState<string[]>([])
  return (
    <div className="call-grid">
      {CALL_BTNS.map((b) => (
        <button key={b.n} className={on.includes(b.n) ? 'on' : ''} onClick={() => setOn((o) => (o.includes(b.n) ? o.filter((x) => x !== b.n) : [...o, b.n]))}>
          <i>
            <G n={b.n} size={28} />
          </i>
          <span>{t(b.l)}</span>
        </button>
      ))}
    </div>
  )
}

export function CallScreen() {
  const { call, story, acceptCall, declineCall, finishCall } = useStory()
  const { s } = useDevice()
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
    const tick = window.setInterval(() => setSec((x) => x + 1), 1000)
    return () => window.clearInterval(tick)
  }, [active])

  useEffect(() => {
    if (!active || !call || shown >= call.lines.length) return
    const id = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 1000 : 2400)
    return () => window.clearTimeout(id)
  }, [active, shown, call])

  if (!call) return null
  const who = story.contacts[call.from]
  const mm = String(Math.floor(sec / 60)).padStart(2, '0')
  const ss = String(sec % 60).padStart(2, '0')
  return (
    <div className="call" style={{ background: wallpaperOf(story, s.wallpaper) }}>
      <div className="call-dim" />
      <StatusBar dark />
      <div className="call-who">
        <small>{active ? `${mm}:${ss}` : t(UI.incomingCall)}</small>
        <h2>{who ? t(who.name) : ''}</h2>
      </div>
      {active ? (
        <>
          <div className="call-lines">
            {call.lines.slice(0, shown).map((l, i) => (
              <p key={i} className="fade-in">
                {t(l)}
              </p>
            ))}
            {shown < call.lines.length && <span className="call-typing">• • •</span>}
          </div>
          <CallButtons />
          <div className="call-actions one">
            <button className="call-btn end" onClick={() => finishCall(sec)} aria-label={t(UI.endCall)}>
              <i>
                <G n="phoneFill" size={34} style={{ transform: 'rotate(135deg)' }} />
              </i>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="call-avatar">
            <Avatar size={120} src={who?.avatar} radius={60} />
          </div>
          <div className="call-quick">
            <span>
              <G n="clock" size={22} />
              {t({ ko: '다시 알림', zh: '提醒我' })}
            </span>
            <span>
              <G n="bubble" size={22} />
              {t(UI.messages)}
            </span>
          </div>
          <div className="call-actions">
            <button className="call-btn end" onClick={declineCall}>
              <i>
                <G n="phoneFill" size={34} style={{ transform: 'rotate(135deg)' }} />
              </i>
              <span>{t(UI.decline)}</span>
            </button>
            <button className="call-btn ok" onClick={acceptCall}>
              <i>
                <G n="phoneFill" size={34} />
              </i>
              <span>{t(UI.accept)}</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

/* ---------------- 전화 (발신) ---------------- */

export function OutgoingCall() {
  const { outgoing, dial } = useDevice()
  const { story, addCall, call, pushMessage } = useStory()
  const { t } = useLang()
  const [phase, setPhase] = useState<'calling' | 'active' | 'noanswer'>('calling')
  const [sec, setSec] = useState(0)
  const [shown, setShown] = useState(0)
  const [cam, setCam] = useState<MediaStream | null>(null)
  const video = useRef<HTMLVideoElement>(null)
  const to = outgoing?.to ?? ''
  const isVideo = !!outgoing?.video
  const persona = PEOPLE[story.id]?.[to]
  const who = story.contacts[to]

  // 연결음 → 받거나 응답 없음
  useEffect(() => {
    if (!outgoing) return
    setPhase('calling')
    setSec(0)
    setShown(0)
    startDialTone()
    const ring = 3500 + Math.random() * 2500
    const a = window.setTimeout(() => {
      stopRing()
      setPhase(persona?.call.answer ? 'active' : 'noanswer')
    }, persona?.call.answer ? ring : 11000)
    return () => {
      window.clearTimeout(a)
      stopRing()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outgoing])

  // 통화 시간
  useEffect(() => {
    if (phase !== 'active') return
    const id = window.setInterval(() => setSec((x) => x + 1), 1000)
    return () => window.clearInterval(id)
  }, [phase])

  // 상대 말이 자막으로 하나씩
  useEffect(() => {
    if (phase !== 'active' || !persona || shown >= persona.call.lines.length) return
    const id = window.setTimeout(() => setShown((n) => n + 1), shown === 0 ? 900 : 2300)
    return () => window.clearTimeout(id)
  }, [phase, shown, persona])

  // 페이스톡이면 내 카메라
  useEffect(() => {
    if (!isVideo || !navigator.mediaDevices?.getUserMedia) return
    let s: MediaStream | null = null
    let cancelled = false
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' }, audio: false })
      .then((m) => {
        if (cancelled) return m.getTracks().forEach((tr) => tr.stop())
        s = m
        setCam(m)
      })
      .catch(() => setCam(null))
    return () => {
      cancelled = true
      s?.getTracks().forEach((tr) => tr.stop())
      setCam(null)
    }
  }, [isVideo, outgoing])

  useEffect(() => {
    if (video.current && cam) video.current.srcObject = cam
  }, [cam, phase])

  useEffect(() => {
    if (call && outgoing) dial(null)
  }, [call, outgoing, dial])

  if (!outgoing) return null
  const end = () => {
    stopRing()
    addCall(to, phase === 'active' ? 'outgoing' : 'outgoing', sec)
    if (phase !== 'active' && persona?.call.missedMsg) {
      const msg = persona.call.missedMsg
      window.setTimeout(() => pushMessage(to, msg), 2500)
    }
    dial(null)
  }
  const mm = String(Math.floor(sec / 60)).padStart(2, '0')
  const ss = String(sec % 60).padStart(2, '0')
  const status =
    phase === 'calling' ? (isVideo ? t({ ko: '페이스톡 연결 중…', zh: '視訊通話連線中…' }) : t({ ko: '통화 연결 중…', zh: '撥號中…' })) : phase === 'noanswer' ? t({ ko: '응답 없음', zh: '無人接聽' }) : `${mm}:${ss}`

  return (
    <div className={`call outgoing ${isVideo ? 'facetime' : ''}`} style={{ background: isVideo ? '#000' : wallpaperOf(story, 0) }}>
      {isVideo && (
        <div className={`ft-self ${phase === 'active' ? 'pip' : ''}`}>
          {cam ? <video ref={video} autoPlay playsInline muted /> : <span className="ft-nocam">{t({ ko: '카메라 꺼짐', zh: '相機已關閉' })}</span>}
        </div>
      )}
      {isVideo && phase === 'active' && (
        <div className="ft-remote">
          <Avatar size={140} radius={70} src={who?.avatar} />
          <small>{t({ ko: '상대방 카메라가 꺼져 있습니다', zh: '對方的相機已關閉' })}</small>
        </div>
      )}
      {!isVideo && <div className="call-dim" />}
      <StatusBar dark />
      <div className="call-who">
        <small>{status}</small>
        <h2>{who ? t(who.name) : to}</h2>
      </div>
      <div className="call-lines">
        {phase === 'active' &&
          persona?.call.lines.slice(0, shown).map((l, i) => (
            <p key={i} className="fade-in">
              {t(l)}
            </p>
          ))}
        {phase === 'active' && persona && shown < persona.call.lines.length && <span className="call-typing">• • •</span>}
        {phase === 'noanswer' && <p className="fade-in">{t({ ko: '연결이 되지 않아 삐 소리 후 음성사서함으로 연결되오니…', zh: '您撥的電話無人接聽，嗶聲後將轉入語音信箱…' })}</p>}
      </div>
      {!isVideo && <CallButtons />}
      <div className="call-actions one">
        <button className="call-btn end" onClick={end} aria-label={t(UI.endCall)}>
          <i>
            <G n="phoneFill" size={34} style={{ transform: 'rotate(135deg)' }} />
          </i>
        </button>
      </div>
    </div>
  )
}

function CcMusic() {
  const { now, setNow } = useDevice()
  const { story } = useStory()
  const { t } = useLang()
  const pl = now ? story.extra.music.find((p) => p.id === now.playlist) : null
  const song = pl && now ? pl.songs[now.index] : null
  const step = (d: number) => pl && now && setNow({ ...now, index: (now.index + d + pl.songs.length) % pl.songs.length, pos: 0 })
  return (
    <div className="cc-tile cc-music">
      {song ? (
        <span className="cc-song">
          <b>{song.title}</b>
          <small>{song.artist}</small>
        </span>
      ) : (
        <small>{t({ ko: '재생 중 아님', zh: '未在播放' })}</small>
      )}
      <div className="cc-music-btns">
        <button onClick={() => step(-1)} aria-label="prev">
          <G n="rewind" size={20} />
        </button>
        <button
          onClick={() => {
            if (now) setNow({ ...now, playing: !now.playing })
            else if (story.extra.music[0]) setNow({ playlist: story.extra.music[0].id, index: 0, playing: true, pos: 0 })
          }}
          aria-label="play"
        >
          <G n={now?.playing ? 'pause' : 'play'} size={24} />
        </button>
        <button onClick={() => step(1)} aria-label="next">
          <G n="forward" size={20} />
        </button>
      </div>
    </div>
  )
}

function LockPlayer() {
  const { now, setNow } = useDevice()
  const { story } = useStory()
  if (!now) return null
  const pl = story.extra.music.find((p) => p.id === now.playlist)
  const song = pl?.songs[now.index]
  if (!pl || !song) return null
  const step = (d: number) => setNow({ ...now, index: (now.index + d + pl.songs.length) % pl.songs.length, pos: 0 })
  return (
    <div className="lock-player">
      <div className="lock-player-top">
        <span className="lock-player-art" style={{ background: pl.pic.tint }}>
          {pl.pic.emoji}
        </span>
        <span>
          <b>{song.title}</b>
          <small>{song.artist}</small>
        </span>
      </div>
      <div className="lock-player-bar">
        <i style={{ width: `${Math.min(100, (now.pos / song.dur) * 100)}%` }} />
      </div>
      <div className="lock-player-btns">
        <button onClick={() => step(-1)} aria-label="prev">
          <G n="rewind" size={26} />
        </button>
        <button onClick={() => setNow({ ...now, playing: !now.playing })} aria-label="play">
          <G n={now.playing ? 'pause' : 'play'} size={32} />
        </button>
        <button onClick={() => step(1)} aria-label="next">
          <G n="forward" size={26} />
        </button>
      </div>
    </div>
  )
}

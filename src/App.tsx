import { useEffect, useRef, useState } from 'react'
import { useLang } from './i18n'
import { StoryProvider, useStory } from './story/engine'
import { shinyu } from './story/shinyu'
import { dohoon } from './story/dohoon'
import type { AppId, PhoneStory } from './story/types'
import { DeviceProvider, useDevice } from './device'
import {
  BannerView,
  CallScreen,
  ControlCenter,
  HomeIndicator,
  HomeScreen,
  LockScreen,
  NotificationCenter,
  OutgoingCall,
  Passcode,
  useDrag,
} from './components/system'
import { KakaoApp } from './components/apps/Kakao'
import { MessagesApp } from './components/apps/Messages'
import { PhoneApp } from './components/apps/PhoneApp'
import { PhotosApp } from './components/apps/Photos'
import { CameraApp } from './components/apps/Camera'
import { ClockApp } from './components/apps/Clock'
import { SettingsApp } from './components/apps/Settings'
import { AiApp, CalendarApp, NotesApp, SearchApp, VoiceApp } from './components/apps/Others'
import { unlockAudio } from './sound'

const STORIES: Record<string, PhoneStory> = { shinyu, dohoon }

/** 상단·하단이 어두운 앱 (홈 인디케이터를 흰색으로) */
const DARK_APPS: AppId[] = ['camera', 'voice', 'clock']

type Origin = { x: number; y: number; w: number; h: number }

function Screens({ onExit, frame }: { onExit: () => void; frame: React.RefObject<HTMLDivElement> }) {
  const { screen, setScreen } = useStory()
  const { s, flashlight, goBack, setOverlay } = useDevice()
  const [origin, setOrigin] = useState<Origin | null>(null)
  const [closing, setClosing] = useState<AppId | null>(null)
  const [dragY, setDragY] = useState(0)
  const [edgeX, setEdgeX] = useState(0)

  const apps: Record<AppId, () => React.ReactNode> = {
    kakao: () => <KakaoApp />,
    messages: () => <MessagesApp />,
    phone: () => <PhoneApp />,
    photos: () => <PhotosApp />,
    notes: () => <NotesApp />,
    search: () => <SearchApp />,
    ai: () => <AiApp />,
    calendar: () => <CalendarApp />,
    voice: () => <VoiceApp />,
    settings: () => <SettingsApp onExit={onExit} />,
    camera: () => <CameraApp />,
    clock: () => <ClockApp />,
  }

  const openApp = (app: AppId, rect: DOMRect) => {
    const f = frame.current?.getBoundingClientRect()
    if (f) setOrigin({ x: rect.left - f.left, y: rect.top - f.top, w: rect.width, h: rect.height })
    fromIcon.current = true
    setScreen({ kind: 'app', app })
  }

  const goHome = () => {
    if (screen.kind !== 'app') return
    setOverlay('none')
    setClosing(screen.app)
    setScreen({ kind: 'home' })
    window.setTimeout(() => setClosing(null), 340)
  }

  // 앱이 아이콘 말고 다른 경로(배너 등)로 열렸으면 화면 아래쪽에서 펼친다
  const fromIcon = useRef(false)
  const currentApp = screen.kind === 'app' ? screen.app : null
  useEffect(() => {
    if (!currentApp) {
      setDragY(0)
      return
    }
    if (!fromIcon.current) setOrigin(null)
    fromIcon.current = false
  }, [currentApp])

  const edge = useDrag({
    onMove: (dx) => setEdgeX(Math.max(0, dx)),
    onEnd: (dx) => {
      setEdgeX(0)
      if (dx > 70) goBack()
    },
  })

  const appId = screen.kind === 'app' ? screen.app : closing
  const fw = frame.current?.clientWidth ?? 390
  const fh = frame.current?.clientHeight ?? 844
  const o = origin ?? { x: fw / 2 - 30, y: fh - 120, w: 60, h: 60 }
  const vars = {
    '--ox': `${o.x + o.w / 2 - fw / 2}px`,
    '--oy': `${o.y + o.h / 2 - fh / 2}px`,
    '--os': `${o.w / fw}`,
  } as React.CSSProperties
  const dragScale = 1 - Math.min(0.35, -dragY / 900)

  const showHome = screen.kind === 'home' || screen.kind === 'app' || closing
  return (
    <div
      className="screen"
      style={{ filter: s.brightness < 1 ? `brightness(${0.35 + s.brightness * 0.65})` : undefined, ['--ts' as string]: s.textSize } as React.CSSProperties}
    >
      {showHome && <HomeScreen onOpen={openApp} />}
      {appId && (
        <div
          key={appId}
          className={`app-layer ${closing ? 'closing' : 'opening'}`}
          style={{
            ...vars,
            transform: dragY ? `translateY(${dragY * 0.5}px) scale(${dragScale})` : edgeX ? `translateX(${edgeX * 0.4}px)` : undefined,
            borderRadius: dragY ? 40 : undefined,
            transition: dragY || edgeX ? 'none' : undefined,
          }}
        >
          {apps[appId]()}
          <div className="edge" {...edge} />
          <HomeIndicator dark={DARK_APPS.includes(appId)} onSwipe={goHome} onDrag={setDragY} />
        </div>
      )}
      {screen.kind === 'lock' && <LockScreen />}
      {screen.kind === 'passcode' && <Passcode />}
      {screen.kind === 'home' && <HomeIndicator dark onSwipe={() => {}} />}
      <NotificationCenter />
      <ControlCenter />
      <BannerView />
      <OutgoingCall />
      <CallScreen />
      {flashlight && <div className="flash-glow" />}
    </div>
  )
}

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={lang === 'ko' ? 'on' : ''} onClick={() => setLang('ko')}>
        한국어
      </button>
      <button className={lang === 'zh' ? 'on' : ''} onClick={() => setLang('zh')}>
        中文
      </button>
    </div>
  )
}

function Select({ onPick }: { onPick: (id: string) => void }) {
  const { t } = useLang()
  return (
    <div className="select">
      <LangToggle />
      <p className="select-kicker">{t({ ko: '누군가 휴대폰을 두고 갔다', zh: '有人把手機忘在這裡了' })}</p>
      <h1>{t({ ko: '주운 폰은 누구 거?', zh: '撿到的手機是誰的？' })}</h1>
      <div className="select-cards">
        {[shinyu, dohoon].map((s) => (
          <button key={s.id} className="select-card" onClick={() => onPick(s.id)}>
            <span className="select-phone" style={{ background: s.wallpaper }}>
              <span className="select-island" />
              <span className="select-time">{s.id === 'shinyu' ? '23:58' : '23:57'}</span>
              <span className="select-date">{s.id === 'shinyu' ? t({ ko: '1월 29일 목요일', zh: '1月29日 星期四' }) : t({ ko: '11월 6일 금요일', zh: '11月6日 星期五' })}</span>
              <span className="select-emoji">{s.lockEmoji}</span>
            </span>
            <b>{t(s.owner.device)}</b>
          </button>
        ))}
      </div>
      <p className="select-tip">{t({ ko: '화면을 위로 쓸어올려 잠금을 풀고, 위에서 끌어내리면 제어 센터가 열려요.', zh: '向上滑動解鎖；從右上角往下拉可以打開控制中心。' })}</p>
      <p className="select-foot">
        {t({
          ko: '팬메이드 · 비공식 · 허구의 이야기입니다. TWS 신유·도훈을 모티브로 했으며 실제 인물과 관계없습니다.',
          zh: '粉絲自製・非官方・虛構故事。以 TWS 申惟、道勳為靈感，與本人無關。',
        })}
      </p>
    </div>
  )
}

export default function App() {
  const frame = useRef<HTMLDivElement>(null)
  const [pick, setPick] = useState<string | null>(() => {
    const h = window.location.hash.replace('#', '')
    return STORIES[h] ? h : null
  })

  useEffect(() => {
    history.replaceState(null, '', pick ? `#${pick}` : window.location.pathname)
    document.title = pick === 'shinyu' ? '신유의 iPhone' : pick === 'dohoon' ? '도훈의 iPhone' : '유도즈의 iPhone'
  }, [pick])

  useEffect(() => {
    window.addEventListener('pointerdown', unlockAudio, { once: true })
    return () => window.removeEventListener('pointerdown', unlockAudio)
  }, [])

  if (!pick) return <Select onPick={setPick} />
  return (
    <main className="stage">
      <div className="frame" ref={frame}>
        <StoryProvider key={pick} story={STORIES[pick]}>
          <DeviceProvider storyId={pick}>
            <Screens frame={frame} onExit={() => setPick(null)} />
          </DeviceProvider>
        </StoryProvider>
      </div>
    </main>
  )
}

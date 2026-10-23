import { useEffect, useState } from 'react'
import { useLang } from './i18n'
import { StoryProvider, useStory } from './story/engine'
import { shinyu } from './story/shinyu'
import { dohoon } from './story/dohoon'
import type { AppId, PhoneStory } from './story/types'
import { BannerView, CallScreen, HomeScreen, LockScreen, Passcode } from './components/screens'
import { KakaoApp } from './components/apps/Kakao'
import { AiApp, CalendarApp, MessagesApp, NotesApp, PhoneApp, PhotosApp, SearchApp, SettingsApp, VoiceApp } from './components/apps/Others'
import { unlockAudio } from './sound'

const STORIES: Record<string, PhoneStory> = { shinyu, dohoon }

function Screens({ onExit }: { onExit: () => void }) {
  const { screen } = useStory()
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
  }
  return (
    <div className="screen">
      {screen.kind === 'lock' && <LockScreen />}
      {screen.kind === 'passcode' && <Passcode />}
      {screen.kind === 'home' && <HomeScreen />}
      {screen.kind === 'app' && (
        <div key={screen.app} className="app-in">
          {apps[screen.app]()}
        </div>
      )}
      <BannerView />
      <CallScreen />
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
          <button key={s.id} className="select-card" style={{ background: s.wallpaper }} onClick={() => onPick(s.id)}>
            <span className="select-emoji">{s.lockEmoji}</span>
            <b>{t(s.owner.device)}</b>
            <small>
              {s.id === 'shinyu'
                ? t({ ko: '1월 29일 밤 11시 58분', zh: '1月29日 晚上11:58' })
                : t({ ko: '11월 6일 밤 11시 57분', zh: '11月6日 晚上11:57' })}
            </small>
          </button>
        ))}
      </div>
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
  const [pick, setPick] = useState<string | null>(() => {
    const h = window.location.hash.replace('#', '')
    return STORIES[h] ? h : null
  })

  useEffect(() => {
    const target = pick ? `#${pick}` : ' '
    if (window.location.hash !== target) history.replaceState(null, '', pick ? `#${pick}` : window.location.pathname)
    document.title = pick === 'shinyu' ? '신유의 iPhone' : pick === 'dohoon' ? '도훈의 iPhone' : '유도즈의 iPhone'
  }, [pick])

  useEffect(() => {
    window.addEventListener('pointerdown', unlockAudio, { once: true })
    return () => window.removeEventListener('pointerdown', unlockAudio)
  }, [])

  if (!pick) return <Select onPick={setPick} />
  return (
    <main className="stage">
      <div className="frame">
        <StoryProvider key={pick} story={STORIES[pick]}>
          <Screens onExit={() => setPick(null)} />
        </StoryProvider>
      </div>
    </main>
  )
}

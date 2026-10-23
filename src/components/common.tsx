import { useLang, UI, type L } from '../i18n'
import { clock as fmtClock } from '../time'
import { useStory } from '../story/engine'

/** 카카오톡·인스타 등의 "프로필 사진 없음" 기본 이미지 */
export function Avatar({ src, size = 40, group = 0, radius }: { src?: string; size?: number; group?: number; radius?: number }) {
  const r = radius ?? Math.round(size * 0.38)
  if (src) return <img className="avatar" src={src} alt="" style={{ width: size, height: size, borderRadius: r }} />
  if (group > 1) {
    const s = size / 2 - 1
    return (
      <div className="avatar-group" style={{ width: size, height: size }}>
        {Array.from({ length: Math.min(group, 4) }).map((_, i) => (
          <DefaultFace key={i} size={s} radius={Math.round(s * 0.38)} />
        ))}
      </div>
    )
  }
  return <DefaultFace size={size} radius={r} />
}

function DefaultFace({ size, radius }: { size: number; radius: number }) {
  return (
    <svg className="avatar" width={size} height={size} viewBox="0 0 40 40" style={{ borderRadius: radius }} aria-hidden>
      <rect width="40" height="40" fill="#b6c6d8" />
      <circle cx="20" cy="16" r="7" fill="#eef3f8" />
      <path d="M6 38c1.5-8 7.2-12 14-12s12.5 4 14 12z" fill="#eef3f8" />
    </svg>
  )
}

export function StatusBar({ dark = false }: { dark?: boolean }) {
  const { clock } = useStory()
  return (
    <div className={`statusbar ${dark ? 'dark' : ''}`}>
      <span className="sb-time">{fmtClock(clock)}</span>
      <span className="sb-island" />
      <span className="sb-icons">
        <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="7" width="3" height="4" rx="1" /><rect x="4.5" y="5" width="3" height="6" rx="1" /><rect x="9" y="2.5" width="3" height="8.5" rx="1" /><rect x="13.5" y="0" width="3" height="11" rx="1" /></svg>
        <svg width="15" height="11" viewBox="0 0 15 11"><path d="M7.5 2.2c2.1 0 4 .8 5.4 2.1l1.1-1.1A9.3 9.3 0 0 0 7.5.6 9.3 9.3 0 0 0 1 3.2l1.1 1.1a7.7 7.7 0 0 1 5.4-2.1zm0 3.1c1.2 0 2.4.5 3.2 1.3l1.1-1.1a6.2 6.2 0 0 0-8.6 0l1.1 1.1c.8-.8 2-1.3 3.2-1.3zm0 3.1c.4 0 .8.2 1.1.5L7.5 10 6.4 8.9c.3-.3.7-.5 1.1-.5z" /></svg>
        <span className="sb-batt"><span style={{ width: '62%' }} /></span>
      </span>
    </div>
  )
}

export function HomeBar({ dark = false }: { dark?: boolean }) {
  const { setScreen } = useStory()
  return (
    <button className={`homebar ${dark ? 'dark' : ''}`} aria-label="Home" onClick={() => setScreen({ kind: 'home' })}>
      <span />
    </button>
  )
}

/** iOS 스타일 앱 상단 */
export function NavHeader({ title, onBack, backLabel, right, large }: { title: L; onBack?: () => void; backLabel?: L; right?: React.ReactNode; large?: boolean }) {
  const { t } = useLang()
  const { setScreen } = useStory()
  return (
    <div className="nav">
      <button className="nav-back" onClick={onBack ?? (() => setScreen({ kind: 'home' }))}>
        <svg width="12" height="20" viewBox="0 0 12 20"><path d="M10 2 2 10l8 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span>{t(backLabel ?? UI.back)}</span>
      </button>
      {!large && <div className="nav-title">{t(title)}</div>}
      <div className="nav-right">{right}</div>
      {large && <h1 className="nav-large">{t(title)}</h1>}
    </div>
  )
}

/** 사진 자리: 실제 사진이 있으면 보여주고, 없으면 이모지 카드 */
export function PhotoTile({ src, emoji, tint, label }: { src?: string; emoji: string; tint: string; label?: string }) {
  if (src) return <img className="photo-tile" src={src} alt={label ?? ''} />
  return (
    <div className="photo-tile ph" style={{ background: `linear-gradient(145deg, ${tint}, #ffffff)` }} aria-label={label}>
      <span>{emoji}</span>
    </div>
  )
}

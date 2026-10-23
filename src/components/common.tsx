import { useState } from 'react'
import { useLang, UI, type L } from '../i18n'
import { useBackHandler } from '../device'
import { G } from './icons'
import { StatusBar } from './system'

/** 카카오톡의 "프로필 사진 없음" 기본 이미지 (둥근 사각형 + 흰 사람) */
export function Avatar({ src, size = 40, group = 0, radius }: { src?: string; size?: number; group?: number; radius?: number }) {
  const r = radius ?? Math.round(size * 0.4)
  if (src) return <img className="avatar" src={src} alt="" style={{ width: size, height: size, borderRadius: r }} />
  if (group > 1) {
    const s = Math.round(size * 0.52)
    const pos = group >= 4 ? [[0, 0], [1, 0], [0, 1], [1, 1]] : group === 3 ? [[0.5, 0], [0, 1], [1, 1]] : [[0, 0], [1, 1]]
    return (
      <span className="avatar-group" style={{ width: size, height: size }}>
        {pos.map(([x, y], i) => (
          <span key={i} style={{ left: x * (size - s), top: y * (size - s) }}>
            <DefaultFace size={s} radius={Math.round(s * 0.4)} />
          </span>
        ))}
      </span>
    )
  }
  return <DefaultFace size={size} radius={r} />
}

function DefaultFace({ size, radius }: { size: number; radius: number }) {
  return (
    <svg className="avatar" width={size} height={size} viewBox="0 0 40 40" style={{ borderRadius: radius }} aria-hidden>
      <rect width="40" height="40" fill="#9fb4c9" />
      <circle cx="20" cy="15.5" r="6.8" fill="#dfe8f1" />
      <path d="M5 40c1.3-8.6 7.4-13.3 15-13.3S33.7 31.4 35 40z" fill="#dfe8f1" />
    </svg>
  )
}

/** iOS 연락처 기본 이미지 (회색 그라데이션 + 이니셜 또는 사람 실루엣) */
export function ContactAvatar({ name, size = 40, src }: { name?: string; size?: number; src?: string }) {
  if (src) return <img className="avatar" src={src} alt="" style={{ width: size, height: size, borderRadius: size / 2 }} />
  const ch = name ? [...name.replace(/[^\p{L}\p{N}]/gu, '')][0] : ''
  return (
    <span className="contact-avatar" style={{ width: size, height: size, fontSize: size * 0.42 }}>
      {ch ? ch : <G n="person" size={size * 0.6} w={0} style={{ fill: '#fff' }} />}
    </span>
  )
}

/** 사진 자리: 실제 사진이 있으면 보여주고, 없으면 이모지 카드 */
export function PhotoTile({ src, emoji, tint, label }: { src?: string; emoji: string; tint: string; label?: string }) {
  if (src) return <img className="photo-tile" src={src} alt={label ?? ''} draggable={false} />
  return (
    <div className="photo-tile ph" style={{ background: `radial-gradient(120% 90% at 30% 20%, #ffffff 0%, ${tint} 70%)` }} aria-label={label}>
      <span>{emoji}</span>
    </div>
  )
}

export function Toggle({ on, onChange, color = '#34c759' }: { on: boolean; onChange: (v: boolean) => void; color?: string }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      className={`toggle ${on ? 'on' : ''}`}
      style={on ? { background: color } : undefined}
      onClick={(e) => {
        e.stopPropagation()
        onChange(!on)
      }}
    >
      <span />
    </button>
  )
}

export type Tab = { id: string; label: L; icon: string }

export function TabBar({ tabs, value, onChange, tint = '#007aff', dark }: { tabs: Tab[]; value: string; onChange: (id: string) => void; tint?: string; dark?: boolean }) {
  const { t } = useLang()
  return (
    <nav className={`tabbar ${dark ? 'dark' : ''}`}>
      {tabs.map((tab) => (
        <button key={tab.id} className={tab.id === value ? 'on' : ''} style={tab.id === value ? { color: tint } : undefined} onClick={() => onChange(tab.id)}>
          <G n={tab.icon} size={25} w={tab.id === value ? 2.2 : 1.8} />
          <span>{t(tab.label)}</span>
        </button>
      ))}
    </nav>
  )
}

/**
 * iOS 화면 틀: 상단 내비게이션 + 스크롤하면 작아지는 큰 제목.
 * onBack을 주면 왼쪽 가장자리 스와이프로도 뒤로 간다.
 */
export function Page({
  title,
  large = false,
  onBack,
  backLabel,
  right,
  tint = '#007aff',
  bg = '#f2f2f7',
  dark = false,
  search,
  children,
  bottom,
  className = '',
  bodyClass = '',
}: {
  title: L
  large?: boolean
  onBack?: () => void
  backLabel?: L
  right?: React.ReactNode
  tint?: string
  bg?: string
  dark?: boolean
  search?: L
  children: React.ReactNode
  bottom?: React.ReactNode
  className?: string
  bodyClass?: string
}) {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  useBackHandler(!!onBack, () => onBack?.())
  const showSmall = !large || scrolled
  return (
    <div className={`page ${dark ? 'dark' : ''} ${className}`} style={{ background: bg, ['--tint' as string]: tint }}>
      <div className={`page-top ${scrolled ? 'scrolled' : ''}`}>
        <StatusBar dark={dark} />
        <div className="nav">
          <span className="nav-left">
            {onBack && (
              <button className="nav-back" onClick={onBack}>
                <G n="back" size={22} w={2.6} />
                <span>{backLabel ? t(backLabel) : t(UI.back)}</span>
              </button>
            )}
          </span>
          <span className={`nav-title ${showSmall ? 'show' : ''}`}>{t(title)}</span>
          <span className="nav-right">{right}</span>
        </div>
      </div>
      <div className={`page-body ${bodyClass}`} onScroll={(e) => setScrolled((e.currentTarget as HTMLElement).scrollTop > 28)}>
        {large && <h1 className="large-title">{t(title)}</h1>}
        {search && (
          <div className="searchfield">
            <G n="search" size={16} w={2.4} />
            <span>{t(search)}</span>
            <G n="mic" size={16} w={2} />
          </div>
        )}
        {children}
      </div>
      {bottom}
    </div>
  )
}

/** iOS 설정 스타일 그룹 목록 */
export function Group({ children, header, footer }: { children: React.ReactNode; header?: L; footer?: L }) {
  const { t } = useLang()
  return (
    <section className="group">
      {header && <h3 className="group-h">{t(header)}</h3>}
      <div className="group-box">{children}</div>
      {footer && <p className="group-f">{t(footer)}</p>}
    </section>
  )
}

export function Cell({
  icon,
  iconBg,
  title,
  detail,
  sub,
  chevron,
  onClick,
  right,
  danger,
}: {
  icon?: string
  iconBg?: string
  title: React.ReactNode
  detail?: React.ReactNode
  sub?: React.ReactNode
  chevron?: boolean
  onClick?: () => void
  right?: React.ReactNode
  danger?: boolean
}) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag className={`cell ${danger ? 'danger' : ''}`} onClick={onClick}>
      {icon && (
        <span className="cell-icon" style={{ background: iconBg }}>
          <G n={icon} size={17} w={2.2} />
        </span>
      )}
      <span className="cell-main">
        <span className="cell-title">{title}</span>
        {sub && <small className="cell-sub">{sub}</small>}
      </span>
      {detail !== undefined && <span className="cell-detail">{detail}</span>}
      {right}
      {chevron && <G n="chevron" size={15} w={2.6} className="cell-chev" />}
    </Tag>
  )
}

import type { AppId } from '../story/types'
import { BRAND } from './brands'

/* ---------------- SF Symbols 느낌의 선 아이콘 ---------------- */

const PATHS: Record<string, React.ReactNode> = {
  back: <path d="M15 4 7 12l8 8" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  more: (
    <>
      <circle cx="5" cy="12" r="1.3" fill="currentColor" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      <circle cx="19" cy="12" r="1.3" fill="currentColor" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8.5" r="3.5" />
      <path d="M2.5 20c.6-3.6 3.3-5.6 6.5-5.6s5.9 2 6.5 5.6" />
      <circle cx="17" cy="9" r="2.8" />
      <path d="M17 14.3c2.6 0 4.4 1.7 4.9 4.7" />
    </>
  ),
  bubble: <path d="M12 4c-5 0-9 3.2-9 7.2 0 2.5 1.6 4.7 4 6L6 21l4.3-2.6c.6.1 1.1.1 1.7.1 5 0 9-3.2 9-7.3S17 4 12 4z" />,
  bubbles: (
    <>
      <path d="M10 4c-4.4 0-8 2.8-8 6.3 0 2.1 1.3 4 3.4 5.1L5 19l3.6-2.2c.5.1.9.1 1.4.1 4.4 0 8-2.8 8-6.4S14.4 4 10 4z" />
      <path d="M19.5 9.5c1.6 1 2.5 2.4 2.5 4 0 1.6-1 3-2.6 3.9l.4 2.6-2.9-1.7" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 13H6z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5 9 3l1.6 4.2-2 1.4a11.6 11.6 0 0 0 6.8 6.8l1.4-2 4.2 1.6-.5 2.4c-.2 1-1.1 1.6-2.1 1.6A16.6 16.6 0 0 1 5 5.6c0-1 .6-1.9 1.6-2.1z" />
  ),
  phoneFill: (
    <path
      fill="currentColor"
      stroke="none"
      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"
    />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8z" />,
  grid: (
    <>
      {[5, 12, 19].map((x) => [5, 12, 19].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.6" fill="currentColor" />))}
    </>
  ),
  voicemail: (
    <>
      <circle cx="6.5" cy="12" r="3.5" />
      <circle cx="17.5" cy="12" r="3.5" />
      <path d="M6.5 15.5h11" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6M12 7.5v.5" />
    </>
  ),
  camera: (
    <>
      <path d="M3 8.5c0-1 .8-1.8 1.8-1.8h2.4L8.8 4.5h6.4l1.6 2.2h2.4c1 0 1.8.8 1.8 1.8v9.7c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8z" />
      <circle cx="12" cy="13" r="3.8" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" />,
  share: (
    <>
      <path d="M12 3v12M8 7l4-4 4 4" />
      <path d="M6 11H5v10h14V11h-1" />
    </>
  ),
  trash: <path d="M4 7h16M9 7V4.5h6V7M6 7l1 14h10l1-14" />,
  compose: (
    <>
      <path d="M12 4H5v15h15v-7" />
      <path d="m17.5 3.5 3 3L12 15l-4 1 1-4z" />
    </>
  ),
  folder: <path d="M3 6.5c0-.8.7-1.5 1.5-1.5h5l2 2h8c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5z" />,
  play: <path fill="currentColor" d="M7 4.5v15l13-7.5z" />,
  pause: (
    <>
      <rect x="6" y="4.5" width="4" height="15" rx="1" fill="currentColor" />
      <rect x="14" y="4.5" width="4" height="15" rx="1" fill="currentColor" />
    </>
  ),
  rewind: <path d="M11 6 4 12l7 6zM20 6l-7 6 7 6z" fill="currentColor" />,
  forward: <path d="M13 6l7 6-7 6zM4 6l7 6-7 6z" fill="currentColor" />,
  wifi: (
    <>
      <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.3a9.5 9.5 0 0 1 13 0M8.6 15.5a5 5 0 0 1 6.8 0" />
      <circle cx="12" cy="18.6" r="1.2" fill="currentColor" />
    </>
  ),
  bluetooth: <path d="m7 7 10 10-5 4V3l5 4L7 17" />,
  plane: <path fill="currentColor" stroke="none" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />,
  antenna: (
    <>
      <path d="M12 10v11" />
      <path d="M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7M5.6 3.6a9 9 0 0 0 0 12.8M18.4 3.6a9 9 0 0 1 0 12.8" />
    </>
  ),
  moon: <path fill="currentColor" stroke="none" d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />,
  flashlight: (
    <>
      <path d="M8 3h8v4l-2 4v10h-4V11L8 7z" />
      <path d="M12 13v2" />
    </>
  ),
  lockRotate: (
    <>
      <path d="M20 12a8 8 0 1 1-2.3-5.7" />
      <path d="M18 3v4h-4" />
      <rect x="9.5" y="11" width="5" height="4.5" rx="1" />
      <path d="M10.5 11V9.8a1.5 1.5 0 0 1 3 0V11" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M21.5 12h-2M4.5 12h-2M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4M18.7 18.7l-1.4-1.4M6.7 6.7 5.3 5.3" />
    </>
  ),
  speaker: (
    <>
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
      <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </>
  ),
  bellSlash: (
    <>
      <path d="M6 16.5V11a6 6 0 0 1 9.5-4.9M18 10.5v6l1.5 1.5h-15" />
      <path d="M10 20a2 2 0 0 0 4 0M3.5 3.5l17 17" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 13.5V9.5M10 2.5h4" />
    </>
  ),
  calc: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <path d="M8.5 7.5h7M9 12h.1M12 12h.1M15 12h.1M9 16h.1M12 16h.1M15 16h.1" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <path d="M6 10h.1M9.3 10h.1M12.6 10h.1M16 10h.1M7 14h10" />
    </>
  ),
  emoji: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 14.5a4.6 4.6 0 0 0 8 0M9 9.5v.5M15 9.5v.5" />
    </>
  ),
  hash: <path d="M9.5 3.5 7.5 20.5M16.5 3.5l-2 17M4 8.5h16.5M3.5 15.5H20" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  photo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.6" />
      <path d="m3.5 17 5-5 4 4 2.5-2.5 5.5 5" />
    </>
  ),
  album: (
    <>
      <rect x="3" y="7" width="15" height="13" rx="2" />
      <path d="M6 4h13a2 2 0 0 1 2 2v11" />
    </>
  ),
  sparkle: <path fill="currentColor" stroke="none" d="M12 2c.6 4.8 2.7 7.4 7.5 8.2V12c-4.8.8-6.9 3.4-7.5 8.2h-.1c-.6-4.8-2.7-7.4-7.4-8.2v-1.8C9.2 9.4 11.3 6.8 11.9 2z" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2.2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  unlock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2.2" />
      <path d="M8 10.5V8a4 4 0 0 1 7.8-1.2" />
    </>
  ),
  pin: <path fill="currentColor" stroke="none" d="M14.5 3 21 9.5l-2 .5-3.3 3.3.3 4.2-1.5 1.5-3.6-3.6L6 20.3 3.7 18l4.9-4.9L5 9.5 6.5 8l4.2.3L14 5z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.7 3.8 5.7 3.8 9S14.6 18.3 12 21c-2.6-2.7-3.8-5.7-3.8-9S9.4 5.7 12 3z" />
    </>
  ),
  hand: <path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V10m0-5.5V4a1.5 1.5 0 0 1 3 0v6m0-4.5a1.5 1.5 0 0 1 3 0V11m0-3a1.5 1.5 0 0 1 3 0v6.5c0 4-3 6.5-6.5 6.5-2.6 0-4.3-1.2-5.7-3L4.5 14a1.5 1.5 0 0 1 2.3-2L8 13.5" />,
  battery: (
    <>
      <rect x="2" y="7" width="18" height="10" rx="2.5" />
      <path d="M22 10.5v3" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="9" r="1.8" />
      <path d="m4 19 6-6 4 4 2-2 4 4" />
    </>
  ),
  shutter: <circle cx="12" cy="12" r="9" />,
  flip: (
    <>
      <path d="M4 9a8 8 0 0 1 14.5-3M20 15a8 8 0 0 1-14.5 3" />
      <path d="M19 3v3.5h-3.5M5 21v-3.5h3.5" />
    </>
  ),
  stopwatch: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 13.5 15 10.5M10 2.5h4M12 2.5V6" />
    </>
  ),
  alarm: (
    <>
      <circle cx="12" cy="13" r="7.5" />
      <path d="M12 9.5V13l2.5 1.5M4 5l3-2.5M20 5l-3-2.5" />
    </>
  ),
  bed: <path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5M7.5 11.5h.1" />,
  gift: (
    <>
      <rect x="3.5" y="8.5" width="17" height="4" rx="1" />
      <path d="M5 12.5V20h14v-7.5M12 8.5V20M12 8.5C10.5 5 7 4.5 7 6.8 7 8.5 12 8.5 12 8.5zM12 8.5c1.5-3.5 5-4 5-1.7 0 1.7-5 1.7-5 1.7z" />
    </>
  ),
  video: (
    <>
      <rect x="2.5" y="6" width="13.5" height="12" rx="2.5" />
      <path d="m16 10.5 5.5-3.5v10L16 13.5" />
    </>
  ),
  home: <path d="M3.5 11 12 3.5l8.5 7.5V20a1 1 0 0 1-1 1h-5v-6h-5v6h-5a1 1 0 0 1-1-1z" />,
  plusSquare: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  send: <path d="M21 3 10 14M21 3l-7 18-4-7-7-4z" />,
  bookmark: <path d="M6 3.5h12v17l-6-4.5-6 4.5z" />,
  repeat: <path d="M17 2.5l3.5 3.5L17 9.5M20.5 6H8a4 4 0 0 0-4 4v1.5M7 21.5 3.5 18 7 14.5M3.5 18H16a4 4 0 0 0 4-4v-1.5" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  shuffle: <path d="M3 7h3.5c2 0 3.3 1 4.4 2.7l2.2 3.6c1.1 1.7 2.4 2.7 4.4 2.7H21M18 13l3 3-3 3M3 17h3.5c1.3 0 2.3-.4 3.1-1.1M13.4 8.1c.8-.7 1.8-1.1 3.1-1.1H21M18 4l3 3-3 3" />,
  location: <path fill="currentColor" stroke="none" d="M21 3 3 10.5l7.5 2.6L13 21z" />,
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" />
    </>
  ),
  eyeSlash: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M4 4l16 16" />
    </>
  ),
  expand: <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />,
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2.5" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </>
  ),
  thumb: <path d="M7 10v10H4V10zM7 10l4-7c1.5 0 2.5 1 2.2 2.6L12.6 9H19a2 2 0 0 1 2 2.3l-1.2 6.8A2 2 0 0 1 17.8 20H7" />,
  apps: <path d="M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z" />,
}

export function G({ n, size = 22, w = 2, className, style }: { n: keyof typeof PATHS | string; size?: number; w?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={`g ${className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden
    >
      {PATHS[n]}
    </svg>
  )
}

/* ---------------- 앱 아이콘 ---------------- */

function Squircle({ bg, children, id }: { bg: React.ReactNode; children: React.ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 60 60" width="100%" height="100%" aria-hidden>
      <defs>{bg}</defs>
      <rect width="60" height="60" fill={`url(#${id})`} />
      {children}
    </svg>
  )
}

const lin = (id: string, a: string, b: string, x2 = 0, y2 = 1) => (
  <linearGradient id={id} x1="0" y1="0" x2={x2} y2={y2}>
    <stop offset="0" stopColor={a} />
    <stop offset="1" stopColor={b} />
  </linearGradient>
)

export function AppIcon({ id, day, weekday }: { id: AppId | 'camera' | 'clock'; day?: number; weekday?: string }) {
  switch (id) {
    case 'phone':
      return (
        <Squircle id="ig-phone" bg={lin('ig-phone', '#62f57e', '#18bd3a')}>
          <path
            transform="translate(14 14) scale(1.35)"
            fill="#fff"
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"
          />
        </Squircle>
      )
    case 'messages':
      return (
        <Squircle id="ig-msg" bg={lin('ig-msg', '#62f57e', '#18bd3a')}>
          <path fill="#fff" d="M30 13c-10.5 0-19 6.6-19 14.8 0 4.9 3.1 9.3 7.8 12-.4 2.7-1.7 5.2-3.6 7.2 3.6-.2 7-1.6 9.6-3.9 1.7.4 3.4.6 5.2.6 10.5 0 19-6.6 19-14.9S40.5 13 30 13z" />
        </Squircle>
      )
    case 'kakao':
      // 로고 경로의 사각형이 노란 바탕, 말풍선 구멍으로 갈색이 보이고 TALK 글자는 다시 노랑
      return (
        <Squircle id="ig-kakao" bg={lin('ig-kakao', '#3c1e1e', '#3c1e1e')}>
          <path d={BRAND.kakaotalk} fill="#fee500" transform="scale(2.5)" />
        </Squircle>
      )
    case 'photos': {
      const petals = ['#f5a623', '#f8d838', '#b7dd3d', '#4fd1a5', '#3db7f2', '#7a7ff2', '#c46bf2', '#f2637b']
      return (
        <Squircle id="ig-photos" bg={lin('ig-photos', '#ffffff', '#f4f4f4')}>
          {petals.map((c, i) => (
            <ellipse key={c} cx="30" cy="19.5" rx="6.3" ry="10.5" fill={c} opacity="0.82" transform={`rotate(${i * 45} 30 30)`} style={{ mixBlendMode: 'multiply' }} />
          ))}
        </Squircle>
      )
    }
    case 'notes':
      return (
        <Squircle id="ig-notes" bg={lin('ig-notes', '#ffffff', '#f6f6f6')}>
          <rect width="60" height="16" fill="#fdcc36" />
          <rect y="15" width="60" height="1.2" fill="#e5b42a" />
          {[25, 33, 41, 49].map((y) => (
            <rect key={y} x="0" y={y} width="60" height="0.8" fill="#d6d6d6" />
          ))}
          <g fill="#c9c9c9">
            {[6, 12, 18, 24, 30, 36, 42, 48, 54].map((x) => (
              <circle key={x} cx={x} cy="20" r="0.9" />
            ))}
          </g>
        </Squircle>
      )
    case 'calendar':
      return (
        <Squircle id="ig-cal" bg={lin('ig-cal', '#ffffff', '#ffffff')}>
          <text x="30" y="16" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="#ff3b30" fontFamily="-apple-system, sans-serif">
            {weekday}
          </text>
          <text x="30" y="45" textAnchor="middle" fontSize="30" fontWeight="300" fill="#111" fontFamily="-apple-system, sans-serif">
            {day}
          </text>
        </Squircle>
      )
    case 'settings':
      return (
        <Squircle id="ig-set" bg={lin('ig-set', '#b6b6bc', '#7b7b82')}>
          <g transform="translate(30 30)">
            <circle r="19" fill="#5c5c63" />
            {Array.from({ length: 36 }).map((_, i) => (
              <rect key={i} x="-1.4" y="-19.5" width="2.8" height="4" fill="#d9d9de" transform={`rotate(${i * 10})`} />
            ))}
            <circle r="14.5" fill="#d9d9de" />
            <circle r="11" fill="#5c5c63" />
            {Array.from({ length: 6 }).map((_, i) => (
              <rect key={i} x="-1.6" y="-11" width="3.2" height="11" fill="#d9d9de" transform={`rotate(${i * 60})`} />
            ))}
            <circle r="4.5" fill="#d9d9de" />
            <circle r="2.4" fill="#5c5c63" />
          </g>
        </Squircle>
      )
    case 'voice':
      return (
        <Squircle id="ig-voice" bg={lin('ig-voice', '#2c2c2e', '#0c0c0d')}>
          {[3, 7, 12, 18, 11, 22, 15, 26, 18, 10, 20, 13, 6, 9, 4].map((h, i) => (
            <rect key={i} x={9 + i * 3} y={30 - h / 2} width="1.6" height={h} rx="0.8" fill={i > 9 ? '#8e8e93' : '#ff3b30'} />
          ))}
        </Squircle>
      )
    case 'search':
      return (
        <Squircle id="ig-naver" bg={lin('ig-naver', '#03c75a', '#03c75a')}>
          <path d={BRAND.naver} fill="#fff" transform="translate(19 19) scale(0.92)" />
        </Squircle>
      )
    case 'ai':
      return (
        <Squircle id="ig-gpt" bg={lin('ig-gpt', '#000', '#000')}>
          <g transform="translate(30 30)" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round">
            {Array.from({ length: 6 }).map((_, i) => (
              <path key={i} d="M-6 -3.5 L-6 -10 A6 6 0 0 1 4.4 -14 L9.5 -11" transform={`rotate(${i * 60})`} />
            ))}
          </g>
        </Squircle>
      )
    case 'camera':
      return (
        <Squircle id="ig-cam" bg={lin('ig-cam', '#d8d8dc', '#9d9da3')}>
          <rect x="9" y="19" width="42" height="27" rx="5" fill="#1c1c1e" />
          <rect x="22" y="15" width="16" height="6" rx="2" fill="#1c1c1e" />
          <circle cx="30" cy="32.5" r="9.5" fill="#4a4a4f" />
          <circle cx="30" cy="32.5" r="6.5" fill="#1b2a44" />
          <circle cx="32" cy="30.5" r="1.8" fill="#9db2d8" />
          <circle cx="44.5" cy="24" r="1.6" fill="#f6c343" />
        </Squircle>
      )
    case 'instagram':
      return (
        <Squircle
          id="ig-insta"
          bg={
            <radialGradient id="ig-insta" cx="0.3" cy="1.07" r="1.3">
              <stop offset="0" stopColor="#fdf497" />
              <stop offset="0.1" stopColor="#fdf497" />
              <stop offset="0.5" stopColor="#fd5949" />
              <stop offset="0.68" stopColor="#d6249f" />
              <stop offset="1" stopColor="#285AEB" />
            </radialGradient>
          }
        >
          <path d={BRAND.instagram} fill="#fff" transform="translate(13.5 13.5) scale(1.375)" />
        </Squircle>
      )
    case 'x':
      return (
        <Squircle id="ig-x" bg={lin('ig-x', '#000', '#000')}>
          <path d={BRAND.x} fill="#fff" transform="translate(16 16) scale(1.1667)" />
        </Squircle>
      )
    case 'music':
      // 사각형은 빨간 그라데이션, 음표 구멍으로 흰 바탕이 보인다
      return (
        <Squircle
          id="ig-music"
          bg={
            <>
              {lin('ig-music', '#fff', '#fff')}
              {lin('ig-music-fg', '#fb5c74', '#fa233b')}
            </>
          }
        >
          <path d={BRAND.applemusic} fill="url(#ig-music-fg)" transform="scale(2.5)" />
        </Squircle>
      )
    case 'maps':
      return (
        <Squircle id="ig-maps" bg={lin('ig-maps', '#c9f0d0', '#a4e2b2')}>
          <path d="M0 40 60 22v10L0 50z" fill="#fef3b5" />
          <path d="M22 0h8l8 60h-8z" fill="#fff" />
          <path d="M0 40 60 22" stroke="#7cc5f5" strokeWidth="4" />
          <circle cx="40" cy="20" r="9" fill="#ff3b30" />
          <circle cx="40" cy="20" r="3.4" fill="#fff" />
          <path d="M40 29l-3-4h6z" fill="#ff3b30" />
        </Squircle>
      )
    case 'mail':
      return (
        <Squircle id="ig-mail" bg={lin('ig-mail', '#5ac8fa', '#1e7cf2')}>
          <rect x="11" y="18" width="38" height="25" rx="3.5" fill="#fff" />
          <path d="M12.5 20 30 33l17.5-13" fill="none" stroke="#1e7cf2" strokeWidth="2.4" strokeLinejoin="round" opacity="0.5" />
        </Squircle>
      )
    case 'weather':
      return (
        <Squircle id="ig-weather" bg={lin('ig-weather', '#4aa3f7', '#1d63d8')}>
          <circle cx="24" cy="24" r="9" fill="#ffd33d" />
          <path fill="#fff" d="M41 44H22a8 8 0 0 1-.6-16 10 10 0 0 1 19.2 2.2A7 7 0 0 1 41 44z" />
        </Squircle>
      )
    case 'clock':
      return (
        <Squircle id="ig-clock" bg={lin('ig-clock', '#1c1c1e', '#000')}>
          <circle cx="30" cy="30" r="22" fill="#fff" />
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x="29.4" y="10" width="1.2" height="3" fill="#111" transform={`rotate(${i * 30} 30 30)`} />
          ))}
          <rect x="29" y="17" width="2" height="14" rx="1" fill="#111" transform="rotate(-30 30 30)" />
          <rect x="29.2" y="13" width="1.6" height="18" rx="0.8" fill="#111" transform="rotate(60 30 30)" />
          <rect x="29.6" y="12" width="0.8" height="22" fill="#ff9500" transform="rotate(170 30 30)" />
          <circle cx="30" cy="30" r="1.6" fill="#ff9500" />
        </Squircle>
      )
  }
}

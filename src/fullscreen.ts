/** 전체 화면 지원 여부와 진입/해제. iPhone Safari는 요소 전체 화면을 지원하지 않아 홈 화면 추가가 유일한 방법이다. */

type FsDoc = Document & { webkitFullscreenElement?: Element; webkitExitFullscreen?: () => Promise<void> }
type FsEl = HTMLElement & { webkitRequestFullscreen?: () => Promise<void> }

export const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

export const isStandalone = () =>
  window.matchMedia?.('(display-mode: standalone)').matches ||
  window.matchMedia?.('(display-mode: fullscreen)').matches ||
  (navigator as Navigator & { standalone?: boolean }).standalone === true

export function canFullscreen() {
  const el = document.documentElement as FsEl
  const iphone = /iPhone|iPod/.test(navigator.userAgent)
  return !iphone && !!(el.requestFullscreen || el.webkitRequestFullscreen)
}

export function isFullscreen() {
  const d = document as FsDoc
  return !!(d.fullscreenElement || d.webkitFullscreenElement) || isStandalone()
}

export async function enterFullscreen() {
  const el = document.documentElement as FsEl
  try {
    if (el.requestFullscreen) await el.requestFullscreen({ navigationUI: 'hide' })
    else if (el.webkitRequestFullscreen) await el.webkitRequestFullscreen()
    // 가능하면 세로 고정
    await (screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void> })?.lock?.('portrait').catch(() => {})
    return true
  } catch {
    return false
  }
}

export async function exitFullscreen() {
  const d = document as FsDoc
  try {
    if (d.fullscreenElement) await d.exitFullscreen()
    else if (d.webkitFullscreenElement) await d.webkitExitFullscreen?.()
  } catch {
    // 무시
  }
}

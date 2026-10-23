import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { setMuted } from './sound'

/** 폰 자체의 상태 (설정·제어 센터에서 바뀌는 것들). 스토리 진행과는 별개. */
export type DeviceSettings = {
  airplane: boolean
  wifi: boolean
  bluetooth: boolean
  cellular: boolean
  focus: boolean
  silent: boolean
  rotationLock: boolean
  brightness: number
  volume: number
  wallpaper: number
  textSize: number
}

const DEFAULTS: DeviceSettings = {
  airplane: false,
  wifi: true,
  bluetooth: true,
  cellular: true,
  focus: false,
  silent: false,
  rotationLock: true,
  brightness: 1,
  volume: 0.6,
  wallpaper: 0,
  textSize: 1,
}

export type Shot = { id: string; src: string; at: number }
export type Overlay = 'none' | 'control' | 'notifications'

type DeviceCtx = {
  s: DeviceSettings
  set: <K extends keyof DeviceSettings>(k: K, v: DeviceSettings[K]) => void
  toggle: (k: keyof DeviceSettings) => void
  overlay: Overlay
  setOverlay: (o: Overlay) => void
  flashlight: boolean
  setFlashlight: (v: boolean) => void
  shots: Shot[]
  addShot: (src: string) => void
  /** 화면 안쪽 뒤로가기 핸들러 스택 (가장 위가 현재 화면) */
  pushBack: (fn: () => void) => () => void
  goBack: () => boolean
  outgoing: string | null
  dial: (contactIdOrNumber: string | null) => void
  haptic: (ms?: number) => void
}

const Ctx = createContext<DeviceCtx | null>(null)

export function DeviceProvider({ storyId, children }: { storyId: string; children: React.ReactNode }) {
  const key = `yudoz-device-${storyId}`
  const [s, setS] = useState<DeviceSettings>(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw) return { ...DEFAULTS, ...(JSON.parse(raw) as DeviceSettings) }
    } catch {
      // 무시
    }
    return DEFAULTS
  })
  const [overlay, setOverlay] = useState<Overlay>('none')
  const [flashlight, setFlashlight] = useState(false)
  const [shots, setShots] = useState<Shot[]>([])
  const [outgoing, setOutgoing] = useState<string | null>(null)
  const backs = useRef<(() => void)[]>([])

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(s))
    } catch {
      // 무시
    }
    setMuted(s.silent || s.volume === 0, s.volume)
  }, [s, key])

  const set = useCallback(<K extends keyof DeviceSettings>(k: K, v: DeviceSettings[K]) => {
    setS((prev) => {
      const next = { ...prev, [k]: v }
      // 에어플레인 모드는 셀룰러·와이파이·블루투스를 끈다 (iOS와 같은 동작)
      if (k === 'airplane' && v) Object.assign(next, { cellular: false, wifi: false, bluetooth: false })
      if (k === 'airplane' && !v) Object.assign(next, { cellular: true, wifi: true, bluetooth: true })
      if ((k === 'wifi' || k === 'cellular' || k === 'bluetooth') && v) next.airplane = false
      return next
    })
  }, [])

  const haptic = useCallback((ms = 8) => {
    try {
      navigator.vibrate?.(ms)
    } catch {
      // 무시
    }
  }, [])

  const pushBack = useCallback((fn: () => void) => {
    backs.current.push(fn)
    return () => {
      backs.current = backs.current.filter((f) => f !== fn)
    }
  }, [])

  const value: DeviceCtx = {
    s,
    set,
    toggle: (k) => set(k, !s[k] as never),
    overlay,
    setOverlay,
    flashlight,
    setFlashlight,
    shots,
    addShot: (src) => setShots((list) => [...list, { id: `shot-${Date.now()}`, src, at: Date.now() }]),
    pushBack,
    goBack: () => {
      const fn = backs.current[backs.current.length - 1]
      if (!fn) return false
      fn()
      return true
    },
    outgoing,
    dial: setOutgoing,
    haptic,
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useDevice() {
  const c = useContext(Ctx)
  if (!c) throw new Error('useDevice outside provider')
  return c
}

/** 하위 화면이 열려 있는 동안 왼쪽 가장자리 스와이프(뒤로가기)를 받는다 */
export function useBackHandler(active: boolean, fn: () => void) {
  const { pushBack } = useDevice()
  const ref = useRef(fn)
  ref.current = fn
  useEffect(() => {
    if (!active) return
    return pushBack(() => ref.current())
  }, [active, pushBack])
}

export const WALLPAPERS: { id: number; name: { ko: string; zh: string } }[] = [
  { id: 0, name: { ko: '기본', zh: '預設' } },
  { id: 1, name: { ko: '새벽', zh: '清晨' } },
  { id: 2, name: { ko: '밤하늘', zh: '夜空' } },
  { id: 3, name: { ko: '복숭아', zh: '水蜜桃' } },
]

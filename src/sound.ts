let ctx: AudioContext | null = null
let ringTimer: number | null = null
let buzzTimer: number | null = null
let muted = false
let volume = 0.6
let focus = false
let vibrationOn = true

function audio(): AudioContext | null {
  try {
    if (!ctx) ctx = new AudioContext()
    if (ctx.state === 'suspended') void ctx.resume()
    return ctx
  } catch {
    return null
  }
}

/** 첫 사용자 입력 때 호출해 오디오를 깨운다 */
export function unlockAudio() {
  audio()
}

/** 무음(벨소리 끔)·음량·방해 금지 상태 */
export function setMuted(m: boolean, v: number, f = focus, vib = vibrationOn) {
  muted = m
  volume = v
  focus = f
  vibrationOn = vib
}

/* ---------------- 진동 ---------------- */

let iosSwitch: HTMLLabelElement | null = null
const isIOS = () => typeof navigator !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent)

/**
 * iOS Safari는 Vibration API가 없다. iOS 18부터 스위치 체크박스를 토글하면
 * 시스템 햅틱이 한 번 울리므로 그걸로 대신한다 (짧은 "톡" 한 번).
 */
function iosTap() {
  try {
    if (!iosSwitch) {
      const input = document.createElement('input')
      input.type = 'checkbox'
      input.setAttribute('switch', '')
      input.id = 'yudoz-haptic'
      input.style.cssText = 'position:fixed;opacity:0;pointer-events:none;width:0;height:0'
      const label = document.createElement('label')
      label.htmlFor = input.id
      label.style.cssText = 'position:fixed;opacity:0;pointer-events:none;width:0;height:0'
      document.body.append(input, label)
      iosSwitch = label
    }
    iosSwitch.click()
  } catch {
    // 무시
  }
}

/** 진동 패턴 [울림, 쉼, 울림, …] (ms) */
export function vibrate(pattern: number | number[]) {
  if (!vibrationOn) return
  const p = Array.isArray(pattern) ? pattern : [pattern]
  try {
    if (navigator.vibrate) {
      navigator.vibrate(p)
      return
    }
  } catch {
    // 무시
  }
  if (isIOS()) {
    // 울림 구간마다 햅틱 한 번
    let t = 0
    p.forEach((ms, i) => {
      if (i % 2 === 0) window.setTimeout(iosTap, t)
      t += ms
    })
  }
}

function stopBuzz() {
  if (buzzTimer !== null) window.clearInterval(buzzTimer)
  buzzTimer = null
  try {
    navigator.vibrate?.(0)
  } catch {
    // 무시
  }
}

/* ---------------- 소리 ---------------- */

type Tone = { f: number; at: number; len: number; vol?: number; type?: OscillatorType }

/** 마림바 비슷한 소리: 사인파 + 배음 + 빠른 감쇠 */
function play(tones: Tone[], marimba = false) {
  if (muted) return
  const a = audio()
  if (!a) return
  const master = a.createGain()
  master.gain.value = volume * 1.4
  master.connect(a.destination)
  for (const tn of tones) {
    const partials = marimba ? [1, 4, 10] : [1]
    partials.forEach((mult, i) => {
      const o = a.createOscillator()
      const g = a.createGain()
      o.type = tn.type ?? 'sine'
      o.frequency.value = tn.f * mult
      const peak = (tn.vol ?? 0.08) * (i === 0 ? 1 : i === 1 ? 0.18 : 0.05)
      const t0 = a.currentTime + tn.at
      g.gain.setValueAtTime(0, t0)
      g.gain.linearRampToValueAtTime(peak, t0 + 0.006)
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + tn.len * (i === 0 ? 1 : 0.4))
      o.connect(g).connect(master)
      o.start(t0)
      o.stop(t0 + tn.len + 0.05)
    })
  }
}

/** 카톡 알림 (짧은 두 음 "카-톡") + 짧은 진동 */
export function playPing() {
  if (focus) return
  play(
    [
      { f: 1175, at: 0, len: 0.14, vol: 0.09 },
      { f: 1568, at: 0.1, len: 0.28, vol: 0.09 },
    ],
    true,
  )
  vibrate([60, 70, 60])
}

/** iMessage·Instagram 알림 (세 음 올라가는 소리) */
export function playIm() {
  if (focus) return
  play(
    [
      { f: 1318, at: 0, len: 0.16, vol: 0.07 },
      { f: 1661, at: 0.12, len: 0.16, vol: 0.07 },
      { f: 1976, at: 0.24, len: 0.3, vol: 0.07 },
    ],
    true,
  )
  vibrate(70)
}

/** 키패드·잠금 해제 클릭 */
export function playTick() {
  play([{ f: 2200, at: 0, len: 0.03, vol: 0.03, type: 'triangle' }])
}

export function playUnlock() {
  play([
    { f: 880, at: 0, len: 0.06, vol: 0.04, type: 'triangle' },
    { f: 1320, at: 0.05, len: 0.08, vol: 0.04, type: 'triangle' },
  ])
}

export function playShutter() {
  play([
    { f: 400, at: 0, len: 0.05, vol: 0.08, type: 'square' },
    { f: 220, at: 0.06, len: 0.06, vol: 0.06, type: 'square' },
  ])
}

/** 전화 연결음 (뚜— 뚜—) */
export function startDialTone() {
  stopRing()
  const beep = () =>
    play([
      { f: 440, at: 0, len: 1.0, vol: 0.04 },
      { f: 480, at: 0, len: 1.0, vol: 0.04 },
    ])
  beep()
  ringTimer = window.setInterval(beep, 3000)
}

/** 수신 벨소리: 마림바 아르페지오 반복 + 전화 진동 패턴 */
export function startRing() {
  stopRing()
  const melody = [659, 988, 1319, 988, 1319, 1760, 1319, 988]
  const ring = () => play(melody.map((f, i) => ({ f, at: i * 0.15, len: 0.32, vol: 0.075 })), true)
  ring()
  ringTimer = window.setInterval(ring, 2400)
  // 아이폰 전화처럼 길게 두 번씩 반복
  const buzz = () => vibrate([400, 200, 400])
  buzz()
  buzzTimer = window.setInterval(buzz, 2400)
}

export function stopRing() {
  if (ringTimer !== null) window.clearInterval(ringTimer)
  ringTimer = null
  stopBuzz()
}

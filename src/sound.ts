let ctx: AudioContext | null = null
let ringTimer: number | null = null
let muted = false
let volume = 0.6

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

export function setMuted(m: boolean, v: number) {
  muted = m
  volume = v
}

function tone(freq: number, start: number, len: number, vol = 0.08, type: OscillatorType = 'sine') {
  if (muted) return
  const a = audio()
  if (!a) return
  const o = a.createOscillator()
  const g = a.createGain()
  o.type = type
  o.frequency.value = freq
  const peak = vol * volume * 1.6
  g.gain.setValueAtTime(0, a.currentTime + start)
  g.gain.linearRampToValueAtTime(peak, a.currentTime + start + 0.008)
  g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + len)
  o.connect(g).connect(a.destination)
  o.start(a.currentTime + start)
  o.stop(a.currentTime + start + len + 0.05)
}

/** 카톡 알림음 비슷한 두 음 */
export function playPing() {
  tone(1318, 0, 0.18)
  tone(1760, 0.09, 0.25)
}

/** 키패드·잠금 해제 클릭 */
export function playTick() {
  tone(2200, 0, 0.03, 0.03, 'triangle')
}

export function playUnlock() {
  tone(880, 0, 0.06, 0.04, 'triangle')
  tone(1320, 0.05, 0.08, 0.04, 'triangle')
}

export function playShutter() {
  tone(400, 0, 0.05, 0.08, 'square')
  tone(220, 0.06, 0.06, 0.06, 'square')
}

/** 전화 연결음 (뚜— 뚜—) */
export function startDialTone() {
  stopRing()
  const beep = () => {
    tone(440, 0, 1.0, 0.04)
    tone(480, 0, 1.0, 0.04)
  }
  beep()
  ringTimer = window.setInterval(beep, 3000)
}

export function startRing() {
  stopRing()
  const ring = () => {
    for (let i = 0; i < 6; i++) tone(i % 2 ? 1046 : 1318, i * 0.12, 0.11, 0.06)
  }
  ring()
  ringTimer = window.setInterval(ring, 2200)
}

export function stopRing() {
  if (ringTimer !== null) window.clearInterval(ringTimer)
  ringTimer = null
}

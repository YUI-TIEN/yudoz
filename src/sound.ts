let ctx: AudioContext | null = null
let ringTimer: number | null = null

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

function tone(freq: number, start: number, len: number, vol = 0.08) {
  const a = audio()
  if (!a) return
  const o = a.createOscillator()
  const g = a.createGain()
  o.type = 'sine'
  o.frequency.value = freq
  g.gain.setValueAtTime(0, a.currentTime + start)
  g.gain.linearRampToValueAtTime(vol, a.currentTime + start + 0.01)
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

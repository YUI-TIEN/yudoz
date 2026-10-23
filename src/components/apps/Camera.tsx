import { useEffect, useRef, useState } from 'react'
import { useLang } from '../../i18n'
import { useDevice } from '../../device'
import { useStory } from '../../story/engine'
import { playShutter } from '../../sound'
import { StatusBar } from '../system'
import { G } from '../icons'

const MODES = [
  { ko: '타임랩스', zh: '縮時攝影' },
  { ko: '슬로모', zh: '慢動作' },
  { ko: '비디오', zh: '影片' },
  { ko: '사진', zh: '照片' },
  { ko: '인물 사진', zh: '人像' },
  { ko: '파노라마', zh: '全景' },
]

/** 실제 카메라(getUserMedia)를 쓰고, 권한이 없으면 가상 뷰파인더를 보여준다 */
export function CameraApp() {
  const { t } = useLang()
  const { addShot, shots, flashlight, setFlashlight, haptic } = useDevice()
  const { setScreen } = useStory()
  const video = useRef<HTMLVideoElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [facing, setFacing] = useState<'user' | 'environment'>('user')
  const [denied, setDenied] = useState(false)
  const [flash, setFlash] = useState(false)
  const [mode, setMode] = useState(3)

  useEffect(() => {
    let cancelled = false
    let s: MediaStream | null = null
    if (!navigator.mediaDevices?.getUserMedia) {
      setDenied(true)
      return
    }
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: facing }, audio: false })
      .then((m) => {
        if (cancelled) {
          m.getTracks().forEach((tr) => tr.stop())
          return
        }
        s = m
        setStream(m)
        setDenied(false)
      })
      .catch(() => setDenied(true))
    return () => {
      cancelled = true
      s?.getTracks().forEach((tr) => tr.stop())
    }
  }, [facing])

  useEffect(() => {
    if (video.current && stream) video.current.srcObject = stream
  }, [stream])

  const shoot = () => {
    playShutter()
    haptic(20)
    setFlash(true)
    window.setTimeout(() => setFlash(false), 140)
    const canvas = document.createElement('canvas')
    const v = video.current
    if (v && stream && v.videoWidth) {
      canvas.width = 600
      canvas.height = 800
      const ctx = canvas.getContext('2d')!
      const r = Math.max(600 / v.videoWidth, 800 / v.videoHeight)
      const w = v.videoWidth * r
      const h = v.videoHeight * r
      if (facing === 'user') {
        ctx.translate(600, 0)
        ctx.scale(-1, 1)
      }
      ctx.drawImage(v, (600 - w) / 2, (800 - h) / 2, w, h)
    } else {
      canvas.width = 600
      canvas.height = 800
      const ctx = canvas.getContext('2d')!
      const g = ctx.createLinearGradient(0, 0, 600, 800)
      g.addColorStop(0, '#3b3b46')
      g.addColorStop(1, '#101015')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 600, 800)
      ctx.font = '160px serif'
      ctx.textAlign = 'center'
      ctx.fillText('📷', 300, 460)
    }
    addShot(canvas.toDataURL('image/jpeg', 0.82))
  }

  const last = shots[shots.length - 1]
  return (
    <div className="cam">
      <StatusBar dark />
      <div className="cam-top">
        <button className={flashlight ? 'on' : ''} onClick={() => setFlashlight(!flashlight)} aria-label="flash">
          ⚡︎
        </button>
        <span className="cam-chip">{t({ ko: '라이브', zh: '原況' })}</span>
      </div>
      <div className="cam-view">
        {stream ? (
          <video ref={video} autoPlay playsInline muted style={{ transform: facing === 'user' ? 'scaleX(-1)' : undefined }} />
        ) : (
          <div className="cam-fake">
            <span>{denied ? t({ ko: '카메라 접근이 허용되지 않았어요. 가상 화면으로 촬영돼요.', zh: '未允許使用相機，將以模擬畫面拍攝。' }) : ''}</span>
          </div>
        )}
        <div className="cam-grid" />
        {flash && <div className="cam-flash" />}
        <span className="cam-zoom">
          <i>.5</i>
          <i className="on">1×</i>
          <i>2</i>
        </span>
      </div>
      <div className="cam-modes">
        <div style={{ transform: `translateX(${(3 - mode) * 74}px)` }}>
          {MODES.map((m, i) => (
            <button key={i} className={i === mode ? 'on' : ''} onClick={() => setMode(i)}>
              {t(m)}
            </button>
          ))}
        </div>
      </div>
      <div className="cam-bottom">
        <button className="cam-thumb" onClick={() => setScreen({ kind: 'app', app: 'photos' })} aria-label="photos">
          {last ? <img src={last.src} alt="" /> : <span />}
        </button>
        <button className="cam-shutter" onClick={shoot} aria-label="shutter">
          <span />
        </button>
        <button className="cam-flip" onClick={() => setFacing((f) => (f === 'user' ? 'environment' : 'user'))} aria-label="flip">
          <G n="flip" size={26} />
        </button>
      </div>
    </div>
  )
}

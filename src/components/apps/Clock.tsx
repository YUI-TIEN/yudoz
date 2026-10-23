import { useEffect, useRef, useState } from 'react'
import { useLang, type L } from '../../i18n'
import { useStory } from '../../story/engine'
import { Page, TabBar, Toggle } from '../common'
import { startRing, stopRing } from '../../sound'
import { pad } from '../../time'

const TABS = [
  { id: 'world', label: { ko: '세계 시계', zh: '世界時鐘' }, icon: 'globe' },
  { id: 'alarm', label: { ko: '알람', zh: '鬧鐘' }, icon: 'alarm' },
  { id: 'stopwatch', label: { ko: '스톱워치', zh: '碼錶' }, icon: 'stopwatch' },
  { id: 'timer', label: { ko: '타이머', zh: '計時器' }, icon: 'timer' },
]

const CITIES: { name: L; off: number }[] = [
  { name: { ko: '서울', zh: '首爾' }, off: 9 },
  { name: { ko: '타이베이', zh: '台北' }, off: 8 },
  { name: { ko: '도쿄', zh: '東京' }, off: 9 },
  { name: { ko: '로스앤젤레스', zh: '洛杉磯' }, off: -8 },
]

export function ClockApp() {
  const [tab, setTab] = useState('alarm')
  const bar = <TabBar tabs={TABS} value={tab} onChange={setTab} tint="#ff9f0a" dark />
  return (
    <>
      {tab === 'world' && <World bottom={bar} />}
      {tab === 'alarm' && <Alarms bottom={bar} />}
      {tab === 'stopwatch' && <Stopwatch bottom={bar} />}
      {tab === 'timer' && <Timer bottom={bar} />}
    </>
  )
}

function World({ bottom }: { bottom: React.ReactNode }) {
  const { clock } = useStory()
  const { t } = useLang()
  const base = new Date(clock).getTime()
  return (
    <Page title={{ ko: '세계 시계', zh: '世界時鐘' }} large dark bg="#000" tint="#ff9f0a" bottom={bottom} right={<span className="nav-text">＋</span>}>
      {CITIES.map((c) => {
        const d = new Date(base + c.off * 3600_000)
        const diff = c.off - 9
        return (
          <div key={t(c.name)} className="clk-row">
            <span>
              <small>
                {diff === 0 ? t({ ko: '오늘, +0시간', zh: '今天，+0 小時' }) : t({ ko: `${diff > 0 ? '+' : ''}${diff}시간`, zh: `${diff > 0 ? '+' : ''}${diff} 小時` })}
              </small>
              <b>{t(c.name)}</b>
            </span>
            <em>
              {pad(d.getUTCHours())}:{pad(d.getUTCMinutes())}
            </em>
          </div>
        )
      })}
    </Page>
  )
}

function Alarms({ bottom }: { bottom: React.ReactNode }) {
  const { story } = useStory()
  const { t } = useLang()
  const [on, setOn] = useState(() => story.alarms.map((a) => a.on))
  const sorted = story.alarms.map((a, i) => ({ a, i })).sort((x, y) => x.a.time.localeCompare(y.a.time))
  return (
    <Page title={{ ko: '알람', zh: '鬧鐘' }} large dark bg="#000" tint="#ff9f0a" bottom={bottom} right={<span className="nav-text">＋</span>}>
      <div className="clk-sleep">{t({ ko: '수면 | 기상', zh: '睡眠｜起床' })}</div>
      <div className="clk-sub">{t({ ko: '기타', zh: '其他' })}</div>
      {sorted.map(({ a, i }) => {
        const [h, m] = a.time.split(':').map(Number)
        const am = h < 12
        return (
          <div key={i} className={`clk-alarm ${on[i] ? '' : 'off'}`}>
            <span>
              <b>
                <small>{am ? t({ ko: '오전', zh: '上午' }) : t({ ko: '오후', zh: '下午' })}</small>
                {h % 12 === 0 ? 12 : h % 12}:{pad(m)}
              </b>
              <small>{t(a.label)}</small>
            </span>
            <Toggle on={on[i]} onChange={(v) => setOn((o) => o.map((x, j) => (j === i ? v : x)))} />
          </div>
        )
      })}
    </Page>
  )
}

function fmt(ms: number) {
  const cs = Math.floor(ms / 10) % 100
  const s = Math.floor(ms / 1000) % 60
  const m = Math.floor(ms / 60000)
  return `${pad(m)}:${pad(s)},${pad(cs)}`
}

function Stopwatch({ bottom }: { bottom: React.ReactNode }) {
  const { t } = useLang()
  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState<number[]>([])
  const start = useRef(0)
  useEffect(() => {
    if (!running) return
    start.current = performance.now() - elapsed
    let raf = 0
    const loop = () => {
      setElapsed(performance.now() - start.current)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])
  return (
    <div className="clk-dark">
      <div className="clk-big">{fmt(elapsed)}</div>
      <div className="clk-btns">
        <button className="gray" onClick={() => (running ? setLaps((l) => [elapsed, ...l]) : (setElapsed(0), setLaps([])))}>
          {running ? t({ ko: '랩', zh: '計圈' }) : t({ ko: '재설정', zh: '重置' })}
        </button>
        <button className={running ? 'red' : 'green'} onClick={() => setRunning((r) => !r)}>
          {running ? t({ ko: '중단', zh: '停止' }) : t({ ko: '시작', zh: '開始' })}
        </button>
      </div>
      <div className="clk-laps">
        {laps.map((l, i) => (
          <div key={i}>
            <span>{t({ ko: `랩 ${laps.length - i}`, zh: `第 ${laps.length - i} 圈` })}</span>
            <span>{fmt(l - (laps[i + 1] ?? 0))}</span>
          </div>
        ))}
      </div>
      {bottom}
    </div>
  )
}

function Timer({ bottom }: { bottom: React.ReactNode }) {
  const { t } = useLang()
  const [total, setTotal] = useState(180)
  const [left, setLeft] = useState<number | null>(null)
  const [running, setRunning] = useState(false)
  const [ringing, setRinging] = useState(false)
  useEffect(() => {
    if (!running || left === null) return
    if (left <= 0) {
      setRunning(false)
      setRinging(true)
      startRing()
      return
    }
    const id = window.setTimeout(() => setLeft((l) => (l ?? 0) - 1), 1000)
    return () => window.clearTimeout(id)
  }, [running, left])
  useEffect(() => () => stopRing(), [])
  const shown = left ?? total
  return (
    <div className="clk-dark">
      {left === null ? (
        <div className="clk-pick">
          {[60, 180, 300, 600].map((s) => (
            <button key={s} className={total === s ? 'on' : ''} onClick={() => setTotal(s)}>
              {s / 60}
              {t({ ko: '분', zh: '分' })}
            </button>
          ))}
        </div>
      ) : (
        <div className="clk-ring">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" stroke="#333" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="46" stroke="#ff9f0a" strokeWidth="3" fill="none" strokeDasharray={289} strokeDashoffset={289 * (1 - shown / total)} transform="rotate(-90 50 50)" strokeLinecap="round" />
          </svg>
          <b>
            {pad(Math.floor(shown / 60))}:{pad(shown % 60)}
          </b>
        </div>
      )}
      <div className="clk-btns">
        <button
          className="gray"
          onClick={() => {
            setLeft(null)
            setRunning(false)
            setRinging(false)
            stopRing()
          }}
        >
          {t({ ko: '취소', zh: '取消' })}
        </button>
        <button
          className={running ? 'orange' : 'green'}
          onClick={() => {
            if (ringing) return
            if (left === null) setLeft(total)
            setRunning((r) => !r)
          }}
        >
          {running ? t({ ko: '일시 정지', zh: '暫停' }) : left === null ? t({ ko: '시작', zh: '開始' }) : t({ ko: '재개', zh: '繼續' })}
        </button>
      </div>
      {ringing && (
        <button
          className="clk-done"
          onClick={() => {
            stopRing()
            setRinging(false)
            setLeft(null)
          }}
        >
          {t({ ko: '타이머 종료 · 탭하여 끄기', zh: '計時結束・點一下關閉' })}
        </button>
      )}
      {bottom}
    </div>
  )
}

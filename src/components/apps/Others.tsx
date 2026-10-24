import { useEffect, useRef, useState } from 'react'
import { useLang, UI } from '../../i18n'
import { duration, fullDate, listDate, monthDay, ms, time, pad } from '../../time'
import { useStory } from '../../story/engine'
import { useBackHandler, useDevice } from '../../device'
import { Page } from '../common'
import { StatusBar, WD, kstParts } from '../system'
import { G } from '../icons'

/* ---------------- 메모 ---------------- */
export function NotesApp() {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const [inFolder, setInFolder] = useState(true)
  const [open, setOpen] = useState<string | null>(null)
  const { discover, found, haptic } = useDevice()
  const [pw, setPw] = useState('')
  const [pwErr, setPwErr] = useState(false)
  const note = story.notes.find((n) => n.id === open)
  const tint = '#e5a800'
  const locked = story.extra.lockedNote
  const unlocked = found.includes('locked-note')
  const [mine, setMine] = useMyNotes(story.id)
  const editing = mine.find((n) => n.id === open)

  if (editing)
    return (
      <Page
        title=""
        onBack={() => {
          // 빈 메모는 저장하지 않는다
          if (!editing.text.trim()) setMine(mine.filter((n) => n.id !== editing.id))
          setOpen(null)
        }}
        backLabel={UI.notes}
        tint={tint}
        bg="#fff"
        right={
          <>
            <button onClick={() => (setMine(mine.filter((n) => n.id !== editing.id)), setOpen(null))} aria-label="delete">
              <G n="trash" size={21} />
            </button>
            <button className="nav-text" onClick={() => (document.activeElement as HTMLElement | null)?.blur()}>
              {t({ ko: '완료', zh: '完成' })}
            </button>
          </>
        }
      >
        <div className="n-body">
          <small>{`${fullDate(new Date(editing.at).toISOString(), lang)} ${time(new Date(editing.at).toISOString(), lang)}`}</small>
          <textarea
            className="n-edit"
            autoFocus
            value={editing.text}
            placeholder={t({ ko: '메모', zh: '備忘錄' })}
            onChange={(e) => setMine(mine.map((n) => (n.id === editing.id ? { ...n, text: e.target.value, at: ms(clock) } : n)))}
          />
        </div>
      </Page>
    )

  if (open === 'locked')
    return (
      <Page title="" onBack={() => setOpen(null)} backLabel={UI.notes} tint={tint} bg="#fff">
        {unlocked ? (
          <div className="n-body">
            <small>{`${fullDate(locked.at, lang)} ${time(locked.at, lang)}`}</small>
            <pre>{t(locked.body)}</pre>
          </div>
        ) : (
          <form
            className="n-lock"
            onSubmit={(e) => {
              e.preventDefault()
              if (pw === locked.password) {
                discover('locked-note')
                setPwErr(false)
              } else {
                setPwErr(true)
                haptic(120)
              }
              setPw('')
            }}
          >
            <G n="lock" size={44} w={1.6} className="tint" />
            <h3>{t({ ko: '이 메모는 잠겨 있습니다.', zh: '此備忘錄已上鎖。' })}</h3>
            <p>{t({ ko: '메모 암호를 입력하여 이 메모를 보십시오.', zh: '輸入備忘錄密碼以檢視此備忘錄。' })}</p>
            <input className={pwErr ? 'err' : ''} type="password" inputMode="numeric" autoFocus value={pw} onChange={(e) => setPw(e.target.value)} placeholder={t({ ko: '암호', zh: '密碼' })} />
            <small>
              {t({ ko: '힌트: ', zh: '提示：' })}
              {t(locked.hint)}
            </small>
            {pwErr && <small className="red">{t({ ko: '암호가 올바르지 않습니다.', zh: '密碼不正確。' })}</small>}
            <button className="n-lock-btn">{t({ ko: '확인', zh: '確定' })}</button>
          </form>
        )}
      </Page>
    )

  if (note)
    return (
      <Page
        title=""
        onBack={() => setOpen(null)}
        backLabel={UI.notes}
        tint={tint}
        bg="#fff"
        right={
          <>
            <G n="share" size={21} />
            <G n="more" size={22} />
          </>
        }
        bottom={
          <div className="n-toolbar">
            <G n="check" size={22} />
            <G n="camera" size={22} />
            <G n="compose" size={22} />
          </div>
        }
      >
        <div className="n-body">
          <small>{`${fullDate(note.at, lang)} ${time(note.at, lang)}`}</small>
          <pre>{t(note.body)}</pre>
        </div>
      </Page>
    )

  if (!inFolder)
    return (
      <Page title={{ ko: '폴더', zh: '資料夾' }} large tint={tint} right={<span className="nav-text">{t({ ko: '편집', zh: '編輯' })}</span>}>
        <h3 className="group-h big">iCloud</h3>
        <div className="group-box">
          <button className="cell" onClick={() => setInFolder(true)}>
            <G n="folder" size={22} className="tint" />
            <span className="cell-main">{t(UI.notes)}</span>
            <span className="cell-detail">{story.notes.length}</span>
            <G n="chevron" size={15} w={2.6} className="cell-chev" />
          </button>
          <div className="cell">
            <G n="trash" size={22} className="tint" />
            <span className="cell-main">{t({ ko: '최근 삭제된 항목', zh: '最近刪除' })}</span>
            <span className="cell-detail">1</span>
          </div>
        </div>
      </Page>
    )

  const pinned = story.notes.filter((n) => n.pinned)
  const rest = story.notes.filter((n) => !n.pinned).sort((a, b) => ms(b.at) - ms(a.at))
  const row = (n: (typeof story.notes)[number]) => {
    const lines = t(n.body).split('\n').filter((l) => l.trim())
    return (
      <button key={n.id} className="n-row" onClick={() => setOpen(n.id)}>
        <b>{t(n.title)}</b>
        <small>
          <em>{listDate(n.at, clock, lang)}</em> {lines[1] ?? ''}
        </small>
      </button>
    )
  }
  return (
    <Page
      title={UI.notes}
      large
      onBack={() => setInFolder(false)}
      backLabel={{ ko: '폴더', zh: '資料夾' }}
      tint={tint}
      search={UI.search}
      right={<G n="more" size={22} />}
      bottom={
        <div className="n-toolbar">
          <span />
          <small>{t({ ko: `메모 ${story.notes.length + 1 + mine.length}개`, zh: `${story.notes.length + 1 + mine.length} 則備忘錄` })}</small>
          <button
            aria-label="new note"
            onClick={() => {
              const id = `my-${Date.now()}`
              setMine([{ id, text: '', at: ms(clock) }, ...mine])
              setOpen(id)
            }}
          >
            <G n="compose" size={22} />
          </button>
        </div>
      }
    >
      {pinned.length > 0 && (
        <>
          <h3 className="group-h big">
            <G n="pin" size={14} /> {t({ ko: '고정됨', zh: '已釘選' })}
          </h3>
          <div className="group-box">
            {pinned.map(row)}
            <button className="n-row" onClick={() => setOpen('locked')}>
              <b>{unlocked ? t(locked.title) : t({ ko: '🔒 잠김', zh: '🔒 已上鎖' })}</b>
              <small>
                <em>{listDate(locked.at, clock, lang)}</em> {t({ ko: '잠김', zh: '已上鎖' })}
              </small>
            </button>
          </div>
        </>
      )}
      {mine.length > 0 && (
        <>
          <h3 className="group-h big">{t(UI.today)}</h3>
          <div className="group-box">
            {mine.map((n) => {
              const lines = n.text.split('\n').filter((l) => l.trim())
              return (
                <button key={n.id} className="n-row" onClick={() => setOpen(n.id)}>
                  <b>{lines[0] ?? t({ ko: '새로운 메모', zh: '新備忘錄' })}</b>
                  <small>
                    <em>{time(new Date(n.at).toISOString(), lang)}</em> {lines[1] ?? t({ ko: '추가 텍스트 없음', zh: '沒有其他文字' })}
                  </small>
                </button>
              )
            })}
          </div>
        </>
      )}
      <h3 className="group-h big">{t({ ko: '이전 30일', zh: '過去 30 天' })}</h3>
      <div className="group-box">{rest.map(row)}</div>
    </Page>
  )
}

type MyNote = { id: string; text: string; at: number }
/** 사용자가 직접 쓴 메모 (브라우저에 저장) */
function useMyNotes(storyId: string): [MyNote[], (n: MyNote[]) => void] {
  const key = `yudoz-mynotes-${storyId}`
  const [list, setList] = useState<MyNote[]>(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key) ?? '[]') as MyNote[]
    } catch {
      return []
    }
  })
  const save = (n: MyNote[]) => {
    setList(n)
    try {
      window.localStorage.setItem(key, JSON.stringify(n))
    } catch {
      // 무시
    }
  }
  return [list, save]
}

/* ---------------- 캘린더 ---------------- */
export function CalendarApp() {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const now = kstParts(clock)
  const [ym, setYm] = useState({ y: now.y, m: now.m })
  const [sel, setSel] = useState(now.d)
  const first = new Date(Date.UTC(ym.y, ym.m - 1, 1)).getUTCDay()
  const days = new Date(Date.UTC(ym.y, ym.m, 0)).getUTCDate()
  const key = (d: number) => `${ym.y}-${pad(ym.m)}-${pad(d)}`
  const events = story.calendar.filter((e) => e.date === key(sel))
  const shift = (n: number) => {
    const d = new Date(Date.UTC(ym.y, ym.m - 1 + n, 1))
    setYm({ y: d.getUTCFullYear(), m: d.getUTCMonth() + 1 })
    setSel(1)
  }
  const isToday = (d: number) => ym.y === now.y && ym.m === now.m && d === now.d
  const drag = useRef<number | null>(null)
  return (
    <Page
      title={lang === 'ko' ? `${ym.m}월` : `${ym.m}月`}
      large
      tint="#ff3b30"
      bg="#fff"
      right={
        <>
          <G n="search" size={21} />
          <G n="plus" size={23} />
        </>
      }
      bottom={
        <div className="cal-toolbar">
          <button
            onClick={() => {
              setYm({ y: now.y, m: now.m })
              setSel(now.d)
            }}
          >
            {t(UI.today)}
          </button>
          <span>{t({ ko: '캘린더', zh: '行事曆' })}</span>
          <span>{t({ ko: '받은 편지함', zh: '收件匣' })}</span>
        </div>
      }
    >
      <div className="cal-year">{lang === 'ko' ? `${ym.y}년` : `${ym.y}年`}</div>
      <div className="cal-wd">
        {WD[lang].map((w, i) => (
          <small key={w} className={i === 0 || i === 6 ? 'weekend' : ''}>
            {w}
          </small>
        ))}
      </div>
      <div
        className="cal-month"
        onPointerDown={(e) => (drag.current = e.clientX)}
        onPointerUp={(e) => {
          if (drag.current === null) return
          const dx = e.clientX - drag.current
          drag.current = null
          if (dx < -50) shift(1)
          else if (dx > 50) shift(-1)
        }}
      >
        {Array.from({ length: first }).map((_, i) => (
          <span key={`e${i}`} />
        ))}
        {Array.from({ length: days }).map((_, i) => {
          const d = i + 1
          const evs = story.calendar.filter((e) => e.date === key(d))
          const wd = (first + i) % 7
          return (
            <button key={d} className={`${isToday(d) ? 'today' : ''} ${d === sel ? 'sel' : ''} ${wd === 0 || wd === 6 ? 'weekend' : ''}`} onClick={() => setSel(d)}>
              <span>{d}</span>
              <i>
                {evs.slice(0, 3).map((e, j) => (
                  <em key={j} style={{ background: e.color }} />
                ))}
              </i>
            </button>
          )
        })}
      </div>
      <div className="cal-day-title">{lang === 'ko' ? `${ym.m}월 ${sel}일 ${WD.ko[(first + sel - 1) % 7]}요일` : `${ym.m}月${sel}日 星期${WD.zh[(first + sel - 1) % 7]}`}</div>
      <div className="cal-events">
        {events.length === 0 && <p className="muted center">{t({ ko: '이벤트 없음', zh: '沒有行程' })}</p>}
        {events.map((e, i) => (
          <div key={i} className="cal-ev">
            <i style={{ background: e.color }} />
            <span>
              <b>{t(e.title)}</b>
              <small>{e.time ?? t(UI.allDay)}</small>
            </span>
          </div>
        ))}
      </div>
    </Page>
  )
}

/* ---------------- 음성 메모 ---------------- */
export function VoiceApp() {
  const { story } = useStory()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<string | null>(story.voice[0]?.id ?? null)
  const [pos, setPos] = useState(0)
  const [playing, setPlaying] = useState(false)
  const memo = story.voice.find((v) => v.id === open)
  const [recs, setRecs] = useState<Rec[]>(() => [...recStore])
  useEffect(() => {
    setPos(0)
    setPlaying(false)
  }, [open])
  useEffect(() => {
    if (!playing || !memo) return
    if (pos >= memo.seconds) {
      setPlaying(false)
      return
    }
    const id = window.setTimeout(() => setPos((p) => p + 0.25), 250)
    return () => window.clearTimeout(id)
  }, [playing, pos, memo])
  const words = memo ? t(memo.transcript).split(' ') : []
  const shownWords = memo ? Math.ceil((pos / memo.seconds) * words.length) : 0
  return (
    <Page title={{ ko: '모든 녹음', zh: '所有錄音' }} large dark bg="#000" tint="#0a84ff" right={<span className="nav-text">{t({ ko: '편집', zh: '編輯' })}</span>}>
      {story.voice.map((v) => (
        <div key={v.id} className={`vm ${open === v.id ? 'open' : ''}`}>
          <button className="vm-head" onClick={() => setOpen(open === v.id ? null : v.id)}>
            <b>{t(v.title)}</b>
            <small>
              <span>{monthDay(v.at, lang)}</span>
              <span>{duration(v.seconds, lang)}</span>
            </small>
          </button>
          {open === v.id && memo && (
            <div className="vm-body">
              <div className="vm-wave">
                {Array.from({ length: 60 }).map((_, i) => (
                  <i key={i} className={i / 60 <= pos / memo.seconds ? 'past' : ''} style={{ height: `${18 + ((i * 53) % 78)}%` }} />
                ))}
                <span className="vm-head-line" style={{ left: `${(pos / memo.seconds) * 100}%` }} />
              </div>
              <div className="vm-time">
                <small>
                  {pad(Math.floor(pos / 60))}:{pad(Math.floor(pos % 60))}
                </small>
                <small>
                  -{pad(Math.floor((memo.seconds - pos) / 60))}:{pad(Math.ceil((memo.seconds - pos) % 60))}
                </small>
              </div>
              <div className="vm-ctrl">
                <button onClick={() => setPos((p) => Math.max(0, p - 15))} aria-label="back 15">
                  <G n="rewind" size={26} />
                </button>
                <button className="vm-play" onClick={() => setPlaying((p) => !p)} aria-label="play">
                  <G n={playing ? 'pause' : 'play'} size={34} />
                </button>
                <button onClick={() => setPos((p) => Math.min(memo.seconds, p + 15))} aria-label="forward 15">
                  <G n="forward" size={26} />
                </button>
              </div>
              <div className="vm-tr">
                <small>{t({ ko: '텍스트 변환', zh: '轉錄文字' })}</small>
                <p>
                  <span>{words.slice(0, shownWords).join(' ')}</span> <span className="dim">{words.slice(shownWords).join(' ')}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
      {recs.map((r) => (
        <div key={r.id} className={`vm ${open === r.id ? 'open' : ''}`}>
          <button className="vm-head" onClick={() => setOpen(open === r.id ? null : r.id)}>
            <b>{t({ ko: `새로운 녹음 ${r.n}`, zh: `新錄音 ${r.n}` })}</b>
            <small>
              <span>{t(UI.today)}</span>
              <span>{duration(r.seconds, lang)}</span>
            </small>
          </button>
          {open === r.id && (
            <div className="vm-body">
              {r.url ? <audio className="vm-audio" src={r.url} controls /> : <p className="muted">{t({ ko: '마이크 권한이 없어 소리 없이 저장됐어요.', zh: '沒有麥克風權限，已存成無聲檔。' })}</p>}
            </div>
          )}
        </div>
      ))}
      <Recorder
        onSaved={(r) => {
          recStore.push(r)
          setRecs([...recStore])
          setOpen(r.id)
        }}
      />
    </Page>
  )
}

type Rec = { id: string; n: number; url: string | null; seconds: number }
/** 앱을 닫았다 열어도 이번 방문 동안은 녹음이 남도록 모듈 단위로 보관 */
const recStore: Rec[] = []

function Recorder({ onSaved }: { onSaved: (r: Rec) => void }) {
  const { t } = useLang()
  const [on, setOn] = useState(false)
  const [sec, setSec] = useState(0)
  const [levels, setLevels] = useState<number[]>([])
  const rec = useRef<{ mr?: MediaRecorder; stream?: MediaStream; chunks: Blob[]; raf?: number; ctx?: AudioContext; start: number }>({ chunks: [], start: 0 })

  useEffect(() => {
    if (!on) return
    const id = window.setInterval(() => setSec(Math.floor((Date.now() - rec.current.start) / 1000)), 250)
    return () => window.clearInterval(id)
  }, [on])

  useEffect(() => () => stopAll(), [])

  const stopAll = () => {
    const r = rec.current
    if (r.raf) cancelAnimationFrame(r.raf)
    r.stream?.getTracks().forEach((tr) => tr.stop())
    void r.ctx?.close().catch(() => {})
  }

  const start = async () => {
    rec.current = { chunks: [], start: Date.now() }
    setSec(0)
    setLevels([])
    setOn(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream)
      mr.ondataavailable = (e) => rec.current.chunks.push(e.data)
      mr.start()
      const ctx = new AudioContext()
      const an = ctx.createAnalyser()
      an.fftSize = 256
      ctx.createMediaStreamSource(stream).connect(an)
      const buf = new Uint8Array(an.frequencyBinCount)
      const loop = () => {
        an.getByteTimeDomainData(buf)
        let peak = 0
        for (const v of buf) peak = Math.max(peak, Math.abs(v - 128))
        setLevels((l) => [...l.slice(-44), Math.min(1, peak / 64)])
        rec.current.raf = requestAnimationFrame(loop)
      }
      loop()
      Object.assign(rec.current, { mr, stream, ctx })
    } catch {
      // 권한이 없으면 가짜 파형으로만 녹음 흉내
      const fake = () => {
        setLevels((l) => [...l.slice(-44), 0.15 + Math.random() * 0.5])
        rec.current.raf = window.setTimeout(fake, 90) as unknown as number
      }
      fake()
    }
  }

  const stop = () => {
    const r = rec.current
    const seconds = Math.max(1, Math.round((Date.now() - r.start) / 1000))
    const n = recStore.length + 1
    const id = `rec-${Date.now()}`
    setOn(false)
    if (r.mr && r.mr.state !== 'inactive') {
      r.mr.onstop = () => {
        const url = URL.createObjectURL(new Blob(r.chunks, { type: r.mr?.mimeType || 'audio/webm' }))
        onSaved({ id, n, url, seconds })
      }
      r.mr.stop()
    } else {
      window.clearTimeout(r.raf)
      onSaved({ id, n, url: null, seconds })
    }
    stopAll()
  }

  return (
    <div className={`vm-recorder ${on ? 'on' : ''}`}>
      {on && (
        <>
          <b>{t({ ko: '새로운 녹음', zh: '新錄音' })}</b>
          <small>
            {pad(Math.floor(sec / 60))}:{pad(sec % 60)}
          </small>
          <div className="vm-live">
            {levels.map((v, i) => (
              <i key={i} style={{ height: `${8 + v * 92}%` }} />
            ))}
          </div>
        </>
      )}
      <button className="vm-rec" onClick={on ? stop : start} aria-label={on ? 'stop' : 'record'}>
        <span className={on ? 'stop' : ''} />
      </button>
    </div>
  )
}

/* ---------------- 검색 (네이버) ---------------- */
export function SearchApp() {
  const { story } = useStory()
  const { t } = useLang()
  const [q, setQ] = useState<string | null>(null)
  const [draft, setDraft] = useState('')
  const [focus, setFocus] = useState(false)
  useBackHandler(q !== null, () => setQ(null))
  const hit = q !== null ? story.searches.find((s) => t(s.q) === q || t(s.q).includes(q) || q.includes(t(s.q))) : null
  const go = (text: string) => {
    setQ(text)
    setDraft(text)
    setFocus(false)
  }
  return (
    <div className="nv">
      <StatusBar />
      <form
        className={`nv-bar ${q !== null || focus ? 'compact' : ''}`}
        onSubmit={(e) => {
          e.preventDefault()
          if (draft.trim()) go(draft.trim())
        }}
      >
        {q !== null && (
          <button type="button" className="nv-back" onClick={() => setQ(null)}>
            <G n="back" size={22} w={2.4} />
          </button>
        )}
        <span className="nv-n">N</span>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} onFocus={() => setFocus(true)} placeholder={t({ ko: '검색어를 입력해 주세요.', zh: '請輸入搜尋字詞。' })} />
        <button className="nv-go" aria-label={t(UI.search)}>
          <G n="search" size={20} w={2.6} />
        </button>
      </form>
      {q !== null ? (
        <div className="nv-results">
          <div className="nv-tabs">
            {[{ ko: '통합', zh: '綜合' }, { ko: '블로그', zh: '部落格' }, { ko: '카페', zh: '咖啡廳' }, { ko: '이미지', zh: '圖片' }, { ko: '지식iN', zh: '知識iN' }].map((x, i) => (
              <span key={i} className={i === 0 ? 'on' : ''}>
                {t(x)}
              </span>
            ))}
          </div>
          {hit ? (
            hit.result.map((r, i) => (
              <div key={i} className="nv-card">
                <small>
                  <span className="nv-src" /> blog.naver.com
                </small>
                <b>{t(r.title)}</b>
                <p>{t(r.body)}</p>
              </div>
            ))
          ) : (
            <div className="nv-card">
              <b>{t({ ko: `'${q}'에 대한 검색결과가 없습니다.`, zh: `找不到「${q}」的搜尋結果。` })}</b>
              <p>{t({ ko: '단어의 철자가 정확한지 확인해 보세요.', zh: '請確認拼字是否正確。' })}</p>
            </div>
          )}
          <p className="muted center">{t({ ko: '검색 결과는 가상의 내용입니다.', zh: '搜尋結果為虛構內容。' })}</p>
        </div>
      ) : (
        <div className="nv-home">
          {!focus && (
            <div className="nv-shortcuts">
              {['메일', '카페', '블로그', '쇼핑', '뉴스', '지도'].map((x, i) => (
                <span key={x}>
                  <i style={{ background: ['#03c75a', '#4fc76b', '#2db400', '#ff5a5a', '#3d7bf5', '#26b6c7'][i] }} />
                  {x}
                </span>
              ))}
            </div>
          )}
          <div className="nv-hist">
            <div className="nv-hist-h">
              <b>{t(UI.recentSearches)}</b>
              <small>{t({ ko: '전체삭제', zh: '全部刪除' })}</small>
            </div>
            {story.searches.map((s, i) => (
              <button key={i} onClick={() => go(t(s.q))}>
                <G n="clock" size={16} w={2} />
                <span>{t(s.q)}</span>
                <small>{'01.' + pad(20 + (i % 9))}</small>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

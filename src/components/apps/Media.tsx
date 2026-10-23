import { useEffect, useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { fullDate, listDate, ms, pad, time } from '../../time'
import { useStory } from '../../story/engine'
import type { Mail, Place } from '../../story/types'
import { useBackHandler, useDevice } from '../../device'
import { Page, PhotoTile, TabBar } from '../common'
import { StatusBar, useDrag } from '../system'
import { G } from '../icons'

const mmss = (s: number) => `${Math.floor(s / 60)}:${pad(Math.floor(s % 60))}`

/* =========================================================
   음악
   ========================================================= */
export function MusicApp() {
  const { story } = useStory()
  const { now, setNow } = useDevice()
  const { t } = useLang()
  const lists = story.extra.music
  const [tab, setTab] = useState('library')
  const [open, setOpen] = useState<string | null>(null)
  const [full, setFull] = useState(false)
  const pl = lists.find((p) => p.id === (open ?? ''))
  const cur = now ? lists.find((p) => p.id === now.playlist) : null
  const song = cur && now ? cur.songs[now.index] : null

  // 곡이 끝나면 다음 곡으로
  useEffect(() => {
    if (!now || !cur || !song) return
    if (now.pos >= song.dur) setNow({ ...now, index: (now.index + 1) % cur.songs.length, pos: 0 })
  }, [now, cur, song, setNow])

  const play = (playlist: string, index: number) => setNow({ playlist, index, playing: true, pos: 0 })
  const bar = (
    <TabBar
      tabs={[
        { id: 'listen', label: { ko: '지금 듣기', zh: '立即聆聽' }, icon: 'play' },
        { id: 'library', label: { ko: '보관함', zh: '資料庫' }, icon: 'album' },
        { id: 'search', label: UI.search, icon: 'search' },
      ]}
      value={tab}
      onChange={(v) => {
        setTab(v)
        setOpen(null)
      }}
      tint="#fa2d48"
    />
  )
  const mini = song && cur && (
    <button className="mu-mini" onClick={() => setFull(true)}>
      <span className="mu-mini-art">
        <PhotoTile emoji={cur.pic.emoji} tint={cur.pic.tint} />
      </span>
      <b>{song.title}</b>
      <span
        onClick={(e) => {
          e.stopPropagation()
          setNow({ ...now!, playing: !now!.playing })
        }}
      >
        <G n={now!.playing ? 'pause' : 'play'} size={24} />
      </span>
      <span
        onClick={(e) => {
          e.stopPropagation()
          setNow({ ...now!, index: (now!.index + 1) % cur.songs.length, pos: 0 })
        }}
      >
        <G n="forward" size={24} />
      </span>
    </button>
  )

  return (
    <>
      {pl ? (
        <Page title="" onBack={() => setOpen(null)} backLabel={{ ko: '보관함', zh: '資料庫' }} tint="#fa2d48" bg="#fff" bottom={bar}>
          <div className="mu-pl-head">
            <span className="mu-cover">
              <PhotoTile emoji={pl.pic.emoji} tint={pl.pic.tint} />
            </span>
            <h2>{t(pl.title)}</h2>
            <small>{t(pl.by)}</small>
            <div className="mu-pl-btns">
              <button onClick={() => play(pl.id, 0)}>
                <G n="play" size={18} /> {t({ ko: '재생', zh: '播放' })}
              </button>
              <button onClick={() => play(pl.id, Math.floor(Math.random() * pl.songs.length))}>
                <G n="shuffle" size={18} /> {t({ ko: '셔플', zh: '隨機播放' })}
              </button>
            </div>
          </div>
          <div className="mu-songs">
            {pl.songs.map((s, i) => {
              const playing = now?.playlist === pl.id && now.index === i
              return (
                <button key={i} className={`mu-song ${playing ? 'on' : ''}`} onClick={() => play(pl.id, i)}>
                  <span className="mu-idx">{playing ? <span className="mu-eq"><i /><i /><i /></span> : i + 1}</span>
                  <span>
                    <b>{s.title}</b>
                    <small>{s.artist}</small>
                  </span>
                  <small>{mmss(s.dur)}</small>
                </button>
              )
            })}
          </div>
          <div style={{ height: 70 }} />
        </Page>
      ) : tab === 'library' ? (
        <Page title={{ ko: '보관함', zh: '資料庫' }} large tint="#fa2d48" bg="#fff" bottom={bar}>
          <div className="group-box flat">
            {[
              { ko: '플레이리스트', zh: '播放列表' },
              { ko: '아티스트', zh: '藝人' },
              { ko: '앨범', zh: '專輯' },
              { ko: '노래', zh: '歌曲' },
            ].map((x, i) => (
              <div key={i} className="cell mu-cat">
                <span className="cell-main tint">{t(x)}</span>
                <G n="chevron" size={15} w={2.6} className="cell-chev" />
              </div>
            ))}
          </div>
          <h3 className="group-h big">{t({ ko: '최근 추가된 항목', zh: '最近加入' })}</h3>
          <div className="mu-grid">
            {lists.map((p) => (
              <button key={p.id} onClick={() => setOpen(p.id)}>
                <span className="mu-cover">
                  <PhotoTile emoji={p.pic.emoji} tint={p.pic.tint} />
                </span>
                <b>{t(p.title)}</b>
                <small>{t(p.by)}</small>
              </button>
            ))}
          </div>
          <div style={{ height: 70 }} />
        </Page>
      ) : tab === 'listen' ? (
        <Page title={{ ko: '지금 듣기', zh: '立即聆聽' }} large tint="#fa2d48" bg="#fff" bottom={bar}>
          <h3 className="group-h big">{t({ ko: '최근 재생한 항목', zh: '最近播放' })}</h3>
          <div className="mu-row">
            {lists.map((p) => (
              <button key={p.id} onClick={() => setOpen(p.id)}>
                <span className="mu-cover big">
                  <PhotoTile emoji={p.pic.emoji} tint={p.pic.tint} />
                </span>
                <b>{t(p.title)}</b>
              </button>
            ))}
          </div>
        </Page>
      ) : (
        <Page title={UI.search} large tint="#fa2d48" bg="#fff" bottom={bar} search={{ ko: '아티스트, 노래, 가사 등', zh: '藝人、歌曲、歌詞等' }}>
          <div className="mu-cats">
            {['K-Pop', 'Chill', 'Workout', 'Sleep'].map((c, i) => (
              <span key={c} style={{ background: ['#7e57c2', '#26a69a', '#ef5350', '#283593'][i] }}>
                {c}
              </span>
            ))}
          </div>
        </Page>
      )}
      {mini}
      {full && song && cur && now && (
        <div className="mu-full">
          <button className="mu-grab" onClick={() => setFull(false)} aria-label="close">
            <span />
          </button>
          <span className={`mu-art ${now.playing ? '' : 'paused'}`}>
            <PhotoTile emoji={cur.pic.emoji} tint={cur.pic.tint} />
          </span>
          <div className="mu-meta">
            <b>{song.title}</b>
            <small>{song.artist}</small>
          </div>
          <input type="range" className="mu-prog" min={0} max={song.dur} value={Math.min(now.pos, song.dur)} onChange={(e) => setNow({ ...now, pos: Number(e.target.value) })} />
          <div className="mu-times">
            <small>{mmss(now.pos)}</small>
            <small>-{mmss(Math.max(0, song.dur - now.pos))}</small>
          </div>
          <div className="mu-ctrl">
            <button onClick={() => setNow({ ...now, index: (now.index - 1 + cur.songs.length) % cur.songs.length, pos: 0 })} aria-label="prev">
              <G n="rewind" size={34} />
            </button>
            <button onClick={() => setNow({ ...now, playing: !now.playing })} aria-label="play">
              <G n={now.playing ? 'pause' : 'play'} size={46} />
            </button>
            <button onClick={() => setNow({ ...now, index: (now.index + 1) % cur.songs.length, pos: 0 })} aria-label="next">
              <G n="forward" size={34} />
            </button>
          </div>
          <p className="mu-note">{t({ ko: '※ 이 웹사이트에서는 실제 음원이 재생되지 않습니다.', zh: '※ 本網站不會播放實際音源。' })}</p>
        </div>
      )}
    </>
  )
}

/* =========================================================
   지도
   ========================================================= */
export function MapsApp() {
  const { story } = useStory()
  const { t } = useLang()
  const places = story.extra.places
  const home = places[0]
  const [sel, setSel] = useState<Place | null>(null)
  const [route, setRoute] = useState(false)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [drag, setDrag] = useState({ x: 0, y: 0 })
  const [sheetUp, setSheetUp] = useState(false)
  useBackHandler(!!sel, () => {
    setSel(null)
    setRoute(false)
  })
  const d = useDrag({
    onMove: (dx, dy) => setDrag({ x: dx, y: dy }),
    onEnd: (dx, dy) => {
      setPan((p) => ({ x: Math.max(-160, Math.min(160, p.x + dx)), y: Math.max(-200, Math.min(200, p.y + dy)) }))
      setDrag({ x: 0, y: 0 })
    },
  })
  const dist = sel ? Math.round(Math.hypot(sel.x - home.x, sel.y - home.y) * 22) : 0
  return (
    <div className="map">
      <div className="map-canvas" {...d} style={{ transform: `translate(${pan.x + drag.x}px, ${pan.y + drag.y}px)` }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="map-svg">
          <rect width="100" height="100" fill="#f1efe9" />
          <path d="M-5 58 Q30 50 55 62 T110 56" stroke="#a8d4f5" strokeWidth="7" fill="none" />
          <rect x="6" y="6" width="20" height="14" rx="2" fill="#cfe8c4" />
          <rect x="74" y="80" width="22" height="16" rx="2" fill="#cfe8c4" />
          {[18, 38, 62, 84].map((x) => (
            <line key={`v${x}`} x1={x} y1="-5" x2={x + 4} y2="105" stroke="#fff" strokeWidth="2.2" />
          ))}
          {[14, 34, 78, 92].map((y) => (
            <line key={`h${y}`} x1="-5" y1={y} x2="105" y2={y - 3} stroke="#fff" strokeWidth="2.2" />
          ))}
          <line x1="-5" y1="44" x2="105" y2="40" stroke="#fde68a" strokeWidth="3.6" />
          {route && sel && <path d={`M${home.x} ${home.y} L${home.x} ${sel.y} L${sel.x} ${sel.y}`} stroke="#0a84ff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />}
        </svg>
        {places.map((p) => (
          <button
            key={p.id}
            className={`map-pin ${sel?.id === p.id ? 'on' : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => {
              setSel(p)
              setRoute(false)
            }}
          >
            <span>
              <i>{p.emoji}</i>
            </span>
            <small>{t(p.name)}</small>
          </button>
        ))}
        <span className="map-me" style={{ left: `${home.x}%`, top: `${home.y + 4}%` }} />
      </div>
      <div className="map-top">
        <StatusBar />
      </div>
      <div className="map-tools">
        <span>
          <G n="globe" size={20} />
        </span>
        <button
          onClick={() => {
            setPan({ x: 0, y: 0 })
          }}
          aria-label="locate"
        >
          <G n="location" size={18} />
        </button>
      </div>
      <div className={`map-sheet ${sheetUp || sel ? 'up' : ''}`}>
        <button className="sheet-grab" onClick={() => setSheetUp((u) => !u)} aria-label="sheet" />
        {sel ? (
          <div className="map-card">
            <div className="map-card-head">
              <span>
                <b>{t(sel.name)}</b>
                <small>{t(sel.kind)}</small>
              </span>
              <button
                onClick={() => {
                  setSel(null)
                  setRoute(false)
                }}
                aria-label="close"
              >
                <G n="close" size={16} w={2.6} />
              </button>
            </div>
            <div className="map-card-btns">
              <button className="blue" onClick={() => setRoute(true)}>
                <G n="route" size={18} />
                {t({ ko: `도보 ${Math.max(3, Math.round(dist / 70))}분`, zh: `步行 ${Math.max(3, Math.round(dist / 70))} 分鐘` })}
              </button>
              <button>
                <G n="phone" size={18} />
                {t(UI.phone)}
              </button>
              <button>
                <G n="share" size={18} />
              </button>
            </div>
            <p className="map-note">📝 {t(sel.note)}</p>
            {route && <p className="map-route">{t({ ko: `숙소에서 ${dist}m · 경로를 표시했어요`, zh: `距離宿舍 ${dist} 公尺 · 已顯示路線` })}</p>}
          </div>
        ) : (
          <>
            <div className="searchfield">
              <G n="search" size={16} w={2.4} />
              <span>{t({ ko: '지도 검색', zh: '搜尋地圖' })}</span>
              <G n="mic" size={16} />
            </div>
            <h4 className="map-h4">{t({ ko: '즐겨찾기', zh: '常用' })}</h4>
            <div className="map-favs">
              {places.slice(0, 4).map((p) => (
                <button key={p.id} onClick={() => setSel(p)}>
                  <span>{p.emoji}</span>
                  <small>{t(p.name)}</small>
                </button>
              ))}
            </div>
            <h4 className="map-h4">{t({ ko: '최근 항목', zh: '最近' })}</h4>
            {places.map((p) => (
              <button key={p.id} className="map-row" onClick={() => setSel(p)}>
                <span>{p.emoji}</span>
                <span>
                  <b>{t(p.name)}</b>
                  <small>{t(p.note)}</small>
                </span>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

/* =========================================================
   메일
   ========================================================= */
export function MailApp() {
  const { story, clock } = useStory()
  const { discover } = useDevice()
  const { t, lang } = useLang()
  const [box, setBox] = useState<'inbox' | 'draft' | null>(null)
  const [open, setOpen] = useState<Mail | null>(null)
  const [read, setRead] = useState<string[]>([])
  const mails = story.extra.mails
  const inbox = mails.filter((m) => (m.box ?? 'inbox') === 'inbox').sort((a, b) => ms(b.at) - ms(a.at))
  const drafts = mails.filter((m) => m.box === 'draft')
  if (open)
    return (
      <Page title="" onBack={() => setOpen(null)} backLabel={box === 'draft' ? { ko: '임시 저장', zh: '草稿' } : { ko: '받은 편지함', zh: '收件匣' }} bg="#fff" right={<G n="trash" size={22} />}>
        <div className="mail-read">
          <h2>{t(open.subject)}</h2>
          <div className="mail-from">
            <span className="contact-avatar" style={{ width: 40, height: 40, fontSize: 17 }}>
              {[...open.from][0]}
            </span>
            <span>
              <b>{open.from}</b>
              <small>{t({ ko: '받는 사람: 나', zh: '收件人：我' })}</small>
            </span>
            <small>{`${fullDate(open.at, lang).split(' ').slice(1, 3).join(' ')} ${time(open.at, lang)}`}</small>
          </div>
          <pre>{t(open.body)}</pre>
        </div>
      </Page>
    )
  if (box) {
    const list = box === 'draft' ? drafts : inbox
    return (
      <Page title={box === 'draft' ? { ko: '임시 저장', zh: '草稿' } : { ko: '받은 편지함', zh: '收件匣' }} large onBack={() => setBox(null)} backLabel={{ ko: '메일상자', zh: '信箱' }} bg="#fff" search={UI.search}>
        {list.map((m) => {
          const unread = m.unread && !read.includes(m.id)
          return (
            <button
              key={m.id}
              className="mail-row"
              onClick={() => {
                setOpen(m)
                setRead((r) => [...r, m.id])
                if (m.box === 'draft') discover('draft')
              }}
            >
              <span className={`m-dot ${unread ? 'on' : ''}`} />
              <span className="mail-mid">
                <span className="m-top">
                  <b>{box === 'draft' ? <em className="red">{t({ ko: '임시 저장', zh: '草稿' })}</em> : m.from}</b>
                  <small>
                    {listDate(m.at, clock, lang)} <G n="chevron" size={12} w={2.6} />
                  </small>
                </span>
                <b className="mail-subj">{t(m.subject)}</b>
                <small className="clamp2">{t(m.body).replace(/\n/g, ' ')}</small>
              </span>
            </button>
          )
        })}
      </Page>
    )
  }
  return (
    <Page title={{ ko: '메일상자', zh: '信箱' }} large right={<span className="nav-text">{t({ ko: '편집', zh: '編輯' })}</span>}>
      <div className="group-box">
        <button className="cell" onClick={() => setBox('inbox')}>
          <G n="mail" size={22} className="tint" />
          <span className="cell-main">{t({ ko: '받은 편지함', zh: '收件匣' })}</span>
          <span className="cell-detail">{inbox.filter((m) => m.unread && !read.includes(m.id)).length || ''}</span>
          <G n="chevron" size={15} w={2.6} className="cell-chev" />
        </button>
        <button className="cell" onClick={() => setBox('draft')}>
          <G n="compose" size={22} className="tint" />
          <span className="cell-main">{t({ ko: '임시 저장', zh: '草稿' })}</span>
          <span className="cell-detail">{drafts.length}</span>
          <G n="chevron" size={15} w={2.6} className="cell-chev" />
        </button>
        <div className="cell">
          <G n="send" size={22} className="tint" />
          <span className="cell-main">{t({ ko: '보낸 편지함', zh: '寄件備份' })}</span>
        </div>
        <div className="cell">
          <G n="trash" size={22} className="tint" />
          <span className="cell-main">{t({ ko: '휴지통', zh: '垃圾桶' })}</span>
        </div>
      </div>
    </Page>
  )
}

/* =========================================================
   날씨
   ========================================================= */
export function WeatherApp() {
  const { story } = useStory()
  const { t } = useLang()
  const w = story.extra.weather
  const night = story.id === 'shinyu'
  const min = Math.min(...w.days.map((d) => d[2]))
  const max = Math.max(...w.days.map((d) => d[3]))
  return (
    <div className={`wx ${night ? 'night' : 'cloudy'}`}>
      <StatusBar dark />
      <div className="wx-scroll">
        <div className="wx-top">
          <h2>{t(w.city)}</h2>
          <b>{w.now}°</b>
          <span>{t(w.desc)}</span>
          <span>
            {t({ ko: '최고', zh: '高' })}:{w.hi}° {t({ ko: '최저', zh: '低' })}:{w.lo}°
          </span>
        </div>
        <div className="wx-card">
          <small>{t({ ko: '밤새 기온이 내려가겠습니다. 따뜻하게 입으세요.', zh: '夜間氣溫將下降，請注意保暖。' })}</small>
          <div className="wx-hours">
            {w.hours.map(([h, i, temp], idx) => (
              <span key={idx}>
                <small>{idx === 0 ? t(UI.now) : `${h}${t({ ko: '시', zh: '時' })}`}</small>
                <i>{i}</i>
                <b>{temp}°</b>
              </span>
            ))}
          </div>
        </div>
        <div className="wx-card">
          <small>📅 {t({ ko: '5일간의 일기예보', zh: '5 天天氣預報' })}</small>
          {w.days.map(([d, i, lo, hi], idx) => (
            <div key={idx} className="wx-day">
              <b>{t(d as L)}</b>
              <i>{i}</i>
              <small>{lo}°</small>
              <span className="wx-bar">
                <em style={{ left: `${((lo - min) / (max - min || 1)) * 100}%`, right: `${100 - ((hi - min) / (max - min || 1)) * 100}%` }} />
              </span>
              <b>{hi}°</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { fullDate, ms, time } from '../../time'
import { useStory } from '../../story/engine'
import { useBackHandler, useDevice } from '../../device'
import { Page, PhotoTile, TabBar } from '../common'
import { StatusBar, useDrag } from '../system'
import { G } from '../icons'

type Item = { id: string; at: string; caption: L; emoji: string; tint: string; src?: string }

const TABS = [
  { id: 'library', label: UI.library, icon: 'photo' },
  { id: 'foryou', label: { ko: 'For You', zh: '為你推薦' }, icon: 'heart' },
  { id: 'albums', label: { ko: '앨범', zh: '相簿' }, icon: 'album' },
  { id: 'search', label: UI.search, icon: 'search' },
]

export function PhotosApp() {
  const { story, clock } = useStory()
  const { shots } = useDevice()
  const { t, lang } = useLang()
  const [tab, setTab] = useState('library')
  const [open, setOpen] = useState<{ list: Item[]; i: number } | null>(null)
  const [favs, setFavs] = useState<string[]>([])
  const [album, setAlbum] = useState<'recent' | 'fav' | null>(null)

  const items: Item[] = [
    ...story.photos,
    ...shots.map((s) => ({ id: s.id, at: clock, caption: { ko: '방금 찍은 사진', zh: '剛拍的照片' }, emoji: '📷', tint: '#ccc', src: s.src })),
  ].sort((a, b) => ms(a.at) - ms(b.at))

  if (open) return <Viewer list={open.list} start={open.i} favs={favs} setFavs={setFavs} onClose={() => setOpen(null)} />

  const bar = <TabBar tabs={TABS} value={tab} onChange={(v) => { setTab(v); setAlbum(null) }} />
  const grid = (list: Item[]) => (
    <div className="ph-grid">
      {list.map((p, i) => (
        <button key={p.id} onClick={() => setOpen({ list, i })}>
          <PhotoTile src={p.src} emoji={p.emoji} tint={p.tint} label={t(p.caption)} />
          {favs.includes(p.id) && <G n="heart" size={14} className="ph-fav" />}
        </button>
      ))}
    </div>
  )

  if (album) {
    const list = album === 'fav' ? items.filter((p) => favs.includes(p.id)) : items
    return (
      <Page title={album === 'fav' ? { ko: '즐겨찾는 항목', zh: '個人收藏' } : { ko: '최근 항목', zh: '最近項目' }} onBack={() => setAlbum(null)} backLabel={{ ko: '앨범', zh: '相簿' }} bg="#fff" bottom={bar}>
        {list.length ? grid(list) : <p className="empty-note">{t(UI.noItems)}</p>}
      </Page>
    )
  }

  if (tab === 'albums')
    return (
      <Page title={{ ko: '앨범', zh: '相簿' }} large bg="#fff" bottom={bar} right={<G n="plus" size={24} />}>
        <div className="ph-albums">
          {(['recent', 'fav'] as const).map((a) => {
            const list = a === 'fav' ? items.filter((p) => favs.includes(p.id)) : items
            const cover = list[list.length - 1]
            return (
              <button key={a} onClick={() => setAlbum(a)}>
                <span className="ph-cover">{cover ? <PhotoTile src={cover.src} emoji={cover.emoji} tint={cover.tint} /> : <span className="ph-empty" />}</span>
                <b>{a === 'fav' ? t({ ko: '즐겨찾는 항목', zh: '個人收藏' }) : t({ ko: '최근 항목', zh: '最近項目' })}</b>
                <small>{list.length}</small>
              </button>
            )
          })}
        </div>
      </Page>
    )

  if (tab === 'foryou') {
    const pick = items[items.length - 1]
    return (
      <Page title={{ ko: 'For You', zh: '為你推薦' }} large bg="#fff" bottom={bar}>
        <div className="ph-memory" onClick={() => setOpen({ list: items, i: items.length - 1 })}>
          <PhotoTile src={pick.src} emoji={pick.emoji} tint={pick.tint} />
          <span>
            <b>{t({ ko: '추억', zh: '回憶' })}</b>
            <small>{fullDate(pick.at, lang)}</small>
          </span>
        </div>
      </Page>
    )
  }

  if (tab === 'search')
    return (
      <Page title={UI.search} large bg="#fff" bottom={bar} search={{ ko: '사진, 사람, 장소…', zh: '照片、人物、地點…' }}>
        <div className="ph-tags">
          {items.map((p) => (
            <button key={p.id} onClick={() => setOpen({ list: items, i: items.indexOf(p) })}>
              {p.emoji} {t(p.caption)}
            </button>
          ))}
        </div>
      </Page>
    )

  const first = items[0]
  const last = items[items.length - 1]
  return (
    <div className="ph-lib">
      <div className="ph-lib-top">
        <StatusBar />
        <div className="ph-lib-head">
          <span>
            <b>{t(UI.library)}</b>
            <small>{first && last ? `${fullDate(first.at, lang).split(' ').slice(0, 2).join(' ')} – ${fullDate(last.at, lang).split(' ').slice(0, 3).join(' ')}` : ''}</small>
          </span>
          <span className="ph-pill">{t({ ko: '선택', zh: '選取' })}</span>
        </div>
      </div>
      <div className="ph-lib-body">
        {grid(items)}
        <p className="ph-count">{t({ ko: `사진 ${items.length}장`, zh: `${items.length} 張照片` })}</p>
      </div>
      <div className="ph-seg">
        <span>{t({ ko: '년', zh: '年' })}</span>
        <span>{t({ ko: '월', zh: '月' })}</span>
        <span className="on">{t({ ko: '모든 사진', zh: '所有照片' })}</span>
      </div>
      {bar}
    </div>
  )
}

function Viewer({ list, start, favs, setFavs, onClose }: { list: Item[]; start: number; favs: string[]; setFavs: (f: string[]) => void; onClose: () => void }) {
  const { t, lang } = useLang()
  const [i, setI] = useState(start)
  const [dx, setDx] = useState(0)
  const [chrome, setChrome] = useState(true)
  const [info, setInfo] = useState(false)
  useBackHandler(true, onClose)
  const p = list[i]
  const drag = useDrag({
    onMove: (x) => setDx(x),
    onEnd: (x, y) => {
      setDx(0)
      if (y > 120) return onClose()
      if (x < -60 && i < list.length - 1) setI(i + 1)
      else if (x > 60 && i > 0) setI(i - 1)
      else if (Math.abs(x) < 6 && Math.abs(y) < 6) setChrome((c) => !c)
    },
  })
  const fav = favs.includes(p.id)
  return (
    <div className={`ph-viewer ${chrome ? '' : 'bare'}`}>
      <div className="ph-v-top">
        <StatusBar />
        <div className="ph-v-nav">
          <button onClick={onClose} className="nav-back">
            <G n="back" size={22} w={2.6} />
          </button>
          <span>
            <b>{fullDate(p.at, lang).split(' ').slice(1, 3).join(' ')}</b>
            <small>{time(p.at, lang)}</small>
          </span>
          <span className="nav-text">{t({ ko: '편집', zh: '編輯' })}</span>
        </div>
      </div>
      <div className="ph-v-stage" {...drag}>
        <div className="ph-v-track" style={{ transform: `translateX(calc(${-i * 100}% + ${dx}px))`, transition: dx ? 'none' : undefined }}>
          {list.map((it) => (
            <div key={it.id} className="ph-v-slide">
              <PhotoTile src={it.src} emoji={it.emoji} tint={it.tint} label={t(it.caption)} />
            </div>
          ))}
        </div>
      </div>
      {info && (
        <div className="ph-info">
          <b>{t(p.caption)}</b>
          <small>
            {fullDate(p.at, lang)} · {time(p.at, lang)}
          </small>
        </div>
      )}
      <div className="ph-v-bar">
        <G n="share" size={24} />
        <button onClick={() => setFavs(fav ? favs.filter((x) => x !== p.id) : [...favs, p.id])} aria-label="favorite">
          <G n="heart" size={24} style={fav ? { fill: '#fff' } : undefined} />
        </button>
        <button onClick={() => setInfo((v) => !v)} aria-label="info">
          <G n="info" size={24} />
        </button>
        <G n="trash" size={24} />
      </div>
    </div>
  )
}

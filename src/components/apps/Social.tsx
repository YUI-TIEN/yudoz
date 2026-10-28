import { useEffect, useRef, useState } from 'react'
import { useLang, type L } from '../../i18n'
import { listDate, ms, sameDay, time } from '../../time'
import { useStory } from '../../story/engine'
import type { IgPost, Pic, Tweet } from '../../story/types'
import { useBackHandler, useDevice } from '../../device'
import { PEOPLE, pickReply } from '../../story/personas'
import { playIm } from '../../sound'

/** Instagram 아이디 → 연락처 id */
const IG_TO_CONTACT: Record<string, string> = {
  'hoon.wolf': 'dohoon',
  'yu.42_': 'shinyu',
  'kyungmin.p': 'kyungmin',
  'jihoon_06': 'jihoon',
  'young.jae': 'youngjae',
  'hanjin.zz': 'hanjin',
}
import { Avatar, PhotoTile } from '../common'
import { StatusBar } from '../system'
import { G } from '../icons'

function ago(iso: string, now: string, lang: 'ko' | 'zh') {
  const m = Math.max(1, Math.round((ms(now) - ms(iso)) / 60000))
  if (m < 60) return lang === 'ko' ? `${m}분` : `${m} 分鐘`
  const h = Math.round(m / 60)
  if (h < 24) return lang === 'ko' ? `${h}시간` : `${h} 小時`
  const d = Math.round(h / 24)
  if (d < 7) return lang === 'ko' ? `${d}일` : `${d} 天`
  return listDate(iso, now, lang)
}

const fmtNum = (n: number, lang: 'ko' | 'zh') => {
  if (n >= 10000) return lang === 'ko' ? `${(n / 10000).toFixed(1).replace(/\.0$/, '')}만` : `${(n / 10000).toFixed(1).replace(/\.0$/, '')}萬`
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}K`
  return String(n)
}

function Ring({ size = 64, seen, children }: { size?: number; seen?: boolean; children: React.ReactNode }) {
  return (
    <span className={`ig-ring ${seen ? 'seen' : ''}`} style={{ width: size + 8, height: size + 8 }}>
      <span>{children}</span>
    </span>
  )
}

/* =========================================================
   Instagram
   ========================================================= */
type IgTab = 'home' | 'search' | 'reels' | 'profile'
type Frame = Pic & { text?: L }

export function InstagramApp() {
  const { story } = useStory()
  const { t } = useLang()
  const ig = story.extra.instagram
  const [tab, setTab] = useState<IgTab>('home')
  const [viewer, setViewer] = useState<{ by: string; frames: Frame[] }[] | null>(null)
  const [viewerStart, setViewerStart] = useState(0)
  const [seen, setSeen] = useState<string[]>([])
  const [dm, setDm] = useState<string | null | 'list'>(null)
  const [user, setUser] = useState<string | null>(null)
  const [activity, setActivity] = useState(false)

  const openStories = (i: number) => {
    setViewer(ig.stories)
    setViewerStart(i)
  }

  if (dm) return <IgDms open={dm === 'list' ? null : dm} onClose={() => setDm(null)} onOpen={setDm} />
  if (activity) return <IgActivity onClose={() => setActivity(false)} />

  return (
    <div className="ig">
      <StatusBar />
      {user ? (
        <IgProfile handle={user} onBack={() => setUser(null)} onHighlight={(f) => setViewer([{ by: user, frames: f }])} />
      ) : tab === 'home' ? (
        <>
          <div className="ig-head">
            <span className="ig-logo">Instagram</span>
            <span>
              <button onClick={() => setActivity(true)} aria-label="activity">
                <G n="heart" size={25} w={1.9} />
              </button>
              <button onClick={() => setDm('list')} aria-label="direct" className="ig-dm-btn">
                <G n="bubble" size={25} w={1.9} />
                {ig.dms.some((d) => d.unread) && <i>{ig.dms.filter((d) => d.unread).length}</i>}
              </button>
            </span>
          </div>
          <div className="ig-scroll">
            <div className="ig-stories">
              <button className="ig-story" onClick={() => setTab('profile')}>
                <span className="ig-mine">
                  <Avatar size={64} radius={32} src={story.owner.avatar} />
                  <i>+</i>
                </span>
                <small>{ig.me}</small>
              </button>
              {ig.stories.map((s, i) => (
                <button
                  key={s.by}
                  className="ig-story"
                  onClick={() => {
                    openStories(i)
                    setSeen((x) => [...x, s.by])
                  }}
                >
                  <Ring seen={seen.includes(s.by)}>
                    <Avatar size={64} radius={32} src={ig.users[s.by]?.avatar} />
                  </Ring>
                  <small>{s.by}</small>
                </button>
              ))}
            </div>
            {[...ig.feed]
              .sort((a, b) => ms(b.at) - ms(a.at))
              .map((p) => (
                <IgPostView key={p.id} post={p} onUser={setUser} />
              ))}
          </div>
        </>
      ) : tab === 'search' ? (
        <IgExplore />
      ) : tab === 'reels' ? (
        <div className="ig-reels">
          <PhotoTile emoji="🎬" tint="#333" />
          <p>{t({ ko: '릴스를 불러올 수 없어요. 네트워크 연결을 확인하세요.', zh: '無法載入 Reels，請檢查網路連線。' })}</p>
        </div>
      ) : (
        <IgProfile handle={ig.me} onHighlight={(f) => setViewer([{ by: ig.me, frames: f }])} />
      )}
      <nav className="ig-tabs">
        {(['home', 'search', 'plus', 'reels', 'profile'] as const).map((id) => (
          <button
            key={id}
            className={tab === id && !user ? 'on' : ''}
            onClick={() => {
              if (id === 'plus') return
              setUser(null)
              setTab(id)
            }}
          >
            {id === 'profile' ? (
              <span className="ig-tab-me">
                <Avatar size={26} radius={13} src={story.owner.avatar} />
              </span>
            ) : (
              <G n={id === 'home' ? 'home' : id === 'search' ? 'search' : id === 'plus' ? 'plusSquare' : 'video'} size={26} w={tab === id ? 2.5 : 1.8} />
            )}
          </button>
        ))}
      </nav>
      {viewer && <StoryViewer groups={viewer} start={viewerStart} onClose={() => setViewer(null)} />}
    </div>
  )
}

function IgPostView({ post, onUser }: { post: IgPost; onUser: (h: string) => void }) {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const ig = story.extra.instagram
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [burst, setBurst] = useState(0)
  const [showAll, setShowAll] = useState(false)
  const lastTap = useRef(0)
  const u = ig.users[post.by]
  return (
    <article className="ig-post">
      <header>
        <button className="ig-post-who" onClick={() => onUser(post.by)}>
          <Ring size={32}>
            <Avatar size={32} radius={16} src={u?.avatar} />
          </Ring>
          <b>
            {post.by}
            {u?.verified && <i className="ig-check">✓</i>}
          </b>
        </button>
        <G n="more" size={20} />
      </header>
      <div
        className="ig-post-img"
        onClick={() => {
          const now = Date.now()
          if (now - lastTap.current < 320) {
            setLiked(true)
            setBurst((b) => b + 1)
          }
          lastTap.current = now
        }}
      >
        <PhotoTile src={post.pic.src} emoji={post.pic.emoji} tint={post.pic.tint} />
        {burst > 0 && (
          <span key={burst} className="ig-burst">
            <G n="heart" size={96} style={{ fill: '#fff' }} w={0} />
          </span>
        )}
      </div>
      <div className="ig-actions">
        <button className={liked ? 'liked' : ''} onClick={() => setLiked((l) => !l)} aria-label="like">
          <G n="heart" size={26} w={1.9} style={liked ? { fill: '#ff3040', color: '#ff3040' } : undefined} />
        </button>
        <button onClick={() => setShowAll(true)} aria-label="comment">
          <G n="bubble" size={25} w={1.9} />
        </button>
        <G n="send" size={25} w={1.9} />
        <button className="ig-save" onClick={() => setSaved((s) => !s)} aria-label="save">
          <G n="bookmark" size={25} w={1.9} style={saved ? { fill: 'currentColor' } : undefined} />
        </button>
      </div>
      <div className="ig-text">
        <b>{t({ ko: `좋아요 ${(post.likes + (liked ? 1 : 0)).toLocaleString()}개`, zh: `${(post.likes + (liked ? 1 : 0)).toLocaleString()} 個讚` })}</b>
        <p>
          <b>{post.by}</b> {t(post.caption)}
        </p>
        {post.comments.length > 0 &&
          (showAll ? (
            post.comments.map((c, i) => (
              <p key={i} className="ig-comment">
                <b>{c.by}</b> {t(c.text)}
              </p>
            ))
          ) : (
            <button className="ig-more" onClick={() => setShowAll(true)}>
              {t({ ko: `댓글 ${post.comments.length}개 모두 보기`, zh: `查看全部 ${post.comments.length} 則留言` })}
            </button>
          ))}
        <small>{ago(post.at, clock, lang)}</small>
      </div>
    </article>
  )
}

function StoryViewer({ groups, start, onClose }: { groups: { by: string; frames: Frame[] }[]; start: number; onClose: () => void }) {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const [g, setG] = useState(start)
  const [f, setF] = useState(0)
  const [paused, setPaused] = useState(false)
  useBackHandler(true, onClose)
  const group = groups[g]
  const frame = group?.frames[f]
  const next = () => {
    if (f < group.frames.length - 1) setF(f + 1)
    else if (g < groups.length - 1) {
      setG(g + 1)
      setF(0)
    } else onClose()
  }
  const prev = () => {
    if (f > 0) setF(f - 1)
    else if (g > 0) {
      setG(g - 1)
      setF(0)
    }
  }
  useEffect(() => {
    if (paused) return
    const id = window.setTimeout(next, 4200)
    return () => window.clearTimeout(id)
  })
  if (!frame) return null
  return (
    <div className="ig-sv" onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)}>
      <div className="ig-sv-img">
        <PhotoTile src={frame.src} emoji={frame.emoji} tint={frame.tint} />
        {frame.text && <p className="ig-sv-text">{t(frame.text)}</p>}
      </div>
      <div className="ig-sv-top">
        <div className="ig-sv-bars">
          {group.frames.map((_, i) => (
            <span key={i}>
              <i className={i < f ? 'full' : i === f ? (paused ? 'run paused' : 'run') : ''} key={`${g}-${f}-${i}`} />
            </span>
          ))}
        </div>
        <div className="ig-sv-who">
          <Avatar size={32} radius={16} src={story.extra.instagram.users[group.by]?.avatar} />
          <b>{group.by}</b>
          <small>{ago(clock, clock, lang)}</small>
          <button onClick={onClose} aria-label="close">
            <G n="close" size={26} w={2} />
          </button>
        </div>
      </div>
      <button className="ig-sv-prev" onClick={prev} aria-label="prev" />
      <button className="ig-sv-next" onClick={next} aria-label="next" />
      <div className="ig-sv-reply">
        <span>{t({ ko: '메시지 보내기', zh: '傳送訊息' })}</span>
        <G n="heart" size={26} w={1.8} />
        <G n="send" size={26} w={1.8} />
      </div>
    </div>
  )
}

function IgProfile({ handle, onBack, onHighlight }: { handle: string; onBack?: () => void; onHighlight: (f: Frame[]) => void }) {
  const { story } = useStory()
  const { t } = useLang()
  const ig = story.extra.instagram
  const u = ig.users[handle]
  const isMe = handle === ig.me
  const [following, setFollowing] = useState(true)
  const [openPost, setOpenPost] = useState<IgPost | null>(null)
  const [viewUser, setViewUser] = useState<string | null>(null)
  useBackHandler(!!onBack && !openPost, () => onBack?.())
  useBackHandler(!!openPost && !viewUser, () => setOpenPost(null))
  const posts = ig.feed.filter((p) => p.by === handle).sort((a, b) => ms(b.at) - ms(a.at))
  const grid: Pic[] = posts.map((p) => p.pic)
  if (viewUser && viewUser !== handle)
    return <IgProfile handle={viewUser} onBack={() => setViewUser(null)} onHighlight={onHighlight} />
  if (openPost)
    return (
      <div className="ig-scroll ig-post-page">
        <div className="ig-prof-top">
          <button onClick={() => setOpenPost(null)} aria-label="back">
            <G n="back" size={26} w={2.2} />
          </button>
          <b className="ig-post-page-title">
            <small>{handle}</small>
            {t({ ko: '게시물', zh: '貼文' })}
          </b>
          <span />
        </div>
        {posts.slice(posts.indexOf(openPost)).map((p) => (
          <IgPostView key={p.id} post={p} onUser={(h) => (h === handle ? setOpenPost(null) : setViewUser(h))} />
        ))}
      </div>
    )
  return (
    <div className="ig-scroll">
      <div className="ig-prof-top">
        {onBack ? (
          <button onClick={onBack} aria-label="back">
            <G n="back" size={26} w={2.2} />
          </button>
        ) : (
          <G n="lock" size={18} />
        )}
        <b>{handle}</b>
        <span>
          <G n="plusSquare" size={25} w={1.8} />
          <G n="menu" size={25} w={1.8} />
        </span>
      </div>
      <div className="ig-prof">
        <Ring size={82} seen>
          <Avatar size={82} radius={41} src={u?.avatar ?? (isMe ? story.owner.avatar : undefined)} />
        </Ring>
        <div className="ig-counts">
          <span>
            <b>{u?.posts ?? grid.length}</b>
            {t({ ko: '게시물', zh: '貼文' })}
          </span>
          <span>
            <b>{u?.followers}</b>
            {t({ ko: '팔로워', zh: '粉絲' })}
          </span>
          <span>
            <b>{u?.following}</b>
            {t({ ko: '팔로잉', zh: '追蹤中' })}
          </span>
        </div>
      </div>
      <div className="ig-bio">
        <b>{u ? t(u.name) : handle}</b>
        {u?.bio && <p>{t(u.bio)}</p>}
      </div>
      <div className="ig-prof-btns">
        {isMe ? (
          <>
            <button>{t({ ko: '프로필 편집', zh: '編輯個人檔案' })}</button>
            <button>{t({ ko: '프로필 공유', zh: '分享個人檔案' })}</button>
          </>
        ) : (
          <>
            <button className={following ? '' : 'blue'} onClick={() => setFollowing((f) => !f)}>
              {following ? t({ ko: '팔로잉 ⌄', zh: '追蹤中 ⌄' }) : t({ ko: '팔로우', zh: '追蹤' })}
            </button>
            <button>{t({ ko: '메시지', zh: '訊息' })}</button>
          </>
        )}
      </div>
      {isMe && (
        <div className="ig-highlights">
          {ig.highlights.map((h, i) => (
            <button key={i} onClick={() => onHighlight(h.frames)}>
              <span>
                <PhotoTile src={h.frames[0].src} emoji={h.frames[0].emoji} tint={h.frames[0].tint} />
              </span>
              <small>{t(h.title)}</small>
            </button>
          ))}
        </div>
      )}
      <div className="ig-prof-tabs">
        <span className="on">
          <G n="apps" size={22} />
        </span>
        <span>
          <G n="video" size={22} />
        </span>
        <span>
          <G n="person" size={22} />
        </span>
      </div>
      <div className="ig-grid">
        {grid.map((p, i) => (
          <button key={posts[i].id} className="ig-grid-item" onClick={() => setOpenPost(posts[i])} aria-label={`post ${i + 1}`}>
            <PhotoTile src={p.src} emoji={p.emoji} tint={p.tint} />
            {posts[i].comments.length > 0 && (
              <span className="ig-grid-badge">
                <G n="bubble" size={12} w={2} /> {posts[i].comments.length}
              </span>
            )}
          </button>
        ))}
        {grid.length === 0 && <p className="ig-grid-empty">{t({ ko: '게시물 없음', zh: '尚無貼文' })}</p>}
      </div>
    </div>
  )
}

function IgExplore() {
  const { story } = useStory()
  const { t } = useLang()
  const feed = [...story.extra.instagram.feed].sort((a, b) => b.likes - a.likes)
  const [open, setOpen] = useState<IgPost | null>(null)
  const [user, setUser] = useState<string | null>(null)
  useBackHandler(!!open && !user, () => setOpen(null))
  if (user) return <IgProfile handle={user} onBack={() => setUser(null)} onHighlight={() => {}} />
  if (open)
    return (
      <div className="ig-scroll ig-post-page">
        <div className="ig-prof-top">
          <button onClick={() => setOpen(null)} aria-label="back">
            <G n="back" size={26} w={2.2} />
          </button>
          <b className="ig-post-page-title">{t({ ko: '탐색 탭', zh: '探索' })}</b>
          <span />
        </div>
        <IgPostView post={open} onUser={setUser} />
      </div>
    )
  return (
    <>
      <div className="ig-search">
        <G n="search" size={17} />
        <span>{t({ ko: '검색', zh: '搜尋' })}</span>
      </div>
      <div className="ig-scroll">
        <div className="ig-grid explore">
          {feed.map((p) => (
            <button key={p.id} className="ig-grid-item" onClick={() => setOpen(p)}>
              <PhotoTile src={p.pic.src} emoji={p.pic.emoji} tint={p.pic.tint} />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

function IgActivity({ onClose }: { onClose: () => void }) {
  const { story } = useStory()
  const { t } = useLang()
  const ig = story.extra.instagram
  useBackHandler(true, onClose)
  const items = ig.feed.flatMap((p) => p.comments.filter((c) => c.by !== ig.me).map((c) => ({ by: c.by, text: c.text, pic: p.pic })))
  return (
    <div className="ig">
      <StatusBar />
      <div className="ig-sub-head">
        <button onClick={onClose} aria-label="back">
          <G n="back" size={26} w={2.2} />
        </button>
        <b>{t({ ko: '알림', zh: '通知' })}</b>
        <span />
      </div>
      <div className="ig-scroll">
        <h4 className="ig-h4">{t({ ko: '이번 주', zh: '本週' })}</h4>
        {items.map((it, i) => (
          <div key={i} className="ig-act">
            <Avatar size={44} radius={22} src={ig.users[it.by]?.avatar} />
            <p>
              <b>{it.by}</b>
              {t({ ko: '님이 댓글을 남겼습니다: ', zh: ' 留言：' })}
              {t(it.text)}
            </p>
            <span className="ig-act-pic">
              <PhotoTile src={it.pic.src} emoji={it.pic.emoji} tint={it.pic.tint} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function IgDms({ open, onOpen, onClose }: { open: string | null; onOpen: (h: string | 'list') => void; onClose: () => void }) {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const ig = story.extra.instagram
  const [sent, setSent] = useState<Record<string, { me: boolean; text: L }[]>>({})
  const [typingFor, setTypingFor] = useState<string | null>(null)
  const [draft, setDraft] = useState('')
  const count = useRef<Record<string, number>>({})
  const reply = (handle: string, text: string) => {
    const persona = PEOPLE[story.key ?? story.id]?.[IG_TO_CONTACT[handle] ?? '']
    if (!persona) return
    const n = count.current[handle] ?? 0
    count.current[handle] = n + 1
    const lines = pickReply(persona, text, n)
    window.setTimeout(() => setTypingFor(handle), 1200)
    lines.forEach((line, i) => {
      window.setTimeout(() => {
        setSent((s) => ({ ...s, [handle]: [...(s[handle] ?? []), { me: false, text: line }] }))
        playIm()
        if (i === lines.length - 1) setTypingFor(null)
      }, 2800 + i * 1800)
    })
  }
  useBackHandler(true, () => (open ? onOpen('list') : onClose()))
  const [readDm, setReadDm] = useState<string[]>([])
  const [showReq, setShowReq] = useState(false)
  const threadRef = useRef<HTMLDivElement>(null)
  const thread = ig.dms.find((d) => d.with === open)
  useEffect(() => {
    if (open) setReadDm((r) => (r.includes(open) ? r : [...r, open]))
    const el = threadRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [open, sent, typingFor])
  if (thread) {
    const mine = sent[thread.with] ?? []
    return (
      <div className="ig">
        <StatusBar />
        <div className="ig-sub-head">
          <button onClick={() => onOpen('list')} aria-label="back">
            <G n="back" size={26} w={2.2} />
          </button>
          <span className="ig-dm-who">
            <Avatar size={30} radius={15} src={ig.users[thread.with]?.avatar} />
            <b>{t(ig.users[thread.with]?.name ?? thread.with)}</b>
          </span>
          <span>
            <G n="phone" size={23} />
            <G n="video" size={25} />
          </span>
        </div>
        <div className="ig-thread" ref={threadRef}>
          <div className="ig-thread-intro">
            <Avatar size={90} radius={45} src={ig.users[thread.with]?.avatar} />
            <b>{t(ig.users[thread.with]?.name ?? thread.with)}</b>
            <small>{thread.with} · Instagram</small>
          </div>
          {thread.messages.map((m, i) => {
            const prev = thread.messages[i - 1]
            const gap = !prev || ms(m.at) - ms(prev.at) > 60 * 60 * 1000
            const next = thread.messages[i + 1]
            const tail = !next || next.from !== m.from || ms(next.at) - ms(m.at) > 60 * 60 * 1000
            return (
              <div key={i} className="ig-bub-wrap">
                {gap && <small className="ig-dm-time">{sameDay(m.at, clock) ? time(m.at, lang) : `${listDate(m.at, clock, lang)} ${time(m.at, lang)}`}</small>}
                <div className={`ig-bub ${m.from === ig.me ? 'me' : ''} ${tail ? 'tail' : ''}`}>{t(m.text)}</div>
              </div>
            )
          })}
          {mine.map((m, i) => (
            <div key={`s${i}`} className={`ig-bub fade-in ${m.me ? 'me' : ''}`}>
              {t(m.text)}
            </div>
          ))}
          {mine.length > 0 && mine[mine.length - 1].me && <small className="ig-seen">{typingFor ? t({ ko: '읽음', zh: '已讀' }) : t({ ko: '보냄', zh: '已傳送' })}</small>}
          {typingFor === thread.with && (
            <div className="ig-bub ig-typing">
              <i />
              <i />
              <i />
            </div>
          )}
        </div>
        <form
          className="ig-dm-input"
          onSubmit={(e) => {
            e.preventDefault()
            if (!draft.trim()) return
            const text = draft.trim()
            setSent((s) => ({ ...s, [thread.with]: [...(s[thread.with] ?? []), { me: true, text }] }))
            setDraft('')
            reply(thread.with, text)
          }}
        >
          <span className="ig-cam">
            <G n="camera" size={20} />
          </span>
          <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t({ ko: '메시지 보내기...', zh: '傳送訊息⋯' })} />
          {draft.trim() ? <button>{t({ ko: '보내기', zh: '傳送' })}</button> : <G n="mic" size={22} />}
        </form>
      </div>
    )
  }
  return (
    <div className="ig">
      <StatusBar />
      <div className="ig-sub-head">
        <button onClick={onClose} aria-label="back">
          <G n="back" size={26} w={2.2} />
        </button>
        <b>{ig.me}</b>
        <G n="compose" size={24} />
      </div>
      <div className="ig-search">
        <G n="search" size={17} />
        <span>{t({ ko: '검색', zh: '搜尋' })}</span>
      </div>
      <div className="ig-scroll">
        <div className="ig-dm-tabs">
          <button className={showReq ? '' : 'on'} onClick={() => setShowReq(false)}>
            {t({ ko: '메시지', zh: '訊息' })}
          </button>
          <button className={showReq ? 'on' : ''} onClick={() => setShowReq(true)}>
            {t({ ko: `요청 (${ig.dms.filter((d) => d.request).length})`, zh: `訊息請求（${ig.dms.filter((d) => d.request).length}）` })}
          </button>
        </div>
        {ig.dms
          .filter((d) => !!d.request === showReq)
          .sort((a, b) => ms(b.messages[b.messages.length - 1].at) - ms(a.messages[a.messages.length - 1].at))
          .map((d) => {
            const last = d.messages[d.messages.length - 1]
            const unread = d.unread && !readDm.includes(d.with)
            return (
              <button key={d.with} className={`ig-dm-row ${unread ? 'unread' : ''}`} onClick={() => onOpen(d.with)}>
                <Avatar size={56} radius={28} src={ig.users[d.with]?.avatar} />
                <span>
                  <b>{t(ig.users[d.with]?.name ?? d.with)}</b>
                  <small>
                    {last.from === ig.me ? t({ ko: '나: ', zh: '我：' }) : ''}
                    {t(last.text)} · {listDate(last.at, clock, lang)}
                  </small>
                </span>
                {unread ? <i className="ig-dm-dot" /> : <G n="camera" size={22} />}
              </button>
            )
          })}
      </div>
    </div>
  )
}

/* =========================================================
   X
   ========================================================= */
type XTab = 'home' | 'search' | 'bell' | 'mail'

export function XApp() {
  const { story, clock } = useStory()
  const { discover } = useDevice()
  const { t } = useLang()
  const x = story.extra.x
  const [me, setMe] = useState(x.mine[0])
  const [tab, setTab] = useState<XTab>('home')
  const [feed, setFeed] = useState<'for' | 'following'>('for')
  const [profile, setProfile] = useState<string | null>(null)
  const [switcher, setSwitcher] = useState(false)
  const [compose, setCompose] = useState(false)
  const [mine, setMine] = useState<Tweet[]>([])
  const [draft, setDraft] = useState('')
  useBackHandler(!!profile, () => setProfile(null))

  const switchTo = (h: string) => {
    setMe(h)
    setSwitcher(false)
    setProfile(h)
    if (h === x.mine[1]) discover('x-diary')
  }
  const timeline = [...x.timeline, ...mine.filter((m) => m.by === x.mine[0])].sort((a, b) => ms(b.at) - ms(a.at))
  const followingFeed = timeline.filter((tw) => x.mine.includes(tw.by) || tw.by === 'yudoz_moment')

  return (
    <div className="xa">
      <StatusBar />
      {profile ? (
        <XProfile handle={profile} extra={mine.filter((m) => m.by === profile)} onBack={() => setProfile(null)} onUser={setProfile} />
      ) : (
        <>
          {tab === 'home' && (
            <>
              <div className="x-head">
                <button onClick={() => setSwitcher(true)} aria-label="accounts">
                  <Avatar size={32} radius={16} />
                </button>
                <span className="x-logo">
                  <svg viewBox="0 0 60 60" width="26" height="26">
                    <path fill="currentColor" d="M38.2 15h4.9L32.4 27.2 45 45h-9.8l-7.7-10.1L18.7 45h-4.9l11.4-13.1L13 15h10l7 9.2zm-1.7 27.1h2.7L21.7 17.8h-2.9z" />
                  </svg>
                </span>
                <span className="x-upgrade">{t({ ko: '업그레이드', zh: '升級' })}</span>
              </div>
              <div className="x-tabs">
                <button className={feed === 'for' ? 'on' : ''} onClick={() => setFeed('for')}>
                  <span>{t({ ko: '추천', zh: '為你推薦' })}</span>
                </button>
                <button className={feed === 'following' ? 'on' : ''} onClick={() => setFeed('following')}>
                  <span>{t({ ko: '팔로우 중', zh: '跟隨中' })}</span>
                </button>
              </div>
              <div className="x-scroll">
                {(feed === 'for' ? timeline : followingFeed).map((tw) => (
                  <TweetView key={tw.id} tw={tw} onUser={setProfile} />
                ))}
              </div>
            </>
          )}
          {tab === 'search' && (
            <>
              <div className="x-searchbar">
                <G n="search" size={16} />
                <span>{t({ ko: '검색', zh: '搜尋' })}</span>
              </div>
              <div className="x-scroll">
                <h3 className="x-h3">{t({ ko: '대한민국 트렌드', zh: '韓國趨勢' })}</h3>
                {x.trends.map((tr, i) => (
                  <div key={i} className="x-trend">
                    <small>{t({ ko: `${i + 1} · 엔터테인먼트 · 실시간 트렌드`, zh: `${i + 1} · 娛樂 · 熱門趨勢` })}</small>
                    <b>{t(tr.tag)}</b>
                    <small>{t(tr.count)}</small>
                  </div>
                ))}
              </div>
            </>
          )}
          {tab === 'bell' && (
            <div className="x-scroll">
              <h3 className="x-h3">{t({ ko: '알림', zh: '通知' })}</h3>
              {x.timeline.slice(0, 3).map((tw) => (
                <div key={tw.id} className="x-notif">
                  <G n="heart" size={24} style={{ fill: '#f91880', color: '#f91880' }} />
                  <p>
                    <b>{t(x.accounts[tw.by]?.name ?? tw.by)}</b>
                    {t({ ko: ' 님 외 여러 명이 내 게시물을 마음에 들어 합니다', zh: ' 和其他人喜歡了你的貼文' })}
                  </p>
                </div>
              ))}
            </div>
          )}
          {tab === 'mail' && (
            <div className="x-scroll">
              <h3 className="x-h3">{t({ ko: '쪽지', zh: '私訊' })}</h3>
              <p className="muted center">{t({ ko: '아직 쪽지가 없습니다', zh: '還沒有私訊' })}</p>
            </div>
          )}
          <button className="x-fab" onClick={() => setCompose(true)} aria-label="post">
            <G n="plus" size={26} w={2.6} />
          </button>
        </>
      )}
      <nav className="x-nav">
        {(['home', 'search', 'bell', 'mail'] as const).map((id) => (
          <button
            key={id}
            className={tab === id && !profile ? 'on' : ''}
            onClick={() => {
              setProfile(null)
              setTab(id)
            }}
          >
            <G n={id === 'home' ? 'home' : id === 'search' ? 'search' : id === 'bell' ? 'bell' : 'mail'} size={26} w={tab === id ? 2.4 : 1.8} />
          </button>
        ))}
      </nav>
      {switcher && (
        <div className="sheet-bg" onClick={() => setSwitcher(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <span className="sheet-grab" />
            <h4>{t({ ko: '계정 전환', zh: '切換帳號' })}</h4>
            {x.mine.map((h) => (
              <button key={h} className="x-acc" onClick={() => switchTo(h)}>
                <Avatar size={40} radius={20} />
                <span>
                  <b>
                    {t(x.accounts[h].name)} {x.accounts[h].locked && <G n="lock" size={13} />}
                  </b>
                  <small>@{h}</small>
                </span>
                {me === h && <G n="check" size={20} w={2.6} className="x-blue" />}
              </button>
            ))}
          </div>
        </div>
      )}
      {compose && (
        <div className="x-compose">
          <StatusBar />
          <div className="x-compose-head">
            <button onClick={() => setCompose(false)}>{t({ ko: '취소', zh: '取消' })}</button>
            <button
              className="x-post"
              disabled={!draft.trim()}
              onClick={() => {
                setMine((m) => [...m, { id: `my-${Date.now()}`, by: me, text: draft.trim(), at: clock, likes: 0, rts: 0, replies: 0 }])
                setDraft('')
                setCompose(false)
                setProfile(me)
              }}
            >
              {t({ ko: '게시하기', zh: '發佈' })}
            </button>
          </div>
          <div className="x-compose-body">
            <Avatar size={40} radius={20} />
            <textarea autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t({ ko: '무슨 일이 일어나고 있나요?', zh: '有什麼新鮮事？' })} />
          </div>
          <small className="x-compose-as">@{me}</small>
        </div>
      )}
    </div>
  )
}

function TweetView({ tw, onUser }: { tw: Tweet; onUser: (h: string) => void }) {
  const { story, clock } = useStory()
  const { t, lang } = useLang()
  const acc = story.extra.x.accounts[tw.by]
  const [liked, setLiked] = useState(false)
  const [rt, setRt] = useState(false)
  return (
    <article className="tweet">
      <button onClick={() => onUser(tw.by)} aria-label={tw.by}>
        <Avatar size={40} radius={20} src={acc?.avatar} />
      </button>
      <div className="tweet-main">
        <div className="tweet-head">
          <b>{acc ? t(acc.name) : tw.by}</b>
          {acc?.locked && <G n="lock" size={12} />}
          <small>
            @{tw.by} · {ago(tw.at, clock, lang)}
          </small>
        </div>
        <p>{t(tw.text)}</p>
        {tw.pic && (
          <div className="tweet-pic">
            <PhotoTile src={tw.pic.src} emoji={tw.pic.emoji} tint={tw.pic.tint} />
          </div>
        )}
        <div className="tweet-actions">
          <span>
            <G n="bubble" size={17} w={1.8} />
            {tw.replies ? fmtNum(tw.replies, lang) : ''}
          </span>
          <button className={rt ? 'rt' : ''} onClick={() => setRt((r) => !r)}>
            <G n="repeat" size={17} w={1.8} />
            {tw.rts + (rt ? 1 : 0) ? fmtNum(tw.rts + (rt ? 1 : 0), lang) : ''}
          </button>
          <button className={liked ? 'liked' : ''} onClick={() => setLiked((l) => !l)}>
            <G n="heart" size={17} w={1.8} style={liked ? { fill: '#f91880' } : undefined} />
            {tw.likes + (liked ? 1 : 0) ? fmtNum(tw.likes + (liked ? 1 : 0), lang) : ''}
          </button>
          <span>
            <G n="chart" size={17} w={1.8} />
            {tw.likes ? fmtNum(tw.likes * 9, lang) : ''}
          </span>
          <G n="share" size={17} w={1.8} />
        </div>
      </div>
    </article>
  )
}

function XProfile({ handle, extra, onBack, onUser }: { handle: string; extra: Tweet[]; onBack: () => void; onUser: (h: string) => void }) {
  const { story } = useStory()
  const { t } = useLang()
  const x = story.extra.x
  const acc = x.accounts[handle]
  const posts = [...(x.posts[handle] ?? x.timeline.filter((tw) => tw.by === handle)), ...extra].sort((a, b) => ms(b.at) - ms(a.at))
  return (
    <div className="x-scroll x-prof-wrap">
      <div className="x-banner">
        <button onClick={onBack} aria-label="back">
          <G n="back" size={20} w={2.6} />
        </button>
      </div>
      <div className="x-prof">
        <Avatar size={78} radius={39} src={acc?.avatar} />
        <button className="x-edit">{x.mine.includes(handle) ? t({ ko: '프로필 수정', zh: '編輯個人資料' }) : t({ ko: '팔로우', zh: '跟隨' })}</button>
        <h2>
          {acc ? t(acc.name) : handle} {acc?.locked && <G n="lock" size={16} />}
        </h2>
        <small>@{handle}</small>
        {acc?.bio && <p>{t(acc.bio)}</p>}
        <div className="x-follow">
          <span>
            <b>{acc?.following}</b> {t({ ko: '팔로우 중', zh: '跟隨中' })}
          </span>
          <span>
            <b>{acc?.followers}</b> {t({ ko: '팔로워', zh: '跟隨者' })}
          </span>
        </div>
        {acc?.locked && <div className="x-locked-note">{t({ ko: '🔒 비공개 계정 · 승인된 팔로워만 볼 수 있어요', zh: '🔒 不公開帳號 · 只有獲准的跟隨者看得到' })}</div>}
      </div>
      <div className="x-tabs">
        <button className="on">
          <span>{t({ ko: '게시물', zh: '貼文' })}</span>
        </button>
        <button>
          <span>{t({ ko: '답글', zh: '回覆' })}</span>
        </button>
        <button>
          <span>{t({ ko: '미디어', zh: '媒體' })}</span>
        </button>
      </div>
      {posts.map((tw) => (
        <TweetView key={tw.id} tw={tw} onUser={onUser} />
      ))}
      {posts.length === 0 && <p className="muted center">{t({ ko: '아직 게시물이 없습니다', zh: '還沒有貼文' })}</p>}
    </div>
  )
}


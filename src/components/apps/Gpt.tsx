import { Fragment, useEffect, useRef, useState } from 'react'
import { useLang, type L } from '../../i18n'
import { useStory } from '../../story/engine'
import type { AiChat } from '../../story/types'
import { useBackHandler } from '../../device'
import { Avatar } from '../common'
import { StatusBar } from '../system'
import { G } from '../icons'

type Turn = { q: string; a: string; shown: number }

/** **굵게**, "1. ", "- " 만 지원하는 작은 마크다운 */
function Md({ text }: { text: string }) {
  const blocks = text.split('\n')
  const inline = (s: string) =>
    s.split(/(\*\*[^*]+\*\*)/g).map((part, i) => (part.startsWith('**') && part.endsWith('**') ? <b key={i}>{part.slice(2, -2)}</b> : <Fragment key={i}>{part}</Fragment>))
  return (
    <div className="gpt-md">
      {blocks.map((line, i) => {
        if (!line.trim()) return <div key={i} className="gpt-gap" />
        const ol = line.match(/^(\d+)\.\s(.*)$/)
        if (ol)
          return (
            <p key={i} className="gpt-li">
              <span>{ol[1]}.</span>
              <span>{inline(ol[2])}</span>
            </p>
          )
        if (line.startsWith('- '))
          return (
            <p key={i} className="gpt-li">
              <span>•</span>
              <span>{inline(line.slice(2))}</span>
            </p>
          )
        return <p key={i}>{inline(line)}</p>
      })}
    </div>
  )
}

/** 사용자가 직접 물었을 때의 답 */
function answerFor(q: string, lang: 'ko' | 'zh'): string {
  const s = q.toLowerCase()
  const has = (...k: string[]) => k.some((w) => s.includes(w))
  const pick = (ko: string, zh: string) => (lang === 'ko' ? ko : zh)
  if (has('누구', '주인', '주웠', '撿', '誰', '主人'))
    return pick(
      '저는 이 기기에 로그인된 계정의 대화만 볼 수 있어요. 혹시 **이 휴대폰의 주인이 아니시라면**, 개인 대화를 오래 보는 건 실례일 수 있어요. 주인에게 돌려줄 방법을 같이 찾아볼까요?\n\n1. 잠금화면의 연락처나 최근 통화로 연락하기\n2. 가까운 경찰서·분실물 센터에 맡기기',
      '我只能看到登入這台裝置的帳號的對話。如果您**不是這支手機的主人**，長時間看別人的私人對話可能不太禮貌。要一起想辦法還給主人嗎？\n\n1. 透過聯絡人或最近通話聯絡\n2. 交給附近的警察局或失物招領處',
    )
  if (has('생일', '편지', '生日', '信'))
    return pick(
      '생일 메시지를 쓸 때는 이렇게 해보세요.\n\n1. **함께한 구체적인 장면** 하나 꺼내기\n2. 평소에 못 했던 말 한 줄\n3. 앞으로의 약속으로 마무리\n\n길이보다 진심이 더 잘 전해져요 🎂',
      '寫生日訊息時可以這樣做：\n\n1. 提起**一起經歷的具體場景**\n2. 一句平常說不出口的話\n3. 用對未來的約定收尾\n\n比起長度，真心更能傳達 🎂',
    )
  if (has('볼링', '保齡球'))
    return pick('볼링 실력을 올리려면 **스페어 처리 연습**부터 시작하는 게 가장 효율적이에요. 그리고 핀이 아니라 레인의 화살표를 보고 던져 보세요 🎳', '想提升保齡球實力，最有效率的是先從**補中練習**開始。另外試著看球道上的箭頭而不是球瓶 🎳')
  if (has('케이크', '蛋糕', '쿠키', '餅'))
    return pick('생크림 케이크는 **냉장 보관 2~3일**이 적당해요. 냄새가 강한 음식과 떨어뜨려 두세요. 두쫀쿠는 실온보다 냉장에서 더 쫀득해져요 🍪', '鮮奶油蛋糕**冷藏 2～3 天**比較合適，記得遠離味道重的食物。杜拜Q餅冷藏比常溫更有嚼勁 🍪')
  if (has('잠', '졸려', '睡', '불면'))
    return pick('잠이 안 올 때는 휴대폰 화면을 끄고 **4-7-8 호흡**(4초 들이쉬고, 7초 참고, 8초 내쉬기)을 해 보세요. 그리고… 소파보다는 침대가 허리에 좋아요 😴', '睡不著的時候，關掉手機螢幕試試 **4-7-8 呼吸法**（吸氣 4 秒、憋氣 7 秒、吐氣 8 秒）。還有……床比沙發對腰好 😴')
  if (has('좋아', '사랑', '고백', '喜歡', '愛', '告白'))
    return pick('마음을 전하는 데 정답은 없지만, **상대가 편하게 받을 수 있는 방식**을 고르는 게 중요해요. 평소에 둘만 아는 이야기로 시작하면 훨씬 자연스러워요.', '表達心意沒有標準答案，但重要的是選擇**對方能自在接受的方式**。從只有你們兩個知道的事開始會自然很多。')
  if (has('안녕', 'hi', 'hello', '你好', '嗨'))
    return pick('안녕하세요! 무엇을 도와드릴까요? 🙂', '你好！有什麼可以幫你的嗎？🙂')
  return pick(
    `좋은 질문이에요. "${q.slice(0, 30)}"에 대해 정리해 보면:\n\n- 지금 상황을 조금 더 알려주시면 더 구체적으로 도와드릴 수 있어요\n- 급한 일이 아니라면 하루 정도 생각해 보고 결정하는 것도 방법이에요\n\n더 궁금한 게 있으면 편하게 물어보세요!`,
    `好問題。關於「${q.slice(0, 30)}」整理一下：\n\n- 如果能多告訴我一些現在的狀況，我可以給更具體的幫助\n- 如果不急的話，想一天再決定也是個方法\n\n還有想問的隨時問我！`,
  )
}

const GROUPS: { id: NonNullable<AiChat['when']>; label: L }[] = [
  { id: 'today', label: { ko: '오늘', zh: '今天' } },
  { id: 'yesterday', label: { ko: '어제', zh: '昨天' } },
  { id: 'week', label: { ko: '지난 7일', zh: '過去 7 天' } },
  { id: 'month', label: { ko: '지난 30일', zh: '過去 30 天' } },
]

export function GptApp() {
  const { story } = useStory()
  const { t, lang } = useLang()
  const [open, setOpen] = useState<string | null>(story.ai[0]?.id ?? null)
  const [side, setSide] = useState(false)
  const [mine, setMine] = useState<Record<string, Turn[]>>({})
  const [newChats, setNewChats] = useState<{ id: string; title: string }[]>([])
  const [draft, setDraft] = useState('')
  const [query, setQuery] = useState('')
  const body = useRef<HTMLDivElement>(null)
  useBackHandler(side, () => setSide(false))

  const chat = story.ai.find((c) => c.id === open)
  const extra = open ? mine[open] ?? [] : []
  const streaming = extra.some((x) => x.shown < x.a.length)

  // 답변을 한 글자씩 흘려보낸다
  useEffect(() => {
    if (!open || !streaming) return
    const id = window.setTimeout(() => {
      setMine((m) => ({ ...m, [open]: (m[open] ?? []).map((x) => (x.shown < x.a.length ? { ...x, shown: Math.min(x.a.length, x.shown + 3) } : x)) }))
    }, 18)
    return () => window.clearTimeout(id)
  }, [open, streaming, mine])

  useEffect(() => {
    body.current?.scrollTo({ top: 1e6 })
  }, [open, extra.length, streaming])

  const ask = () => {
    const q = draft.trim()
    if (!q) return
    let id = open
    if (!id) {
      id = `new-${Date.now()}`
      setNewChats((n) => [{ id: id!, title: q.slice(0, 18) }, ...n])
      setOpen(id)
    }
    const cid = id
    setDraft('')
    setMine((m) => ({ ...m, [cid]: [...(m[cid] ?? []), { q, a: '', shown: 0 }] }))
    window.setTimeout(() => {
      const a = answerFor(q, lang)
      setMine((m) => ({ ...m, [cid]: (m[cid] ?? []).map((x, i, arr) => (i === arr.length - 1 ? { ...x, a } : x)) }))
    }, 900)
  }

  const newTitle = newChats.find((c) => c.id === open)?.title
  const all = story.ai.filter((c) => !query || t(c.title).includes(query))

  return (
    <div className="gpt">
      <StatusBar />
      <div className="gpt-nav">
        <button onClick={() => setSide(true)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 9h16M4 15h10" />
          </svg>
        </button>
        <button className="gpt-model">
          ChatGPT <span>›</span>
        </button>
        <button onClick={() => setOpen(null)} aria-label="new chat">
          <G n="compose" size={22} w={2} />
        </button>
      </div>
      <div className="gpt-body" ref={body}>
        {!chat && !newTitle && extra.length === 0 ? (
          <div className="gpt-empty">
            <b>{t({ ko: '무엇을 도와드릴까요?', zh: '有什麼可以幫忙的？' })}</b>
            <div className="gpt-chips">
              {[
                { ko: '🎂 생일 편지 다듬기', zh: '🎂 潤飾生日信' },
                { ko: '🎳 볼링 잘 치는 법', zh: '🎳 保齡球技巧' },
                { ko: '😴 잠이 안 올 때', zh: '😴 睡不著的時候' },
                { ko: '🍰 케이크 보관법', zh: '🍰 蛋糕保存方法' },
              ].map((c, i) => (
                <button key={i} onClick={() => setDraft(t(c).slice(2))}>
                  {t(c)}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {chat?.turns.map((turn, i) => (
              <div key={i}>
                <div className="gpt-q">{t(turn.q)}</div>
                <div className="gpt-a">
                  <Md text={t(turn.a)} />
                  <Actions />
                </div>
              </div>
            ))}
            {extra.map((turn, i) => (
              <div key={`m${i}`}>
                <div className="gpt-q">{turn.q}</div>
                <div className="gpt-a">
                  {turn.a ? <Md text={turn.a.slice(0, turn.shown)} /> : <span className="gpt-dot" />}
                  {turn.a && turn.shown >= turn.a.length && <Actions />}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <form
        className="gpt-input"
        onSubmit={(e) => {
          e.preventDefault()
          ask()
        }}
      >
        <span className="gpt-plus">
          <G n="plus" size={20} w={2} />
        </span>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={t({ ko: '무엇이든 물어보세요', zh: '問任何問題' })} />
        {draft.trim() ? (
          <button className="gpt-send" aria-label="send">
            <G n="arrowUp" size={18} w={2.8} />
          </button>
        ) : (
          <>
            <G n="mic" size={20} w={1.9} />
            <span className="gpt-voice">
              <i />
              <i />
              <i />
              <i />
            </span>
          </>
        )}
      </form>
      <small className="gpt-disc">{t({ ko: 'ChatGPT는 실수를 할 수 있습니다. 중요한 정보는 재차 확인하세요.', zh: 'ChatGPT 可能會出錯。請查核重要資訊。' })}</small>

      {side && (
        <div className="gpt-side-bg" onClick={() => setSide(false)}>
          <aside className="gpt-side" onClick={(e) => e.stopPropagation()}>
            <StatusBar />
            <div className="gpt-search">
              <G n="search" size={16} w={2.2} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t({ ko: '검색', zh: '搜尋' })} />
            </div>
            <button
              className="gpt-side-item"
              onClick={() => {
                setOpen(null)
                setSide(false)
              }}
            >
              <G n="compose" size={18} /> {t({ ko: '새 채팅', zh: '新聊天' })}
            </button>
            <div className="gpt-side-item">
              <G n="apps" size={18} /> {t({ ko: 'GPT 탐색', zh: '探索 GPT' })}
            </div>
            <div className="gpt-side-list">
              {newChats.length > 0 && (
                <>
                  <h5>{t({ ko: '오늘', zh: '今天' })}</h5>
                  {newChats.map((c) => (
                    <button key={c.id} className={c.id === open ? 'on' : ''} onClick={() => (setOpen(c.id), setSide(false))}>
                      {c.title}
                    </button>
                  ))}
                </>
              )}
              {GROUPS.map((g) => {
                const list = all.filter((c) => (c.when ?? 'today') === g.id)
                if (!list.length) return null
                return (
                  <Fragment key={g.id}>
                    {!(g.id === 'today' && newChats.length) && <h5>{t(g.label)}</h5>}
                    {list.map((c) => (
                      <button key={c.id} className={c.id === open ? 'on' : ''} onClick={() => (setOpen(c.id), setSide(false))}>
                        {t(c.title)}
                      </button>
                    ))}
                  </Fragment>
                )
              })}
            </div>
            <div className="gpt-me">
              <Avatar size={32} radius={16} src={story.owner.avatar} />
              <b>{t(story.owner.name)}</b>
              <G n="more" size={20} />
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

function Actions() {
  const [up, setUp] = useState<boolean | null>(null)
  const [copied, setCopied] = useState(false)
  return (
    <div className="gpt-acts">
      <button onClick={() => (setCopied(true), window.setTimeout(() => setCopied(false), 1200))} aria-label="copy">
        {copied ? <G n="check" size={17} w={2.2} /> : <G n="copy" size={17} w={1.9} />}
      </button>
      <button onClick={() => setUp(up === true ? null : true)} className={up === true ? 'on' : ''} aria-label="good">
        <G n="thumb" size={17} w={1.9} />
      </button>
      <button onClick={() => setUp(up === false ? null : false)} className={up === false ? 'on' : ''} aria-label="bad">
        <G n="thumb" size={17} w={1.9} style={{ transform: 'rotate(180deg)' }} />
      </button>
      <G n="speaker" size={17} w={1.9} />
      <G n="repeat" size={17} w={1.9} />
    </div>
  )
}

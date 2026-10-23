import { useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { duration, listDate, ms, time, monthDay } from '../../time'
import { useStory } from '../../story/engine'
import type { CallLog } from '../../story/types'
import { useDevice } from '../../device'
import { ContactAvatar, Page, TabBar } from '../common'
import { playTick } from '../../sound'
import { G } from '../icons'

type Tab = 'fav' | 'recents' | 'contacts' | 'keypad' | 'vm'

const TABS: { id: Tab; label: L; icon: string }[] = [
  { id: 'fav', label: { ko: '즐겨찾기', zh: '常用聯絡人' }, icon: 'star' },
  { id: 'recents', label: UI.recents, icon: 'clock' },
  { id: 'contacts', label: { ko: '연락처', zh: '聯絡人' }, icon: 'person' },
  { id: 'keypad', label: { ko: '키패드', zh: '撥號鍵盤' }, icon: 'grid' },
  { id: 'vm', label: { ko: '음성 사서함', zh: '語音信箱' }, icon: 'voicemail' },
]

export function PhoneApp() {
  const [tab, setTab] = useState<Tab>('recents')
  const [card, setCard] = useState<string | null>(null)
  const bar = <TabBar tabs={TABS} value={tab} onChange={(v) => setTab(v as Tab)} />
  if (card) return <ContactCard id={card} onBack={() => setCard(null)} bottom={bar} />
  return (
    <>
      {tab === 'recents' && <Recents onInfo={setCard} bottom={bar} />}
      {tab === 'fav' && <Favorites onInfo={setCard} bottom={bar} />}
      {tab === 'contacts' && <Contacts onOpen={setCard} bottom={bar} />}
      {tab === 'keypad' && <Keypad bottom={bar} />}
      {tab === 'vm' && (
        <Page title={{ ko: '음성 사서함', zh: '語音信箱' }} large bg="#fff" bottom={bar}>
          <p className="empty-note">{UI.noItems && <EmptyText />}</p>
        </Page>
      )}
    </>
  )
}

function EmptyText() {
  const { t } = useLang()
  return <>{t({ ko: '음성 메시지 없음', zh: '沒有語音留言' })}</>
}

function Recents({ onInfo, bottom }: { onInfo: (id: string) => void; bottom: React.ReactNode }) {
  const { story, extraCalls, clock } = useStory()
  const { dial } = useDevice()
  const { t, lang } = useLang()
  const [missedOnly, setMissedOnly] = useState(false)
  const all: CallLog[] = [...story.calls, ...extraCalls].sort((a, b) => ms(b.at) - ms(a.at)).filter((c) => !missedOnly || c.type === 'missed')
  const label: Record<CallLog['type'], L> = { incoming: UI.incoming, outgoing: UI.outgoing, missed: UI.missed }
  return (
    <Page
      title={UI.recents}
      large
      bg="#fff"
      bottom={bottom}
      right={
        <span className="seg small">
          <button className={!missedOnly ? 'on' : ''} onClick={() => setMissedOnly(false)}>
            {t({ ko: '전체', zh: '全部' })}
          </button>
          <button className={missedOnly ? 'on' : ''} onClick={() => setMissedOnly(true)}>
            {t({ ko: '부재중', zh: '未接' })}
          </button>
        </span>
      }
    >
      <div className="p-list">
        {all.map((c, i) => {
          const who = story.contacts[c.contactId]
          return (
            <div key={i} className="p-row">
              <span className="p-kind">{c.type === 'outgoing' && <G n="phoneFill" size={13} />}</span>
              <button className="p-mid" onClick={() => dial(c.contactId)}>
                <b className={c.type === 'missed' ? 'red' : ''}>{who ? t(who.name) : c.contactId}</b>
                <small>
                  {t(label[c.type])}
                  {c.seconds > 0 && ` · ${duration(c.seconds, lang)}`}
                </small>
              </button>
              <small className="p-date">{listDate(c.at, clock, lang)}</small>
              <button className="p-info" onClick={() => onInfo(c.contactId)} aria-label="info">
                <G n="info" size={22} w={1.8} />
              </button>
            </div>
          )
        })}
      </div>
    </Page>
  )
}

function useSortedContacts() {
  const { story } = useStory()
  const { t, lang } = useLang()
  return Object.entries(story.contacts)
    .filter(([, c]) => c.phone)
    .sort(([, a], [, b]) => t(a.name).localeCompare(t(b.name), lang === 'ko' ? 'ko' : 'zh-Hant'))
}

function Favorites({ onInfo, bottom }: { onInfo: (id: string) => void; bottom: React.ReactNode }) {
  const { story } = useStory()
  const { dial } = useDevice()
  const { t } = useLang()
  const favs = [story.id === 'shinyu' ? 'dohoon' : 'shinyu', 'mom'].filter((id) => story.contacts[id])
  return (
    <Page title={{ ko: '즐겨찾기', zh: '常用聯絡人' }} large bg="#fff" bottom={bottom} right={<G n="plus" size={24} />}>
      <div className="p-list">
        {favs.map((id) => (
          <div key={id} className="p-row fav">
            <ContactAvatar name={t(story.contacts[id].name)} size={42} />
            <button className="p-mid" onClick={() => dial(id)}>
              <b>{t(story.contacts[id].name)}</b>
              <small>{t(UI.incomingCall)}</small>
            </button>
            <button className="p-info" onClick={() => onInfo(id)} aria-label="info">
              <G n="info" size={22} w={1.8} />
            </button>
          </div>
        ))}
      </div>
    </Page>
  )
}

function Contacts({ onOpen, bottom }: { onOpen: (id: string) => void; bottom: React.ReactNode }) {
  const { story } = useStory()
  const { t } = useLang()
  const list = useSortedContacts()
  return (
    <Page title={{ ko: '연락처', zh: '聯絡人' }} large bg="#fff" bottom={bottom} search={UI.search} right={<G n="plus" size={24} />}>
      <button className="p-me">
        <ContactAvatar name={t(story.owner.name)} size={60} src={story.owner.avatar} />
        <span>
          <b>{t(story.owner.name)}</b>
          <small>{t({ ko: '내 카드', zh: '我的名片' })}</small>
        </span>
      </button>
      <div className="p-list">
        {list.map(([id, c]) => (
          <button key={id} className="p-contact" onClick={() => onOpen(id)}>
            {t(c.name)}
          </button>
        ))}
      </div>
      <p className="p-count">{t({ ko: `연락처 ${list.length}개`, zh: `${list.length} 位聯絡人` })}</p>
    </Page>
  )
}

function ContactCard({ id, onBack, bottom }: { id: string; onBack: () => void; bottom: React.ReactNode }) {
  const { story, extraCalls, setScreen, setOpenRoom } = useStory()
  const { dial } = useDevice()
  const { t, lang } = useLang()
  const c = story.contacts[id]
  const history = [...story.calls, ...extraCalls].filter((x) => x.contactId === id).sort((a, b) => ms(b.at) - ms(a.at))
  const room = story.rooms.find((r) => r.contactId === id)
  if (!c) return null
  return (
    <Page title="" onBack={onBack} backLabel={UI.recents} bg="#f2f2f7" bottom={bottom} right={<span className="nav-text">{t({ ko: '편집', zh: '編輯' })}</span>}>
      <div className="ct-head">
        <ContactAvatar name={t(c.name)} size={100} src={c.avatar} />
        <h2>{t(c.name)}</h2>
        <div className="ct-actions">
          <button
            onClick={() => {
              if (room) {
                setScreen({ kind: 'app', app: 'kakao' })
                setOpenRoom(room.id)
              }
            }}
          >
            <G n="bubble" size={20} />
            <span>{t(UI.messages)}</span>
          </button>
          <button onClick={() => dial(id)}>
            <G n="phoneFill" size={20} />
            <span>{t(UI.phone)}</span>
          </button>
          <button onClick={() => dial(id, true)}>
            <G n="video" size={20} />
            <span>FaceTime</span>
          </button>
          <button>
            <G n="share" size={20} />
            <span>{t({ ko: '공유', zh: '分享' })}</span>
          </button>
        </div>
      </div>
      {history.length > 0 && (
        <div className="ct-box">
          {history.slice(0, 4).map((h, i) => (
            <div key={i} className="ct-hist">
              <small>
                {monthDay(h.at, lang)} {time(h.at, lang)}
              </small>
              <span className={h.type === 'missed' ? 'red' : ''}>
                {t(h.type === 'missed' ? UI.missed : h.type === 'incoming' ? UI.incoming : UI.outgoing)}
                {h.seconds > 0 && ` · ${duration(h.seconds, lang)}`}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="ct-box">
        <small>{t({ ko: '휴대전화', zh: '行動電話' })}</small>
        <button className="ct-phone" onClick={() => dial(id)}>
          {c.phone}
        </button>
      </div>
      {c.status && (
        <div className="ct-box">
          <small>{t({ ko: '메모', zh: '備註' })}</small>
          <span>{t(c.status)}</span>
        </div>
      )}
    </Page>
  )
}

const PAD: [string, string][] = [
  ['1', ''],
  ['2', 'ABC'],
  ['3', 'DEF'],
  ['4', 'GHI'],
  ['5', 'JKL'],
  ['6', 'MNO'],
  ['7', 'PQRS'],
  ['8', 'TUV'],
  ['9', 'WXYZ'],
  ['*', ''],
  ['0', '+'],
  ['#', ''],
]

function Keypad({ bottom }: { bottom: React.ReactNode }) {
  const { story } = useStory()
  const { dial, haptic } = useDevice()
  const { t } = useLang()
  const [num, setNum] = useState('')
  const digits = num.replace(/\D/g, '')
  const match = Object.entries(story.contacts).find(([, c]) => c.phone && c.phone.replace(/\D/g, '') === digits)
  const pretty = digits.length > 7 ? `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}` : digits.length > 3 ? `${digits.slice(0, 3)}-${digits.slice(3)}` : num
  return (
    <div className="keypad">
      <div className="kp-num">
        <span>{pretty}</span>
        <small>{match ? t(match[1].name) : num ? t({ ko: '번호 추가', zh: '加入號碼' }) : ' '}</small>
      </div>
      <div className="kp-grid">
        {PAD.map(([d, l]) => (
          <button
            key={d}
            onClick={() => {
              playTick()
              haptic(5)
              setNum((n) => (n.length < 13 ? n + d : n))
            }}
          >
            <b>{d}</b>
            <small>{l}</small>
          </button>
        ))}
        <span />
        <button className="kp-call" onClick={() => digits && dial(match ? match[0] : pretty)} aria-label="call">
          <G n="phoneFill" size={34} />
        </button>
        {num ? (
          <button className="kp-del" onClick={() => setNum((n) => n.slice(0, -1))} aria-label="delete">
            ⌫
          </button>
        ) : (
          <span />
        )}
      </div>
      {bottom}
    </div>
  )
}

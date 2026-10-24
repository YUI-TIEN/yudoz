import type { L } from '../i18n'

export type AppId =
  | 'kakao'
  | 'messages'
  | 'phone'
  | 'photos'
  | 'notes'
  | 'search'
  | 'ai'
  | 'calendar'
  | 'voice'
  | 'settings'
  | 'camera'
  | 'clock'
  | 'instagram'
  | 'x'
  | 'music'
  | 'maps'
  | 'mail'
  | 'weather'

export type Contact = {
  name: L
  /** public/ 아래 이미지 경로. 없으면 기본 프로필 */
  avatar?: string
  status?: L
  phone?: string
}

export type ChatContent =
  | { text: L }
  | { sticker: string; caption?: L }
  | { photo: L; src?: string }

/** 기록에 쓰는 메시지. from: 'me' 또는 contact id */
export type ChatMsg = { at: string; from: string; reply?: { to: L; text: L } } & ChatContent

export type Room = {
  id: string
  /** 1:1 방이면 상대 contact id, 단톡이면 null */
  contactId?: string
  group?: { name: L; members: string[] }
  messages: ChatMsg[]
  /** 처음부터 안 읽은 메시지 수 */
  unread?: number
  muted?: boolean
  /** 카카오톡 숨긴 채팅방 (암호로 열기 전엔 목록에 안 보임) */
  hidden?: boolean
}

export type SmsThread = { id: string; from: L; contactId?: string; messages: { at: string; text: L; me?: boolean }[]; unread?: boolean }
export type CallLog = { at: string; contactId: string; type: 'incoming' | 'outgoing' | 'missed'; seconds: number }
export type Note = { id: string; title: L; at: string; body: L; pinned?: boolean; locked?: boolean }
export type Photo = { id: string; at: string; caption: L; emoji: string; tint: string; src?: string }
export type SearchItem = { q: L; result: { title: L; body: L }[] }
export type AiChat = { id: string; title: L; turns: { q: L; a: L }[]; when?: 'today' | 'yesterday' | 'week' | 'month' }
export type CalEvent = { date: string; title: L; time?: string; color: string }
export type VoiceMemo = { id: string; title: L; at: string; seconds: number; transcript: L }

export type Alarm = { time: string; label: L; on: boolean }

export type LockNotice = { app: AppId; icon: string; title: L; body: L; time: L }

/* ---------- 스크립트 ---------- */

export type ReplyBranch = {
  id: string
  /** 정규화(공백 제거·소문자) 후 포함 여부로 판정 */
  keys: string[]
  replies: { text: L; from?: string }[]
}

export type Action =
  | { t: 'msg'; room: string; from?: string; text: L; gap?: number }
  | { t: 'sticker'; room: string; from?: string; sticker: string; gap?: number }
  | { t: 'clock'; at: string }
  | { t: 'reply'; room: string; branches: ReplyBranch[] }
  | { t: 'call'; from: string; lines: L[]; declinedMsg?: L }
  | { t: 'wait'; ms: number }
  | { t: 'photo'; room: string; from?: string; caption: L; gap?: number }
  /** 이야기 끝 (엔딩 비밀 해금) */
  | { t: 'end' }

export type Trigger = {
  id: string
  /** 'unlock' | 'open:<roomId>' | 'branch:<roomId>' | 'branch:<roomId>:<branchId>' | 'call:accepted' | 'call:declined' | 'call:done' */
  when: string
  delay?: number
  actions: Action[]
}

export type PhoneStory = {
  id: 'shinyu' | 'dohoon'
  owner: { name: L; device: L; avatar?: string; status: L }
  accent: string
  wallpaper: string
  lockEmoji: string
  passcode: string
  startAt: string
  lockNotices: LockNotice[]
  wifi: string
  devices: L[]
  contacts: Record<string, Contact>
  rooms: Room[]
  sms: SmsThread[]
  calls: CallLog[]
  notes: Note[]
  photos: Photo[]
  searches: SearchItem[]
  ai: AiChat[]
  calendar: CalEvent[]
  voice: VoiceMemo[]
  alarms: Alarm[]
  extra: Extras
  script: Trigger[]
}

/* ---------- 스토리 밖의 생활감 콘텐츠 ---------- */

export type Pic = { emoji: string; tint: string; src?: string }

export type IgUser = { name: L; bio?: L; avatar?: string; posts: number; followers: string; following: string; verified?: boolean }
export type IgPost = { id: string; by: string; pic: Pic; caption: L; likes: number; at: string; comments: { by: string; text: L }[] }
export type IgStory = { by: string; frames: (Pic & { text?: L })[] }
export type IgDm = { with: string; messages: { from: string; text: L; at: string }[] }
export type Instagram = {
  me: string
  users: Record<string, IgUser>
  feed: IgPost[]
  stories: IgStory[]
  highlights: { title: L; frames: (Pic & { text?: L })[] }[]
  dms: IgDm[]
}

export type Tweet = { id: string; by: string; text: L; at: string; likes: number; rts: number; replies: number; pic?: Pic }
export type XAccount = { name: L; bio: L; locked?: boolean; followers: string; following: string; avatar?: string }
export type XData = {
  /** 내 계정들. 첫 번째가 기본, 두 번째가 비밀 계정 */
  mine: string[]
  accounts: Record<string, XAccount>
  timeline: Tweet[]
  posts: Record<string, Tweet[]>
  trends: { tag: L; count: L }[]
}

export type Song = { title: string; artist: string; dur: number }
export type Playlist = { id: string; title: L; by: L; pic: Pic; songs: Song[] }

export type Place = { id: string; name: L; x: number; y: number; emoji: string; note: L; kind: L }
export type Mail = { id: string; from: string; subject: L; body: L; at: string; unread?: boolean; box?: 'inbox' | 'draft' }

export type Weather = {
  city: L
  now: number
  desc: L
  hi: number
  lo: number
  hours: [string, string, number][]
  days: [L, string, number, number][]
}

export type Extras = {
  instagram: Instagram
  x: XData
  music: Playlist[]
  places: Place[]
  mails: Mail[]
  weather: Weather
  /** 잠긴 메모: 비밀번호 + 힌트 */
  lockedNote: { title: L; password: string; hint: L; body: L; at: string }
  hiddenPhotos: Photo[]
  deletedPhotos: Photo[]
}

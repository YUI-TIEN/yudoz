import type { L } from '../i18n'

export type AppId = 'kakao' | 'messages' | 'phone' | 'photos' | 'notes' | 'search' | 'ai' | 'calendar' | 'voice' | 'settings'

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
}

export type SmsThread = { id: string; from: L; messages: { at: string; text: L; me?: boolean }[]; unread?: boolean }
export type CallLog = { at: string; contactId: string; type: 'incoming' | 'outgoing' | 'missed'; seconds: number }
export type Note = { id: string; title: L; at: string; body: L; pinned?: boolean; locked?: boolean }
export type Photo = { id: string; at: string; caption: L; emoji: string; tint: string; src?: string }
export type SearchItem = { q: L; result: { title: L; body: L }[] }
export type AiChat = { id: string; title: L; turns: { q: L; a: L }[] }
export type CalEvent = { date: string; title: L; time?: string; color: string }
export type VoiceMemo = { id: string; title: L; at: string; seconds: number; transcript: L }

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
  script: Trigger[]
}

import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'ko' | 'zh'
/** 한국어가 원문, 중국어는 번역. 문자열 하나만 주면 두 언어 공통. */
export type L = string | { ko: string; zh: string }

const STORAGE_KEY = 'yudoz-lang'

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: (s: L) => string }
const Ctx = createContext<LangCtx | null>(null)

function initialLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ko' || saved === 'zh') return saved
  } catch {
    // 저장소를 못 쓰는 환경이면 기본값
  }
  return 'ko'
}

export function tr(s: L, lang: Lang): string {
  return typeof s === 'string' ? s : s[lang]
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  useEffect(() => {
    document.documentElement.lang = lang === 'ko' ? 'ko' : 'zh-Hant'
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // 무시
    }
  }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: (s) => tr(s, lang) }}>{children}</Ctx.Provider>
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

/** 공통 UI 문구 */
export const UI = {
  slideToOpen: { ko: '쓸어올려서 열기', zh: '向上滑動以打開' },
  enterPasscode: { ko: '암호 입력', zh: '輸入密碼' },
  cancel: { ko: '취소', zh: '取消' },
  erase: { ko: '삭제', zh: '刪除' },
  emergency: { ko: '긴급', zh: '緊急' },
  now: { ko: '지금', zh: '現在' },
  yesterday: { ko: '어제', zh: '昨天' },
  back: { ko: '뒤로', zh: '返回' },
  chats: { ko: '채팅', zh: '聊天' },
  friends: { ko: '친구', zh: '好友' },
  messageInput: { ko: '메시지 입력', zh: '輸入訊息' },
  messageLocked: { ko: '지금은 답장할 수 없어요', zh: '現在還不能回覆' },
  send: { ko: '전송', zh: '傳送' },
  incomingCall: { ko: '휴대전화', zh: '行動電話' },
  accept: { ko: '응답', zh: '接聽' },
  decline: { ko: '거절', zh: '拒絕' },
  endCall: { ko: '통화 종료', zh: '結束通話' },
  callEnded: { ko: '통화 종료됨', zh: '通話已結束' },
  missed: { ko: '부재중 전화', zh: '未接來電' },
  incoming: { ko: '수신 전화', zh: '來電' },
  outgoing: { ko: '발신 전화', zh: '撥出電話' },
  recents: { ko: '최근 기록', zh: '最近通話' },
  notes: { ko: '메모', zh: '備忘錄' },
  photos: { ko: '사진', zh: '照片' },
  library: { ko: '보관함', zh: '圖庫' },
  messages: { ko: '메시지', zh: '訊息' },
  phone: { ko: '전화', zh: '電話' },
  calendar: { ko: '캘린더', zh: '行事曆' },
  settings: { ko: '설정', zh: '設定' },
  search: { ko: '검색', zh: '搜尋' },
  recentSearches: { ko: '최근 검색어', zh: '最近搜尋' },
  kakao: { ko: '카카오톡', zh: 'KakaoTalk' },
  ai: { ko: '애스크', zh: 'Ask AI' },
  aiDisclaimer: {
    ko: '애스크는 실수를 할 수 있습니다. 중요한 정보는 확인하세요.',
    zh: 'Ask AI 可能會出錯，重要資訊請再次確認。',
  },
  aiInput: { ko: '무엇이든 물어보세요', zh: '問我任何問題' },
  recentChats: { ko: '최근 대화', zh: '最近對話' },
  voiceMemos: { ko: '음성 메모', zh: '語音備忘錄' },
  language: { ko: '언어', zh: '語言' },
  restart: { ko: '스토리 다시 시작', zh: '重新開始故事' },
  toLock: { ko: '잠금화면으로', zh: '回到鎖定畫面' },
  toSelect: { ko: '다른 폰 고르기', zh: '選擇另一支手機' },
  about: { ko: '이 웹사이트 정보', zh: '關於本網站' },
  aboutText: {
    ko: 'TWS 신유·도훈을 모티브로 한 팬메이드 허구의 이야기입니다. 실제 인물·소속사와 관계없으며, 등장하는 대화와 기록은 모두 창작입니다. 이 화면의 설정은 웹사이트 안에서만 바뀝니다.',
    zh: '本網站為以 TWS 申惟、道勳為靈感的粉絲自製虛構故事，與本人及經紀公司無關，所有對話與紀錄皆為創作。此畫面的設定只會在網站內變更。',
  },
  hint: { ko: '힌트: 잠금화면 알림을 잘 보세요', zh: '提示：仔細看看鎖定畫面的通知' },
  today: { ko: '오늘', zh: '今天' },
  allDay: { ko: '하루 종일', zh: '整天' },
  read1: '1',
  members: { ko: '명', zh: '人' },
  noItems: { ko: '항목 없음', zh: '沒有項目' },
} satisfies Record<string, L>

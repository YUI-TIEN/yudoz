import type { Lang } from './i18n'

/** "2026-01-29 23:58" (KST) -> ISO */
export function kst(s: string): string {
  const [d, t] = s.split(' ')
  return `${d}T${t}:00+09:00`
}

function parts(iso: string) {
  // KST 고정: UTC+9 로 옮긴 뒤 UTC 필드로 읽는다
  const d = new Date(new Date(iso).getTime() + 9 * 3600_000)
  return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), h: d.getUTCHours(), min: d.getUTCMinutes(), wd: d.getUTCDay() }
}

const WD_KO = ['일', '월', '화', '수', '목', '금', '토']
const WD_ZH = ['日', '一', '二', '三', '四', '五', '六']

export const pad = (n: number) => String(n).padStart(2, '0')

export function clock(iso: string) {
  const p = parts(iso)
  return `${pad(p.h)}:${pad(p.min)}`
}

export function time(iso: string, lang: Lang) {
  const p = parts(iso)
  const h12 = p.h % 12 === 0 ? 12 : p.h % 12
  if (lang === 'ko') return `${p.h < 12 ? '오전' : '오후'} ${h12}:${pad(p.min)}`
  return `${p.h < 12 ? '上午' : '下午'}${h12}:${pad(p.min)}`
}

export function lockDate(iso: string, lang: Lang) {
  const p = parts(iso)
  return lang === 'ko' ? `${p.m}월 ${p.d}일 ${WD_KO[p.wd]}요일` : `${p.m}月${p.d}日 星期${WD_ZH[p.wd]}`
}

export function fullDate(iso: string, lang: Lang) {
  const p = parts(iso)
  return lang === 'ko' ? `${p.y}년 ${p.m}월 ${p.d}일 ${WD_KO[p.wd]}요일` : `${p.y}年${p.m}月${p.d}日 星期${WD_ZH[p.wd]}`
}

function dayNum(iso: string) {
  const p = parts(iso)
  return Date.UTC(p.y, p.m - 1, p.d) / 86400_000
}

export function sameDay(a: string, b: string) {
  return dayNum(a) === dayNum(b)
}

/** 목록용 날짜: 오늘이면 시각, 어제, 같은 해면 월일 */
export function listDate(iso: string, now: string, lang: Lang) {
  const diff = dayNum(now) - dayNum(iso)
  if (diff <= 0) return time(iso, lang)
  if (diff === 1) return lang === 'ko' ? '어제' : '昨天'
  const p = parts(iso)
  if (p.y === parts(now).y) return lang === 'ko' ? `${p.m}월 ${p.d}일` : `${p.m}月${p.d}日`
  return `${p.y}. ${p.m}. ${p.d}.`
}

export function monthDay(iso: string, lang: Lang) {
  const p = parts(iso)
  return lang === 'ko' ? `${p.m}월 ${p.d}일 (${WD_KO[p.wd]})` : `${p.m}月${p.d}日（${WD_ZH[p.wd]}）`
}

export function duration(sec: number, lang: Lang) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  if (lang === 'ko') return m ? `${m}분 ${pad(s)}초` : `${s}초`
  return m ? `${m}分${pad(s)}秒` : `${s}秒`
}

export const ms = (iso: string) => new Date(iso).getTime()

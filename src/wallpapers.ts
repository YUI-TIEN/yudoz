import type { PhoneStory } from './story/types'

/** 겹친 radial-gradient로 iOS 기본 배경화면 같은 깊이감을 낸다 */
const PRESETS = [
  // 0: 폰 주인 기본 (스토리에서 지정)
  '',
  // 1: 새벽
  'radial-gradient(120% 70% at 15% 0%, #ffd9b8 0%, transparent 55%), radial-gradient(90% 60% at 100% 35%, #f59ab7 0%, transparent 60%), radial-gradient(120% 80% at 30% 100%, #4b3f8f 0%, transparent 70%), linear-gradient(170deg, #f7b89b, #6b5aa8)',
  // 2: 밤하늘
  'radial-gradient(2px 2px at 20% 18%, #fff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 70% 12%, #fff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 45% 30%, #dfe8ff 50%, transparent 51%), radial-gradient(2px 2px at 85% 40%, #fff 50%, transparent 51%), radial-gradient(120% 80% at 50% 110%, #3b4f9a 0%, transparent 65%), linear-gradient(180deg, #05060f, #141b3d 60%, #2a3570)',
  // 3: 복숭아
  'radial-gradient(100% 70% at 80% 10%, #fff1e6 0%, transparent 55%), radial-gradient(100% 70% at 0% 60%, #ffb3a7 0%, transparent 60%), radial-gradient(120% 70% at 70% 100%, #ff7aa2 0%, transparent 70%), linear-gradient(165deg, #ffd6c4, #f08aa6)',
]

export function wallpaperOf(story: PhoneStory, idx: number) {
  return idx > 0 && PRESETS[idx] ? PRESETS[idx] : story.wallpaper
}

export const WALLPAPER_PREVIEWS = (story: PhoneStory) => PRESETS.map((p, i) => (i === 0 ? story.wallpaper : p))

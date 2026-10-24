import { kst, ms } from '../time'
import type { L } from '../i18n'
import type { PhoneStory } from './types'

/**
 * 신유 폰: 달달한 비밀연애 디테일을 폰 전체에 흩어 놓는다 (팬메이드 허구).
 * 카톡 밖에서도 같은 사건(목도리, 귀 신호, 편의점 라면, 6층, 유자차)이 서로 이어지도록.
 */

const x = (ko: string, zh: string): L => ({ ko, zh })

export function addSweet(s: PhoneStory) {
  const ig = s.extra.instagram
  ig.users['yudoz.archive'] = { name: x('유도즈 아카이브', '惟勳存檔'), bio: x('fan account · 사진 출처 표기', 'fan account · 照片標註出處'), posts: 412, followers: '88K', following: '7' }
  ig.users['42.moonlight'] = { name: '42 🌙', posts: 51, followers: '3.2K', following: '120' }

  ig.feed.push(
    {
      id: 'sw1',
      by: 'hoon.wolf',
      pic: { emoji: '🧣', tint: '#7a2e3b' },
      caption: x('메리 크리스마스 🎄 (목도리 선물 아님. 그냥 산 거임)', '聖誕快樂 🎄（圍巾不是禮物。只是自己買的）'),
      likes: 934210,
      at: kst('2025-12-25 12:00'),
      comments: [
        { by: 'yu.42_', text: x('잘 어울린다', '很適合你') },
        { by: 'kyungmin.p', text: x('형 어제 이거 두 개 샀던데', '哥昨天明明買了兩條') },
        { by: 'hoon.wolf', text: x('@kyungmin.p 하나는 예비용', '@kyungmin.p 一條是備用的') },
        { by: 'yudoz.archive', text: x('신유 오늘 출근길 목도리 색이랑 똑같은데요...?', '跟申惟今天上班路的圍巾顏色一模一樣……？') },
      ],
    },
    {
      id: 'sw2',
      by: 'yu.42_',
      pic: { emoji: '🎆', tint: '#20264a' },
      caption: x('올해도 잘 부탁해 🩵', '今年也請多指教 🩵'),
      likes: 1102003,
      at: kst('2026-01-01 00:05'),
      comments: [
        { by: 'hoon.wolf', text: x('올해만요?', '只有今年？') },
        { by: 'yu.42_', text: x('@hoon.wolf 계속', '@hoon.wolf 一直') },
        { by: 'jihoon_06', text: x('형들 둘이 뭐해요', '哥哥們你們兩個在幹嘛') },
        { by: '42.moonlight', text: x('계속.......? 계속이요......?', '一直……？一直嗎……？') },
      ],
    },
    {
      id: 'sw3',
      by: 'hoon.wolf',
      pic: { emoji: '🌙', tint: '#1c1f33' },
      caption: x('달 사진 저장용 🌙', '存月亮照片用 🌙'),
      likes: 721004,
      at: kst('2026-01-03 22:20'),
      comments: [
        { by: 'jihoon_06', text: x('아 감성~', '喔～好有感覺') },
        { by: 'yu.42_', text: x('예쁘다', '好漂亮') },
        { by: 'hoon.wolf', text: x('@yu.42_ 달이요?', '@yu.42_ 月亮嗎？') },
        { by: 'yu.42_', text: x('@hoon.wolf 응 달', '@hoon.wolf 嗯 月亮') },
      ],
    },
    {
      id: 'sw4',
      by: 'yu.42_',
      pic: { emoji: '🗼', tint: '#2a2140' },
      caption: x('도쿄 🗼 18층', '東京 🗼 18樓'),
      likes: 988120,
      at: kst('2026-01-13 00:10'),
      comments: [
        { by: 'hoon.wolf', text: x('12층에서도 보여요', '12樓也看得到') },
        { by: 'hanjin.zz', text: x('저는 3층이라 안 보여요 형들', '我在3樓看不到 哥哥們') },
        { by: 'yudoz.archive', text: x('층수 공개하는 아이돌 처음 봄', '第一次看到公開樓層的偶像') },
      ],
    },
    {
      id: 'sw5',
      by: 'yudoz.archive',
      pic: { emoji: '🍳', tint: '#f6e7a8' },
      caption: x('[직캠 캡처] 도쿄 조식 비하인드: 계란말이 경민 1개 도훈 3개. 리더의 공평함 어디 감', '[直拍截圖] 東京早餐幕後：玉子燒 炅潣1個 道勳3個。隊長的公平去哪了'),
      likes: 41200,
      at: kst('2026-01-14 19:00'),
      comments: [{ by: 'kyungmin.p', text: x('이거 저도 봤어요 서운합니다', '這個我也看到了 很難過') }],
    },
  )

  const story = {
      by: 'hoon.wolf',
      frames: [
        { emoji: '🍋', tint: '#f6e7a8', text: x('목 아픈 사람 보세요', '給喉嚨痛的人') },
        { emoji: '🌙', tint: '#1c1f33', text: x('내일 생일인 사람이 아니라 내일 생일인 사람 챙기는 사람 챙기는 중', '不是在照顧明天生日的人，是在照顧那個照顧明天生日的人的人') },
      ],
    }
  const same = ig.stories.find((st) => st.by === story.by)
  if (same) same.frames = [...story.frames, ...same.frames]
  else ig.stories.unshift(story)
  ig.highlights.unshift({
    title: '🧣',
    frames: [
      { emoji: '🧣', tint: '#7a2e3b', text: x('따뜻함', '很暖') },
      { emoji: '🎄', tint: '#1f3b2c', text: x('12.24', '12.24') },
    ],
  })

  const dm = ig.dms.find((d) => d.with === 'hoon.wolf')
  if (dm) {
    dm.messages.push(
      { from: 'hoon.wolf', text: x('형 게시물 댓글 "계속" 이거 뭐예요', '哥貼文留言的「一直」是什麼'), at: kst('2026-01-01 00:20') },
      { from: 'hoon.wolf', text: x('팬분들 지금 난리났어요', '粉絲現在炸鍋了'), at: kst('2026-01-01 00:20') },
      { from: 'yu.42_', text: x('올해만이냐길래', '因為有人問只有今年嗎'), at: kst('2026-01-01 00:22') },
      { from: 'hoon.wolf', text: x('...그건 🌙 에서 대답해야죠', '……那應該在 🌙 回答吧'), at: kst('2026-01-01 00:22') },
      { from: 'yu.42_', text: x('거기서도 했어', '那邊也回了'), at: kst('2026-01-01 00:23') },
      { from: 'hoon.wolf', text: x('[게시물 공유] 귀 만지는 신유 모음.zip', '[分享貼文] 摸耳朵的申惟合集.zip'), at: kst('2026-01-02 02:10') },
      { from: 'hoon.wolf', text: x('형 이거 12개예요', '哥這有12個'), at: kst('2026-01-02 02:10') },
      { from: 'yu.42_', text: x('12번 좋아한 거네', '那就是喜歡了12次'), at: kst('2026-01-02 02:12') },
      { from: 'hoon.wolf', text: x('형 DM에서 그런 말 하면 안 돼요 🐺', '哥不能在DM說這種話 🐺'), at: kst('2026-01-02 02:12') },
    )
    dm.messages.sort((a, b) => ms(a.at) - ms(b.at))
  }

  /* X 타임라인: 팬들이 눈치챈 것들 */
  const xs = s.extra.x
  xs.accounts['ear_touch_42'] = { name: x('신유 귀 만지기 카운터', '申惟摸耳朵計數器'), bio: x('세는 중', '計數中'), followers: '11K', following: '2' }
  xs.timeline.push(
    { id: 'sw-t1', by: 'yudoz_moment', text: x('연말무대 엔딩 신유 귀 3번 만짐 + 도훈 대각선에서 인이어 고치는 척 귀 1번... 이거 우연 아니지', '年末舞台ending申惟摸了3次耳朵 + 道勳在斜對角假裝調耳返摸了1次……這不是巧合吧'), at: kst('2025-12-31 23:10'), likes: 52100, rts: 21000, replies: 1400, pic: { emoji: '👂', tint: '#f6d4d9' } },
    { id: 'sw-t2', by: 'ear_touch_42', text: x('1월 누적: 신유 귀 만지기 47회. 그중 41회 도훈 시야 안', '一月累計：申惟摸耳朵47次。其中41次在道勳視線範圍內'), at: kst('2026-01-28 23:00'), likes: 30100, rts: 12000, replies: 900 },
    { id: 'sw-t3', by: '42_daily', text: x('도훈 목도리랑 신유 목도리 같은 브랜드 같은 색임. 근데 둘 다 "그냥 샀다"고 함', '道勳和申惟的圍巾是同品牌同顏色。但兩人都說「只是自己買的」'), at: kst('2025-12-26 11:20'), likes: 22300, rts: 8100, replies: 610, pic: { emoji: '🧣', tint: '#7a2e3b' } },
    { id: 'sw-t4', by: 'yudoz_moment', text: x('팬미팅 "제일 편한 멤버" 질문에 서로 이름 말하고 신유 대답 직후 귀 만짐. 저는 이제 귀만 봅니다', '粉絲見面會「最自在的成員」問題，兩人互說對方名字，申惟回答完馬上摸耳朵。我現在只看耳朵了'), at: kst('2026-01-19 22:40'), likes: 47800, rts: 19000, replies: 1200 },
    { id: 'sw-t5', by: 'tws_sparkle', text: x('대기실 브이로그에서 신유가 무대 전에 도훈 앞머리 정리해주는 거 또 나옴 🥹 이거 데뷔 때부터 하던 거잖아 아직도 해', '休息室vlog又出現申惟上台前幫道勳整理瀏海 🥹 這是從出道就在做的事，到現在還在做'), at: kst('2026-01-08 18:00'), likes: 18800, rts: 5200, replies: 330, pic: { emoji: '🪞', tint: '#e2e8f0' } },
  )
  xs.trends.push({ tag: x('#귀만지는_신유', '#摸耳朵的申惟'), count: x('게시물 2.2만', '2.2 萬則貼文') })

  /* 음악 */
  s.extra.music.push(
    {
      id: 'pl-sw1',
      title: x('🌙 듣는 중', '🌙 正在聽'),
      by: x('신유', '申惟'),
      pic: { emoji: '🌙', tint: '#1c1f33' },
      songs: [
        { title: '내가 S면 넌 나의 N이 되어줘', artist: 'TWS', dur: 182 },
        { title: 'Moonlight Hallway', artist: 'Lullaby Room', dur: 214 },
        { title: '첫 만남은 계획대로 되지 않아', artist: 'TWS', dur: 176 },
        { title: 'Two Umbrellas', artist: 'Rainy Notes', dur: 198 },
        { title: 'Scarf Weather', artist: 'Lullaby Room', dur: 201 },
      ],
    },
    {
      id: 'pl-sw2',
      title: x('편의점 가는 길', '去便利商店的路上'),
      by: x('도훈 → 신유', '道勳 → 申惟'),
      pic: { emoji: '🍜', tint: '#2b2f45' },
      songs: [
        { title: 'Hey! Hey!', artist: 'TWS', dur: 170 },
        { title: '2AM Ramen', artist: 'Midnight Store', dur: 188 },
        { title: 'BFF', artist: 'TWS', dur: 192 },
      ],
    },
  )

  /* 지도 */
  s.extra.places.push(
    { id: 'cvs', name: x('숙소 앞 편의점', '宿舍前的便利商店'), x: 54, y: 56, emoji: '🍜', kind: x('즐겨찾기', '收藏'), note: x('12/28 첫 데이트. 계란 두 개', '12/28 第一次約會。兩顆蛋') },
    { id: 'roof', name: x('숙소 옥상', '宿舍頂樓'), x: 46, y: 40, emoji: '🌙', kind: x('저장됨', '已儲存'), note: x('달 잘 보이는 곳 (도훈이 발견)', '看月亮最清楚的地方（道勳發現的）') },
    { id: 'walk', name: x('새벽 산책길', '凌晨散步路線'), x: 38, y: 58, emoji: '🌌', kind: x('저장됨', '已儲存'), note: x('가로등 3개째에서 손 잡기 (규칙)', '走到第3盞路燈牽手（規則）') },
    { id: 'shop', name: x('목도리 산 가게', '買圍巾的店'), x: 66, y: 50, emoji: '🧣', kind: x('최근', '最近'), note: x('같은 색 하나 더 남아 있었음. 다행', '同色還剩一條。幸好') },
  )

  /* 메일 */
  s.extra.mails.push(
    { id: 'sw-m1', from: 'Strike Pro Shop', subject: x('각인 주문이 접수되었습니다', '刻字訂單已受理'), body: x('각인 문구: 🎄\n※ 이모지 각인은 레이저로 진행되며 3일 소요됩니다.\n요청 사항: "공 안쪽 손가락 구멍 옆에 작게"', '刻字內容：🎄\n※ 表情符號以雷射刻製，需 3 天。\n備註：「刻在球內側指洞旁邊，小小的」'), at: kst('2026-01-25 13:02') },
    { id: 'sw-m2', from: '실버 공방', subject: x('[배송 완료] 체인 목걸이 2개', '[已送達] 項鍊鍊子 2 條'), body: x('반지 걸이용 체인 (45cm) × 2\n선물 포장: 1개만', '掛戒指用的鍊子（45cm）× 2\n禮物包裝：只包 1 條'), at: kst('2025-12-30 16:40') },
    { id: 'sw-m3', from: '포토 인화', subject: x('인화 주문 완료 (1장)', '沖印訂單完成（1 張）'), body: x('사이즈: 지갑 사진\n파일명: 12_25_balcony.jpg', '尺寸：錢包照\n檔名：12_25_balcony.jpg'), at: kst('2026-01-10 11:00') },
  )

  /* 음성 메모 */
  s.voice.push(
    { id: 'sw-v4', title: x('연습실 새벽 (도훈 카운트)', '練習室凌晨（道勳數拍子）'), at: kst('2025-03-20 02:40'), seconds: 26, transcript: x('파이브 식스 세븐 에잇... 형 숨 여기서 쉬어요. 여기. ...맞았다! 형 맞았어요! (웃음) 형 박수 쳐 줘요.', 'five six seven eight……哥在這裡換氣。這裡。……對了！哥對了！（笑）哥給我拍手。') },
    { id: 'sw-v5', title: x('빗소리 (도훈이가 추천)', '雨聲（道勳推薦的）'), at: kst('2025-04-18 23:10'), seconds: 60, transcript: x('(빗소리) ...(작게) 이거 들으면 마음이 정리된대. 정리 안 된다. 네 생각만 더 난다.', '（雨聲）……（小聲）聽說聽這個心情會整理好。整理不好。只會更想你。') },
    { id: 'sw-v6', title: x('12월 25일 새벽', '12月25日凌晨'), at: kst('2025-12-25 01:40'), seconds: 33, transcript: x('(숨 고르는 소리) ...방금 있었던 일 잊어버릴까 봐 녹음해 둠. 도훈이가 좋아한대. 나를. (웃음) 칸막이가 낮아서 다행이다. 진짜 다행이다.', '（調整呼吸的聲音）……怕忘記剛剛發生的事所以錄下來。道勳說他喜歡。我。（笑）幸好隔板很矮。真的太好了。') },
    { id: 'sw-v7', title: x('콧노래 (생일 노래 편곡)', '哼歌（生日歌改編）'), at: kst('2026-01-22 03:00'), seconds: 52, transcript: x('흠~ 흠흠~ 생일 축하합니다~ 여기서 화음 올리고... 도훈이 파트는 내가 낮게... 아 이거 들키면 안 되는데.', '哼～哼哼～祝你生日快樂～這裡和聲往上……道勳的部分我唱低一點……啊，這個不能被發現。') },
    { id: 'sw-v1', title: x('잠꼬대 (도훈)', '夢話（道勳）'), at: kst('2026-01-13 07:05'), seconds: 14, transcript: x('(작게) 형... 계란 두 개... 아니 세 개... (웃음 참는 소리) ...형 거.', '（小聲）哥……兩顆蛋……不對三顆……（憋笑的聲音）……哥的。') },
    { id: 'sw-v2', title: x('베란다', '陽台'), at: kst('2026-01-27 02:35'), seconds: 22, transcript: x('(바람 소리) ...춥다. (옆 창문 열리는 소리) 왔네. ...아무 말 안 해도 되는 거 좋다.', '（風聲）……好冷。（旁邊窗戶打開的聲音）來了。……不說話也可以的感覺，真好。') },
    { id: 'sw-v3', title: x('편지 소리 내서 읽기 (7번째)', '把信唸出來（第 7 次）'), at: kst('2026-01-29 22:50'), seconds: 41, transcript: x('도훈아 생일 축하해. 처음 연습실에서 거울 보고 손하트 했던 날 기억나? ...아 여기서 목소리 떨린다. 다시.', '道勳，生日快樂。還記得第一次在練習室對著鏡子比手指愛心的那天嗎？……啊，這裡聲音在抖。重來。') },
  )

  s.voice.sort((a, b) => ms(b.at) - ms(a.at))

  /* 검색 기록 */
  s.searches.unshift(
    { q: x('같은 색 목도리 티 나나', '同色圍巾會不會很明顯'), result: [{ title: x('커플템 들키지 않는 법', '情侶單品不被發現的方法'), body: x('브랜드는 같게, 매는 방법은 다르게…', '品牌一樣，圍法不一樣…') }] },
    { q: x('귀 만지는 버릇 의미', '摸耳朵習慣的意義'), result: [{ title: x('귀를 자주 만지는 사람의 심리', '常摸耳朵的人的心理'), body: x('긴장하거나, 좋아하는 사람 앞에서…', '緊張的時候，或是在喜歡的人面前…') }] },
    { q: x('유자차 꿀 몇 스푼', '柚子茶加幾匙蜂蜜'), result: [{ title: x('목에 좋은 유자차 황금 비율', '對喉嚨好的柚子茶黃金比例'), body: x('꿀 두 스푼이면 충분해요', '兩匙蜂蜜就夠了') }] },
  )

  /* 통화 기록 (🌙 번호) */
  s.calls.push(
    { at: kst('2026-01-13 00:30'), contactId: 'moon', type: 'incoming', seconds: 4820 },
    { at: kst('2026-01-27 02:22'), contactId: 'moon', type: 'outgoing', seconds: 1210 },
  )
  s.calls.sort((a, b) => ms(b.at) - ms(a.at))

  /* 알람 */
  s.alarms.push({ time: '07:50', label: x('🌙 깨우기 (문 두 번 노크)', '叫 🌙 起床（敲門兩下）'), on: true })

  /* 메모: 달달 리스트 */
  s.notes.push(
    {
      id: 'sw-n1',
      title: x('도훈이가 좋아하는 것', '道勳喜歡的東西'),
      at: kst('2026-01-20 01:30'),
      body: x(
        '도훈이가 좋아하는 것\n\n- 바나나우유 (빨대 꽂아서 주면 더 좋아함)\n- 라면에 계란 두 개\n- 소파 왼쪽 자리\n- 내가 앞머리 넘겨주는 거 (말은 안 함)\n- 달 사진\n- 볼링에서 나 이기는 거\n- 내가 귀 만지는 거 ← 최근 추가\n- 새벽 산책 가로등 세 번째\n\n싫어하는 것\n- 내가 멀어지는 거 (1/6에 배움)',
        '道勳喜歡的東西\n\n- 香蕉牛奶（插好吸管給他會更開心）\n- 泡麵加兩顆蛋\n- 沙發左邊的位子\n- 我幫他撥瀏海（雖然他不說）\n- 月亮照片\n- 打保齡球贏我\n- 我摸耳朵 ← 最近新增\n- 凌晨散步的第三盞路燈\n\n討厭的東西\n- 我變得疏遠（1/6 學到的）',
      ),
    },
    {
      id: 'sw-n2',
      title: x('같이 하고 싶은 것', '想一起做的事'),
      at: kst('2026-01-02 02:00'),
      body: x(
        '같이 하고 싶은 것\n\n☑ 베란다에서 같이 하늘 보기\n☑ 편의점 데이트\n☑ 무대에서 몰래 신호 보내기\n☑ 같은 거 보면서 통화하기 (도쿄)\n☐ 벚꽃 보러 가기 (새벽에, 마스크 쓰고)\n☐ 바다 (촬영 말고)\n☐ 도훈이 생일 0시에 1등 하기\n☐ 언젠가 볼링 이기기\n☐ 1년 뒤에도 이 리스트 보면서 웃기',
        '想一起做的事\n\n☑ 在陽台一起看天空\n☑ 便利商店約會\n☑ 在舞台上偷偷傳暗號\n☑ 看著同樣的東西講電話（東京）\n☐ 去看櫻花（凌晨，戴口罩）\n☐ 海邊（不是拍攝）\n☐ 道勳生日零點拿第一\n☐ 總有一天打保齡球贏他\n☐ 一年後看著這份清單也能笑',
      ),
    },
  )

  /* 사진 (일반 앨범) */
  s.photos.push(
    { id: 'sw-p1', at: kst('2025-12-25 08:30'), emoji: '🧣', tint: '#7a2e3b', caption: x('출근길 거울 셀카 (목도리)', '上班路上的鏡子自拍（圍巾）') },
    { id: 'sw-p2', at: kst('2026-01-13 08:15'), emoji: '🍳', tint: '#f6e7a8', caption: x('조식. 계란말이 세 개 담긴 접시 (내 거 아님)', '早餐。裝了三個玉子燒的盤子（不是我的）') },
    { id: 'sw-p3', at: kst('2026-01-19 21:00'), emoji: '🎤', tint: '#f6d4d9', caption: x('팬미팅 대기실, 도훈이 뒷모습', '粉絲見面會休息室，道勳的背影') },
  )

  /* 캘린더 */
  s.calendar.push(
    { date: '2026-01-12', title: x('도쿄 (6층 차이)', '東京（差 6 層樓）'), color: '#ff375f' },
    { date: '2026-03-14', title: x('🫶 3주년', '🫶 三週年'), color: '#ff375f' },
    { date: '2026-04-05', title: x('벚꽃? (새벽)', '櫻花？（凌晨）'), color: '#ff375f' },
  )

  /* ChatGPT */
  s.ai.push({
    id: 'g-sweet',
    when: 'week',
    title: x('생일 0시에 보낼 한 문장', '生日零點要傳的一句話'),
    turns: [
      {
        q: x('제일 소중한 사람 생일 0시에 보낼 한 문장 추천해줘. 길면 안 돼', '推薦一句要在最重要的人生日零點傳的話。不能太長'),
        a: x(
          '짧고 오래 남는 문장 몇 가지예요.\n\n1. **"올해 첫 번째로 축하하고 싶었어."**\n2. **"태어나줘서 고마워. 그리고 내 옆에 있어줘서."**\n3. **"오늘은 네가 주인공이야. 나는 1등 관객."**\n\n둘만 아는 기호(이모지 하나)를 끝에 붙이면 더 특별해져요.',
          '幾句簡短又能留很久的話：\n\n1. **「想當今年第一個祝福你的人。」**\n2. **「謝謝你出生。還有謝謝你在我身邊。」**\n3. **「今天你是主角，我是第一排的觀眾。」**\n\n最後加上只有你們懂的符號（一個表情符號），會更特別。',
        ),
      },
      {
        q: x('2번에 🌙 붙이면 이상해?', '第2句加上 🌙 會很奇怪嗎？'),
        a: x('전혀요. 두 분에게 의미가 있는 기호라면 **그 하나가 문장 전체보다 많은 말을 해요.** 🌙', '完全不會。如果那是對兩位有意義的符號，**那一個符號會比整句話說得更多。** 🌙'),
      },
    ],
  })
}

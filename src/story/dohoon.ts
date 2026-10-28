import { kst, ms } from '../time'
import { applyTracesDohoon } from './abo/traces'
import { applyTraineeDohoon } from './abo/trainee'
import { applyAbo } from './abo/dohoon'
import { ficNotes } from './dohoonFic'
import { addIg } from './dohoonIg'
import { addSweet } from './dohoonSweet'
import type { ChatMsg, PhoneStory } from './types'
import { moreShinyu, moreCalendar, moreNotes, morePhotos, moreRooms, moreSearches, moreTriggers } from './dohoonMore'
import { dohoonExtra } from './dohoonExtra'
import { dohoonGpt } from './gpt'
import { secretCalendar, secretContact, secretNotes, secretPhotos, secretPlaylist, secretRoom, secretTriggers } from './dohoonSecret'
import { moreSecretCal, moreSecretPhotos, moreSky, moreKyungmin, novelNotes, secretGpt, secretTweets } from './dohoonSecret2'

/** [시각, 보낸 사람, 한국어, 중국어] */
type Row = [string, string, string, string]
const rows = (list: Row[]): ChatMsg[] => list.map(([at, from, ko, zh]) => ({ at: kst(at), from, text: { ko, zh } }))

const ME = 'me'

export const dohoon: PhoneStory = {
  id: 'dohoon',
  owner: { name: { ko: '도훈', zh: '道勳' }, device: { ko: '도훈의 iPhone', zh: '道勳的 iPhone' }, status: { ko: '줏대 있게 살자', zh: '活得有主見一點' } },
  accent: '#ff8fb1',
  wallpaper:
    'radial-gradient(110% 65% at 90% 0%, #ffe3ec 0%, transparent 55%), radial-gradient(90% 60% at 0% 35%, #ff9dbd 0%, transparent 60%), radial-gradient(120% 70% at 80% 85%, #8a3f6d 0%, transparent 65%), radial-gradient(100% 60% at 0% 100%, #2b1430 0%, transparent 70%), linear-gradient(165deg, #ffc8da, #c4618d 55%, #3a1838)',
  lockEmoji: '🐺',
  passcode: '1107',
  startAt: kst('2026-11-06 23:57'),
  wifi: 'TWS_42_5G',
  devices: [{ ko: '도훈의 AirPods Pro', zh: '道勳的 AirPods Pro' }, { ko: '숙소 거실 TV', zh: '宿舍客廳電視' }],

  lockNotices: [
    {
      app: 'kakao',
      icon: '💬',
      title: { ko: '형 생일 작전방 (신유형 X) · 영재', zh: '哥生日作戰群（申惟哥不在）· 英宰' },
      body: { ko: '도훈아 너 폰 비번 신유 생일로 바꿨다며 ㅋㅋ', zh: '道勳啊 聽說你把手機密碼改成申惟的生日了ㅋㅋ' },
      time: { ko: '2분 전', zh: '2 分鐘前' },
    },
    {
      app: 'calendar',
      icon: '📅',
      title: { ko: '캘린더 · 내일', zh: '行事曆 · 明天' },
      body: { ko: '🎂 신유형 생일 (11월 7일)', zh: '🎂 申惟哥生日（11月7日）' },
      time: { ko: '오후 9:00', zh: '下午9:00' },
    },
  ],

  contacts: {
    shinyu: { name: { ko: '신유형', zh: '申惟哥' }, status: { ko: '42 🩵', zh: '42 🩵' }, phone: '010-1107-2003' },
    kyungmin: { name: { ko: '경민이', zh: '炅潣' }, phone: '010-2007-0416' },
    jihoon: { name: { ko: '지훈이', zh: '志薰' }, phone: '010-2006-0328' },
    youngjae: { name: { ko: '영재형', zh: '英宰哥' }, phone: '010-2005-0531' },
    hanjin: { name: { ko: '한진이', zh: '韓振' }, phone: '010-2006-0102' },
    mom: { name: { ko: '엄마', zh: '媽媽' }, phone: '010-6612-3045' },
    manager: { name: { ko: '매니저형', zh: '經紀人哥' }, phone: '010-3392-1180' },
  },

  rooms: [
    {
      id: 'shinyu',
      contactId: 'shinyu',
      messages: [
        ...rows([
          ['2026-01-30 00:00', 'shinyu', '도훈아 생일 축하해', '道勳啊 生日快樂'],
          ['2026-01-30 00:01', ME, '형 이번에도 12시 정각이네요', '哥這次也是十二點整欸'],
          ['2026-01-30 00:01', 'shinyu', '원래 그래', '本來就這樣'],
          ['2026-01-30 00:02', ME, '편지 아직 저장해놨어요', '信我還存著喔'],
          ['2026-01-30 00:02', 'shinyu', '지워', '刪掉'],
          ['2026-01-30 00:02', ME, '싫은데요 🐺', '不要 🐺'],

          ['2026-07-14 23:50', 'shinyu', '도훈아 잠깐 구석으로 와봐', '道勳啊 過來角落一下'],
          ['2026-07-14 23:50', ME, '형 지금 밤 12시예요', '哥現在晚上十二點欸'],
          ['2026-07-14 23:51', 'shinyu', '그러니까 와', '所以才叫你來'],
          ['2026-07-14 23:58', ME, '라면 끓여준다고 하면 갈게요', '說要煮泡麵給我的話我就去'],
          ['2026-07-14 23:58', 'shinyu', '이미 물 올림', '水已經燒了'],
          ['2026-07-14 23:58', ME, '가요', '來了'],

          ['2026-08-22 21:10', 'shinyu', '볼링 리매치 언제 할래', '保齡球復仇戰什麼時候比'],
          ['2026-08-22 21:12', ME, '형 아직도 1월 거 생각해요?', '哥還在想一月那場？'],
          ['2026-08-22 21:12', 'shinyu', '118 대 121이었어', '是 118 比 121'],
          ['2026-08-22 21:12', 'shinyu', '3점 차이', '差三分'],
          ['2026-08-22 21:13', ME, '정확하게 기억하네ㅋㅋㅋㅋ', '記得好清楚ㅋㅋㅋㅋ'],
          ['2026-08-22 21:13', 'shinyu', '메모해놨지', '我有記在備忘錄'],

          ['2026-09-30 02:14', 'shinyu', '너 또 소파지', '你又在沙發了吧'],
          ['2026-09-30 07:30', ME, '형 담요 고마워요', '哥 謝謝毯子'],
          ['2026-09-30 07:31', 'shinyu', '방에서 자라니까', '叫你回房間睡'],
          ['2026-09-30 07:31', ME, '형이 덮어주니까 계속 소파에서 자는 건데', '因為哥會幫我蓋，所以我才一直睡沙發的'],
          ['2026-09-30 07:33', 'shinyu', '...', '……'],
          ['2026-09-30 07:33', 'shinyu', '내일부터 안 덮어줌', '明天開始不幫你蓋了'],
          ['2026-09-30 07:34', ME, '거짓말 🐺', '騙人 🐺'],

          ['2026-10-18 16:20', ME, '형 그거 기억나요?', '哥記得那個嗎？'],
          ['2026-10-18 16:20', ME, '연습생 때 내가 형 볼 때마다 손하트 했던 거', '練習生時我每次看到哥都比手指愛心'],
          ['2026-10-18 16:24', 'shinyu', '당연하지', '當然'],
          ['2026-10-18 16:24', 'shinyu', '갑자기 왜', '怎麼突然問'],
          ['2026-10-18 16:25', ME, '그냥요', '沒什麼'],
          ['2026-10-18 16:25', ME, '형 그때 진짜 낯가렸는데', '哥那時候真的很怕生'],
          ['2026-10-18 16:26', 'shinyu', '너도 그때 엄청 차가워 보였어', '你那時候看起來也超冷淡'],
          ['2026-10-18 16:26', ME, '근데 손하트는 했잖아요', '但我有比愛心啊'],
          ['2026-10-18 16:27', 'shinyu', '그래서 고마웠지', '所以我很感謝'],
          ['2026-10-18 16:27', 'shinyu', 'ㅋㅋ', 'ㅋㅋ'],

          ['2026-11-06 20:40', 'shinyu', '도훈아 내일 몇 시 출발이야', '道勳啊明天幾點出發'],
          ['2026-11-06 20:52', ME, '11시요', '十一點'],
          ['2026-11-06 20:53', 'shinyu', '근데 오늘 왜 다들 나 피해', '可是今天大家怎麼都在躲我'],
          ['2026-11-06 20:58', ME, '기분 탓이에요', '是哥的錯覺'],
          ['2026-11-06 20:58', 'shinyu', '경민이가 나 보자마자 방으로 뛰어 들어갔어', '炅潣一看到我就衝回房間了'],
          ['2026-11-06 21:01', ME, '경민이 원래 그래요', '炅潣本來就那樣'],
        ]),
      ],
    },
    {
      id: 'plan',
      group: { name: { ko: '형 생일 작전방 (신유형 X)', zh: '哥生日作戰群（申惟哥不在）' }, members: ['youngjae', 'hanjin', 'jihoon', 'kyungmin'] },
      unread: 2,
      messages: rows([
        ['2026-11-01 19:00', ME, '신유형 생일 0시 서프라이즈 할 거예요', '申惟哥生日零點要辦驚喜'],
        ['2026-11-01 19:00', 'hanjin', '좋아요!!', '好啊!!'],
        ['2026-11-01 19:01', 'jihoon', '작년에 형이 도훈이형한테 해준 거 갚는 거죠', '是要回報去年哥幫道勳哥辦的那次吧'],
        ['2026-11-01 19:01', ME, '맞아', '對'],
        ['2026-11-01 19:02', 'kyungmin', '형 케이크는 뭐로 해요', '哥蛋糕要什麼'],
        ['2026-11-01 19:03', ME, '형 생크림 좋아해 과일 많은 거', '哥喜歡鮮奶油的 水果多的'],
        ['2026-11-01 19:03', 'youngjae', '오 바로 나옴', '喔秒答'],
        ['2026-11-01 19:04', 'jihoon', '작년에 신유형도 바로 대답했는데', '去年申惟哥也是秒答'],
        ['2026-11-06 22:10', 'kyungmin', '아까 형한테 들킬 뻔했어요', '剛剛差點被哥發現'],
        ['2026-11-06 22:10', 'kyungmin', '그래서 방으로 뛰어감', '所以我衝回房間了'],
        ['2026-11-06 22:11', ME, '그거 형이 나한테 물어봤어', '哥有來問我那件事'],
        ['2026-11-06 23:30', 'youngjae', '케이크 픽업 완료', '蛋糕取好了'],
        ['2026-11-06 23:31', 'hanjin', '편지는 형이 써요?', '信是哥寫嗎？'],
        ['2026-11-06 23:32', ME, '...썼어', '……寫了'],
        ['2026-11-06 23:55', 'youngjae', '도훈아 너 폰 비번 신유 생일로 바꿨다며 ㅋㅋ', '道勳啊 聽說你把手機密碼改成申惟的生日了ㅋㅋ'],
        ['2026-11-06 23:55', 'jihoon', '신유형이 도훈이형 생일로 해놔서 따라 한 거래요', '說是因為申惟哥設成道勳哥的生日，所以他學的'],
      ]),
    },
    {
      id: 'tws',
      group: { name: 'TWS 🩵', members: ['shinyu', 'youngjae', 'hanjin', 'jihoon', 'kyungmin'] },
      messages: rows([
        ['2026-11-06 22:00', 'shinyu', '내일 11시 출발', '明天十一點出發'],
        ['2026-11-06 22:01', 'kyungmin', '넵 리더님', '是的隊長'],
        ['2026-11-06 22:02', 'shinyu', '근데 다들 왜 단톡에서만 대답해', '可是大家怎麼都只在群組回'],
        ['2026-11-06 22:02', 'shinyu', '거실에 아무도 없어', '客廳一個人都沒有'],
        ['2026-11-06 22:04', 'hanjin', '졸려서요', '因為很睏'],
        ['2026-11-06 22:04', 'jihoon', '저도요', '我也是'],
        ['2026-11-06 22:05', 'shinyu', '10시인데', '才十點'],
      ]),
    },
    {
      id: 'mom',
      contactId: 'mom',
      messages: rows([
        ['2026-11-05 18:30', 'mom', '신유 생일이라며 선물은 샀어?', '聽說申惟生日 禮物買了嗎？'],
        ['2026-11-05 19:02', ME, '응 샀어', '嗯 買了'],
        ['2026-11-05 19:02', 'mom', '뭐 샀는데', '買什麼'],
        ['2026-11-05 19:04', ME, '볼링공', '保齡球'],
        ['2026-11-05 19:05', 'mom', '너 이기려고 산 거 아니지?', '你不是為了贏他才買的吧？'],
        ['2026-11-05 19:05', ME, 'ㅋㅋㅋㅋ 반반', 'ㅋㅋㅋㅋ 一半一半'],
      ]),
    },
    {
      id: 'manager',
      contactId: 'manager',
      messages: rows([
        ['2026-11-06 20:00', 'manager', '내일 11시 출발. 신유 생일이라 현장 서포트 있음', '明天十一點出發。因為是申惟生日，現場有應援'],
        ['2026-11-06 20:05', ME, '넵! 형 케이크 차에 실어도 돼요?', '好！哥可以把蛋糕放車上嗎？'],
        ['2026-11-06 20:06', 'manager', '오늘 밤에 쓰는 거 아니었어?', '不是今天晚上要用嗎？'],
        ['2026-11-06 20:06', ME, '두 개예요', '有兩個'],
      ]),
    },
  ],

  sms: [
    {
      id: 'bakery',
      from: { ko: '케이크 공방', zh: '蛋糕工作室' },
      messages: [
        { at: kst('2026-11-06 23:10'), text: { ko: '[Web발신]\n주문하신 생크림 과일 케이크(레터링: "형 생일 축하해요 🐺") 픽업 준비 완료되었습니다.', zh: '[網路發送]\n您訂購的鮮奶油水果蛋糕（字樣：「哥生日快樂 🐺」）已可取貨。' } },
      ],
    },
    {
      id: 'ball',
      from: { ko: '볼링샵', zh: '保齡球用品店' },
      messages: [
        { at: kst('2026-11-03 15:00'), text: { ko: '[Web발신]\n각인 볼링공(이니셜 S.Y.) 배송 출발. 11/5 도착 예정', zh: '[網路發送]\n刻字保齡球（縮寫 S.Y.）已出貨，預計 11/5 送達' } },
      ],
    },
  ],

  calls: [
    { at: kst('2026-10-20 22:40'), contactId: 'shinyu', type: 'outgoing', seconds: 1340 },
    { at: kst('2026-11-01 19:10'), contactId: 'youngjae', type: 'outgoing', seconds: 120 },
    { at: kst('2026-11-05 18:40'), contactId: 'mom', type: 'incoming', seconds: 302 },
    { at: kst('2026-11-06 21:30'), contactId: 'shinyu', type: 'missed', seconds: 0 },
    { at: kst('2026-11-06 23:31'), contactId: 'youngjae', type: 'incoming', seconds: 45 },
  ],

  notes: [
    {
      id: 'plan',
      pinned: true,
      title: { ko: '형 생일 작전 ✔︎', zh: '哥生日作戰 ✔︎' },
      at: kst('2026-11-06 23:40'),
      body: {
        ko: '형 생일 작전 ✔︎\n\n✔︎ 케이크 (생크림, 과일 많이) - 영재형 픽업\n✔︎ 볼링공 (이니셜 각인)\n✔︎ 초 24개\n✔︎ 경민이 입단속 (실패할 뻔)\n□ 0시 정각에 먼저 연락하기 ← 작년에 형이 해준 것처럼\n□ 편지 보내기',
        zh: '哥生日作戰 ✔︎\n\n✔︎ 蛋糕（鮮奶油、水果多）- 英宰哥取貨\n✔︎ 保齡球（刻縮寫）\n✔︎ 蠟燭 24 根\n✔︎ 叫炅潣閉嘴（差點失敗）\n□ 零點整先聯絡 ← 像去年哥為我做的那樣\n□ 傳信',
      },
    },
    {
      id: 'letter',
      title: { ko: '형한테 (보낼까 말까)', zh: '給哥（要不要傳）' },
      at: kst('2026-11-06 23:33'),
      body: {
        ko: `형한테 (보낼까 말까)

형 생일 축하해요.

작년에 형이 12시 땡 하자마자 보내줬잖아요.
올해는 내가 먼저 하고 싶었어요.

형은 맨날 리더니까 리더니까 하는데
나한텐 그냥 신유형이에요.
구석으로 끌고 가서 하는 얘기들, 사실 다 기억하고 있어요.

소파에서 자는 거 이제 안 할게요.
…아마도.

볼링공은 형이 이기라고 산 거예요.
근데 봐주진 않을 거예요 🐺

태어나줘서 고마워요, 형.

— 도훈`,
        zh: `給哥（要不要傳）

哥生日快樂。

去年哥十二點一到就傳給我了對吧。
今年我想先說。

哥總是說因為我是隊長、因為我是隊長，
可是對我來說你就只是申惟哥。
那些被拖到角落說的話，其實我全都記得。

我以後不會再睡沙發了。
……大概吧。

保齡球是買給哥讓你贏的。
不過我不會放水喔 🐺

謝謝你出生，哥。

—— 道勳`,
      },
    },
    {
      id: 'likes',
      title: { ko: '형이 좋아하는 것 (몰래 조사)', zh: '哥喜歡的東西（偷偷調查）' },
      at: kst('2026-10-25 01:12'),
      body: {
        ko: '형이 좋아하는 것 (몰래 조사)\n\n- 생크림 케이크\n- 볼링 (못 치는데 좋아함)\n- 12시 정각\n- 단체 사진 찍을 때 가운데\n- 구석 (?)',
        zh: '哥喜歡的東西（偷偷調查）\n\n- 鮮奶油蛋糕\n- 保齡球（打不好但很喜歡）\n- 十二點整\n- 拍團體照時站中間\n- 角落（？）',
      },
    },
    {
      id: 'heart',
      title: { ko: '연습생 때', zh: '練習生時期' },
      at: kst('2026-10-18 16:30'),
      body: {
        ko: '연습생 때\n\n형이 낯가리는 게 보여서\n마주칠 때마다 손하트 함.\n처음엔 형이 당황했는데\n어느 날부터 형도 같이 해줌.\n\n그날이 좀 좋았음.',
        zh: '練習生時期\n\n看得出哥很怕生，\n所以每次碰到都比手指愛心。\n一開始哥很慌張，\n不知道從哪天開始哥也會比回來。\n\n那天有點開心。',
      },
    },
  ],

  photos: [
    { id: 'p1', at: kst('2026-01-10 21:20'), emoji: '😴', tint: '#d9d3ef', caption: { ko: '"형 웃긴거" 폴더 #1 대기실에서 조는 형', zh: '「哥好笑的」資料夾 #1 在休息室打瞌睡的哥' } },
    { id: 'p2', at: kst('2026-01-30 00:05'), emoji: '🎂', tint: '#f7e3ea', caption: { ko: '작년 내 생일 0시 케이크', zh: '去年我生日零點的蛋糕' } },
    { id: 'p3', at: kst('2026-01-31 22:40'), emoji: '🎳', tint: '#c9d8f5', caption: { ko: '118 : 121 (형 표정)', zh: '118 : 121（哥的表情）' } },
    { id: 'p4', at: kst('2026-07-15 00:10'), emoji: '🍜', tint: '#f3dcc4', caption: { ko: '구석에서 끓여준 라면', zh: '在角落煮給我的泡麵' } },
    { id: 'p5', at: kst('2026-09-30 07:29'), emoji: '🛋️', tint: '#e2d6cc', caption: { ko: '또 덮여 있던 담요', zh: '又被蓋上的毯子' } },
    { id: 'p6', at: kst('2026-11-05 16:00'), emoji: '🎁', tint: '#e8f0d8', caption: { ko: '각인 볼링공 S.Y.', zh: '刻字保齡球 S.Y.' } },
  ],

  searches: [
    {
      q: { ko: '형 생일 서프라이즈 아이디어', zh: '哥哥生日驚喜 點子' },
      result: [
        { title: { ko: '룸메이트 생일 서프라이즈 BEST 5', zh: '室友生日驚喜 BEST 5' }, body: { ko: '1. 0시 정각 문 두드리기 2. 숨겨둔 케이크 3. 손편지…', zh: '1. 零點整敲門 2. 藏好的蛋糕 3. 手寫信…' } },
      ],
    },
    {
      q: { ko: '볼링공 각인', zh: '保齡球 刻字' },
      result: [{ title: { ko: '이니셜 각인 볼링공 제작', zh: '縮寫刻字保齡球訂製' }, body: { ko: '제작 기간 3~5일, 최대 영문 4자', zh: '製作時間 3~5 天，最多 4 個英文字' } }],
    },
    {
      q: { ko: '편지 보낼까 말까', zh: '信 要不要傳' },
      result: [{ title: { ko: '고민될 땐 보내세요', zh: '猶豫的時候就傳吧' }, body: { ko: '보내지 않은 편지는 아무것도 바꾸지 못합니다.', zh: '沒傳出去的信什麼都改變不了。' } }],
    },
    { q: { ko: '생크림 케이크 초 몇 개', zh: '鮮奶油蛋糕 蠟燭 幾根' }, result: [{ title: { ko: '나이만큼 꽂는 게 정석', zh: '插跟年齡一樣的數量是基本' }, body: { ko: '한국 나이로 할지 만 나이로 할지는 생일자 기분에 따라.', zh: '要用韓國歲還是實歲，看壽星心情。' } }] },
  ],

  ai: dohoonGpt,

  calendar: [
    { date: '2026-11-01', title: { ko: '작전방 개설', zh: '建立作戰群' }, color: '#ff9f0a' },
    { date: '2026-11-06', title: { ko: '케이크 픽업 (영재형)', zh: '取蛋糕（英宰哥）' }, time: '23:20', color: '#ff9f0a' },
    { date: '2026-11-07', title: { ko: '🎂 신유형 생일', zh: '🎂 申惟哥生日' }, color: '#ff375f' },
    { date: '2026-11-07', title: { ko: '스케줄 (11시 출발)', zh: '行程（十一點出發）' }, time: '11:00', color: '#30d158' },
  ],

  voice: [
    {
      id: 'v1',
      title: { ko: '생일 노래 연습', zh: '練習生日歌' },
      at: kst('2026-11-06 23:15'),
      seconds: 31,
      transcript: {
        ko: '생일 축하합니다~ 생일 축하합니다~ 사랑하는… 아 이거 마이크 켜져 있는 거 아니지? (웃음) 다시. 지훈아 화음 넣지 마.',
        zh: '祝你生日快樂～祝你生日快樂～親愛的……啊這個麥克風沒開著吧？（笑）重來。志薰不要加和聲。',
      },
    },
  ],

  alarms: [
    { time: '10:00', label: { ko: '기상 (11시 출발)', zh: '起床（十一點出發）' }, on: true },
    { time: '23:55', label: { ko: '작전 개시 🎂', zh: '作戰開始 🎂' }, on: true },
    { time: '00:00', label: { ko: '형한테 먼저 보내기', zh: '先傳給哥' }, on: true },
    { time: '07:30', label: { ko: '(주말) 볼링', zh: '（週末）保齡球' }, on: false },
  ],

  extra: dohoonExtra,

  script: [
    {
      id: 'start',
      when: 'unlock',
      delay: 1200,
      actions: [
        { t: 'msg', room: 'plan', from: 'kyungmin', text: { ko: '형 3분 남았어요!!', zh: '哥剩三分鐘!!' } },
        { t: 'msg', room: 'plan', from: 'jihoon', text: { ko: '신유형 방 문 앞 대기 중', zh: '在申惟哥房門口待命' }, gap: 2600 },
        { t: 'msg', room: 'shinyu', text: { ko: '도훈아 뭐 해', zh: '道勳啊在幹嘛' } },
      ],
    },
    {
      id: 'plan-open',
      when: 'open:plan',
      delay: 900,
      actions: [
        { t: 'msg', room: 'plan', from: 'hanjin', text: { ko: '형 문 앞에서 숨소리 들릴 것 같아요', zh: '哥我覺得在門口會被聽到呼吸聲' } },
        { t: 'msg', room: 'plan', from: 'youngjae', text: { ko: '도훈아 0시 되면 니가 먼저 보내', zh: '道勳啊零點一到你先傳' } },
      ],
    },
    {
      id: 'shinyu-open',
      when: 'open:shinyu',
      delay: 1000,
      actions: [
        { t: 'msg', room: 'shinyu', text: { ko: '다들 왜 이렇게 조용해', zh: '大家怎麼這麼安靜' } },
        { t: 'msg', room: 'shinyu', text: { ko: '너네 뭐 숨기지', zh: '你們在藏什麼吧' } },
        { t: 'msg', room: 'shinyu', text: { ko: '솔직하게 말해 도훈아', zh: '老實說道勳' } },
        {
          t: 'reply',
          room: 'shinyu',
          branches: [
            {
              id: 'spill',
              keys: ['서프라이즈', '케이크', '생일', '축하', '문앞', '선물', '편지', '驚喜', '惊喜', '蛋糕', '生日', '快樂', '快乐', '禮物', '礼物', '信'],
              replies: [
                { text: '...?' },
                { text: { ko: '서프라이즈?', zh: '驚喜？' } },
                { text: { ko: '못 들은 걸로 할게ㅋㅋㅋㅋ', zh: '我就當沒聽到ㅋㅋㅋㅋ' } },
              ],
            },
            {
              id: 'hide',
              keys: [''],
              replies: [
                { text: { ko: '수상한데', zh: '好可疑' } },
                { text: { ko: '...알겠어', zh: '……知道了' } },
                { text: { ko: '근데 1분 남았네', zh: '不過剩一分鐘了' } },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'midnight',
      when: 'branch:shinyu',
      delay: 1500,
      actions: [
        { t: 'clock', at: kst('2026-11-07 00:00') },
        { t: 'msg', room: 'plan', from: 'kyungmin', text: { ko: '지금!!!!', zh: '就是現在!!!!' }, gap: 900 },
        { t: 'msg', room: 'plan', from: 'hanjin', text: { ko: '문 두드려요', zh: '敲門' }, gap: 900 },
        { t: 'msg', room: 'plan', from: 'youngjae', text: { ko: '도훈아 빨리 보내', zh: '道勳快傳' }, gap: 1800 },
        {
          t: 'call',
          from: 'shinyu',
          lines: [
            { ko: '도훈아.', zh: '道勳。' },
            { ko: '문 앞에서 너네 숨 쉬는 소리 다 들려.', zh: '你們在門口呼吸的聲音我全都聽到了。' },
            { ko: '(웃음) 한진이 웃음 참는 소리도.', zh: '（笑）還有韓振憋笑的聲音。' },
            { ko: '…12시 됐는데, 너 나한테 먼저 보낼 거 있지 않아?', zh: '……十二點了，你不是有東西要先傳給我嗎？' },
            { ko: '작년엔 내가 먼저 했잖아.', zh: '去年是我先的嘛。' },
            { ko: '기다릴게. 문은 그다음에 열게.', zh: '我等你。門等一下再開。' },
          ],
          declinedMsg: { ko: '왜 안 받아ㅋㅋ', zh: '幹嘛不接ㅋㅋ' },
        },
      ],
    },
    {
      id: 'after-call',
      when: 'call:done',
      delay: 1200,
      actions: [
        { t: 'msg', room: 'plan', from: 'jihoon', text: { ko: '형 빨리요 초 녹아요', zh: '哥快點 蠟燭要融化了' } },
        { t: 'msg', room: 'shinyu', text: { ko: '기다리는 중', zh: '在等' } },
        {
          t: 'reply',
          room: 'shinyu',
          branches: [
            {
              id: 'letter',
              keys: [''],
              replies: [
                { text: { ko: '...', zh: '……' } },
                { text: { ko: '고마워 도훈아', zh: '謝謝你 道勳' } },
                { text: { ko: '진짜로.', zh: '真的。' } },
                { text: { ko: '이제 문 연다. 초 끄기 전에 한 번 더 말해줘 🩵', zh: '我要開門了。吹蠟燭前再說一次給我聽 🩵' } },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'epilogue',
      when: 'branch:shinyu:letter',
      delay: 6000,
      actions: [
        { t: 'msg', room: 'plan', from: 'hanjin', text: { ko: '형 문 열렸어요!!!', zh: '哥門開了!!!' } },
        { t: 'photo', room: 'plan', from: 'kyungmin', caption: { ko: '케이크 앞 신유형 (눈물 참는 중)', zh: '蛋糕前的申惟哥（忍著不哭）' } },
        { t: 'msg', room: 'plan', from: 'jihoon', text: { ko: '도훈이형이 더 울었어요 ㅋㅋㅋ', zh: '道勳哥哭得更兇ㅋㅋㅋ' }, gap: 4000 },
        { t: 'msg', room: 'shinyu', text: { ko: '도훈아', zh: '道勳啊' } },
        { t: 'msg', room: 'shinyu', text: { ko: '볼링공 봤어', zh: '我看到保齡球了' } },
        { t: 'msg', room: 'shinyu', text: { ko: 'S.Y. 이거 뭐야 ㅋㅋ', zh: 'S.Y. 這是什麼啦ㅋㅋ' } },
        { t: 'msg', room: 'shinyu', text: { ko: '...고마워. 진짜로', zh: '……謝謝。真的' }, gap: 14000 },
        { t: 'msg', room: 'shinyu', text: { ko: '근데 이걸로 나 이기라고 준 거면', zh: '不過如果這是要讓我贏才送的' } },
        { t: 'msg', room: 'shinyu', text: { ko: '봐주지 마. 진짜로 이길 거니까', zh: '不准放水。我會真的贏你' }, gap: 20000 },
        { t: 'msg', room: 'tws', from: 'youngjae', text: { ko: '신유 생일 축하해', zh: '申惟生日快樂' } },
        { t: 'msg', room: 'tws', from: 'kyungmin', text: { ko: '형 생축!!! 🩵', zh: '哥生快!!! 🩵' } },
        { t: 'msg', room: 'tws', from: 'shinyu', text: { ko: '다들 고마워 🩵 내일 11시 늦지 마', zh: '謝謝大家 🩵 明天十一點不要遲到' }, gap: 30000 },
        { t: 'msg', room: 'shinyu', text: { ko: '자냐', zh: '睡了嗎' } },
        { t: 'msg', room: 'shinyu', text: { ko: '올해는 네가 먼저였네', zh: '今年是你先說的呢' } },
        { t: 'msg', room: 'shinyu', text: { ko: '소파 말고 방에서 자 🩵', zh: '不要睡沙發，回房間睡 🩵' } },
        { t: 'msg', room: 'shinyu', text: { ko: '잘 자 도훈아', zh: '晚安 道勳' } },
        { t: 'end' },
      ],
    },
  ],
}

/* 추가 에피소드 합치기 (시간순 정렬, 같은 시각은 원래 순서 유지) */
const byTime = (a: ChatMsg, b: ChatMsg) => ms(a.at) - ms(b.at)
const mainRoom = dohoon.rooms.find((r) => r.id === 'shinyu')!
mainRoom.messages = [...moreShinyu, ...mainRoom.messages].sort(byTime)
dohoon.rooms.push(...moreRooms)
dohoon.notes.push(...moreNotes)
dohoon.photos.push(...morePhotos)
dohoon.searches.push(...moreSearches)
dohoon.calendar.push(...moreCalendar)
dohoon.script.push(...moreTriggers)

/* 숨긴 채팅방 (팬메이드 비밀연애 에피소드) */
{
  const [cid, c] = secretContact
  dohoon.contacts[cid] = c
  dohoon.rooms.push(secretRoom)
  dohoon.notes.push(...secretNotes)
  dohoon.extra.hiddenPhotos.push(...secretPhotos)
  dohoon.calendar.push(...secretCalendar)
  dohoon.extra.music.push(secretPlaylist)
  dohoon.script.push(...secretTriggers)
}

/* 비밀연애 2부: 숨긴 채팅방 추가분, 연재 소설, 사진, 비밀 계정 글, ChatGPT */
secretRoom.messages = [...secretRoom.messages, ...moreSky].sort(byTime)
dohoon.notes.push(...novelNotes)
dohoon.extra.hiddenPhotos.push(...moreSecretPhotos)
dohoon.calendar.push(...moreSecretCal)
dohoon.extra.x.posts['wolf_note'] = [...(dohoon.extra.x.posts['wolf_note'] ?? []), ...secretTweets].sort((a, b) => ms(b.at) - ms(a.at))
dohoon.ai.push(...secretGpt)
{
  const k = dohoon.rooms.find((r) => r.id === 'kyungmin')
  if (k) k.messages = [...k.messages, ...moreKyungmin].sort(byTime)
}

/* 앱 전체에 흩어진 달달한 디테일 */
addSweet(dohoon)
addIg(dohoon)
dohoon.notes.push(...ficNotes)

/* ABO 세계선 (도훈 오메가 · 신유 알파) */
applyAbo(dohoon)
applyTraineeDohoon(dohoon)
applyTracesDohoon(dohoon)

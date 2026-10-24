import { kst } from '../time'
import type { Extras } from './types'

/** 신유 폰: 스토리 밖의 생활감 콘텐츠. 모든 계정·게시물은 허구입니다. */
export const shinyuExtra: Extras = {
  instagram: {
    me: 'yu.42_',
    users: {
      'yu.42_': { name: { ko: '신유', zh: '申惟' }, bio: { ko: '🩵 42\n레인 탓 아님', zh: '🩵 42\n不是球道的問題' }, posts: 6, followers: '2.1M', following: '5' },
      'hoon.wolf': { name: { ko: '도훈', zh: '道勳' }, bio: { ko: '🐺 줏대 있게', zh: '🐺 活得有主見' }, posts: 9, followers: '1.9M', following: '5' },
      'kyungmin.p': { name: { ko: '경민', zh: '炅潣' }, posts: 7, followers: '1.6M', following: '5' },
      'jihoon_06': { name: { ko: '지훈', zh: '志薰' }, posts: 5, followers: '1.5M', following: '5' },
      'young.jae': { name: { ko: '영재', zh: '英宰' }, posts: 4, followers: '1.4M', following: '5' },
      'hanjin.zz': { name: { ko: '한진', zh: '韓振' }, posts: 6, followers: '1.5M', following: '5' },
      'tws_official': { name: 'TWS', verified: true, posts: 812, followers: '3.8M', following: '0' },
    },
    feed: [
      {
        id: 'f1',
        by: 'hoon.wolf',
        pic: { emoji: '🎳', tint: '#c9d8f5' },
        caption: { ko: '87 : 152 🐺 (형 허락받음)', zh: '87 : 152 🐺（已經哥同意）' },
        likes: 812345,
        at: kst('2025-12-14 23:30'),
        comments: [
          { by: 'yu.42_', text: { ko: '허락 안 했는데', zh: '我沒同意啊' } },
          { by: 'kyungmin.p', text: { ko: '형 레인 탓 하실 차례예요', zh: '哥輪到你怪球道了' } },
        ],
      },
      {
        id: 'f2',
        by: 'tws_official',
        pic: { emoji: '🩵', tint: '#cfe6f7' },
        caption: { ko: 'TWS 데뷔 2주년 🩵 42와 함께한 모든 순간에 감사해요 #TWS #2ndAnniversary', zh: 'TWS 出道兩週年 🩵 感謝和 42 一起的每個瞬間 #TWS #2ndAnniversary' },
        likes: 1203400,
        at: kst('2026-01-22 00:00'),
        comments: [{ by: 'hanjin.zz', text: '🩵🩵🩵' }],
      },
      {
        id: 'f3',
        by: 'kyungmin.p',
        pic: { emoji: '🍜', tint: '#f3dcc4' },
        caption: { ko: '야식 금지인데 형들이 먼저 먹음', zh: '說好禁止宵夜，結果哥哥們先吃了' },
        likes: 503120,
        at: kst('2026-01-17 01:12'),
        comments: [
          { by: 'hoon.wolf', text: { ko: '신유형이 끓였음', zh: '是申惟哥煮的' } },
          { by: 'yu.42_', text: { ko: '구석에서 몰래 먹었는데 어떻게 알았지', zh: '明明躲在角落偷吃的，怎麼會知道' } },
        ],
      },
      {
        id: 'f4',
        by: 'jihoon_06',
        pic: { emoji: '🛋️', tint: '#d8d1ea' },
        caption: { ko: '우리 집 소파 주인 🐺', zh: '我們家沙發的主人 🐺' },
        likes: 620004,
        at: kst('2026-01-05 10:20'),
        comments: [{ by: 'hoon.wolf', text: { ko: '지워', zh: '刪掉' } }],
      },
      {
        id: 'f5',
        by: 'young.jae',
        pic: { emoji: '📸', tint: '#e2e8f0' },
        caption: { ko: '형라인 🫶', zh: '哥哥線 🫶' },
        likes: 701555,
        at: kst('2026-01-26 19:00'),
        comments: [{ by: 'yu.42_', text: '🫶' }],
      },
    ],
    stories: [
      { by: 'hoon.wolf', frames: [{ emoji: '🎤', tint: '#f6d4d9', text: { ko: '오늘 마이크 켜져 있었던 거 잊어주세요', zh: '請忘記今天麥克風開著那件事' } }] },
      { by: 'kyungmin.p', frames: [{ emoji: '🍪', tint: '#e9dcc0', text: { ko: '두쫀쿠 줄 1시간째', zh: '杜拜Q餅排隊第一小時' } }, { emoji: '😇', tint: '#fff3c4', text: { ko: '품절', zh: '賣完了' } }] },
      { by: 'hanjin.zz', frames: [{ emoji: '🌙', tint: '#1f2a4d', text: { ko: '잘 자요 42', zh: '晚安 42' } }] },
      { by: 'tws_official', frames: [{ emoji: '🎂', tint: '#f7e3ea', text: { ko: 'D-1 🐺', zh: 'D-1 🐺' } }] },
    ],
    highlights: [
      { title: { ko: '볼링', zh: '保齡球' }, frames: [{ emoji: '🎳', tint: '#c9d8f5', text: { ko: '언젠가 이긴다', zh: '總有一天會贏' } }] },
      { title: { ko: '연습실', zh: '練習室' }, frames: [{ emoji: '🪞', tint: '#e2e8f0', text: { ko: '비주얼 모니터링 중', zh: '視覺監看中' } }] },
      { title: '🩵', frames: [{ emoji: '🩵', tint: '#cfe6f7', text: { ko: '42 고마워요', zh: '謝謝 42' } }] },
    ],
    dms: [
      {
        with: 'hoon.wolf',
        messages: [
          { from: 'hoon.wolf', text: { ko: '형 이 릴스 봐요 ㅋㅋㅋ', zh: '哥看這支 Reels ㅋㅋㅋ' }, at: kst('2026-01-20 01:02') },
          { from: 'hoon.wolf', text: { ko: '[릴스] 볼링 못 치는 사람 특징', zh: '[Reels] 不會打保齡球的人的特徵' }, at: kst('2026-01-20 01:02') },
          { from: 'yu.42_', text: { ko: '이거 나 저격이지', zh: '這是在針對我吧' }, at: kst('2026-01-20 01:05') },
          { from: 'hoon.wolf', text: { ko: '아닌데요 🐺', zh: '才不是 🐺' }, at: kst('2026-01-20 01:05') },
          { from: 'yu.42_', text: { ko: '자라 빨리', zh: '快去睡' }, at: kst('2026-01-20 01:06') },
        ],
      },
      {
        with: 'kyungmin.p',
        messages: [
          { from: 'kyungmin.p', text: { ko: '형 도훈이형 생일 편지 몇 장 썼어요?', zh: '哥你給道勳哥的生日信寫幾張了？' }, at: kst('2026-01-28 22:10') },
          { from: 'yu.42_', text: { ko: '비밀', zh: '祕密' }, at: kst('2026-01-28 22:30') },
          { from: 'kyungmin.p', text: { ko: '메모장에 "최종의최종" 있는 거 다 봤어요', zh: '我看到備忘錄裡的「最終的最終版」了' }, at: kst('2026-01-28 22:31') },
        ],
      },
    ],
  },

  x: {
    mine: ['tws_shinyu_', 'yu_diary'],
    accounts: {
      tws_shinyu_: { name: { ko: '신유 🩵', zh: '申惟 🩵' }, bio: { ko: 'TWS 리더 · 42 🩵', zh: 'TWS 隊長 · 42 🩵' }, followers: '1.2M', following: '6' },
      yu_diary: { name: { ko: '.', zh: '.' }, bio: { ko: '혼잣말', zh: '自言自語' }, locked: true, followers: '0', following: '0' },
      '42_daily': { name: { ko: '사이 일기', zh: '42 日記' }, bio: '', followers: '18K', following: '300' },
      yudoz_moment: { name: { ko: '유도즈 모먼트 아카이브', zh: '惟勳時刻存檔' }, bio: '', followers: '42K', following: '12' },
      tws_sparkle: { name: { ko: '반짝반짝 투어스', zh: '閃閃發光 TWS' }, bio: '', followers: '9K', following: '420' },
    },
    timeline: [
      {
        id: 't1',
        by: 'yudoz_moment',
        text: { ko: '오늘 무대 끝나고 신유가 도훈이 어깨동무하고 구석으로 데려가는 거 또 찍힘ㅋㅋㅋㅋ 살롱드립 이후로 안 한다며', zh: '今天表演結束後又拍到申惟勾著道勳肩膀把人帶去角落ㅋㅋㅋㅋ 不是說上完沙龍就不做了嗎' },
        at: kst('2026-01-29 22:40'),
        likes: 18400,
        rts: 6200,
        replies: 320,
        pic: { emoji: '📸', tint: '#dfe7f1' },
      },
      {
        id: 't2',
        by: '42_daily',
        text: { ko: '내일 도훈이 생일인데 신유 12시 정각에 또 1등으로 축하할 듯. 3년째 국룰', zh: '明天道勳生日，申惟大概又會十二點整第一個祝福。連續三年的定律' },
        at: kst('2026-01-29 23:10'),
        likes: 9210,
        rts: 2300,
        replies: 88,
      },
      {
        id: 't3',
        by: 'tws_sparkle',
        text: { ko: '#도훈이_생일축하해 트친분들 내일 0시에 같이 달려요 🐺🎂', zh: '#道勳生日快樂 推友們明天零點一起刷 🐺🎂' },
        at: kst('2026-01-29 21:00'),
        likes: 4400,
        rts: 3100,
        replies: 51,
      },
      {
        id: 't4',
        by: 'tws_shinyu_',
        text: { ko: '42 오늘도 고마웠어요 🩵 따뜻하게 입고 자요', zh: '42 今天也謝謝你們 🩵 穿暖一點睡覺' },
        at: kst('2026-01-29 20:30'),
        likes: 210000,
        rts: 40200,
        replies: 12000,
      },
    ],
    posts: {
      tws_shinyu_: [
        {
          id: 'm1',
          by: 'tws_shinyu_',
          text: { ko: '42 오늘도 고마웠어요 🩵 따뜻하게 입고 자요', zh: '42 今天也謝謝你們 🩵 穿暖一點睡覺' },
          at: kst('2026-01-29 20:30'),
          likes: 210000,
          rts: 40200,
          replies: 12000,
        },
        {
          id: 'm2',
          by: 'tws_shinyu_',
          text: { ko: '데뷔 2주년 🩵 앞으로도 같이 걸어가요', zh: '出道兩週年 🩵 以後也一起走下去吧' },
          at: kst('2026-01-22 00:00'),
          likes: 380000,
          rts: 91000,
          replies: 30000,
        },
      ],
      yu_diary: [
        { id: 'd5', by: 'yu_diary', text: { ko: '전복죽 24시간 하는 데 찾느라 30분 걸림. 말 안 할 거임', zh: '為了找 24 小時的鮑魚粥花了三十分鐘。不會告訴他' }, at: kst('2025-10-20 00:10'), likes: 0, rts: 0, replies: 0 },
        { id: 'd6', by: 'yu_diary', text: { ko: '1위. 이름 불렸을 때 도훈이가 제일 먼저 손 잡았다', zh: '一位。被叫到名字時道勳第一個抓住我的手' }, at: kst('2025-11-13 23:50'), likes: 0, rts: 0, replies: 0 },
        { id: 'd7', by: 'yu_diary', text: { ko: '목도리 따뜻함. 양말 준 거 조금 미안해짐', zh: '圍巾很暖。開始對送襪子這件事有點抱歉' }, at: kst('2025-12-25 00:10'), likes: 0, rts: 0, replies: 0 },
        { id: 'd8', by: 'yu_diary', text: { ko: '새벽 3시 핫초코. 편지 쓰다 들킬 뻔', zh: '凌晨三點的熱可可。寫信差點被發現' }, at: kst('2026-01-15 03:30'), likes: 0, rts: 0, replies: 0 },
        {
          id: 'd1',
          by: 'yu_diary',
          text: { ko: '편지 다섯 번째 다시 씀. 왜 말로 하는 것보다 쓰는 게 더 어렵지', zh: '信重寫第五次了。為什麼寫比說還難' },
          at: kst('2026-01-29 23:45'),
          likes: 0,
          rts: 0,
          replies: 0,
        },
        {
          id: 'd2',
          by: 'yu_diary',
          text: { ko: '3월 14일. 손하트 처음 받은 날. 이건 비밀번호로 써도 안 까먹을 듯', zh: '3月14日。第一次收到手指愛心的日子。拿來當密碼應該也不會忘' },
          at: kst('2026-01-18 02:14'),
          likes: 0,
          rts: 0,
          replies: 0,
        },
        {
          id: 'd3',
          by: 'yu_diary',
          text: { ko: '소파에 또 담요 덮어줌. 내일은 모른 척해야지', zh: '又幫他在沙發上蓋了毯子。明天要裝作不知道' },
          at: kst('2026-01-04 02:33'),
          likes: 0,
          rts: 0,
          replies: 0,
        },
        {
          id: 'd4',
          by: 'yu_diary',
          text: { ko: '118 : 121. 3점. 진짜 다음엔 이긴다', zh: '118 : 121。三分。下次真的會贏' },
          at: kst('2026-01-11 23:58'),
          likes: 0,
          rts: 0,
          replies: 0,
        },
      ],
    },
    trends: [
      { tag: '#도훈이_생일축하해', count: { ko: '게시물 12.4만', zh: '12.4 萬則貼文' } },
      { tag: '#TWS', count: { ko: '게시물 58만', zh: '58 萬則貼文' } },
      { tag: '#유도즈', count: { ko: '게시물 3.1만', zh: '3.1 萬則貼文' } },
      { tag: { ko: '두쫀쿠', zh: '杜拜Q餅' }, count: { ko: '게시물 9.8만', zh: '9.8 萬則貼文' } },
    ],
  },

  music: [
    {
      id: 'pl1',
      title: { ko: '도훈이가 추천한 노래', zh: '道勳推薦的歌' },
      by: { ko: '신유', zh: '申惟' },
      pic: { emoji: '🐺', tint: '#d8d1ea' },
      songs: [
        { title: '첫 만남은 계획대로 되지 않아', artist: 'TWS', dur: 191 },
        { title: 'unplugged boy', artist: 'TWS', dur: 176 },
        { title: 'BFF', artist: 'TWS', dur: 183 },
        { title: '내가 S면 넌 나의 N이 되어줘', artist: 'TWS', dur: 170 },
      ],
    },
    {
      id: 'pl2',
      title: { ko: '연습실 반복재생', zh: '練習室循環播放' },
      by: { ko: '신유', zh: '申惟' },
      pic: { emoji: '🪞', tint: '#e2e8f0' },
      songs: [
        { title: '마지막 축제', artist: 'TWS', dur: 188 },
        { title: 'Oh Mymy : 7s', artist: 'TWS', dur: 172 },
        { title: '첫 만남은 계획대로 되지 않아', artist: 'TWS', dur: 191 },
      ],
    },
    {
      id: 'pl3',
      title: { ko: '잠 안 올 때', zh: '睡不著的時候' },
      by: { ko: '신유', zh: '申惟' },
      pic: { emoji: '🌙', tint: '#1f2a4d' },
      songs: [
        { title: 'Happy Birthday (Piano)', artist: 'Lullaby Room', dur: 142 },
        { title: 'Snow on the Window', artist: 'Lullaby Room', dur: 205 },
      ],
    },
  ],

  places: [
    { id: 'dorm', name: { ko: '숙소', zh: '宿舍' }, x: 48, y: 46, emoji: '🏠', kind: { ko: '집', zh: '住家' }, note: { ko: '거실 소파 = 도훈이 자리', zh: '客廳沙發 = 道勳的位子' } },
    { id: 'studio', name: { ko: '연습실', zh: '練習室' }, x: 70, y: 28, emoji: '🪞', kind: { ko: '회사', zh: '公司' }, note: { ko: '구석 자리 (상담용)', zh: '角落的位置（談心用）' } },
    { id: 'bowl', name: { ko: '스트라이크 볼링장', zh: 'Strike 保齡球館' }, x: 25, y: 68, emoji: '🎳', kind: { ko: '즐겨찾기', zh: '收藏' }, note: { ko: '1/31 22:00 예약 · 리매치', zh: '1/31 22:00 預約 · 復仇戰' } },
    { id: 'cafe', name: { ko: '동네 카페', zh: '社區咖啡廳' }, x: 62, y: 74, emoji: '🍪', kind: { ko: '최근', zh: '最近' }, note: { ko: '두쫀쿠 파는 곳 (엄마 제보)', zh: '有賣杜拜Q餅（媽媽提供情報）' } },
    { id: 'cake', name: { ko: '케이크 공방', zh: '蛋糕工作室' }, x: 30, y: 22, emoji: '🎂', kind: { ko: '최근', zh: '最近' }, note: { ko: '생크림 과일 케이크 픽업', zh: '取鮮奶油水果蛋糕' } },
  ],

  mails: [
    {
      id: 'm1',
      from: 'PLEDIS 스케줄팀',
      subject: { ko: '[공지] 1/30(금) 스케줄 안내', zh: '[公告] 1/30（五）行程通知' },
      body: { ko: '10:00 숙소 출발\n11:30 현장 도착 및 리허설\n※ 도훈 멤버 생일 현장 서포트 예정', zh: '10:00 宿舍出發\n11:30 抵達現場並彩排\n※ 道勳成員生日，現場將有應援' },
      at: kst('2026-01-29 18:00'),
      unread: true,
    },
    {
      id: 'm2',
      from: 'Strike Bowling',
      subject: { ko: '예약이 확정되었습니다', zh: '預約已確認' },
      body: { ko: '신유 님, 1월 31일 22:00 레인 2개 예약이 확정되었습니다.\n볼링화는 현장에서 대여 가능합니다.', zh: '申惟先生，1月31日 22:00 兩條球道的預約已確認。\n保齡球鞋可在現場租借。' },
      at: kst('2026-01-26 18:01'),
    },
    {
      id: 'm3',
      from: 'Apple',
      subject: { ko: '메모 암호를 재설정하셨습니다', zh: '您已重設備忘錄密碼' },
      body: {
        ko: '안녕하세요, 신유 님.\n잠긴 메모의 암호가 변경되었습니다.\n\n암호 힌트: "처음 받은 날 (MMDD)"\n\n본인이 변경하지 않았다면 Apple 지원에 문의하세요.',
        zh: '申惟您好：\n上鎖備忘錄的密碼已變更。\n\n密碼提示：「第一次收到的日子（MMDD）」\n\n若非本人操作，請聯絡 Apple 支援。',
      },
      at: kst('2026-01-18 02:20'),
    },
    {
      id: 'm4',
      from: '쇼핑',
      subject: { ko: '주문하신 상품이 배송 완료되었습니다', zh: '您訂購的商品已送達' },
      body: { ko: '두바이 쫀득쿠키 2입 · 경비실 보관', zh: '杜拜Q彈餅乾 2入 · 存放於管理室' },
      at: kst('2026-01-29 14:23'),
    },
    {
      id: 'draft1',
      box: 'draft',
      from: '나',
      subject: { ko: '(제목 없음)', zh: '（無主旨）' },
      body: { ko: '도훈아\n\n말로 하면 장난처럼 들릴까 봐 메일로 써본다.\n…아니다 이건 너무 이상하다. 카톡으로 보내자.', zh: '道勳啊\n\n怕用說的聽起來像開玩笑，所以試著用信寫。\n……不對這也太奇怪了。還是用 Kakao 傳吧。' },
      at: kst('2026-01-29 23:20'),
    },
  ],

  weather: {
    city: { ko: '서울', zh: '首爾' },
    now: -4,
    desc: { ko: '맑음', zh: '晴' },
    hi: 1,
    lo: -7,
    hours: [
      ['지금', '🌙', -4],
      ['01', '🌙', -5],
      ['02', '🌙', -5],
      ['03', '🌙', -6],
      ['04', '☁️', -6],
      ['05', '☁️', -7],
      ['06', '☁️', -7],
      ['07', '🌅', -6],
    ],
    days: [
      [{ ko: '오늘', zh: '今天' }, '☀️', -7, 1],
      [{ ko: '금', zh: '週五' }, '🌤️', -6, 2],
      [{ ko: '토', zh: '週六' }, '❄️', -8, -1],
      [{ ko: '일', zh: '週日' }, '☁️', -5, 3],
      [{ ko: '월', zh: '週一' }, '☀️', -4, 4],
    ],
  },

  lockedNote: {
    title: { ko: '🔒 열지 마', zh: '🔒 不准打開' },
    password: '0314',
    hint: { ko: '처음 받은 날', zh: '第一次收到的日子' },
    at: kst('2026-01-18 02:16'),
    body: {
      ko: `열지 마

연습생 때 3월 14일.
처음 보는 애가 나 볼 때마다 손하트를 했다.
그때는 장난인 줄 알았는데
나중에 알았다. 내가 낯가리는 거 보고 일부러 한 거였다는 거.

그날부터 걔 앞에서는 덜 긴장했다.

리더라서 챙기는 게 아니다.
그냥 도훈이라서 챙기는 거다.

이건 편지에 못 쓰겠다.`,
      zh: `不准打開

練習生時期的3月14日。
第一次見的孩子每次看到我都比手指愛心。
那時候以為只是在開玩笑，
後來才知道。他是看我怕生，故意那樣做的。

從那天起，在他面前就沒那麼緊張了。

不是因為我是隊長才照顧他。
只是因為他是道勳，所以照顧他。

這個寫不進信裡。`,
    },
  },

  hiddenPhotos: [
    { id: 'h1', at: kst('2026-01-04 02:31'), emoji: '😴', tint: '#d8d1ea', caption: { ko: '소파에서 자는 도훈이 (담요 덮기 전)', zh: '在沙發上睡著的道勳（蓋毯子前）' } },
    { id: 'h2', at: kst('2025-03-14 18:00'), emoji: '🫶', tint: '#f7e3ea', caption: { ko: '연습실 거울 앞 손하트 (3월 14일)', zh: '練習室鏡子前的手指愛心（3月14日）' } },
    { id: 'h3', at: kst('2026-01-22 00:05'), emoji: '🎂', tint: '#cfe6f7', caption: { ko: '2주년 케이크 앞에서 도훈이', zh: '兩週年蛋糕前的道勳' } },
  ],
  deletedPhotos: [
    { id: 'x1', at: kst('2026-01-29 23:50'), emoji: '📝', tint: '#fff3c4', caption: { ko: '편지 손글씨 버전 (너무 오글거려서 지움)', zh: '手寫版的信（太肉麻所以刪了）' } },
  ],
}

import { kst } from '../time'
import type { Extras } from './types'

/** 도훈 폰: 스토리 밖의 생활감 콘텐츠. 모든 계정·게시물은 허구입니다. */
export const dohoonExtra: Extras = {
  instagram: {
    me: 'hoon.wolf',
    users: {
      'hoon.wolf': { name: { ko: '도훈', zh: '道勳' }, bio: { ko: '🐺 줏대 있게\n0314 🫶', zh: '🐺 活得有主見\n0314 🫶' }, posts: 9, followers: '1.9M', following: '5' },
      'yu.42_': { name: { ko: '신유', zh: '申惟' }, bio: { ko: '🩵 42', zh: '🩵 42' }, posts: 7, followers: '2.2M', following: '5' },
      'kyungmin.p': { name: { ko: '경민', zh: '炅潣' }, posts: 8, followers: '1.7M', following: '5' },
      'jihoon_06': { name: { ko: '지훈', zh: '志薰' }, posts: 6, followers: '1.6M', following: '5' },
      'young.jae': { name: { ko: '영재', zh: '英宰' }, posts: 5, followers: '1.5M', following: '5' },
      'hanjin.zz': { name: { ko: '한진', zh: '韓振' }, posts: 7, followers: '1.6M', following: '5' },
      'tws_official': { name: 'TWS', verified: true, posts: 1032, followers: '4.1M', following: '0' },
    },
    feed: [
      {
        id: 'f1',
        by: 'yu.42_',
        pic: { emoji: '🍜', tint: '#f3dcc4' },
        caption: { ko: '구석 라면 (사진: 도훈)', zh: '角落泡麵（攝影：道勳）' },
        likes: 902100,
        at: kst('2026-07-15 00:30'),
        comments: [
          { by: 'hoon.wolf', text: { ko: '사진 잘 찍었죠', zh: '照片拍得不錯吧' } },
          { by: 'jihoon_06', text: { ko: '저는 왜 안 불렀어요', zh: '為什麼沒叫我' } },
        ],
      },
      {
        id: 'f2',
        by: 'hoon.wolf',
        pic: { emoji: '🫶', tint: '#f7e3ea' },
        caption: { ko: '0314 🫶 (아는 사람만 아는 날)', zh: '0314 🫶（只有知道的人才懂的日子）' },
        likes: 1100340,
        at: kst('2026-03-14 21:00'),
        comments: [
          { by: 'yu.42_', text: '🫶' },
          { by: 'kyungmin.p', text: { ko: '뭔 날인데요??', zh: '是什麼日子??' } },
        ],
      },
      {
        id: 'f3',
        by: 'hanjin.zz',
        pic: { emoji: '🎳', tint: '#c9d8f5' },
        caption: { ko: '형들 볼링 대결 관전 중 (신유형 118)', zh: '觀戰哥哥們的保齡球對決（申惟哥 118）' },
        likes: 540800,
        at: kst('2026-08-23 23:10'),
        comments: [{ by: 'yu.42_', text: { ko: '숫자는 왜 쓰는데', zh: '為什麼要寫分數' } }],
      },
      {
        id: 'f4',
        by: 'tws_official',
        pic: { emoji: '🎂', tint: '#fbe3ec' },
        caption: { ko: 'D-1 🩵 #신유 #SHINYU', zh: 'D-1 🩵 #申惟 #SHINYU' },
        likes: 830220,
        at: kst('2026-11-06 12:00'),
        comments: [{ by: 'hoon.wolf', text: '🩵' }],
      },
    ],
    stories: [
      { by: 'yu.42_', frames: [{ emoji: '🛋️', tint: '#e2d6cc', text: { ko: '누가 또 소파에서 잠', zh: '有人又在沙發上睡著了' } }] },
      { by: 'young.jae', frames: [{ emoji: '📦', tint: '#efe3d2', text: { ko: '(뭔가 픽업함)', zh: '（取了某樣東西）' } }] },
      { by: 'kyungmin.p', frames: [{ emoji: '🤐', tint: '#fff3c4', text: { ko: '아무것도 모름', zh: '什麼都不知道' } }] },
    ],
    highlights: [
      { title: { ko: '형 웃긴거', zh: '哥好笑的' }, frames: [{ emoji: '😴', tint: '#d9d3ef', text: { ko: '#1 대기실', zh: '#1 休息室' } }, { emoji: '🎳', tint: '#c9d8f5', text: { ko: '#2 레인 탓', zh: '#2 怪球道' } }] },
      { title: { ko: '연습생', zh: '練習生' }, frames: [{ emoji: '👟', tint: '#f3dcc4', text: { ko: '빌린 신발', zh: '借來的鞋' } }] },
    ],
    dms: [
      {
        with: 'yu.42_',
        messages: [
          { from: 'yu.42_', text: { ko: '이 사진 언제 찍었냐', zh: '這張照片什麼時候拍的' }, at: kst('2026-11-02 00:40') },
          { from: 'hoon.wolf', text: { ko: '형 웃긴거 폴더 #27', zh: '哥好笑的資料夾 #27' }, at: kst('2026-11-02 00:41') },
          { from: 'yu.42_', text: { ko: '몇 장까지 있는 건데', zh: '到底有幾張' }, at: kst('2026-11-02 00:41') },
          { from: 'hoon.wolf', text: { ko: '비밀 🐺', zh: '祕密 🐺' }, at: kst('2026-11-02 00:42') },
        ],
      },
      {
        with: 'young.jae',
        messages: [
          { from: 'young.jae', text: { ko: '케이크 레터링 뭐라고 할래', zh: '蛋糕上要寫什麼字' }, at: kst('2026-11-04 15:00') },
          { from: 'hoon.wolf', text: { ko: '"형 생일 축하해요 🐺"', zh: '「哥生日快樂 🐺」' }, at: kst('2026-11-04 15:02') },
          { from: 'young.jae', text: { ko: '너무 너 같은데', zh: '也太像你了' }, at: kst('2026-11-04 15:02') },
        ],
      },
    ],
  },

  x: {
    mine: ['tws_dohoon_', 'wolf_note'],
    accounts: {
      tws_dohoon_: { name: { ko: '도훈 🐺', zh: '道勳 🐺' }, bio: { ko: 'TWS · 42 🐺', zh: 'TWS · 42 🐺' }, followers: '1.1M', following: '6' },
      wolf_note: { name: '🐺', bio: { ko: '메모장', zh: '筆記本' }, locked: true, followers: '0', following: '0' },
      '42_daily': { name: { ko: '사이 일기', zh: '42 日記' }, bio: '', followers: '21K', following: '300' },
      yudoz_moment: { name: { ko: '유도즈 모먼트 아카이브', zh: '惟勳時刻存檔' }, bio: '', followers: '58K', following: '12' },
    },
    timeline: [
      {
        id: 't1',
        by: '42_daily',
        text: { ko: '내일 신유 생일 🩵 작년엔 신유가 도훈이 생일 0시에 제일 먼저 축하했는데 올해는 도훈이가 갚을 차례', zh: '明天是申惟生日 🩵 去年申惟在道勳生日零點第一個祝福，今年輪到道勳回報了' },
        at: kst('2026-11-06 22:00'),
        likes: 12100,
        rts: 4300,
        replies: 210,
      },
      {
        id: 't2',
        by: 'yudoz_moment',
        text: { ko: '오늘 출근길 도훈이 손에 든 쇼핑백 볼링공 모양 아님?? 🎳', zh: '今天上班路上道勳手上的購物袋不是保齡球的形狀嗎?? 🎳' },
        at: kst('2026-11-06 11:40'),
        likes: 22400,
        rts: 8100,
        replies: 640,
        pic: { emoji: '🛍️', tint: '#e8f0d8' },
      },
      {
        id: 't3',
        by: 'tws_dohoon_',
        text: { ko: '42 내일 다들 바빠요 🐺', zh: '42 明天大家都很忙喔 🐺' },
        at: kst('2026-11-06 21:12'),
        likes: 190000,
        rts: 35000,
        replies: 9800,
      },
    ],
    posts: {
      tws_dohoon_: [
        {
          id: 'm1',
          by: 'tws_dohoon_',
          text: { ko: '42 내일 다들 바빠요 🐺', zh: '42 明天大家都很忙喔 🐺' },
          at: kst('2026-11-06 21:12'),
          likes: 190000,
          rts: 35000,
          replies: 9800,
        },
      ],
      wolf_note: [
        {
          id: 'd1',
          by: 'wolf_note',
          text: { ko: '편지 써놓고 보낼까 말까 30분째', zh: '寫好信之後猶豫要不要傳已經三十分鐘了' },
          at: kst('2026-11-06 23:35'),
          likes: 0,
          rts: 0,
          replies: 0,
        },
        {
          id: 'd2',
          by: 'wolf_note',
          text: { ko: '형이 작년에 해준 거 그대로 돌려주기. 12시 정각.', zh: '把哥去年為我做的原封不動還給他。十二點整。' },
          at: kst('2026-11-01 19:20'),
          likes: 0,
          rts: 0,
          replies: 0,
        },
        {
          id: 'd3',
          by: 'wolf_note',
          text: { ko: '3월 14일은 형이 처음 손하트 같이 해준 날. 메모 비번 이걸로 함', zh: '3月14日是哥第一次跟我一起比手指愛心的日子。備忘錄密碼就用這個' },
          at: kst('2026-10-18 16:40'),
          likes: 0,
          rts: 0,
          replies: 0,
        },
      ],
    },
    trends: [
      { tag: '#신유_생일축하해', count: { ko: '게시물 15.2만', zh: '15.2 萬則貼文' } },
      { tag: '#TWS', count: { ko: '게시물 61만', zh: '61 萬則貼文' } },
      { tag: '#유도즈', count: { ko: '게시물 4.8만', zh: '4.8 萬則貼文' } },
    ],
  },

  music: [
    {
      id: 'pl1',
      title: { ko: '형 생일 BGM', zh: '哥生日 BGM' },
      by: { ko: '도훈', zh: '道勳' },
      pic: { emoji: '🎂', tint: '#fbe3ec' },
      songs: [
        { title: 'Happy Birthday (Piano)', artist: 'Lullaby Room', dur: 142 },
        { title: '마지막 축제', artist: 'TWS', dur: 188 },
        { title: 'BFF', artist: 'TWS', dur: 183 },
      ],
    },
    {
      id: 'pl2',
      title: { ko: '신유형한테 추천할 노래', zh: '要推薦給申惟哥的歌' },
      by: { ko: '도훈', zh: '道勳' },
      pic: { emoji: '🩵', tint: '#cfe6f7' },
      songs: [
        { title: '첫 만남은 계획대로 되지 않아', artist: 'TWS', dur: 191 },
        { title: 'unplugged boy', artist: 'TWS', dur: 176 },
        { title: '내가 S면 넌 나의 N이 되어줘', artist: 'TWS', dur: 170 },
      ],
    },
  ],

  places: [
    { id: 'dorm', name: { ko: '숙소', zh: '宿舍' }, x: 48, y: 46, emoji: '🏠', kind: { ko: '집', zh: '住家' }, note: { ko: '신유형 방 = 작전 장소', zh: '申惟哥房間 = 作戰地點' } },
    { id: 'bakery', name: { ko: '케이크 공방', zh: '蛋糕工作室' }, x: 30, y: 22, emoji: '🎂', kind: { ko: '최근', zh: '最近' }, note: { ko: '23:20 픽업 (영재형)', zh: '23:20 取貨（英宰哥）' } },
    { id: 'ball', name: { ko: '볼링샵', zh: '保齡球用品店' }, x: 72, y: 66, emoji: '🎁', kind: { ko: '최근', zh: '最近' }, note: { ko: '이니셜 각인 S.Y.', zh: '刻縮寫 S.Y.' } },
    { id: 'bowl', name: { ko: '스트라이크 볼링장', zh: 'Strike 保齡球館' }, x: 25, y: 68, emoji: '🎳', kind: { ko: '즐겨찾기', zh: '收藏' }, note: { ko: '118 : 121 의 성지', zh: '118 : 121 的聖地' } },
  ],

  mails: [
    {
      id: 'm1',
      from: 'PLEDIS 스케줄팀',
      subject: { ko: '[공지] 11/7(토) 스케줄 안내', zh: '[公告] 11/7（六）行程通知' },
      body: { ko: '11:00 숙소 출발\n※ 신유 멤버 생일 현장 서포트 예정', zh: '11:00 宿舍出發\n※ 申惟成員生日，現場將有應援' },
      at: kst('2026-11-06 18:00'),
      unread: true,
    },
    {
      id: 'm2',
      from: '볼링샵',
      subject: { ko: '각인 주문 제작이 완료되었습니다', zh: '刻字訂製已完成' },
      body: { ko: '각인 문구: S.Y.\n볼 무게: 12파운드\n"선물용 포장" 옵션이 적용되었습니다.', zh: '刻字內容：S.Y.\n球重：12 磅\n已套用「禮品包裝」選項。' },
      at: kst('2026-11-03 15:02'),
    },
    {
      id: 'm3',
      from: 'Apple',
      subject: { ko: '메모 암호를 설정하셨습니다', zh: '您已設定備忘錄密碼' },
      body: { ko: '잠긴 메모 암호 힌트: "같이 해준 날"', zh: '上鎖備忘錄密碼提示：「一起比的日子」' },
      at: kst('2026-10-18 16:42'),
    },
    {
      id: 'draft1',
      box: 'draft',
      from: '나',
      subject: { ko: '형한테', zh: '給哥' },
      body: { ko: '(카톡으로 보낼 거임. 여기엔 연습만)', zh: '（會用 Kakao 傳。這裡只是練習）' },
      at: kst('2026-11-06 23:30'),
    },
  ],

  weather: {
    city: { ko: '서울', zh: '首爾' },
    now: 9,
    desc: { ko: '흐림', zh: '多雲' },
    hi: 14,
    lo: 6,
    hours: [
      ['지금', '☁️', 9],
      ['00', '☁️', 9],
      ['01', '☁️', 8],
      ['02', '🌧️', 8],
      ['03', '🌧️', 7],
      ['04', '☁️', 7],
      ['05', '☁️', 6],
      ['06', '🌅', 6],
    ],
    days: [
      [{ ko: '오늘', zh: '今天' }, '☁️', 6, 14],
      [{ ko: '토', zh: '週六' }, '⛅', 7, 15],
      [{ ko: '일', zh: '週日' }, '☀️', 5, 13],
      [{ ko: '월', zh: '週一' }, '🌧️', 8, 12],
      [{ ko: '화', zh: '週二' }, '☁️', 6, 11],
    ],
  },

  lockedNote: {
    title: { ko: '🔒 형한테 못 한 말', zh: '🔒 沒對哥說出口的話' },
    password: '0314',
    hint: { ko: '같이 해준 날', zh: '一起比的日子' },
    at: kst('2026-10-18 16:45'),
    body: {
      ko: `형한테 못 한 말

처음엔 손하트를 나 혼자 했다.
3월 14일에 형이 처음으로 같이 해줬다.
그날 연습 끝나고 집 가는 길이 좀 좋았다.

형은 맨날 "리더니까"라고 하는데
나는 형이 리더가 아니어도 형 옆에 있을 거다.

소파에서 자는 건, 사실
형이 담요 덮어주러 오는 발소리 듣는 게 좋아서다.

이건 절대 말 안 할 거다.`,
      zh: `沒對哥說出口的話

一開始只有我一個人比手指愛心。
3月14日，哥第一次跟我一起比。
那天練習結束回家的路上有點開心。

哥總是說「因為我是隊長」，
可是就算哥不是隊長，我也會在哥身邊。

睡沙發這件事，其實是因為
我喜歡聽哥來幫我蓋毯子的腳步聲。

這個我絕對不會說出口。`,
    },
  },

  hiddenPhotos: [
    { id: 'h1', at: kst('2026-01-10 21:20'), emoji: '😴', tint: '#d9d3ef', caption: { ko: '형 웃긴거 #1 대기실에서 조는 형', zh: '哥好笑的 #1 在休息室打瞌睡的哥' } },
    { id: 'h2', at: kst('2026-01-31 22:41'), emoji: '😤', tint: '#c9d8f5', caption: { ko: '형 웃긴거 #9 118점 보고 레인 탓하는 형', zh: '哥好笑的 #9 看到118分在怪球道的哥' } },
    { id: 'h3', at: kst('2026-07-15 00:12'), emoji: '🍜', tint: '#f3dcc4', caption: { ko: '형 웃긴거 #18 라면 끓이다 젓가락 떨어뜨린 형', zh: '哥好笑的 #18 煮泡麵時筷子掉了的哥' } },
    { id: 'h4', at: kst('2026-11-02 00:30'), emoji: '🙈', tint: '#f7e3ea', caption: { ko: '형 웃긴거 #27 (형한테 들킴)', zh: '哥好笑的 #27（被哥發現了）' } },
  ],
  deletedPhotos: [
    { id: 'x1', at: kst('2026-11-06 23:40'), emoji: '💌', tint: '#fbe3ec', caption: { ko: '편지 캡처 (보낼까 말까 하다 지움)', zh: '信的截圖（猶豫要不要傳，後來刪了）' } },
  ],
}

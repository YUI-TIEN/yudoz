import { kst, ms } from '../time'
import type { L } from '../i18n'
import type { PhoneStory } from './types'

/**
 * 도훈 폰: 달달한 비밀연애 디테일을 폰 전체에 흩어 놓는다 (팬메이드 허구).
 * 벚꽃잎, 마이크 톡톡, 1년 늦은 우산, 망고빙수, 늑대와 달, 23:59 알람이 앱마다 이어진다.
 */

const x = (ko: string, zh: string): L => ({ ko, zh })

export function addSweet(s: PhoneStory) {
  const ig = s.extra.instagram
  ig.users['yudoz.archive'] = { name: x('유도즈 아카이브', '惟勳存檔'), bio: x('fan account · 사진 출처 표기', 'fan account · 照片標註出處'), posts: 688, followers: '121K', following: '7' }
  ig.users['wolf.and.moon'] = { name: '🐺🌙', posts: 73, followers: '5.4K', following: '98' }

  ig.feed.push(
    {
      id: 'sw1',
      by: 'yu.42_',
      pic: { emoji: '🌸', tint: '#f7d6e0' },
      caption: x('봄 🌸', '春天 🌸'),
      likes: 1320400,
      at: kst('2026-04-05 12:00'),
      comments: [
        { by: 'hoon.wolf', text: x('형 머리에 꽃잎 붙었어요', '哥頭上沾到花瓣了') },
        { by: 'yu.42_', text: x('@hoon.wolf 알아. 일부러 둔 거', '@hoon.wolf 知道。故意留著的') },
        { by: 'young.jae', text: x('이거 새벽에 찍은 거 아니에요? 저 자고 있었는데', '這不是凌晨拍的嗎？我那時在睡覺') },
        { by: 'yudoz.archive', text: x('도훈 어제 위버스 라이브 후드에서 꽃잎 나왔던 거 기억하는 사람', '有人記得道勳昨天直播時帽T裡掉出花瓣嗎') },
      ],
    },
    {
      id: 'sw2',
      by: 'hoon.wolf',
      pic: { emoji: '📱', tint: '#e9e4f5' },
      caption: x('폰케이스 꾸미기 🌸 (재료 출처 비밀)', '裝飾手機殼 🌸（材料來源保密）'),
      likes: 1011200,
      at: kst('2026-04-06 20:00'),
      comments: [
        { by: 'yu.42_', text: x('어디서 났어', '哪來的') },
        { by: 'hoon.wolf', text: x('@yu.42_ 누구 머리에서요', '@yu.42_ 某人的頭上') },
        { by: 'kyungmin.p', text: x('...', '……') },
      ],
    },
    {
      id: 'sw3',
      by: 'yu.42_',
      pic: { emoji: '☔', tint: '#9fb4c7' },
      caption: x('장마 시작. 우산은 하나면 충분', '梅雨季開始。傘一把就夠了'),
      likes: 1140300,
      at: kst('2026-06-25 21:00'),
      comments: [
        { by: 'hoon.wolf', text: x('형 가방에 우산 있던데', '哥包包裡明明有傘') },
        { by: 'yu.42_', text: x('@hoon.wolf 없었어', '@hoon.wolf 沒有') },
        { by: 'wolf.and.moon', text: x('도훈이 어깨만 젖어 있던 출근길 사진 여기 있습니다', '只有道勳肩膀濕掉的上班路照片在這裡') },
      ],
    },
    {
      id: 'sw4',
      by: 'hoon.wolf',
      pic: { emoji: '🥭', tint: '#ffcf5c' },
      caption: x('타이베이 🥭 1인 1숟가락 (지키지 못함)', '台北 🥭 一人一根湯匙（沒做到）'),
      likes: 1255000,
      at: kst('2026-08-23 01:00'),
      comments: [
        { by: 'hanjin.zz', text: x('제가 숟가락 갖다 드렸잖아요!!', '我不是幫你們拿湯匙了嗎!!') },
        { by: 'hoon.wolf', text: x('@hanjin.zz 늦었어', '@hanjin.zz 太晚了') },
        { by: 'yu.42_', text: x('맛있었다', '很好吃') },
      ],
    },
    {
      id: 'sw5',
      by: 'yu.42_',
      pic: { emoji: '🌙', tint: '#3b3b4f' },
      caption: x('Happy Halloween 🌙 저는 달입니다', 'Happy Halloween 🌙 我是月亮'),
      likes: 1402000,
      at: kst('2026-10-31 23:00'),
      comments: [
        { by: 'hoon.wolf', text: x('바나나 아니고요?', '不是香蕉嗎？') },
        { by: 'yu.42_', text: x('@hoon.wolf 늑대는 달 보고 우는 거야', '@hoon.wolf 狼是對著月亮嚎叫的') },
        { by: 'hoon.wolf', text: x('@yu.42_ 🐺', '@yu.42_ 🐺') },
        { by: 'yudoz.archive', text: x('서사를 본인들이 쓰면 저희는 뭐 합니까', '故事都自己寫了，那我們要幹嘛') },
      ],
    },
  )

  const story = {
    by: 'yu.42_',
    frames: [
      { emoji: '🍌', tint: '#fff1a8', text: x('바나나우유 두 개 샀는데 하나가 사라짐', '買了兩瓶香蕉牛奶，有一瓶不見了') },
      { emoji: '🐺', tint: '#3b3b4f', text: x('범인 찾음', '找到犯人了') },
    ],
  }
  const same = ig.stories.find((st) => st.by === story.by)
  if (same) same.frames = [...story.frames, ...same.frames]
  else ig.stories.unshift(story)
  ig.highlights.unshift({
    title: '🌸',
    frames: [
      { emoji: '🌸', tint: '#f7d6e0', text: x('04.05 새벽', '04.05 凌晨') },
      { emoji: '📱', tint: '#e9e4f5', text: x('여기 보관 중', '保存在這裡') },
    ],
  })

  const dm = ig.dms.find((d) => d.with === 'yu.42_')
  if (dm) {
    dm.messages.push(
      { from: 'yu.42_', text: x('[릴스 공유] 도훈 엔딩 대참사 50만뷰', '[分享Reels] 道勳ending大慘案 50萬觀看'), at: kst('2026-03-24 00:10') },
      { from: 'yu.42_', text: x('이거 내가 제일 많이 봤을 듯', '這個應該是我看最多次'), at: kst('2026-03-24 00:10') },
      { from: 'hoon.wolf', text: x('형 때문에 생긴 참사예요', '是哥害的慘案'), at: kst('2026-03-24 00:12') },
      { from: 'yu.42_', text: x('알아. 그래서 보는 거야', '我知道。所以才看'), at: kst('2026-03-24 00:12') },
      { from: 'hoon.wolf', text: x('[게시물 공유] 망고빙수 맛집 타이베이 TOP 5', '[分享貼文] 台北芒果冰 TOP 5'), at: kst('2026-08-10 23:00') },
      { from: 'hoon.wolf', text: x('형 여기 가요. 숟가락 하나만 받아서', '哥我們去這間。只拿一根湯匙'), at: kst('2026-08-10 23:00') },
      { from: 'yu.42_', text: x('그거 계획이었어?', '那是計畫好的？'), at: kst('2026-08-10 23:03') },
      { from: 'hoon.wolf', text: x('네 🐺', '對 🐺'), at: kst('2026-08-10 23:03') },
    )
    dm.messages.sort((a, b) => ms(a.at) - ms(b.at))
  }

  /* X 타임라인 */
  const xs = s.extra.x
  xs.accounts['mic_tap_42'] = { name: x('마이크 톡톡 분석', '麥克風叩叩分析'), bio: x('신유 마이크 두드리는 횟수 기록', '記錄申惟敲麥克風的次數'), followers: '14K', following: '1' }
  xs.timeline.push(
    { id: 'sw-t1', by: 'mic_tap_42', text: x('3/22 엔딩 직전 신유 마이크 톡톡 4회. 도훈 엔딩 요정 중 웃음 터짐. 인과관계 있다고 봅니다', '3/22 ending前申惟敲麥克風4次。道勳ending妖精途中笑場。我認為有因果關係'), at: kst('2026-03-22 22:30'), likes: 61200, rts: 24000, replies: 2100, pic: { emoji: '🎤', tint: '#f6d4d9' } },
    { id: 'sw-t2', by: 'yudoz_moment', text: x('장마 첫날 출근길: 우산 하나, 도훈이 들고 있음, 신유 쪽으로 기울어짐, 도훈 왼쪽 어깨만 젖음. 1년 전엔 반대였음 (사진 비교)', '梅雨季第一天上班路：一把傘，道勳撐，往申惟那邊斜，只有道勳左肩濕掉。一年前是反過來的（照片對比）'), at: kst('2026-06-25 20:10'), likes: 73400, rts: 30100, replies: 2600, pic: { emoji: '☔', tint: '#9fb4c7' } },
    { id: 'sw-t3', by: '42_daily', text: x('타이베이 야시장 목격담: 망고빙수 하나에 숟가락 하나. 한진이 숟가락 들고 뛰어옴. 한진아 고마워', '台北夜市目擊：一碗芒果冰一根湯匙。韓振拿著湯匙跑過來。韓振謝謝你'), at: kst('2026-08-22 23:30'), likes: 44100, rts: 15200, replies: 980 },
    { id: 'sw-t4', by: 'yudoz_moment', text: x('예능에서 신유가 MC랑 손하트 한 다음 날 도훈 위버스: "손하트는 원조가 있습니다" 🫠', '綜藝上申惟跟MC比手指愛心的隔天，道勳Weverse：「手指愛心是有正宗的」🫠'), at: kst('2026-07-29 13:00'), likes: 39800, rts: 14400, replies: 1100 },
    { id: 'sw-t5', by: 'tws_sparkle', text: x('할로윈 라이브 늑대 도훈 + 달(바나나) 신유. 댓글 "늑대가 달 보고 울부짖네" 진짜 명작', '萬聖節直播狼道勳＋月亮（香蕉）申惟。留言「狼對著月亮嚎叫」真的是名作'), at: kst('2026-10-31 22:50'), likes: 28800, rts: 9900, replies: 700, pic: { emoji: '🐺', tint: '#3b3b4f' } },
    { id: 'sw-t6', by: '42_daily', text: x('도훈 폰케이스 안에 말린 꽃잎 있음. 4월 5일 신유 게시물 머리 위 꽃잎이랑 모양 같은 거 저만 보이나요', '道勳手機殼裡有壓乾的花瓣。跟4月5日申惟貼文頭上那片花瓣形狀一樣，只有我看到嗎'), at: kst('2026-04-07 12:00'), likes: 35200, rts: 12800, replies: 1500, pic: { emoji: '🌸', tint: '#f7d6e0' } },
  )
  xs.trends.push({ tag: x('#마이크톡톡', '#麥克風叩叩'), count: x('게시물 3.4만', '3.4 萬則貼文') })

  /* 음악 */
  s.extra.music.push(
    {
      id: 'pl-sw1',
      title: x('형 목소리', '哥的聲音'),
      by: x('도훈', '道勳'),
      pic: { emoji: '🎤', tint: '#f6d4d9' },
      songs: [
        { title: '마지막 축제', artist: 'TWS', dur: 188 },
        { title: '내가 S면 넌 나의 N이 되어줘', artist: 'TWS', dur: 182 },
        { title: 'Countdown!', artist: 'TWS', dur: 175 },
        { title: '(신유 허밍 녹음본)', artist: '🩵', dur: 48 },
      ],
    },
    {
      id: 'pl-sw2',
      title: x('벚꽃 새벽 산책', '櫻花凌晨散步'),
      by: x('도훈', '道勳'),
      pic: { emoji: '🌸', tint: '#f7d6e0' },
      songs: [
        { title: 'Petal on Your Hair', artist: 'Spring Hours', dur: 203 },
        { title: '첫 만남은 계획대로 되지 않아', artist: 'TWS', dur: 176 },
        { title: '3AM Lake Walk', artist: 'Midnight Store', dur: 221 },
      ],
    },
  )

  /* 지도 */
  s.extra.places.push(
    { id: 'lake', name: x('석촌호수', '石村湖'), x: 68, y: 40, emoji: '🌸', kind: x('저장됨', '已儲存'), note: x('4/5 새벽 3시. 형 머리에 꽃잎', '4/5 凌晨三點。哥頭上的花瓣') },
    { id: 'bench', name: x('편의점 앞 벤치', '便利商店前的長椅'), x: 54, y: 56, emoji: '🍌', kind: x('즐겨찾기', '收藏'), note: x('100일 · 바나나우유 두 개 · 11/7 00:10 예정', '100天 · 兩瓶香蕉牛奶 · 預計 11/7 00:10') },
    { id: 'gate', name: x('회사 정문', '公司正門'), x: 60, y: 24, emoji: '☔', kind: x('저장됨', '已儲存'), note: x('1년 늦은 대답 한 곳', '說出晚了一年的回答的地方') },
    { id: 'roof', name: x('숙소 옥상', '宿舍頂樓'), x: 46, y: 40, emoji: '🌕', kind: x('저장됨', '已儲存'), note: x('추석 영상통화 (형은 본가 옥상)', '中秋視訊（哥在老家頂樓）') },
  )

  /* 메일 */
  s.extra.mails.push(
    { id: 'sw-m1', from: 'Strike Pro Shop', subject: x('각인 볼링공 제작 완료', '刻字保齡球製作完成'), body: x('각인 문구: S.Y. 🩵\n추가 요청: 손가락 구멍 옆 "🎄" (작게)\n픽업: 11/6 18:00 이후', '刻字內容：S.Y. 🩵\n追加要求：指洞旁「🎄」（小小的）\n取貨：11/6 18:00 以後'), at: kst('2026-11-05 17:20') },
    { id: 'sw-m2', from: 'DIY 공방', subject: x('[배송] 레진 폰케이스 키트', '[出貨] 樹脂手機殼套組'), body: x('압화 레진 키트 1세트\n※ 생화는 3일 이상 눌러 말린 뒤 사용하세요', '壓花樹脂套組 1 組\n※ 鮮花請壓乾 3 天以上再使用'), at: kst('2026-04-05 10:12') },
    { id: 'sw-m3', from: '케이크 공방', subject: x('[예약 확정] 11/6 23:20 픽업', '[預約確認] 11/6 23:20 取貨'), body: x('생크림 딸기 케이크 1호\n레터링: "1등 🐺"\n초: 숫자 초 + 달 모양 초 1개', '鮮奶油草莓蛋糕 1 號\n寫字：「第一名 🐺」\n蠟燭：數字蠟燭＋月亮造型蠟燭 1 根'), at: kst('2026-11-02 14:00') },
  )

  /* 음성 메모 */
  s.voice.push(
    { id: 'sw-v1', title: x('형 허밍 (몰래)', '哥的哼歌（偷錄）'), at: kst('2026-05-21 01:10'), seconds: 48, transcript: x('(작은 허밍) 음~ 음음~ ...(목 아픈데도 계속 부름) ...도훈아 자? (조용) ...잘 자.', '（小小的哼歌）嗯～嗯嗯～……（喉嚨痛還繼續哼）……道勳，睡了嗎？（安靜）……晚安。') },
    { id: 'sw-v2', title: x('빗소리', '雨聲'), at: kst('2026-06-25 19:50'), seconds: 30, transcript: x('(우산에 비 떨어지는 소리) 형 왼쪽으로 와요. 더. ...이제 1년 전이랑 반대네요. (형 웃음소리)', '（雨打在傘上的聲音）哥往左邊來。再過來一點。……現在跟一年前反過來了呢。（哥的笑聲）') },
    { id: 'sw-v3', title: x('23:59 연습', '23:59 練習'), at: kst('2026-11-06 22:40'), seconds: 19, transcript: x('형 태어나줘서 고마워요. 그리고... 나 좋아해줘서. ...아 이거 소리 내서 하니까 너무 부끄럽다. 문자로 보내야지.', '哥，謝謝你出生。還有……謝謝你喜歡我。……啊，唸出來好害羞。還是用傳的吧。') },
  )

  s.voice.sort((a, b) => ms(b.at) - ms(a.at))

  /* 검색 기록 */
  s.searches.unshift(
    { q: x('벚꽃잎 말리는 법', '櫻花瓣怎麼壓乾'), result: [{ title: x('꽃잎 압화 하는 방법', '花瓣壓花的方法'), body: x('두꺼운 책 사이에 키친타월을 깔고…', '在厚書之間鋪上廚房紙巾…') }] },
    { q: x('알람 1초 전에 울리게', '讓鬧鐘提早一秒響'), result: [{ title: x('iPhone 알람은 분 단위만 설정 가능해요', 'iPhone 鬧鐘只能設定到分鐘'), body: x('23:59에 맞추고 미리 메시지를 써 두세요', '設在 23:59 並先把訊息寫好') }] },
    { q: x('타이베이 망고빙수 숟가락', '台北芒果冰 湯匙'), result: [{ title: x('야시장 망고빙수 추천', '夜市芒果冰推薦'), body: x('2인이면 큰 사이즈 하나에 숟가락 두 개…', '兩個人點一份大碗配兩根湯匙…') }] },
  )

  /* 통화 기록 (🩵 번호) */
  s.calls.push(
    { at: kst('2026-09-26 22:05'), contactId: 'sky', type: 'outgoing', seconds: 6130 },
    { at: kst('2026-10-11 00:03'), contactId: 'sky', type: 'incoming', seconds: 95 },
    { at: kst('2026-05-20 23:50'), contactId: 'sky', type: 'incoming', seconds: 1800 },
  )
  s.calls.sort((a, b) => ms(b.at) - ms(a.at))

  /* 알람 */
  s.alarms.unshift({ time: '23:59', label: x('1등 🩵', '第一名 🩵'), on: true })

  /* 메모 */
  s.notes.push(
    {
      id: 'sw-n1',
      title: x('형이 좋아하는 것', '哥喜歡的東西'),
      at: kst('2026-09-01 02:00'),
      body: x(
        '형이 좋아하는 것 (계속 추가 중)\n\n- 내가 웃는 거 (본인 피셜. 마이크 사건)\n- 계란말이 나눠주기 (나한테 세 개)\n- 귀 만지기 ← 이건 나 좋아한다는 뜻\n- 우산 하나\n- 바나나우유는 내가 좋아하는 건데 형도 좋아하게 됨\n- 새벽 산책\n- 내가 "형" 하고 부르는 거 (부르면 고개 돌리는 속도가 다름)\n- 리더 말고 그냥 신유로 있는 시간\n\n형이 싫어하는 것\n- 내가 혼자 무서워하는 거\n- 지는 거 (볼링 빼고. 볼링은 이제 포기함)',
        '哥喜歡的東西（持續新增中）\n\n- 我笑（本人說的。麥克風事件）\n- 分玉子燒（給我三個）\n- 摸耳朵 ← 這是喜歡我的意思\n- 一把傘\n- 香蕉牛奶本來是我喜歡的，結果哥也喜歡上了\n- 凌晨散步\n- 我叫他「哥」（被叫的時候轉頭的速度不一樣）\n- 不當隊長、只當申惟的時間\n\n哥討厭的東西\n- 我一個人害怕\n- 輸（保齡球除外。保齡球他已經放棄了）',
      ),
    },
    {
      id: 'sw-n2',
      title: x('형이랑 하고 싶은 것 (1년)', '想跟哥做的事（一年）'),
      at: kst('2026-11-06 21:30'),
      body: x(
        '형이랑 하고 싶은 것\n\n☑ 벚꽃 새벽 산책 (4/5)\n☑ 비 오는 날 내가 우산 들기 (6/25)\n☑ 바다 (8/4, 촬영 말고는 반쯤 성공)\n☑ 해외에서 같이 야시장 (8/22)\n☑ 경민이형한테 같이 말하기 (10/12)\n☑ 할로윈 커플 의상 (10/31, 바나나 논란)\n☐ 형 생일 0시 1초 컷 ← 오늘\n☐ 볼링 공식전 이기기\n☐ 첫눈 오는 날 베란다\n☐ 1224 1주년. 이번엔 내가 목도리 말고 다른 거\n☐ 내년에도 이 리스트 새로 쓰기',
        '想跟哥做的事\n\n☑ 凌晨櫻花散步（4/5）\n☑ 下雨天換我撐傘（6/25）\n☑ 海邊（8/4，除了拍攝以外算成功一半）\n☑ 在國外一起逛夜市（8/22）\n☑ 一起跟炅潣哥說（10/12）\n☑ 萬聖節情侶裝（10/31，香蕉爭議）\n☐ 哥生日零點一秒就傳 ← 今天\n☐ 正式保齡球比賽贏他\n☐ 初雪那天的陽台\n☐ 1224 一週年。這次送圍巾以外的東西\n☐ 明年也重新寫一份這個清單',
      ),
    },
  )

  /* 사진 */
  s.photos.push(
    { id: 'sw-p1', at: kst('2026-03-22 21:30'), emoji: '🎤', tint: '#f6d4d9', caption: x('엔딩 대참사 직캠 캡처 (형이 보내줌)', 'ending大慘案直拍截圖（哥傳給我的）') },
    { id: 'sw-p2', at: kst('2026-06-25 19:45'), emoji: '☔', tint: '#9fb4c7', caption: x('우산 아래, 형 쪽만 마른 어깨', '傘下，只有哥那邊是乾的肩膀') },
    { id: 'sw-p3', at: kst('2026-10-31 21:10'), emoji: '🍌', tint: '#fff1a8', caption: x('달(이라고 주장하는) 머리띠', '（他堅持是）月亮的髮箍') },
    { id: 'sw-p4', at: kst('2026-11-06 18:30'), emoji: '🎳', tint: '#c9d8f5', caption: x('픽업한 볼링공. 🎄 작게 보임', '取回來的保齡球。看得到小小的 🎄') },
  )

  /* 캘린더 */
  s.calendar.push(
    { date: '2026-12-24', title: x('1주년 🎄 (볼링 리매치 아님)', '一週年 🎄（不是保齡球復仇戰）'), color: '#bf5af2' },
    { date: '2026-11-07', title: x('🎂 형 생일 · 0시 1등', '🎂 哥生日 · 零點第一'), color: '#ff375f' },
  )

  /* ChatGPT */
  s.ai.push({
    id: 'g-sweet',
    when: 'week',
    title: x('1주년 선물 아이디어', '一週年禮物點子'),
    turns: [
      {
        q: x('곧 1주년인데 작년엔 목도리 줬어. 이번엔 뭐가 좋을까', '快一週年了，去年送了圍巾。今年送什麼好'),
        a: x(
          '작년 선물과 **이어지는** 선물이면 의미가 깊어져요.\n\n- **목도리와 세트인 장갑**: "작년의 따뜻함 + 올해의 따뜻함"\n- **1년 사진을 모은 작은 앨범**: 둘만 아는 날짜만 적어서\n- **같은 장소 다시 가기**: 처음 마음을 전한 곳에서 같은 시간에\n\n선물보다 **"기억하고 있었어"**가 전해지는 게 가장 중요해요.',
          '能和去年的禮物**連在一起**，意義會更深。\n\n- **和圍巾成套的手套**：「去年的溫暖＋今年的溫暖」\n- **收集一年照片的小相簿**：只寫下你們兩人懂的日期\n- **再去同一個地方**：在第一次說出心意的地方、同一個時間\n\n比禮物更重要的是傳達出**「我一直記得」**。',
        ),
      },
    ],
  })
}

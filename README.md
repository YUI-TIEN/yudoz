# 유도즈의 iPhone

TWS 신유·도훈(유도즈)을 모티브로 한 팬메이드 "주운 폰" 인터랙티브 웹. 한국어 원문 + 중국어(繁體) 번역.

- **신유의 iPhone**:1/29 23:58,도훈 생일 2분 전 (비밀번호 힌트는 잠금화면 알림)
- **도훈의 iPhone**:11/6 23:57,신유 생일 서프라이즈 직전

> 비공식·허구의 이야기입니다. 실제 인물·소속사와 관계없습니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # dist/ 에 정적 파일 생성
```

## 배포 (GitHub Pages)

`main`에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다.
처음 한 번만 GitHub 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꿔 주세요.

## 사진 넣기

지금은 사진 자리에 이모지 카드, 프로필에는 카카오톡식 기본 프로필이 나옵니다.

1. 이미지를 `public/photos/` 아래에 넣습니다. 예: `public/photos/shinyu/p2.jpg`
2. `src/story/shinyu.ts` 또는 `dohoon.ts`에서 해당 항목에 경로를 적습니다(앞에 `/` 없이).
   - 앨범 사진: `photos` 항목에 `src: 'photos/shinyu/p2.jpg'`
   - 카톡 사진 메시지: `{ ..., photo: {...}, src: 'photos/shinyu/shoes.jpg' }`
   - 프로필 사진: `contacts.dohoon` 에 `avatar: 'photos/avatars/dohoon.jpg'`, 폰 주인은 `owner.avatar`

## 구조

| 파일 | 내용 |
|---|---|
| `src/story/shinyu.ts`, `dohoon.ts` | 대화·메모·사진·검색 기록 등 모든 내용과 이벤트 스크립트 |
| `src/story/engine.tsx` | 스크립트 실행기 (알림 배너, 전화, 키워드 분기 답장, 진행 저장) |
| `src/components/` | 잠금화면·암호·홈·각 앱 UI |
| `docs/research.md` | 기획 리서치 |

### 스크립트 문법

`script`의 트리거는 `when` 이벤트가 일어나면 `actions`를 순서대로 실행합니다.

- 이벤트: `unlock`, `open:<방id>`, `branch:<방id>`, `branch:<방id>:<분기id>`, `call:accepted`, `call:declined`, `call:done`
- 액션: `msg`(메시지 도착), `clock`(시각 변경), `reply`(답장 대기 + 키워드 분기, 키워드 `''`는 아무 말이나), `call`(전화 수신), `wait`

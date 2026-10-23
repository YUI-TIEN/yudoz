import { useState } from 'react'
import { useLang, UI, type L } from '../../i18n'
import { useStory } from '../../story/engine'
import { SECRETS, SECRET_LABEL, useDevice, WALLPAPERS } from '../../device'
import { canFullscreen, enterFullscreen, exitFullscreen, isFullscreen } from '../../fullscreen'
import { Avatar, Cell, Group, Page, Toggle } from '../common'
import { WALLPAPER_PREVIEWS } from '../../wallpapers'
import { G } from '../icons'

type Sub = null | 'wifi' | 'bt' | 'sound' | 'focus' | 'general' | 'about' | 'lang' | 'display' | 'wallpaper' | 'battery' | 'site'

export function SettingsApp({ onExit }: { onExit: () => void }) {
  const { story, restart, setScreen } = useStory()
  const { s, set, found } = useDevice()
  const [fs, setFs] = useState(isFullscreen())
  const { t, lang, setLang } = useLang()
  const [sub, setSub] = useState<Sub>(null)
  const [sub2, setSub2] = useState<Sub>(null)
  const back = () => setSub(null)
  const on = t({ ko: '켬', zh: '開啟' })
  const off = t({ ko: '끔', zh: '關閉' })

  const subPage = (title: L, children: React.ReactNode, onBack = back, backLabel: L = UI.settings) => (
    <Page title={title} onBack={onBack} backLabel={backLabel}>
      {children}
    </Page>
  )

  if (sub2 === 'about')
    return subPage(
      { ko: '정보', zh: '關於本機' },
      <>
        <Group>
          <Cell title={t({ ko: '이름', zh: '名稱' })} detail={t(story.owner.device)} chevron />
          <Cell title={t({ ko: 'iOS 버전', zh: 'iOS 版本' })} detail="18.6" chevron />
          <Cell title={t({ ko: '모델 이름', zh: '機型名稱' })} detail="iPhone 16 Pro" />
          <Cell title={t({ ko: '사용 가능 공간', zh: '可用空間' })} detail="42 GB" />
        </Group>
        <Group>
          <Cell title="Wi-Fi" detail={s.wifi ? story.wifi : off} />
          <Cell title="Bluetooth" detail={s.bluetooth ? on : off} />
        </Group>
      </>,
      () => setSub2(null),
      { ko: '일반', zh: '一般' },
    )
  if (sub2 === 'lang')
    return subPage(
      { ko: '언어 및 지역', zh: '語言與地區' },
      <Group header={{ ko: '선호하는 언어', zh: '偏好的語言' }} footer={{ ko: '이 웹사이트의 이야기 언어가 바뀝니다.', zh: '會切換本網站故事的語言。' }}>
        <Cell title="한국어" sub="Korean" onClick={() => setLang('ko')} right={lang === 'ko' ? <G n="check" size={18} w={2.6} className="tint" /> : null} />
        <Cell title="中文（繁體）" sub="Chinese, Traditional" onClick={() => setLang('zh')} right={lang === 'zh' ? <G n="check" size={18} w={2.6} className="tint" /> : null} />
      </Group>,
      () => setSub2(null),
      { ko: '일반', zh: '一般' },
    )

  switch (sub) {
    case 'wifi':
      return subPage(
        'Wi-Fi',
        <>
          <Group footer={{ ko: '이 화면의 설정은 웹사이트 안에서만 바뀝니다.', zh: '此畫面的設定只會在網站內變更。' }}>
            <Cell title="Wi-Fi" right={<Toggle on={s.wifi} onChange={(v) => set('wifi', v)} />} />
            {s.wifi && <Cell title={<span className="tint-text">✓ {story.wifi}</span>} right={<G n="lock" size={14} />} detail={<G n="wifi" size={16} />} />}
          </Group>
          {s.wifi && (
            <Group header={{ ko: '네트워크', zh: '網路' }}>
              {['TWS_42_5G_Guest', 'PLEDIS_Staff', 'iPhone (경민)'].map((n) => (
                <Cell key={n} title={n} right={<G n="lock" size={14} />} detail={<G n="wifi" size={16} />} />
              ))}
            </Group>
          )}
        </>,
      )
    case 'bt':
      return subPage(
        'Bluetooth',
        <>
          <Group>
            <Cell title="Bluetooth" right={<Toggle on={s.bluetooth} onChange={(v) => set('bluetooth', v)} />} />
          </Group>
          {s.bluetooth && (
            <Group header={{ ko: '나의 기기', zh: '我的裝置' }}>
              {story.devices.map((d, i) => (
                <Cell key={i} title={t(d)} detail={i === 0 ? t({ ko: '연결됨', zh: '已連線' }) : t({ ko: '연결 안 됨', zh: '未連線' })} right={<G n="info" size={20} className="tint" />} />
              ))}
            </Group>
          )}
        </>,
      )
    case 'sound':
      return subPage(
        { ko: '사운드 및 햅틱', zh: '聲音與觸覺回饋' },
        <>
          <Group>
            <Cell title={t({ ko: '무음 모드', zh: '靜音模式' })} right={<Toggle on={s.silent} onChange={(v) => set('silent', v)} />} />
          </Group>
          <Group header={{ ko: '벨소리 및 알림 음량', zh: '鈴聲與提示音量' }}>
            <div className="cell slider-cell">
              <G n="speaker" size={18} />
              <input type="range" min={0} max={1} step={0.05} value={s.volume} onChange={(e) => set('volume', Number(e.target.value))} />
            </div>
          </Group>
          <Group>
            <Cell title={t({ ko: '벨소리', zh: '鈴聲' })} detail={t({ ko: '오프닝', zh: '開場' })} chevron />
            <Cell title={t({ ko: '문자 수신음', zh: '簡訊提示音' })} detail={t({ ko: '노트', zh: '音符' })} chevron />
          </Group>
        </>,
      )
    case 'focus':
      return subPage(
        { ko: '집중 모드', zh: '專注模式' },
        <Group footer={{ ko: '방해 금지 모드에서는 알림 배너가 표시되지 않습니다.', zh: '開啟勿擾模式時不會顯示通知橫幅。' }}>
          <Cell icon="moon" iconBg="#5e5ce6" title={t({ ko: '방해 금지 모드', zh: '勿擾模式' })} right={<Toggle on={s.focus} onChange={(v) => set('focus', v)} />} />
          <Cell icon="bed" iconBg="#30b0c7" title={t({ ko: '수면', zh: '睡眠' })} chevron />
        </Group>,
      )
    case 'general':
      return subPage(
        { ko: '일반', zh: '一般' },
        <>
          <Group>
            <Cell title={t({ ko: '정보', zh: '關於本機' })} chevron onClick={() => setSub2('about')} />
            <Cell title={t({ ko: '소프트웨어 업데이트', zh: '軟體更新' })} chevron />
          </Group>
          <Group>
            <Cell title={t({ ko: '언어 및 지역', zh: '語言與地區' })} detail={lang === 'ko' ? '한국어' : '中文'} chevron onClick={() => setSub2('lang')} />
            <Cell title={t({ ko: '날짜 및 시간', zh: '日期與時間' })} chevron />
            <Cell title={t({ ko: '키보드', zh: '鍵盤' })} chevron />
          </Group>
        </>,
      )
    case 'display':
      return subPage(
        { ko: '디스플레이 및 밝기', zh: '螢幕顯示與亮度' },
        <>
          <Group header={{ ko: '밝기', zh: '亮度' }}>
            <div className="cell slider-cell">
              <G n="sun" size={16} />
              <input type="range" min={0.25} max={1} step={0.01} value={s.brightness} onChange={(e) => set('brightness', Number(e.target.value))} />
              <G n="sun" size={24} />
            </div>
          </Group>
          <Group header={{ ko: '텍스트 크기', zh: '文字大小' }}>
            <div className="cell slider-cell">
              <small>가</small>
              <input type="range" min={0.9} max={1.2} step={0.05} value={s.textSize} onChange={(e) => set('textSize', Number(e.target.value))} />
              <b>가</b>
            </div>
          </Group>
        </>,
      )
    case 'wallpaper': {
      const prev = WALLPAPER_PREVIEWS(story)
      return subPage(
        { ko: '배경화면', zh: '背景圖片' },
        <div className="wp-grid">
          {WALLPAPERS.map((w) => (
            <button key={w.id} className={s.wallpaper === w.id ? 'on' : ''} onClick={() => set('wallpaper', w.id)}>
              <span style={{ background: prev[w.id] }}>
                <b>{story.id === 'shinyu' ? '23:58' : '23:57'}</b>
              </span>
              <small>{t(w.name)}</small>
            </button>
          ))}
        </div>,
      )
    }
    case 'battery':
      return subPage(
        { ko: '배터리', zh: '電池' },
        <>
          <Group>
            <Cell title={t({ ko: '배터리 잔량 표시', zh: '電池百分比' })} detail="78%" />
            <Cell title={t({ ko: '저전력 모드', zh: '低耗電模式' })} right={<Toggle on={false} onChange={() => {}} color="#ffcc00" />} />
          </Group>
          <Group header={{ ko: '앱별 배터리 사용량', zh: '各 App 的電池用量' }}>
            {[
              [UI.kakao, '41%'],
              [{ ko: '카메라', zh: '相機' }, '18%'],
              [UI.photos, '12%'],
              [UI.notes, '9%'],
            ].map(([n, v]) => (
              <Cell key={t(n as L)} title={t(n as L)} detail={v as string} />
            ))}
          </Group>
        </>,
      )
  }

  return (
    <Page title={UI.settings} large search={UI.search}>
      <Group>
        <Cell
          title={
            <span className="set-profile">
              <Avatar size={58} radius={29} src={story.owner.avatar} />
              <span>
                <b>{t(story.owner.name)}</b>
                <small>{t({ ko: 'Apple 계정, iCloud 등', zh: 'Apple 帳號、iCloud 等' })}</small>
              </span>
            </span>
          }
          chevron
        />
      </Group>
      <Group>
        <Cell icon="plane" iconBg="#ff9500" title={t({ ko: '에어플레인 모드', zh: '飛航模式' })} right={<Toggle on={s.airplane} onChange={(v) => set('airplane', v)} />} />
        <Cell icon="wifi" iconBg="#007aff" title="Wi-Fi" detail={s.wifi ? story.wifi : off} chevron onClick={() => setSub('wifi')} />
        <Cell icon="bluetooth" iconBg="#007aff" title="Bluetooth" detail={s.bluetooth ? on : off} chevron onClick={() => setSub('bt')} />
        <Cell icon="antenna" iconBg="#34c759" title={t({ ko: '셀룰러', zh: '行動服務' })} right={<Toggle on={s.cellular} onChange={(v) => set('cellular', v)} />} />
      </Group>
      <Group>
        <Cell icon="bell" iconBg="#ff3b30" title={t({ ko: '알림', zh: '通知' })} chevron />
        <Cell icon="speaker" iconBg="#ff2d55" title={t({ ko: '사운드 및 햅틱', zh: '聲音與觸覺回饋' })} chevron onClick={() => setSub('sound')} />
        <Cell icon="moon" iconBg="#5e5ce6" title={t({ ko: '집중 모드', zh: '專注模式' })} detail={s.focus ? on : ''} chevron onClick={() => setSub('focus')} />
        <Cell icon="timer" iconBg="#5e5ce6" title={t({ ko: '스크린 타임', zh: '螢幕使用時間' })} chevron />
      </Group>
      <Group>
        <Cell icon="gear" iconBg="#8e8e93" title={t({ ko: '일반', zh: '一般' })} chevron onClick={() => setSub('general')} />
        <Cell icon="apps" iconBg="#8e8e93" title={t({ ko: '제어 센터', zh: '控制中心' })} chevron />
        <Cell icon="sun" iconBg="#007aff" title={t({ ko: '디스플레이 및 밝기', zh: '螢幕顯示與亮度' })} chevron onClick={() => setSub('display')} />
        <Cell icon="image" iconBg="#32ade6" title={t({ ko: '배경화면', zh: '背景圖片' })} chevron onClick={() => setSub('wallpaper')} />
        <Cell icon="battery" iconBg="#34c759" title={t({ ko: '배터리', zh: '電池' })} chevron onClick={() => setSub('battery')} />
        <Cell icon="hand" iconBg="#007aff" title={t({ ko: '개인정보 보호 및 보안', zh: '隱私權與安全性' })} chevron />
      </Group>
      <Group header={{ ko: '발견한 비밀', zh: '發現的祕密' }} footer={{ ko: '폰 곳곳에 숨겨진 비밀을 찾아보세요. 힌트는 다른 앱 안에 있어요.', zh: '找找看藏在手機各處的祕密。提示就在其他 App 裡。' }}>
        <Cell
          icon="unlock"
          iconBg="#af52de"
          title={t({ ko: `${found.length} / ${SECRETS.length}`, zh: `${found.length} / ${SECRETS.length}` })}
          detail={<span className="secret-dots">{SECRETS.map((id) => (found.includes(id) ? '●' : '○')).join(' ')}</span>}
        />
        {SECRETS.filter((id) => found.includes(id)).map((id) => (
          <Cell key={id} title={t(SECRET_LABEL[id])} right={<G n="check" size={18} w={2.6} className="tint" />} />
        ))}
      </Group>
      <Group header={{ ko: '이 웹사이트', zh: '本網站' }} footer={UI.aboutText}>
        {canFullscreen() && (
          <Cell
            icon="expand"
            iconBg="#007aff"
            title={t({ ko: '전체 화면', zh: '全螢幕' })}
            right={
              <Toggle
                on={fs}
                onChange={async (v) => {
                  if (v) await enterFullscreen()
                  else await exitFullscreen()
                  setFs(isFullscreen())
                }}
              />
            }
          />
        )}
        <Cell icon="lock" iconBg="#636366" title={t(UI.toLock)} onClick={() => setScreen({ kind: 'lock' })} />
        <Cell icon="rewind" iconBg="#ff3b30" title={t(UI.restart)} onClick={restart} danger />
        <Cell icon="phone" iconBg="#34c759" title={t(UI.toSelect)} onClick={onExit} />
      </Group>
    </Page>
  )
}

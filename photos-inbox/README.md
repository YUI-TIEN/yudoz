# 照片投遞區 / 사진 넣는 곳

這個資料夾**不會被部署到網站**。照片放在這裡,通知 Claude 分類後,才會搬到 `public/photos/` 並套用到網站上。

| 資料夾 | 放什麼 |
|---|---|
| `avatars/` | 頭像。檔名寫成員名字最方便,例如 `shinyu.jpg`、`dohoon.jpg`、`kyungmin.jpg`、`jihoon.jpg`、`youngjae.jpg`、`hanjin.jpg` |
| `shinyu/` | 想放進「신유 的手機」的照片(相簿、聊天、IG 等) |
| `dohoon/` | 想放進「도훈 的手機」的照片 |
| `both/` | 兩支手機都能用、或不確定要放哪的照片 |
| `wallpaper/` | 鎖定畫面/主畫面桌布(直式最好) |

- 格式:jpg / png / webp 都可以,單張建議 5MB 以下。
- 檔名隨意,不用整理,Claude 會逐張看內容分類。
- 網站是公開的,請只放可以公開的照片(不放偷拍或私人場合的照片)。

## 怎麼上傳

1. 打開 GitHub 上的 `yui-tien/yudoz` → 進到 `photos-inbox/` 底下要放的資料夾
2. 右上角 **Add file → Upload files** → 拖照片進去 → **Commit changes**
3. 回來跟 Claude 說「照片傳好了」

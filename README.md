# OWNVER — Magnetic Leather Hat Piece

OWNVER 可替換磁吸皮革帽飾品牌網站。

**Own Every Version.**  
擁有每一個版本的自己。

## 目前版本

- 繁體中文 / English 切換
- 手機與桌面響應式版面
- 3–8 個英文字母即時皮件預覽
- 故事總覽頁 `stories.html`
- 10 組品牌故事與預留圖片版位
- 可持續擴充的故事影片牆與 Supabase 後台
- 手機左右滑動、影片彈出播放與原生分享
- Pinkoi 導購入口（目前為待設定狀態）

## 後續新增影片

登入 `/admin` 後台可新增影片、封面、皮革文字與故事摘要。發布後，首頁會自動讀取 Supabase 中的公開故事；相同皮革文字的封面也會自動出現在故事總覽頁。

Pinkoi 正式上架後，在 `index.html` 找到 `id="pinkoi"`，把 `href="#"` 換成商品網址即可。

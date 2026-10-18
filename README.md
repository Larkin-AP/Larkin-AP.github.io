# Personal homepage

Static site (HTML/CSS/JS, no build step) for GitHub Pages: <https://larkin-ap.github.io>

## 改内容
只需要编辑 `assets/data/content.js`（英文 `en`、中文 `zh` 各一份）：简介、研究、项目、论文、专利、荣誉、教育。
论文状态变化（在审→接收）直接改对应条目的 `status` / `venue` / `year`。已接收但 Scholar 未收录的会议论文，补在 `publications` 末尾的 TODO 处。

## 本地预览
```bash
cd "Github Page"
python3 -m http.server 8765
# 浏览器打开 http://127.0.0.1:8765
```

## 部署
推送到 `main` 分支即可，仓库 Settings → Pages 选 “Deploy from a branch” → `main` / `/ (root)`。

## 隐私
公开页面没有放手机号和简历 PDF（简历里含手机号）。照片和邮箱可以在 `assets/img/photo.jpg`、`content.js` 里替换或删除。

# 台风科普与防灾创新平台

一个使用 React + esbuild + Tailwind 的静态网站，包含台风科普内容、测验、可视化画布和案例展示。

## 项目结构（高层）

- `index.html` — 应用入口 HTML
- `package.json` — npm 脚本与依赖
- `scripts/build.mjs` — esbuild 构建与开发服务器
- `src/` — 源代码
  - `App.tsx`, `main.tsx` — 应用入口与路由
  - `components/` — 可复用组件（画布、导航、页面片段等）
  - `pages/` — 页面组件（Home, Quiz, Safety, Theory 等）
  - `data/` — 静态数据（例如 `typhoon-quiz.json`）
  - `hooks/`, `layout/`, `theme/`, `lib/` 等

## 快速开始

1. **本地查看网站**：打开文件夹`dict`，然后打开文件`index.html`。
2. **部署静态网站**：打开部署好的网站。


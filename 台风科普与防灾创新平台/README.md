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

1. 安装依赖：

```powershell
npm install
```

2. 开发模式（带 watch + 本地静态服务器）：

```powershell
npm run dev
```

在控制台会打印 dev 服务地址（例如 `http://localhost:8000`），在浏览器打开并查看页面。

3. 生产构建：

```powershell
npm run build
```

构建输出在 `dist/` 目录，包含可直接部署的静态资源。

## 图片替换（使用本地图片）

推荐将图片放到 `src/assets/`，然后通过 import 使用：

1. 创建 `src/assets/` 并把图片复制进去（例如 `safety-1.png`）。
2. 如需避免 TypeScript 报错，请添加模块声明文件 `src/env.d.ts`：

```ts
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.webp';
```

3. 在页面或组件中导入并替换：

```ts
import safety1 from '../assets/safety-1.png'

// 在数据或组件中使用
image: safety1
// 或 <img src={safety1} alt="..." />
```

构建时 esbuild 会把图片复制到 `dist`，并把正确的文件引用注入构建输出（scripts/build.mjs 已配置 `'.png': 'file'` loader）。

## 部署指南

部署步骤参见 `DeploymentGuide.txt`。简要要点：

- 推荐将 `dist/` 上传到静态托管服务，例如 Vercel / Netlify / Cloudflare Pages / GitHub Pages。
- `DeploymentGuide.txt` 包含平台推荐与具体说明（拖放部署、Git 自动部署的 build 命令和发布目录设置）。

## 常见问题与调试

- 如果图片显示为 404：打开 DevTools -> Network，查看请求的路径与状态。若是本地 import，请确认图片已在 `src` 下并正确 import。
- TypeScript 报错找不到模块：添加 `src/env.d.ts` 声明并重启 TS Server（命令面板：TypeScript: Restart TS Server）。
- 构建失败或路由问题：检查 `scripts/build.mjs` 的 entryPoints（`src/main.tsx`, `index.html`）与 `npm run build` 输出日志。

## 我可以帮助的后续操作

- 我可以替你将指定页面（例如 `Safety.tsx` 或 `Home.tsx`）的图片替换为你放在 `src/assets/` 的本地图片。
- 我可以为你生成 `src/env.d.ts` 并做一次示例替换与本地验证。

请告诉我你想要我执行的下一步（例如“将 `src/pages/Safety.tsx` 的图片替换为 `src/assets/safety-1.png`”），我会在你确认后立即替换并运行 dev 验证。
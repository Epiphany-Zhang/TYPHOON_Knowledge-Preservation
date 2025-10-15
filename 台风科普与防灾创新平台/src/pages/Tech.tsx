/**
 * Tech.tsx
 * Explains cross-platform techniques using React + HTML5 with sample architecture.
 */

import { Code } from 'lucide-react'

/**
 * TechPage
 * Covers routing, responsive UI, animation layers and state management.
 */
export default function TechPage() {
  const bullets = [
    '路由：HashRouter 兼容无服务端配置的多端环境（App WebView、移动浏览器）。',
    '样式：Tailwind CSS 响应式断点，简洁可维护的原子化样式。',
    '动画：Canvas/SVG/CSS3 多方案择优；本项目演示 Canvas 正弦波动画。',
    '状态：受控组件与本地状态，清晰的数据流与交互逻辑。',
    '图像：AutoImage 智能占位，快速填充高质量视觉素材。',
    '可访问性：高对比度文本、可键盘操作按钮与语义化标签。'
  ]

  const codeSample = `
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="theory" element={<Theory />} />
          {/* ...other pages */}
        </Route>
      </Routes>
    </HashRouter>
  )
}
`.trim()

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-sky-700 bg-sky-50 border border-sky-200 px-2 py-1 rounded">
          <Code className="h-4 w-4" />
          跨平台技术
        </div>
        <h1 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900">React + HTML5 跨平台适配</h1>
        <p className="mt-2 text-slate-700">
          使用标准 Web 技术构建一致体验：路由、组件化、响应式与动画在多端一致呈现。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900">核心实践</h3>
          <ul className="list-disc pl-5 text-slate-700 space-y-1">
            {bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900">路由与布局示例</h3>
          <pre className="mt-2 text-xs bg-slate-900 text-sky-100 rounded p-3 overflow-auto">
{codeSample}
          </pre>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h3 className="font-semibold text-slate-900">架构视图</h3>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
            <div className="text-xs text-emerald-700">UI 层</div>
            <div className="font-medium text-slate-900">组件（NavBar、Hero、CaseCard…）</div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-3">
            <div className="text-xs text-sky-700">逻辑层</div>
            <div className="font-medium text-slate-900">状态管理、表单校验、交互测试</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-600">平台适配层</div>
            <div className="font-medium text-slate-900">Hash 路由、响应式、触控与键鼠输入</div>
          </div>
        </div>
      </section>
    </div>
  )
}

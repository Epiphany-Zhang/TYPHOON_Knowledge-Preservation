/**
 * Design.tsx
 * Showcases color palette, component styles and motion guidelines.
 */

/**
 * ColorSwatch
 * Small helper to render a color block with label.
 */
function ColorSwatch({ name, bg, text = 'text-white' }: { name: string; bg: string; text?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden">
      <div className={`h-12 ${bg} ${text} flex items-center justify-center font-medium`}>{name}</div>
      <div className="p-2 text-xs text-slate-600">{bg.replace('bg-', '')}</div>
    </div>
  )
}

/**
 * DesignPage
 * Visual and interaction design reference for the project.
 */
export default function DesignPage() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">界面设计与交互说明</h1>
        <p className="mt-2 text-slate-700">
          科技感与自然结合：以蓝色/绿色为主色，搭配高对比排版与适度动效，保证阅读性与亲和力。
        </p>
      </header>

      <section>
        <h3 className="font-semibold text-slate-900">配色方案</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <ColorSwatch name="Primary" bg="bg-sky-600" />
          <ColorSwatch name="Primary/Light" bg="bg-sky-50" text="text-sky-700" />
          <ColorSwatch name="Accent" bg="bg-emerald-600" />
          <ColorSwatch name="Accent/Light" bg="bg-emerald-50" text="text-emerald-700" />
          <ColorSwatch name="Surface" bg="bg-white" text="text-slate-900" />
          <ColorSwatch name="On Surface" bg="bg-slate-900" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900">按钮样式</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <button className="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">主按钮</button>
            <button className="px-4 py-2 rounded-lg bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">次按钮</button>
            <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">强调</button>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900">动效规范</h3>
          <ul className="list-disc pl-5 text-slate-700 text-sm space-y-1">
            <li>交互反馈 ≤ 200ms，保持迅捷。</li>
            <li>图片悬停使用轻微缩放与阴影，避免眩晕。</li>
            <li>页面层级切换保持渐进与可预期。</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

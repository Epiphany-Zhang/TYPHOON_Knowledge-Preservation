/**
 * Cases.tsx
 * Case studies highlighting disaster mitigation and preparedness with comments.
 */

import CaseCard from '../components/Case/CaseCard'

/**
 * CasesPage
 * Displays selected real or simulated cases with key takeaways.
 */
export default function CasesPage() {
  const cases = [
    {
      title: '2011 日本东日本大地震与海啸',
      summary: '高波叠加多次波峰，重创沿海城镇与基础设施，核电站事故引发全球关注。',
      detail: '启示：多重防线（堤防、高地避难、预警与演练）缺一不可；关键设施需按最高标准抗灾设计。',
      image: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/7c764bee-e6bb-4794-beeb-9c6a1ac279c0.jpg',
      tags: ['预警', '工程抗灾', '应急响应']
    },
    {
      title: '港湾与地形放大效应（模拟）',
      summary: '狭窄海湾形状可能导致能量聚焦，局部波高显著增大。',
      detail: '启示：地形因素决定局部风险，规划需引入精细地形数值模拟与疏散路线优化。',
      image: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/299ff078-1f51-47fe-9cb4-4ecac604db24.jpg',
      tags: ['地形效应', '城市规划', '模拟']
    }
  ]

  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      <header className="max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">创新案例分析</h1>
        <p className="mt-2 text-slate-700 dark:text-slate-300">
          从真实事件与模拟场景提炼经验，强调“预防为主、演练为先、工程保障”的减灾体系。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {cases.map((c) => (
          <CaseCard key={c.title} title={c.title} summary={c.summary} detail={c.detail} image={c.image} tags={c.tags} />
        ))}
      </div>
    </div>
  )
}

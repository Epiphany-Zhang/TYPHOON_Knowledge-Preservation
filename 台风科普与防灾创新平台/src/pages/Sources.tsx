/**
 * Sources.tsx
 * Standalone "资料来源" page focused on imagery.
 * - Hero header keeps site theme (blue/gray gradient).
 * - Responsive image gallery as the main content.
 * - Reuses SourcesPanel for standardized references and acknowledgements.
 */

import React, { useMemo } from 'react'
import { BookMarked } from 'lucide-react'
import SourcesPanel from '../components/References/SourcesPanel'

/** Simple gallery item type. */
interface GalleryItem {
  /** Image URL */
  src: string
  /** Optional caption text */
  caption?: string
}

export default function SourcesPage() {
  // Primary images (provided and placeholder) — clear, responsive
  const items: GalleryItem[] = useMemo(
    () => [
      {
        src: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/cb609a49-6c45-404f-9189-aca4b8d1e505.png',
        caption: 'Typhoon track map · illustrative',
      },
      {
        src: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/68dc8b9f-68e8-4de7-96c8-5bd1313ae456.png',
        caption: 'Storm system trajectory · diagram',
      },
      {
        src: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/fd34f7c9-3634-45a7-8665-ea1a65881508.png',
        caption: 'Wave shoaling nearshore · schematic',
      },
      {
        src: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/8d355993-afd6-475d-ad02-ac9e4b589f3e.png',
        caption: 'Knowledge card · styled chart',
      },
      { src: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/2a830c7e-f01c-4e97-bf6a-c6618bfb6229.jpg', caption: 'Field site · architecture' },
      { src: 'https://pub-cdn.sider.ai/u/U0L5HAOE6JV/web-coder/68e72512b54d8be52ac19385/resource/56b2d2d4-174d-454b-a2d1-ba058b998087.jpg', caption: 'Satellite imagery · ice/water' },
    ],
    []
  )

  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      {/* Hero header */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-800 to-slate-700 p-6 text-white shadow-sm dark:border-slate-800">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-white/95">
            <BookMarked className="h-5 w-5" />
            <span className="text-xs">Reference Gallery</span>
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">资料来源</h1>
        </div>
        <p className="mt-2 text-white/90">
          本页展示项目所用示意图与素材来源的代表性图像，整体风格与站点保持一致，支持响应式浏览。
        </p>
      </section>

      {/* Responsive image gallery */}
      <section aria-label="图片资料相册" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <figure
            key={idx}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <img
              src={it.src}
              alt={it.caption ?? 'source image'}
              className="object-cover w-full h-48 sm:h-56 lg:h-60 transition-transform duration-300 group-hover:scale-[1.02]"
            />
            {it.caption ? (
              <figcaption className="px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                {it.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </section>

      {/* Standardized references block */}
      <SourcesPanel />
    </div>
  )
}

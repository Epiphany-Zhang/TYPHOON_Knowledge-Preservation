/**
 * CaseCard.tsx
 * Case study card with details and an inline comment section.
 */

import { useMemo, useState } from 'react'
import { MessageSquare, Send, ThumbsUp } from 'lucide-react'

interface Comment {
  id: string
  name: string
  text: string
  ts: number
  likes: number
}

export interface CaseCardProps {
  title: string
  summary: string
  detail: string
  image: string
  tags?: string[]
}

/**
 * CaseCard
 * Displays case content with local-only interactive comments (no persistence).
 */
export default function CaseCard({ title, summary, detail, image, tags = [] }: CaseCardProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const canSend = useMemo(() => (text.trim().length >= 3), [text])

  const addComment = () => {
    if (!canSend) return
    setComments((prev) => [
      {
        id: Math.random().toString(36).slice(2),
        name: name.trim() || '游客',
        text: text.trim(),
        ts: Date.now(),
        likes: 0
      },
      ...prev
    ])
    setText('')
  }

  const like = (id: string) => {
    setComments((prev) => prev.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c))
  }

  return (
    <article className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-sky-50 text-sky-700 border border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800">{t}</span>
          ))}
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300">{summary}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{detail}</p>

        <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 mb-2">
            <MessageSquare className="h-4 w-4 text-sky-600" />
            互动点评
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="昵称（可选）"
              className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
            />
            <div className="flex-1 flex gap-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="写下你的看法（≥ 3 字）"
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
              />
              <button
                onClick={addComment}
                disabled={!canSend}
                className="px-3 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 disabled:bg-slate-300 dark:disabled:bg-slate-700"
                aria-label="发送评论"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {comments.length === 0 && (
              <div className="text-sm text-slate-500 dark:text-slate-400">还没有评论，快来发表第一条观点吧。</div>
            )}
            {comments.map((c) => (
              <div key={c.id} className="rounded-lg border border-slate-200 dark:border-slate-800 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-100">{c.name}</div>
                  <button
                    onClick={() => like(c.id)}
                    className="inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    <ThumbsUp className="h-3.5 w-3.5" />
                    {c.likes}
                  </button>
                </div>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{c.text}</p>
                <div className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {new Date(c.ts).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

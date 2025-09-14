// components/Timeline.tsx
'use client'

import { useMemo, useState } from 'react'
import type { TimelineItem, TLStream, TLStatus, TLActor } from '@/lib/data/timeline'
import clsx from 'clsx'

const streamLabels: Record<TLStream, string> = {
  kvalitetsprogram: 'Kvalitetsprogram',
  fagfornyelsen: 'Fagfornyelsen'
}
const statusLabels: Record<TLStatus, string> = {
  vedtaget: 'Vedtaget',
  i_gang: 'I gang',
  kan_paavirkes: 'Kan påvirkes'
}
const statusDot: Record<TLStatus, string> = {
  vedtaget: 'bg-gray-900',
  i_gang: 'bg-blue-600',
  kan_paavirkes: 'bg-amber-500'
}

export default function Timeline({
  items,
  actorFilter
}: {
  items: TimelineItem[]
  actorFilter?: TLActor | null
}) {
  const [stream, setStream] = useState<TLStream | 'alle'>('alle')
  const [status, setStatus] = useState<TLStatus | 'alle'>('alle')

  const filtered = useMemo(() => {
    return items
      .filter(i => (stream === 'alle' ? true : i.stream === stream))
      .filter(i => (status === 'alle' ? true : i.status === status))
      .filter(i => (actorFilter ? i.actors.includes(actorFilter) : true))
      .sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [items, stream, status, actorFilter])

  return (
    <div className="space-y-4">
      {/* filters */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="kicker">Filtre</span>

        <select
          value={stream}
          onChange={e => setStream(e.target.value as any)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="alle">Alle spor</option>
          <option value="kvalitetsprogram">{streamLabels.kvalitetsprogram}</option>
          <option value="fagfornyelsen">{streamLabels.fagfornyelsen}</option>
        </select>

        <select
          value={status}
          onChange={e => setStatus(e.target.value as any)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
        >
          <option value="alle">Alle statusser</option>
          <option value="vedtaget">{statusLabels.vedtaget}</option>
          <option value="i_gang">{statusLabels.i_gang}</option>
          <option value="kan_paavirkes">{statusLabels.kan_paavirkes}</option>
        </select>

        <div className="ml-auto flex items-center gap-3 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1">
            <span className={clsx('h-2 w-2 rounded-full', statusDot.vedtaget)}></span> Vedtaget
          </span>
          <span className="inline-flex items-center gap-1">
            <span className={clsx('h-2 w-2 rounded-full', statusDot.i_gang)}></span> I gang
          </span>
          <span className="inline-flex items-center gap-1">
            <span className={clsx('h-2 w-2 rounded-full', statusDot.kan_paavirkes)}></span> Kan påvirkes
          </span>
        </div>
      </div>

      {/* vertical timeline */}
      <ol className="relative border-l border-gray-200 pl-4">
        {filtered.map(i => (
          <li key={i.id} className="mb-6 ml-2">
            <span className={clsx('absolute -left-[9px] mt-1 h-3 w-3 rounded-full ring-4 ring-white', statusDot[i.status])} />

            <div className="flex flex-wrap items-center gap-2">
              <div className="text-xs text-gray-500">
                {new Date(i.date).toLocaleDateString('da-DK')} {i.quarter ? `(${i.quarter})` : ''}
              </div>
              <span className="rounded-full border border-gray-300 px-2 py-0.5 text-xs">
                {streamLabels[i.stream]}
              </span>
              <span className={clsx(
                'rounded-full px-2 py-0.5 text-xs border',
                i.status === 'vedtaget' && 'border-gray-300 text-gray-700',
                i.status === 'i_gang' && 'border-blue-300 text-blue-700 bg-blue-50',
                i.status === 'kan_paavirkes' && 'border-amber-300 text-amber-700 bg-amber-50'
              )}>
                {statusLabels[i.status]}
              </span>
            </div>

            <h3 className="mt-1 font-semibold">{i.title}</h3>
            <p className="text-sm text-gray-700">{i.summary}</p>

            {i.links && i.links.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {i.links.map(l => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
                     className="text-xs underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
                    {l.navn}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}

        {filtered.length === 0 && (
          <div className="text-sm text-gray-500">Ingen punkter matcher dine filtre.</div>
        )}
      </ol>
    </div>
  )
}
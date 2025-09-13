import type { Initiative } from '@/lib/types'


export default function Timeline({ items }: { items: Initiative[] }) {
const sorted = [...items].sort((a,b)=> a.ikraft.localeCompare(b.ikraft))
return (
<ol className="relative border-l border-gray-200 pl-6">
{sorted.map((it) => (
<li key={it.id} className="mb-8 ml-2">
<span className="absolute -left-[9px] mt-1 h-2 w-2 rounded-full bg-gray-900" />
<div className="kicker">{new Date(it.ikraft).toLocaleDateString('da-DK')}</div>
<div className="font-semibold">{it.titel}</div>
<p className="muted text-sm max-w-2xl">{it.beskrivelse}</p>
</li>
))}
</ol>
)
}
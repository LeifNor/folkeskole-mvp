'use client'
import { useEffect, useState } from 'react'


export default function TaskList({ storageKey, items }: { storageKey: string; items: string[] }) {
const [done, setDone] = useState<Record<string, boolean>>({})
useEffect(() => { try { setDone(JSON.parse(localStorage.getItem(storageKey) || '{}')) } catch {} }, [storageKey])
useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(done)) }, [done, storageKey])


return (
<ul className="space-y-2">
{items.map((it) => (
<li key={it} className="flex items-center gap-2">
<input
id={it}
type="checkbox"
className="h-4 w-4 rounded border-gray-300"
checked={!!done[it]}
onChange={(e) => setDone({ ...done, [it]: e.target.checked })}
/>
<label htmlFor={it} className={`text-sm ${done[it] ? 'line-through text-gray-400' : ''}`}>{it}</label>
</li>
))}
</ul>
)
}
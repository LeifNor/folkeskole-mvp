'use client'
import { useState } from 'react'
import type { Initiative } from '@/lib/types'
import { ROLE_LABELS, type Role } from '@/lib/roles'


export default function ImpactTabs({ init }: { init: Initiative }) {
const roles: Role[] = ['laerer','elev','ledelse','foraeldre']
const [active, setActive] = useState<Role>('laerer')
const impact = init.impacts.find(i => i.aktor === active)


return (
<div className="mt-6">
<div className="tabs">
{roles.map(r => (
<button key={r} className={`tab ${active===r ? 'tab-active' : ''}`} onClick={()=>setActive(r)}>
{ROLE_LABELS[r]}
</button>
))}
</div>
{impact && (
<div className="mt-4 space-y-4 sm:space-y-0 sm:grid sm:gap-4 lg:grid-cols-3">
<div>
<div className="kicker mb-1">Opgaver</div>
<ul className="list-disc pl-5 text-sm space-y-0.5">
{impact.opgaver.map(x=> <li key={x} className="break-words">{x}</li>)}
</ul>
</div>
<div>
<div className="kicker mb-1">Konsekvenser</div>
<ul className="list-disc pl-5 text-sm space-y-0.5">
{impact.konsekvenser.map(x=> <li key={x} className="break-words">{x}</li>)}
</ul>
</div>
<div>
<div className="kicker mb-1">Ophører</div>
<ul className="list-disc pl-5 text-sm space-y-0.5">
{(impact.ophorer.length? impact.ophorer : ['–']).map(x=> <li key={x} className="break-words">{x}</li>)}
</ul>
</div>
</div>
)}
</div>
)
}
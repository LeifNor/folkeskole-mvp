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
<div className="mt-4 grid gap-6 md:grid-cols-3">
<div>
<div className="kicker mb-1">Opgaver</div>
<ul className="list-disc pl-5 text-sm">{impact.opgaver.map(x=> <li key={x}>{x}</li>)}</ul>
</div>
<div>
<div className="kicker mb-1">Konsekvenser</div>
<ul className="list-disc pl-5 text-sm">{impact.konsekvenser.map(x=> <li key={x}>{x}</li>)}</ul>
</div>
<div>
<div className="kicker mb-1">Ophører</div>
<ul className="list-disc pl-5 text-sm">{(impact.ophorer.length? impact.ophorer : ['–']).map(x=> <li key={x}>{x}</li>)}</ul>
</div>
</div>
)}
</div>
)
}
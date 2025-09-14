'use client'
import { useEffect, useState } from 'react'
import RolePicker from '@/components/RolePicker'
import InitiativeCard from '@/components/InitiativeCard'
import Timeline from '@/components/Timeline'
import BadgeLegend from '@/components/BadgeLegend'
import { initiatives } from '@/lib/data/initiatives'
import type { Role } from '@/lib/roles'
import { getInitialRole } from '@/lib/roles'


export default function Page() {
const [role, setRole] = useState<Role>('laerer')
useEffect(()=> setRole(getInitialRole()), [])


return (
<main className="space-y-6 sm:space-y-8">
<section className="card p-4 sm:p-6">
<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
<div className="flex-1">
<div className="kicker">Personalisering</div>
<h2 className="h2">Vælg din rolle</h2>
<p className="muted">Indholdet målrettes efter dit valg (gemmes lokalt).</p>
</div>
<div className="lg:flex-shrink-0">
<RolePicker onChange={setRole} />
</div>
</div>
<div className="mt-4">
<BadgeLegend />
</div>
</section>


<section className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
{initiatives.map((init) => (
<InitiativeCard key={init.id} init={init} role={role} />
))}
</section>


<section className="card p-4 sm:p-6">
<div className="kicker">Tidslinje</div>
<h2 className="h2 mb-2">Vigtige ikrafttrædelser</h2>
<Timeline items={initiatives} />
</section>
</main>
)
}
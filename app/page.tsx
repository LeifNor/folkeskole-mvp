'use client'
import { useEffect, useState } from 'react'
import OverviewExplainer from '@/components/OverviewExplainer'
import InitiativeCard from '@/components/InitiativeCard'
import Timeline from '@/components/Timeline'
import { initiatives } from '@/lib/data/initiatives'
import { timeline } from '@/lib/data/timeline'
import type { Role } from '@/lib/roles'
import { getInitialRole } from '@/lib/roles'

export default function Page() {
  const [role, setRole] = useState<Role>('laerer')
  useEffect(() => setRole(getInitialRole()), [])

  return (
    <main className="space-y-6 sm:space-y-8">
      <OverviewExplainer />
      
      <section className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {initiatives.map((init) => (
          <InitiativeCard key={init.id} init={init} role={role} />
        ))}
      </section>

      <section className="card p-4 sm:p-6">
        <div className="kicker">Tidslinje</div>
        <h2 className="h2 mb-2">Vigtige milepæle</h2>
        <Timeline items={timeline} />
      </section>
    </main>
  )
}
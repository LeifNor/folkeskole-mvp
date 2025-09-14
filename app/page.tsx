'use client'
import { useEffect, useState } from 'react'
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
      {/* Intro uden H1 */}
      <section className="max-w-3xl">
        <p className="muted">
          De næste år ændrer folkeskolen sig markant gennem to spor: <strong>Kvalitetsprogrammet</strong>
          (struktur og rammer) og <strong>Fagfornyelsen</strong> (indhold og fagplaner). Her finder du dit
          hurtige overblik, konkrete initiativer og en tidslinje.
        </p>
      </section>

      {/* Initiativer */}
      <section className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {initiatives.map((init) => (
          <InitiativeCard key={init.id} init={init} role={role} />
        ))}
      </section>

      {/* Tidslinje */}
      <section className="card p-4 sm:p-6">
        <div className="kicker">Tidslinje</div>
        <h2 className="h2 mb-2">Vigtige milepæle</h2>
        <Timeline items={timeline} />
      </section>
    </main>
  )
}
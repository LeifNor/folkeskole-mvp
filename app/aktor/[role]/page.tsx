import { notFound } from 'next/navigation'
import type { Role } from '@/lib/roles'
import { ROLE_LABELS } from '@/lib/roles'
import { initiatives } from '@/lib/data/initiatives'
import InitiativeCard from '@/components/InitiativeCard'

/**
 * Gør Next.js i stand til at generere statiske sider for hver rolle
 * ved build/export (vigtig for Azure SWA).
 */
export function generateStaticParams() {
  return [
    { role: 'laerer' },
    { role: 'elev' },
    { role: 'ledelse' },
    { role: 'foraeldre' },
  ]
}

export default function ActorPage({ params }: { params: { role: Role } }) {
const { role } = params
if (!['laerer','elev','ledelse','foraeldre'].includes(role)) return notFound()
return (
<main className="space-y-6">
<div>
<div className="kicker">Aktørsider</div>
<h1 className="h1">{ROLE_LABELS[role]}</h1>
</div>
<div className="grid gap-6 md:grid-cols-2">
{initiatives.map((init) => (
<InitiativeCard key={init.id} init={init} role={role} />
))}
</div>
</main>
)
}
import { notFound } from 'next/navigation'
import { initiatives } from '@/lib/data/initiatives'
import InitiativeCard from '@/components/InitiativeCard'
import TimebankInfo from '@/components/TimebankInfo'
import type { Role } from '@/lib/roles'


const valid = ['timebanken','proever','juniormesterlaere','timetal','inklusion','rammer'] as const
export function generateStaticParams() {
  return valid.map(slug => ({ slug }))
}

export default function TopicPage({ params }: { params: { slug: typeof valid[number] } }) {
const items = initiatives.filter(i => i.tema === params.slug)
if (!valid.includes(params.slug)) return notFound()
const role: Role = 'laerer'
return (
<main className="space-y-4 sm:space-y-6">
<div>
<div className="kicker">Tema</div>
<h1 className="h1 capitalize">{params.slug === 'timebanken' ? 'Timebanken' : params.slug}</h1>
</div>

{params.slug === 'timebanken' && <TimebankInfo />}

<div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
{items.map((init) => (
<InitiativeCard key={init.id} init={init} role={role} />
))}
</div>
</main>
)
}
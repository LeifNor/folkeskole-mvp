import { notFound } from 'next/navigation'
import { initiatives } from '@/lib/data/initiatives'
import InitiativeCard from '@/components/InitiativeCard'
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
<main className="space-y-6">
<div>
<div className="kicker">Tema</div>
<h1 className="h1">{params.slug}</h1>
</div>
<div className="grid gap-6 md:grid-cols-2">
{items.map((init) => (
<InitiativeCard key={init.id} init={init} role={role} />
))}
</div>
</main>
)
}
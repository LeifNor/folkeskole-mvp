import { notFound } from 'next/navigation'
import { initiatives } from '@/lib/data/initiatives'
import ImpactTabs from '@/components/ImpactTabs'


export function generateStaticParams() {
  return initiatives.map(i => ({ id: i.id }))
}

export default function InitiativePage({ params }: { params: { id: string } }) {
const init = initiatives.find(i => i.id === params.id)
if (!init) return notFound()
return (
<main className="space-y-6">
<article className="card p-6">
<div className="kicker">Ikraft: {new Date(init.ikraft).toLocaleDateString('da-DK')}</div>
<h1 className="h1 mb-2">{init.titel}</h1>
<p className="muted max-w-2xl">{init.beskrivelse}</p>
<ImpactTabs init={init} />
</article>


<section className="card p-6">
<div className="kicker mb-2">Kilder</div>
<ul className="list-disc pl-5 text-sm">
{init.kilder.map(k => (
<li key={k.url}><a className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900" href={k.url} target="_blank" rel="noreferrer">{k.navn}</a></li>
))}
</ul>
</section>
</main>
)
}
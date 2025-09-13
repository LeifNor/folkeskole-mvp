import Link from 'next/link'
import type { Initiative } from '@/lib/types'
import { ROLE_LABELS, type Role } from '@/lib/roles'


function StatusBadge({ status }: { status: Initiative['status'] }) {
const map = {
nyt: 'badge badge-new',
aendres: 'badge badge-change',
ophorer: 'badge badge-stop'
} as const
const label = status === 'nyt' ? 'Nyt' : status === 'aendres' ? 'Ændres' : 'Ophører'
return <span className={map[status]}>{label}</span>
}


export default function InitiativeCard({ init, role }: { init: Initiative; role: Role }) {
const impact = init.impacts.find((i) => i.aktor === role)
return (
<article className="card p-5">
<div className="flex items-start justify-between gap-4">
<div>
<div className="kicker">Ikraft: {new Date(init.ikraft).toLocaleDateString('da-DK')}</div>
<h3 className="h2 mb-1">{init.titel}</h3>
<p className="muted max-w-2xl">{init.beskrivelse}</p>
</div>
<StatusBadge status={init.status} />
</div>


{impact && (
<div className="mt-4 grid gap-3 md:grid-cols-3">
<div>
<div className="kicker mb-1">Opgaver – {ROLE_LABELS[role]}</div>
<ul className="list-disc pl-5 text-sm">
{impact.opgaver.map((t) => <li key={t}>{t}</li>)}
</ul>
</div>
<div>
<div className="kicker mb-1">Konsekvenser</div>
<ul className="list-disc pl-5 text-sm">
{impact.konsekvenser.map((t) => <li key={t}>{t}</li>)}
</ul>
</div>
<div>
<div className="kicker mb-1">Ophører/ændres</div>
<ul className="list-disc pl-5 text-sm">
{(impact.ophorer.length ? impact.ophorer : ['–']).map((t) => <li key={t}>{t}</li>)}
</ul>
</div>
</div>
)}


<div className="mt-5 flex flex-wrap gap-2 text-sm">
{init.kilder.map((k) => (
<a key={k.url} href={k.url} target="_blank" rel="noreferrer" className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900">
{k.navn}
</a>
))}
<Link className="ml-auto btn" href={`/initiativ/${init.id}`}>Detaljer</Link>
</div>
</article>
)
}
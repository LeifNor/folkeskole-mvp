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
<article className="card p-4 sm:p-5 h-full flex flex-col">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
<div className="flex-1 min-w-0">
<div className="kicker">Ikraft: {new Date(init.ikraft).toLocaleDateString('da-DK')}</div>
<h3 className="h2 mb-1 break-words">{init.titel}</h3>
<p className="muted">{init.beskrivelse}</p>
</div>
<div className="flex-shrink-0">
<StatusBadge status={init.status} />
</div>
</div>


{impact && (
<div className="mt-4 flex-1 space-y-4 sm:space-y-0 sm:grid sm:gap-4 lg:grid-cols-3">
<div>
<div className="kicker mb-1">Opgaver – {ROLE_LABELS[role]}</div>
<ul className="list-disc pl-5 text-sm space-y-0.5">
{impact.opgaver.map((t) => <li key={t} className="break-words">{t}</li>)}
</ul>
</div>
<div>
<div className="kicker mb-1">Konsekvenser</div>
<ul className="list-disc pl-5 text-sm space-y-0.5">
{impact.konsekvenser.map((t) => <li key={t} className="break-words">{t}</li>)}
</ul>
</div>
<div>
<div className="kicker mb-1">Ophører/ændres</div>
<ul className="list-disc pl-5 text-sm space-y-0.5">
{(impact.ophorer.length ? impact.ophorer : ['–']).map((t) => <li key={t} className="break-words">{t}</li>)}
</ul>
</div>
</div>
)}


<div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-2 text-sm">
<div className="flex flex-wrap gap-2 flex-1">
{init.kilder.map((k) => (
<a key={k.url} href={k.url} target="_blank" rel="noreferrer" className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 break-all">
{k.navn}
</a>
))}
</div>
<Link className="btn w-full sm:w-auto sm:ml-auto justify-center" href={`/initiativ/${init.id}`}>Detaljer</Link>
</div>
</article>
)
}
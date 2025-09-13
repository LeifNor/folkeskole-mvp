import { initiatives } from '@/lib/data/initiatives'


export default function SourcesPage() {
const links = new Map<string,string>()
initiatives.forEach(i => i.kilder.forEach(k => links.set(k.navn, k.url)))
return (
<main>
<div className="kicker">Kilder</div>
<h1 className="h1 mb-4">Primære referencer</h1>
<ul className="grid gap-2">
{Array.from(links).map(([navn, url]) => (
<li key={url}>
<a className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900" href={url} target="_blank" rel="noreferrer">{navn}</a>
</li>
))}
</ul>
</main>
)
}
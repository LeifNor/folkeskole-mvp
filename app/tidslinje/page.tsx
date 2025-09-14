// app/tidslinje/page.tsx
import Timeline from '@/components/Timeline'
import { timeline } from '@/lib/data/timeline'

export const metadata = {
  title: 'Tidslinje – Folkeskole 2025/26',
  description: 'Overblik over Kvalitetsprogrammet og Fagfornyelsen – hvad er vedtaget, og hvad kan påvirkes?'
}

export default function TidslinjePage() {
  return (
    <main className="space-y-6">
      <header>
        <div className="kicker">Overblik</div>
        <h1 className="h1">Tidslinje: Kvalitetsprogrammet & Fagfornyelsen</h1>
        <p className="muted max-w-3xl">
          Se hvornår ændringer træder i kraft, hvad der er besluttet, og hvor du stadig kan påvirke indhold og implementering.
        </p>
      </header>

      <section className="card p-4 sm:p-6">
        <Timeline items={timeline} />
      </section>
    </main>
  )
}

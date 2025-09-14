import type { Role } from '@/lib/roles'
import { ROLE_LABELS } from '@/lib/roles'
import { initiatives } from '@/lib/data/initiatives'
import InitiativeCard from '@/components/InitiativeCard'
import Accordion from '@/components/Accordion'
import Breadcrumb from '@/components/Breadcrumb'

export default function ActorPage() {
  const role = 'foraeldre' as Role

  const breadcrumbItems = [
    { label: 'Hjem', href: '/' },
    { label: 'Aktører', href: '/' },
    { label: ROLE_LABELS[role] }
  ]

  return (
    <main className="space-y-12">
      <Breadcrumb items={breadcrumbItems} />
      
      <header className="space-y-2">
        <div className="kicker">Aktørsider</div>
        <h1 className="h1">{ROLE_LABELS[role]}</h1>
        <p className="lead">
          Forældre får en stærkere stemme i skolen. Kvalitetsprogrammet
          giver større indflydelse via skolebestyrelsen – men kan også
          medføre forskelle i fritidstilbud og økonomi.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="h2">Baggrund</h2>
        <p>
          Forældrerollen ændres i takt med skolens frisættelse. Mindre
          central styring betyder, at lokal prioritering og bestyrelsesarbejde
          får større betydning for skolens retning.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="h2">Hvad betyder det for forældre?</h2>
        <Accordion
          items={[
            {
              title: 'Øget rolle i skolebestyrelsen',
              content: `
Bestyrelsen får mere ansvar for skolens værdier, rammer og brug af timebankens
midler. Som forælder kan du derfor få reel indflydelse på skolens profil og
prioriteringer.`
            },
            {
              title: 'Økonomiske konsekvenser',
              content: `
Ændringer i SFO og fritidstilbud kan betyde udsving i egenbetalingen.
Kommunen afgør rammerne, men forskellene mellem skoler kan vokse,
alt efter hvordan timebanken bruges.`
            },
            {
              title: 'Mere variation mellem skoler',
              content: `
Fordi skolens ledelse og bestyrelse selv prioriterer ressourcer, vil
skolernes tilbud og hverdag kunne variere mere. Forældre får dermed
større interesse i at følge med i skolens beslutninger.`
            },
            {
              title: 'Større gennemsigtighedskrav',
              content: `
Forældre forventes at blive inddraget i skolens udvikling. Der bliver behov
for løbende information om, hvordan ressourcer anvendes, og hvad det betyder
for børnenes skoledag.`
            }
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="h2">Initiativer på tværs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {initiatives.map((init) => (
            <InitiativeCard key={init.id} init={init} role={role} />
          ))}
        </div>
      </section>
    </main>
  )
}

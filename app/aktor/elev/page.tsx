import type { Role } from '@/lib/roles'
import { ROLE_LABELS } from '@/lib/roles'
import { initiatives } from '@/lib/data/initiatives'
import InitiativeCard from '@/components/InitiativeCard'
import Accordion from '@/components/Accordion'

export default function ActorPage() {
  const role = 'elev' as Role

  return (
    <main className="space-y-12">
      <header className="space-y-2">
        <div className="kicker">Aktørsider</div>
        <h1 className="h1">{ROLE_LABELS[role]}</h1>
        <p className="lead">
          Fra 2025/26 ændres din skoledag. Kortere dage i indskolingen,
          flere valgfag i udskolingen og mindre testpres skal gøre skolen
          mere meningsfuld og tilpasset.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="h2">Baggrund</h2>
        <p>
          Kvalitetsprogrammet lægger vægt på at skabe en mere motiverende
          folkeskole. Testregimet lettes, og elevernes muligheder for
          valgfrihed og praksisnær læring styrkes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="h2">Hvad betyder det for dig?</h2>
        <Accordion
          items={[
            {
              title: 'Kortere skoledage i indskolingen',
              content: `
Fra 0.–3. klasse bliver skoledagene kortere. Til gengæld skal alle elever have
mere sammenhængende tid med lærere og pædagoger i klassen gennem to-voksenordninger.`
            },
            {
              title: 'Mindre testpres',
              content: `
De nationale test afskaffes. I stedet indføres en ny model med udvalgte
screeninger i dansk og matematik samt faglige evalueringer på de vigtigste
trin. Det betyder færre prøver og mere feedback direkte fra lærerne.`
            },
            {
              title: 'Flere valgfag og juniormesterlære',
              content: `
I 7.–9. klasse får du adgang til nye valgfag, blandt andet teknologiforståelse.
Desuden kan du vælge juniormesterlære: 1–2 dage om ugen i en virksomhed eller
på en erhvervsskole. Det giver praktisk erfaring og forberedelse til ungdomsuddannelse.`
            },
            {
              title: 'Mere støtte til dem, der har brug for det',
              content: `
De 10 % af eleverne med størst faglige udfordringer skal tilbydes særlige
forløb i dansk og matematik. Det kan være intensive kurser eller
tolærer-ordninger i mindre grupper.`
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

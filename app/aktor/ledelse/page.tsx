import type { Role } from '@/lib/roles'
import { ROLE_LABELS } from '@/lib/roles'
import { initiatives } from '@/lib/data/initiatives'
import InitiativeCard from '@/components/InitiativeCard'
import Accordion from '@/components/Accordion'

export default function ActorPage() {
  const role = 'ledelse' as Role

  return (
    <main className="space-y-12">
      <header className="space-y-2">
        <div className="kicker">Aktørsider</div>
        <h1 className="h1">{ROLE_LABELS[role]}</h1>
        <p className="lead">
          Skoleledelser får med kvalitetsprogrammet mere frihed –
          men også større ansvar. Timebanken og færre centrale krav
          gør ledelsen til den strategiske nøgleaktør.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="h2">Baggrund</h2>
        <p>
          Staten trækker sig tilbage fra detaljeret styring. Ressourcer
          placeres i en lokal timebank, og skolebestyrelserne får
          øget indflydelse. Det kræver nyt ledelsesfokus.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="h2">Hvad betyder det for skoleledelser?</h2>
        <Accordion
          items={[
            {
              title: 'Timebanken som styringsværktøj',
              content: `
Ledelsen skal fordele skolens midler fra timebanken. Valg mellem
to-voksenordning, intensive fagforløb, efteruddannelse og fritidstilbud
bliver lokale prioriteringer. Det kræver gennemsigtighed og klare processer.`
            },
            {
              title: 'Fra driftsleder til strategisk entreprenør',
              content: `
Ledelsen forventes at være mere strategisk: udvikle skolens profil,
samarbejde med erhvervsliv og styrke skolens omdømme. Lokale prioriteringer
skal understøtte både trivsel og faglighed.`
            },
            {
              title: 'Større administrativ byrde',
              content: `
Med færre statslige retningslinjer stiger kravet til ledelsens evne
til dokumentation og kvalitetssikring. Lokale beslutninger skal kunne
forklares overfor kommune og forældre.`
            },
            {
              title: 'Samarbejde med skolebestyrelsen',
              content: `
Bestyrelsen får øget magt over skolens værdier og rammer. Ledelsen skal
styrke dialog og medinddragelse, så beslutninger om fx timebankens midler
har bred forankring.`
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

import { notFound } from 'next/navigation'
import type { Role } from '@/lib/roles'
import { ROLE_LABELS } from '@/lib/roles'
import { initiatives } from '@/lib/data/initiatives'
import InitiativeCard from '@/components/InitiativeCard'
import Accordion from '@/components/Accordion'
import Breadcrumb from '@/components/Breadcrumb'

export default function ActorPage() {
  const role = 'laerer' as Role

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
          Fra skoleåret 2025/26 ændres lærernes og pædagogernes hverdag markant.
          Frisættelse, færre centrale krav og den nye "timebank" giver både
          større pædagogisk frihed og nye forpligtelser.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="h2">Baggrund</h2>
        <p>
          Folkeskolens kvalitetsprogram repræsenterer et brud med
          centralstyringen fra 2014-reformen. Antallet af bindende mål reduceres
          fra flere tusinde til 215 i en overgangsperiode. Ansvar for
          organisering og prioritering flyttes nu til skoleniveau, og lærernes
          faglighed får større vægt.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="h2">Hvad betyder det for lærere og pædagoger?</h2>
        <Accordion
          items={[
            {
              title: 'Øget pædagogisk frihed og ansvar',
              content: `
Med afskaffelsen af de detaljerede Fælles Mål får du som lærer et langt større
handlerum. Undervisningen skal stadig følge overordnede fagplaner, men den
lokale tilrettelæggelse hviler nu på teamets faglige dømmekraft. Det betyder
frihed til at skabe meningsfulde forløb, men også ansvar for at sikre
progression uden detaljerede nationale læseplaner.`
            },
            {
              title: 'Timebanken – en ny ramme for ressourcer',
              content: `
Den understøttende undervisning er afskaffet. I stedet får skolerne adgang til
en fleksibel ressourcepulje på ca. 2,7 mia. kr. årligt. Midlerne kan bruges til
to-voksenordninger, co-teaching, intensive fagforløb eller kompetenceudvikling.
Dog er tre ting lovbundne: klassens tid, obligatoriske screeninger og en styrket
indsats i dansk og matematik for de 10 % mest udfordrede elever. For dig som
lærer betyder det, at din rolle i støtteforløb og samarbejde med pædagoger
bliver mere central og kan variere meget fra skole til skole.`
            },
            {
              title: 'Nye roller og faglige krav',
              content: `
Udskolingslærere får ansvar for juniormesterlære, hvor elever kan tilbringe
1–2 dage ugentligt i virksomhed eller erhvervsskole. Derudover skal nogle
lærere udvikle og varetage undervisning i det nye valgfag
"teknologiforståelse". Pædagoger får en styrket rolle i indskolingen gennem
to-voksenordninger og skal være med til at understøtte de nye intensive
indsatser.`
            },
            {
              title: 'Arbejdsvilkår og kompetenceløft',
              content: `
Arbejdsbyrden bliver mere forskellig fra skole til skole. Nogle steder vil
timebanken betyde flere co-teaching-forløb og efteruddannelse, andre steder
flere ressourcer til SFO. Der er afsat en national ramme på 200 mio. kr.
årligt til kompetenceudvikling, især i specialpædagogik og klasseledelse.`
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

// components/OverviewExplainer.tsx
import Badge from '@/components/Badge'

export default function OverviewExplainer() {
  return (
    <section className="card p-4 sm:p-6 space-y-6">
      <header>
        <div className="kicker">Kort overblik</div>
        <h2 className="h2">To spor – én transformation</h2>
        <p className="muted">
          Folkeskolens Kvalitetsprogram (struktur og rammer) og Fagfornyelsen (indhold og fagplaner)
          rulles ud trinvist. Her er det vigtigste på 1 minut.
        </p>
      </header>

      {/* Kvalitetsprogrammet */}
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="border rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="h3">Kvalitetsprogrammet – "Frihed og fordybelse"</h3>
            <Badge variant="info">STRUKTUR</Badge>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Politisk aftale fra 19.03.2024, vedtaget som lov 12.12.2024.
            Formålet er at frisætte skolerne og flytte beslutninger lokalt.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="new">VEDTAGET</Badge>
            <Badge variant="info">IKRAFT: 2025/26</Badge>
          </div>
          <ul className="text-sm space-y-1">
            <li>• <strong>Timebank</strong> erstatter UUV – lokale prioriteringer (to-voksen, intensive forløb, SFO m.m.).</li>
            <li>• <strong>Juniormesterlære</strong> i 8.–9. kl. (1–2 dage/uge i praktik) + obligatorisk erhvervspraktik.</li>
            <li>• <strong>Færre prøver</strong> i 9. klasse (8 → 6); mundtlig engelsk bliver udtræk.</li>
            <li>• <strong>Krav afskaffes</strong>: 45 min. bevægelse, lektiehjælp, projektopgave m.fl. bliver lokale valg.</li>
            <li>• <strong>Indsatser</strong> for de 10% fagligt mest udfordrede (dansk/matematik), kompetenceløft m.m.</li>
          </ul>
        </article>

        {/* Fagfornyelsen */}
        <article className="border rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="h3">Fagfornyelsen – nye, enklere fagplaner</h3>
            <Badge variant="info">INDHOLD</Badge>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Store ændringer i læreplanerne: færre bindende mål, fokus på kernestof og tydeligt sprog.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="warning">KAN PÅVIRKES NU</Badge>
            <Badge variant="info">IKRAFT: 2027/28</Badge>
          </div>
          <ul className="text-sm space-y-1">
            <li>• <strong>2025–27</strong>: Udkast udvikles og afprøves på ca. 100 skoler (feedback efterspørges).</li>
            <li>• <strong>90% færre bindende mål</strong> – mere professionelt råderum for lærere/pædagoger.</li>
            <li>• <strong>Teknologiforståelse</strong> indfases som ny faglighed/valgfag i udskolingen.</li>
            <li>• <strong>Implementering</strong> af de nye fagplaner fra skoleåret 2027/28.</li>
          </ul>
        </article>
      </div>

      {/* Hvad er besluttet vs. kan påvirkes */}
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="border rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="h3">Hvad ligger fast?</h3>
            <Badge variant="new">VEDTAGET</Badge>
          </div>
          <ul className="text-sm space-y-1">
            <li>• 33 initiativer i Kvalitetsprogrammet (bl.a. timebank, juniormesterlære, ny prøvestruktur).</li>
            <li>• Økonomi afsat til faglokaler (2,6 mia.), bøger (540 mio.) og kompetenceudvikling.</li>
            <li>• Fagfornyelsen implementeres 2027/28 med slankede fagplaner.</li>
          </ul>
        </article>

        <article className="border rounded-xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="h3">Hvor kan du påvirke?</h3>
            <Badge variant="warning">KAN PÅVIRKES</Badge>
          </div>
          <ul className="text-sm space-y-1">
            <li>• <strong>Fagfornyelsen</strong>: kernestof og formuleringer i fagplaner (via testskoler, høringer, fagudvalg).</li>
            <li>• <strong>Lokalt</strong>: timebank-prioriteringer, bevægelsesprincipper, projektopgave, juniormesterlære-setup.</li>
            <li>• <strong>Inklusion</strong>: den videre politiske opfølgning på ekspertanbefalinger.</li>
          </ul>
        </article>
      </div>

      {/* Hvad betyder det for hvem? */}
      <article className="border rounded-xl p-4">
        <h3 className="h3 mb-2">Betydning for aktører</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <p className="font-medium">Lærere & pædagoger</p>
            <p className="text-gray-700">Mere metodefrihed, mindre målstyring; behov for planlægning og kompetenceløft.</p>
          </div>
          <div>
            <p className="font-medium">Ledelse & bestyrelse</p>
            <p className="text-gray-700">Større lokalt ansvar: timebank, principper, partnerskaber, implementering.</p>
          </div>
          <div>
            <p className="font-medium">Elever</p>
            <p className="text-gray-700">Kortere dage (især indskoling), færre prøver; mere praksis og valgfrihed i udskolingen.</p>
          </div>
          <div>
            <p className="font-medium">Forældre</p>
            <p className="text-gray-700">Mere lokal variation; mulighed for indflydelse via bestyrelsen; evt. SFO-effekter.</p>
          </div>
        </div>
      </article>
    </section>
  )
}

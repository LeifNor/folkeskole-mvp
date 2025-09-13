type Props = {
  role?: 'laerer' | 'elev' | 'ledelse' | 'foraeldre'
}

const TEXTS: Record<string, string> = {
  laerer:
    'For lærere betyder timebanken mere fleksibilitet i undervisningsplanlægningen, men også et større ansvar for at balancere ressourcer og tid.',
  elev:
    'For elever betyder timebanken kortere og mere fokuserede skoledage, samt mulighed for ekstra støtte eller fritidsaktiviteter, afhængigt af skolens prioriteringer.',
  ledelse:
    'For skoleledelsen betyder timebanken øget ansvar for økonomiske og strategiske valg. Det kan give frihed til at tilpasse indsatsen lokalt, men kræver også tydelig prioritering.',
  foraeldre:
    'For forældre betyder timebanken, at SFO og fritidsdelen kan ændre sig. Der kan være udsving i egenbetalingen og forskelle mellem skoler, men også større indflydelse gennem skolebestyrelsen.',
  default:
    'Timebanken er et nyt styringsredskab i folkeskole-reformen. Den samler ressourcer i en pulje, som skoleledelsen og skolebestyrelsen fordeler. Det giver fleksibilitet, men stiller også krav til prioritering og transparens.'
}

export default function TimebankInfo({ role }: Props) {
  const text = role ? TEXTS[role] : TEXTS.default

  return (
    <section className="card p-4 sm:p-6">
      <h2 className="h2 mb-4">Timebanken</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>

      {!role && (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium">Fordele</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-0.5">
              <li>Fleksibilitet i lokale prioriteringer</li>
              <li>Mere målrettet brug af ressourcer</li>
              <li>Større indflydelse for skolebestyrelser</li>
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium">Udfordringer</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-0.5">
              <li>Kan skabe forskelle mellem skoler</li>
              <li>Større administrativ byrde for ledelsen</li>
              <li>Uforudsigelighed for forældre og elever</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}

// lib/data/timeline.ts
export type TLStatus = 'vedtaget' | 'i_gang' | 'kan_paavirkes'
export type TLStream = 'kvalitetsprogram' | 'fagfornyelsen'
export type TLActor = 'laerer' | 'elev' | 'ledelse' | 'foraeldre' | 'kommune'

export interface TimelineItem {
  id: string
  title: string
  date: string         // ISO: 2024-03-19, 2025-08-01, 2027-08-01
  quarter?: 'Q1'|'Q2'|'Q3'|'Q4'
  stream: TLStream
  status: TLStatus
  summary: string
  actors: TLActor[]
  links?: { navn: string; url: string }[]
}

export const timeline: TimelineItem[] = [
  // --- 2024 ---
  {
    id: '2024-03-19-aftale',
    title: 'Politisk aftale: "Frihed og fordybelse"',
    date: '2024-03-19',
    stream: 'kvalitetsprogram',
    status: 'vedtaget',
    summary: 'Bred politisk aftale danner rammen for frisættelsen og 33 initiativer.',
    actors: ['ledelse','laerer','elev','foraeldre','kommune'],
    links: [{ navn: 'Regeringen', url: 'https://regeringen.dk/nyheder/2024/ny-aftale-om-folkeskolen/' }]
  },
  {
    id: '2024-12-12-lov',
    title: 'Lov vedtaget i Folketinget',
    date: '2024-12-12',
    stream: 'kvalitetsprogram',
    status: 'vedtaget',
    summary: 'Kvalitetsprogrammet vedtages som lov. Ikraft fra skoleåret 2025/26.',
    actors: ['ledelse','kommune'],
    links: [{ navn: 'Retsinformation (lov)', url: 'https://www.retsinformation.dk/api/pdf/247150' }]
  },

  // --- 2025 start: forberedelse + investeringer ---
  {
    id: '2025-01-investeringer',
    title: 'Investeringer rulles ud (bøger + faglokaler)',
    date: '2025-01-15',
    stream: 'kvalitetsprogram',
    status: 'i_gang',
    summary: '540 mio. kr. til bøger; 2,6 mia. kr. til faglokaler i 2025–27.',
    actors: ['kommune','ledelse','laerer'],
    links: [{ navn: 'UVM faktaark', url: 'https://www.uvm.dk/-/media/filer/uvm/aktuelt/pdf25/jan/250129-faktaark-frihed-til-kortere-skoledage-og-afskaffelse-af-understttende-undervisning.pdf' }]
  },
  {
    id: '2025-04-fagudvalg',
    title: 'Fagfornyelsen: fagudvalg skriver udkast',
    date: '2025-04-15',
    stream: 'fagfornyelsen',
    status: 'kan_paavirkes',
    summary: '21 fagudvalg arbejder på slankede fagplaner; input fra praksis efterspørges.',
    actors: ['laerer','ledelse','kommune'],
    links: [{ navn: 'UVM – fagfornyelse', url: 'https://www.uvm.dk/folkeskolen/folkeskolens-maal-love-og-regler/politiske-aftaler/folkeskolens-kvalitetsprogram' }]
  },

  // --- 2025/26: implementering ---
  {
    id: '2025-08-timebank',
    title: 'Skolens Timebank træder i kraft',
    date: '2025-08-01',
    stream: 'kvalitetsprogram',
    status: 'vedtaget',
    summary: 'UUV afskaffes. Lokale prioriteringer: to-voksen, intensive forløb, SFO mv.',
    actors: ['ledelse','laerer','foraeldre','kommune'],
    links: [{ navn: 'KL – økonomi og rammer', url: 'https://www.kl.dk/boern-og-unge/folkeskole/folkeskolens-kvalitetsprogram' }]
  },
  {
    id: '2025-08-juniormesterlaere',
    title: 'Juniormesterlære starter (8.–9. kl.)',
    date: '2025-08-01',
    stream: 'kvalitetsprogram',
    status: 'vedtaget',
    summary: '1–2 dage/uge i praktik. Særlig afgangseksamen målrettet EUD-adgang.',
    actors: ['elev','laerer','ledelse','foraeldre','kommune'],
    links: [{ navn: 'Aftale – overblik', url: 'https://regeringen.dk/nyheder/2024/ny-aftale-om-folkeskolen/' }]
  },
  {
    id: '2025-08-proever',
    title: 'Ny prøvestruktur fra 2025/26',
    date: '2025-08-01',
    stream: 'kvalitetsprogram',
    status: 'vedtaget',
    summary: 'Obligatoriske prøver reduceres 8→6. Mundtlig engelsk bliver udtræk.',
    actors: ['elev','laerer','ledelse'],
    links: [{ navn: 'UVM – prøver', url: 'https://www.uvm.dk/folkeskolen/folkeskolens-proever/aarsplan-og-proeveplaner/ny-proevestruktur-fra-skoleaaret-2025-2026' }]
  },
  {
    id: '2025-08-krav-afskaffes',
    title: 'Flere centrale krav afskaffes',
    date: '2025-08-01',
    stream: 'kvalitetsprogram',
    status: 'vedtaget',
    summary: '45 min. bevægelse, lektiehjælp, projektopgave m.fl. gøres lokale.',
    actors: ['ledelse','foraeldre','laerer'],
  },
  {
    id: '2025-09-fagforny-testskoler',
    title: 'Fagfornyelsen: 100 testskoler afprøver fagplaner',
    date: '2025-09-01',
    stream: 'fagfornyelsen',
    status: 'kan_paavirkes',
    summary: 'Afprøvning og feedback på kernestof og sprog – høj påvirkningsgrad.',
    actors: ['laerer','ledelse'],
  },

  // --- 2026/27: fortsat afprøvning + kompetenceløft ---
  {
    id: '2026-01-kompetence',
    title: 'Kompetenceudvikling skaleres',
    date: '2026-01-15',
    stream: 'kvalitetsprogram',
    status: 'i_gang',
    summary: 'Midler til specialpædagogik og klasseledelse udrulles bredere.',
    actors: ['laerer','ledelse','kommune'],
  },
  {
    id: '2026-08-fagforny-iteration',
    title: 'Fagfornyelsen: iteration og kvalificering',
    date: '2026-08-01',
    stream: 'fagfornyelsen',
    status: 'kan_paavirkes',
    summary: 'Fagudvalg reviderer udkast på baggrund af testskolers erfaringer.',
    actors: ['laerer','ledelse','kommune'],
  },

  // --- 2027/28: implementering fagplaner ---
  {
    id: '2027-08-fagplaner',
    title: 'Nye "Folkeskolens Fagplaner" træder i kraft',
    date: '2027-08-01',
    stream: 'fagfornyelsen',
    status: 'vedtaget',
    summary: 'Slankede læreplaner erstatter Fælles Mål. Fokus på kernestof.',
    actors: ['laerer','ledelse','elev','foraeldre'],
  },
  {
    id: '2027-08-teknologiforstaaelse',
    title: 'Teknologiforståelse indfases',
    date: '2027-08-01',
    stream: 'fagfornyelsen',
    status: 'vedtaget',
    summary: 'Nyt valgfag og tværgående faglighed i udskolingen.',
    actors: ['laerer','elev','ledelse'],
  }
]

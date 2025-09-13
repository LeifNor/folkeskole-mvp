import type { Initiative } from '../types'

export const initiatives: Initiative[] = [
{
id: 'ny-proevestruktur',
titel: 'Ny prøvestruktur fra 2025-26',
tema: 'proever',
status: 'nyt',
ikraft: '2025-08-01',
beskrivelse: 'Mundtlige prøver flyttes fra 9. til 8. klasse. Færre skriftlige prøver i 9. klasse.',
impacts: [
{
aktor: 'ledelse',
opgaver: ['Opdater prøvekalender og ressourceplan (censorer, lokaler)'],
ophorer: [],
konsekvenser: ['Lettere logistik, men ny plan for mundtlige prøver'],
kilder: []
},
{
aktor: 'foraeldre',
opgaver: ['Støt hjemme med mundtlige træningsformer'],
ophorer: [],
konsekvenser: ['Bedre mulighed for at støtte fokusområder'],
kilder: []
}
],
kilder: [
{ navn: 'UVM – Ny prøvestruktur', url: 'https://www.uvm.dk/folkeskolen/folkeskolens-proever/aarsplan-og-proeveplaner/ny-proevestruktur-fra-skoleaaret-2025-2026' }
]
},
{
id: 'juniormesterlaere',
titel: 'Juniormesterlære i 8.–9. klasse',
tema: 'juniormesterlaere',
status: 'nyt',
ikraft: '2025-08-01',
beskrivelse:
'Frivillig ordning hvor 1–2 dage/uge kan foregå i virksomhed/erhvervsskole/FGU/ungdomsskole. Minimum dansk og matematik på skolen. Særlig afgangseksamen målrettet EUD-adgang.',
impacts: [
{
aktor: 'ledelse',
opgaver: [
'Indgå overenskomster med praktiksteder; sikr tilsyn og kvalitet',
'Tilpas skema og ansvar for elevopfølgning'
],
ophorer: [],
konsekvenser: ['Tættere partnerskaber lokalt; skemalægning bliver mere kompleks'],
kilder: [
{ navn: 'Regeringen – Aftaletekst', url: 'https://regeringen.dk/nyheder/2024/ny-aftale-om-folkeskolen/' }
]
},
{
aktor: 'laerer',
opgaver: ['Koordiner læringsmål og vurdering med praktiksteder'],
ophorer: [],
konsekvenser: ['Mere differentieret elevforløb; stærkere praksisfaglighed'],
kilder: []
},
{
aktor: 'elev',
opgaver: ['Søg plads i juniormesterlære via UU-vejledning; fasthold dansk/matematik'],
ophorer: [],
konsekvenser: ['Mere virkelighedsnær skoledag; tydelig vej mod EUD'],
kilder: []
},
{
aktor: 'foraeldre',
opgaver: ['Samarbejd om valg og transport/logistik'],
ophorer: [],
konsekvenser: ['Kræver planlægning; kan øge elevmotivation'],
kilder: []
}
],
kilder: [
{ navn: 'UVM – Aftaleoversigt', url: 'https://www.uvm.dk/folkeskolen/folkeskolens-maal-love-og-regler/politiske-aftaler/folkeskolens-kvalitetsprogram' }
]
}
]
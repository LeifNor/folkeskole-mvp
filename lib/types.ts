import type { Role } from './roles'


export type Status = 'nyt' | 'aendres' | 'ophorer'


export interface ActorImpact {
aktor: Role
opgaver: string[]
ophorer: string[]
konsekvenser: string[]
kilder: { navn: string; url: string }[]
}


export interface Initiative {
id: string
titel: string
tema: 'timebanken' | 'proever' | 'juniormesterlaere' | 'timetal' | 'inklusion' | 'rammer'
status: Status
ikraft: string // ISO dato
beskrivelse: string
impacts: ActorImpact[]
kilder: { navn: string; url: string }[]
lokalNote?: string
}
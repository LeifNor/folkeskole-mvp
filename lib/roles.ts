export type Role = 'laerer' | 'elev' | 'ledelse' | 'foraeldre'


export const ROLE_LABELS: Record<Role, string> = {
laerer: 'Lærer/Pædagog',
elev: 'Elev',
ledelse: 'Ledelse/Forvaltning',
foraeldre: 'Forælder'
}


export function getInitialRole(): Role {
if (typeof window === 'undefined') return 'laerer'
return (localStorage.getItem('role') as Role) || 'laerer'
}


export function setRole(role: Role) {
if (typeof window !== 'undefined') localStorage.setItem('role', role)
}
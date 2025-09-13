'use client'
import { ROLE_LABELS, type Role, getInitialRole, setRole } from '@/lib/roles'
import { useEffect, useState } from 'react'


export default function RolePicker({ onChange }: { onChange?: (r: Role) => void }) {
const [role, setRoleState] = useState<Role>('laerer')
useEffect(() => { setRoleState(getInitialRole()) }, [])


function pick(r: Role) {
setRole(r)
setRoleState(r)
onChange?.(r)
}


return (
<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
{(Object.keys(ROLE_LABELS) as Role[]).map((r) => (
<button
key={r}
onClick={() => pick(r)}
className={`btn text-center ${role === r ? 'btn-primary' : ''}`}
aria-pressed={role === r}
>
{ROLE_LABELS[r]}
</button>
))}
</div>
)
}
'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ROLE_LABELS, type Role } from '@/lib/roles'

interface DropdownMenuProps {
  trigger: string
  className?: string
}

export default function DropdownMenu({ trigger, className = '' }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Luk dropdown når der klikkes udenfor
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const roles: Role[] = ['laerer', 'elev', 'ledelse', 'foraeldre']

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn flex items-center gap-1 flex-1 sm:flex-none justify-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 sm:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 
                      max-sm:fixed max-sm:left-3 max-sm:right-3 max-sm:w-auto">
          {roles.map((role) => (
            <Link
              key={role}
              href={`/aktor/${role}`}
              className="block px-4 py-3 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg
                       max-sm:text-center max-sm:py-3"
              onClick={() => setIsOpen(false)}
            >
              {ROLE_LABELS[role]}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

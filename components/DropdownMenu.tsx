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

  // Enhanced click/touch outside handling for mobile
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    // Listen for both mouse and touch events
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const roles: Role[] = ['laerer', 'elev', 'ledelse', 'foraeldre']

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="btn w-full flex items-center gap-1 justify-center min-h-[44px] sm:min-h-[48px] touch-manipulation"
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        {trigger}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 z-40 sm:hidden" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-full left-0 mt-1 w-full sm:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {roles.map((role) => (
              <Link
                key={role}
                href={`/aktor/${role}`}
                className="block px-4 py-4 text-sm hover:bg-gray-50 active:bg-gray-100 first:rounded-t-lg last:rounded-b-lg
                         text-center min-h-[44px] flex items-center justify-center
                         touch-manipulation transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {ROLE_LABELS[role]}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

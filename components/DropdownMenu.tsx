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

  const handleToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      <button
        onClick={handleToggle}
        onTouchEnd={handleToggle}
        className="btn w-full flex items-center gap-1 justify-center min-h-[44px] sm:min-h-[48px] touch-manipulation"
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        <span className="hidden sm:inline">Aktører</span>
        <span className="sm:hidden">Folk</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile - helps with z-index and touch handling */}
          <div 
            className="fixed inset-0 z-40 sm:hidden" 
            onClick={() => setIsOpen(false)}
            onTouchEnd={() => setIsOpen(false)}
          />
          
          <div className="absolute top-full left-0 mt-1 w-48 sm:w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 
                        max-sm:fixed max-sm:left-3 max-sm:right-3 max-sm:w-auto max-sm:z-[60]">
            {roles.map((role) => (
              <Link
                key={role}
                href={`/aktor/${role}`}
                className="block px-4 py-4 text-sm hover:bg-gray-50 active:bg-gray-100 first:rounded-t-lg last:rounded-b-lg
                         max-sm:text-center max-sm:py-4 max-sm:min-h-[44px] max-sm:flex max-sm:items-center max-sm:justify-center
                         touch-manipulation transition-colors"
                onClick={() => setIsOpen(false)}
                onTouchEnd={() => setIsOpen(false)}
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

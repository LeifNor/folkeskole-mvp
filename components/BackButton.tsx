'use client'
import { useRouter } from 'next/navigation'

interface BackButtonProps {
  label?: string
  className?: string
}

export default function BackButton({ label = 'Tilbage', className = '' }: BackButtonProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors ${className}`}
    >
      <span aria-hidden="true">←</span>
      {label}
    </button>
  )
}

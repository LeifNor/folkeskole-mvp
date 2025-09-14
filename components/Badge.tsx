import { clsx } from 'clsx'

type Variant = 'new' | 'change' | 'stop' | 'info' | 'warning'

export default function Badge({
  children,
  variant = 'info',
  className
}: {
  children: React.ReactNode
  variant?: Variant
  className?: string
}) {
  const styles = {
    new: 'badge border-gray-900 text-gray-900',
    change: 'badge border-gray-400 text-gray-700',
    stop: 'badge border-red-500 text-red-600',
    info: 'badge border-gray-300 text-gray-700',
    warning: 'badge border-amber-500 text-amber-700'
  } as const

  return <span className={clsx(styles[variant], className)}>{children}</span>
}

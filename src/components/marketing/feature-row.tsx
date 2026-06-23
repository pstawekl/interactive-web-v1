import { cn } from '@/lib/utils'
import { Check, X } from 'lucide-react'
import * as React from 'react'

export interface FeatureRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  icon?: React.ReactNode
  muted?: boolean
}

export const FeatureRow = React.forwardRef<HTMLDivElement, FeatureRowProps>(
  ({ children, icon, muted = false, className, ...props }, ref) => {
    const Icon = muted ? X : Check

    return (
      <div
        ref={ref}
        className={cn('flex items-start gap-3', className)}
        {...props}
      >
        <span
          className={cn(
            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white',
            muted
              ? 'bg-zinc-100 text-zinc-500 ring-1 ring-zinc-200 dark:bg-interactive-surface-muted dark:ring-white/10'
              : '[background:var(--gradient-brand)] shadow-[var(--glow-cta)]'
          )}
        >
          {icon ?? <Icon className="h-3.5 w-3.5" />}
        </span>
        <span
          className={cn(
            'font-body text-sm leading-6',
            muted
              ? 'text-zinc-500 line-through decoration-zinc-400 dark:text-zinc-600 dark:decoration-zinc-700'
              : 'text-zinc-700 dark:text-zinc-300'
          )}
        >
          {children}
        </span>
      </div>
    )
  }
)

FeatureRow.displayName = 'FeatureRow'

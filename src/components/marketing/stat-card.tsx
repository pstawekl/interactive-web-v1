import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode
  label: React.ReactNode
  icon?: React.ReactNode
  gradient?: string
}

export const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ value, label, icon, gradient, className, style, ...props }, ref) => (
    <Card
      ref={ref}
      variant="glass"
      hoverable
      className={cn(
        'group h-full rounded-2xl text-white',
        className
      )}
      style={style}
      {...props}
    >
      <CardContent className="p-7 text-center">
        {icon ? (
          <div
            className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full text-white ring-1 ring-white/20 transition-transform duration-300 group-hover:-translate-y-1"
            style={{ background: gradient ?? 'var(--gradient-brand)' }}
          >
            {icon}
          </div>
        ) : null}
        <div className="interactive-gradient-text font-display text-4xl font-extrabold leading-none sm:text-5xl">
          {value}
        </div>
        <p className="mt-4 font-body text-sm font-medium leading-6 text-white/80">{label}</p>
      </CardContent>
    </Card>
  )
)

StatCard.displayName = 'StatCard'

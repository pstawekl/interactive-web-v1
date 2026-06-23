import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface ProcessStepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  number: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
}

export const ProcessStep = React.forwardRef<HTMLDivElement, ProcessStepProps>(
  ({ number, title, description, icon, className, ...props }, ref) => (
    <Card
      ref={ref}
      variant="feature"
      hoverable
      className={cn(
        'group h-full rounded-3xl',
        className
      )}
      {...props}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-4">
          {icon ? (
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
              {icon}
            </div>
          ) : null}
          <span className="font-mono text-3xl font-bold text-white/10">{number}</span>
        </div>
        <h3 className="mt-6 font-display text-xl font-bold text-white">{title}</h3>
        {description ? <p className="mt-3 font-body text-sm leading-7 text-zinc-400">{description}</p> : null}
      </CardContent>
    </Card>
  )
)

ProcessStep.displayName = 'ProcessStep'

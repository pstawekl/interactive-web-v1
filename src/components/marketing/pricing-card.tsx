import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: React.ReactNode
  price: React.ReactNode
  currency?: React.ReactNode
  priceLabel?: React.ReactNode
  period?: React.ReactNode
  description?: React.ReactNode
  featured?: boolean
  badge?: React.ReactNode
  ctaLabel?: React.ReactNode
  onCta?: () => void
  children?: React.ReactNode
  footer?: React.ReactNode
}

export const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      name,
      price,
      currency = 'zł',
      priceLabel = 'od',
      period,
      description,
      featured = false,
      badge,
      ctaLabel = 'Wybierz pakiet',
      onCta,
      children,
      footer,
      className,
      ...props
    },
    ref
  ) => (
    <Card
      ref={ref}
      hoverable={!featured}
      className={cn(
        'relative flex h-full flex-col rounded-3xl',
        featured
          ? 'border-0 [background:var(--gradient-brand)] p-px shadow-[var(--glow-cta)]'
          : 'border-border bg-[var(--surface-card)]',
        className
      )}
      {...props}
    >
      {featured || badge ? (
        <span className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-950 shadow-[0_0_0_1px_rgba(147,51,234,0.45),0_12px_30px_-14px_rgba(147,51,234,0.95)] dark:bg-[#09090b] dark:text-white">
          {badge ?? 'Najpopularniejszy'}
        </span>
      ) : null}

      <CardContent
        className={cn(
          'flex h-full flex-col gap-5 p-4 sm:p-6 md:p-7',
          featured && 'rounded-[calc(var(--radius-2xl)-1px)] bg-[var(--surface-card)]'
        )}
      >
        <div>
          <h3 className="font-display text-2xl font-bold text-zinc-950 dark:text-white">{name}</h3>
          {description ? <p className="mt-2 font-body text-sm leading-6 text-zinc-600 dark:text-zinc-400">{description}</p> : null}
        </div>

        <div className="flex flex-wrap items-baseline gap-2">
          {priceLabel ? <span className="font-body text-sm text-zinc-500">{priceLabel}</span> : null}
          <span className="interactive-gradient-text font-display text-3xl font-extrabold leading-none sm:text-4xl">{price}</span>
          {currency ? <span className="font-display text-xl font-bold text-zinc-600 dark:text-zinc-400">{currency}</span> : null}
          {period ? <span className="font-body text-sm text-zinc-500">{period}</span> : null}
        </div>

        <div className="h-px w-full bg-zinc-200 dark:bg-white/10" />

        {children ? <div className="flex flex-1 flex-col gap-3">{children}</div> : null}
        {footer ? <div>{footer}</div> : null}

        {ctaLabel ? (
          <Button
            type="button"
            variant={featured ? 'interactive' : 'outline'}
            className={cn(
              'mt-auto w-full',
              !featured &&
                'border-zinc-300 bg-white/70 text-zinc-950 hover:border-purple-400/60 hover:bg-zinc-50 dark:border-white/15 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.08]'
            )}
            onClick={onCta}
          >
            {ctaLabel}
          </Button>
        ) : null}
      </CardContent>
    </Card>
  )
)

PricingCard.displayName = 'PricingCard'

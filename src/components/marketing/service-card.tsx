import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import * as React from 'react'

export interface ServiceCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  price?: React.ReactNode
  priceLabel?: React.ReactNode
  currency?: React.ReactNode
  ctaLabel?: React.ReactNode
  onCta?: () => void
  align?: 'left' | 'center' | 'right'
  footer?: React.ReactNode
}

const alignClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
}

export const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  (
    {
      title,
      description,
      icon,
      price,
      priceLabel = 'od',
      currency = 'zł',
      ctaLabel,
      onCta,
      align = 'center',
      footer,
      className,
      ...props
    },
    ref
  ) => (
    <Card
      ref={ref}
      variant="feature"
      hoverable
      className={cn(
        'group h-full overflow-hidden rounded-3xl',
        className
      )}
      {...props}
    >
      <CardContent className={cn('relative flex h-full flex-col gap-4 p-6', alignClasses[align])}>
        <div className="pointer-events-none absolute inset-0 rounded-3xl [background:var(--gradient-wash)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {icon ? (
          <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
            {icon}
          </div>
        ) : null}
        <h3 className="relative interactive-gradient-text font-display text-2xl font-extrabold leading-tight">
          {title}
        </h3>
        {price !== undefined ? (
          <div className="relative font-display text-2xl font-bold text-white">
            {priceLabel ? <span className="mr-1 font-body text-base font-medium text-zinc-500">{priceLabel}</span> : null}
            <span className="interactive-gradient-text">{price}</span>
            {currency ? <span className="ml-1 text-lg text-zinc-400">{currency}</span> : null}
          </div>
        ) : null}
        {description ? <p className="relative font-body text-sm leading-7 text-zinc-400">{description}</p> : null}
        {footer ? <div className="relative mt-auto w-full">{footer}</div> : null}
        {ctaLabel ? (
          <Button type="button" variant="interactive" className="relative mt-auto" onClick={onCta}>
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : null}
      </CardContent>
    </Card>
  )
)

ServiceCard.displayName = 'ServiceCard'

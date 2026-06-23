import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import * as React from 'react'

export interface CaseCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  category?: React.ReactNode
  metric?: React.ReactNode
  metricLabel?: React.ReactNode
  description?: React.ReactNode
  image?: string
  imageAlt?: string
  icon?: React.ReactNode
  gradient?: string
  tags?: React.ReactNode[]
}

export const CaseCard = React.forwardRef<HTMLDivElement, CaseCardProps>(
  (
    {
      title,
      category,
      metric,
      metricLabel,
      description,
      image,
      imageAlt,
      icon,
      gradient = 'var(--gradient-brand)',
      tags = [],
      className,
      ...props
    },
    ref
  ) => {
    const initials = String(title)
      .split(' ')
      .map((word) => word[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()

    return (
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
        <div className="relative h-44 overflow-hidden" style={{ background: image ? '#000' : gradient }}>
          {image ? (
            <img
              src={image}
              alt={imageAlt ?? String(title)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/92">
              <span className="font-display text-5xl font-extrabold tracking-[0.04em] drop-shadow-lg">{initials}</span>
              {icon ? <span className="absolute right-4 top-4 text-white/90">{icon}</span> : null}
            </div>
          )}
          {category ? (
            <span className="absolute left-4 top-4 rounded-full bg-[#09090b]/70 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md">
              {category}
            </span>
          ) : null}
        </div>
        <CardContent className="flex h-[calc(100%-11rem)] flex-col gap-3 p-6">
          <h3 className="font-display text-xl font-bold text-white">{title}</h3>
          {metric ? (
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="interactive-gradient-text font-display text-3xl font-extrabold">{metric}</span>
              {metricLabel ? <span className="font-body text-sm text-zinc-400">{metricLabel}</span> : null}
            </div>
          ) : null}
          {description ? <p className="font-body text-sm leading-7 text-zinc-400">{description}</p> : null}
          {tags.length > 0 ? (
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <span key={index} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-500">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>
    )
  }
)

CaseCard.displayName = 'CaseCard'

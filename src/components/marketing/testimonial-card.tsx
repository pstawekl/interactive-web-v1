import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Quote, Star } from 'lucide-react'
import * as React from 'react'

export interface TestimonialCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'> {
  name: React.ReactNode
  role?: React.ReactNode
  text: React.ReactNode
  rating?: number
  quoteIcon?: React.ReactNode
}

export const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, role, text, rating = 5, quoteIcon, className, ...props }, ref) => (
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
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full [background:var(--gradient-brand)] text-white shadow-[var(--glow-cta)]">
            {quoteIcon ?? <Quote className="h-6 w-6" />}
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
            ))}
          </div>
        </div>
        <p className="flex-1 font-body text-sm leading-7 text-zinc-300">"{text}"</p>
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="font-display text-base font-bold text-white">{name}</p>
          {role ? <p className="mt-1 font-body text-sm text-zinc-500">{role}</p> : null}
        </div>
      </CardContent>
    </Card>
  )
)

TestimonialCard.displayName = 'TestimonialCard'

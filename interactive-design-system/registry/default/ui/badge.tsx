import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-full)] border px-2.5 py-1 font-mono text-[11px] font-medium uppercase leading-none tracking-[0.04em] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      variant: {
        neutral:
          "border-border bg-[var(--surface-elevated)] text-[var(--text-muted)]",
        brand:
          "border-purple-500/35 bg-purple-500/10 text-purple-400",
        gradient:
          "border-transparent [background:var(--gradient-cta)] text-white",
        success:
          "border-green-500/35 bg-green-500/10 text-green-400",
        outline:
          "border-[var(--border-strong)] bg-transparent text-[var(--text-body)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

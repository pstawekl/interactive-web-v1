import * as React from "react"

import { cn } from "@/lib/utils"

export interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  align?: "left" | "center" | "right"
  gradient?: boolean
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      className,
      eyebrow,
      title,
      description,
      align = "center",
      gradient = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "ml-auto items-end text-right",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl",
          gradient ? "interactive-gradient-text" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
)
SectionHeading.displayName = "SectionHeading"

export { SectionHeading }

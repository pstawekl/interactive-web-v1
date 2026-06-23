import * as React from "react"

import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "feature" | "glass" | "elevated"
  hoverable?: boolean
}

const cardVariants = {
  default: "border border-border bg-[var(--surface-card)]",
  feature: "border-2 border-border bg-[var(--surface-card)]",
  glass: "border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl",
  elevated: "border border-border bg-[var(--surface-elevated)]",
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", hoverable = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-2xl text-card-foreground shadow-lg transition-[transform,box-shadow,border-color] duration-300 ease-out",
      cardVariants[variant],
      hoverable && "hover:-translate-y-1.5 hover:border-purple-400/40 hover:shadow-2xl",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-display text-2xl font-bold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("font-body text-sm leading-relaxed text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

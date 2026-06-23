import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap border border-transparent font-body font-semibold leading-none tracking-normal transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-[var(--shadow)] hover:scale-[1.03] hover:shadow-[var(--shadow-md)] active:scale-[0.97]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[var(--shadow)] hover:scale-[1.03] hover:bg-destructive/90 active:scale-[0.97]",
        outline:
          "border-[var(--border-strong)] bg-transparent text-foreground hover:bg-[var(--surface-elevated)] active:scale-[0.97]",
        secondary:
          "border-border bg-secondary text-secondary-foreground shadow-[var(--shadow-sm)] hover:bg-[var(--surface-elevated)] active:scale-[0.97]",
        ghost: "text-foreground hover:bg-[var(--surface-elevated)] hover:text-foreground active:scale-[0.97]",
        link: "h-auto rounded-none border-0 p-0 text-primary underline-offset-4 hover:underline",
        interactive:
          "[background:var(--gradient-cta)] !text-white shadow-[0_14px_34px_-18px_rgba(147,51,234,0.95)] hover:scale-[1.04] hover:shadow-[var(--glow-cta)] active:scale-[0.97] [&_svg]:!text-white",
      },
      size: {
        default: "h-10 rounded-[var(--radius)] px-[18px] text-sm",
        sm: "h-8 rounded-[var(--radius)] px-3 text-[13px]",
        md: "h-11 rounded-[var(--radius)] px-[22px] text-[15px]",
        lg: "h-[52px] min-h-[52px] rounded-[var(--radius-lg)] px-8 text-base",
        icon: "h-10 w-10 rounded-[var(--radius)] p-0 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }


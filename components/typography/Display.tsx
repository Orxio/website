import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const displayVariants = cva(
  "font-heading font-semibold text-balance tracking-tighter text-foreground",
  {
    variants: {
      size: {
        sm: "text-4xl sm:text-5xl lg:text-6xl",
        md: "text-5xl sm:text-6xl lg:text-7xl",
        lg: "text-6xl sm:text-7xl lg:text-8xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

type DisplayTag = "h1" | "h2" | "div" | "span"

interface DisplayProps
  extends Omit<React.ComponentProps<"h1">, "color">,
    VariantProps<typeof displayVariants> {
  as?: DisplayTag
}

function Display({ as: Comp = "h1", size, className, ...props }: DisplayProps) {
  return (
    <Comp
      data-slot="display"
      className={cn(displayVariants({ size, className }))}
      {...props}
    />
  )
}

export { Display, displayVariants }

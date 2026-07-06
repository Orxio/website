import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "font-heading font-semibold text-balance tracking-tight text-foreground",
  {
    variants: {
      size: {
        xl: "text-4xl sm:text-5xl lg:text-6xl",
        lg: "text-3xl sm:text-4xl lg:text-5xl",
        md: "text-2xl sm:text-3xl",
        sm: "text-xl sm:text-2xl",
        xs: "text-lg sm:text-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface HeadingProps
  extends Omit<React.ComponentProps<"h1">, "color">,
    VariantProps<typeof headingVariants> {
  as?: HeadingTag
}

function Heading({ as: Comp = "h2", size, className, ...props }: HeadingProps) {
  return (
    <Comp
      data-slot="heading"
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  )
}

export { Heading, headingVariants }

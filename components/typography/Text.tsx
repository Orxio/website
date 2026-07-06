import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("text-foreground leading-relaxed", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type TextTag = "p" | "span" | "div"

interface TextProps
  extends Omit<React.ComponentProps<"p">, "color">,
    VariantProps<typeof textVariants> {
  as?: TextTag
}

function Text({ as: Comp = "p", size, className, ...props }: TextProps) {
  return (
    <Comp
      data-slot="text"
      className={cn(textVariants({ size, className }))}
      {...props}
    />
  )
}

export { Text, textVariants }

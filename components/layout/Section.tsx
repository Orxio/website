import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full", {
  variants: {
    size: {
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-24",
      lg: "py-24 sm:py-32",
      xl: "py-32 sm:py-40",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

interface SectionProps
  extends React.ComponentProps<"section">,
    VariantProps<typeof sectionVariants> {}

function Section({ size, className, ...props }: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ size, className }))}
      {...props}
    />
  )
}

export { Section, sectionVariants }

import { cn } from "@/lib/utils"

function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="lead"
      className={cn(
        "max-w-prose text-lg text-balance text-muted-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  )
}

export { Lead }

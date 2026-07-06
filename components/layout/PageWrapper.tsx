import { cn } from "@/lib/utils"

function PageWrapper({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      id="main-content"
      data-slot="page-wrapper"
      className={cn("flex min-h-full flex-1 flex-col", className)}
      {...props}
    />
  )
}

export { PageWrapper }

import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { cn } from "@/lib/utils"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  /** Three short capability tags — enables the premium card presentation. */
  capabilities?: [string, string, string]
  /** Vertical-timeline mode only: omits the trailing connector line. */
  isLast?: boolean
}

function ProcessStep({
  number,
  title,
  description,
  capabilities,
  isLast,
}: ProcessStepProps) {
  if (!capabilities) {
    return (
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background font-heading text-base font-semibold text-foreground"
          >
            {number}
          </div>
          {!isLast && (
            <div aria-hidden="true" className="w-px flex-1 bg-border" />
          )}
        </div>
        <div className={cn("flex flex-col gap-1.5", !isLast && "pb-10")}>
          <Heading as="h3" size="xs">
            {title}
          </Heading>
          <Text size="sm" className="text-muted-foreground">
            {description}
          </Text>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-gradient-to-b from-card to-card/70 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5">
      <div
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-full border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 font-heading text-sm font-semibold text-primary transition-colors duration-300 ease-out group-hover:border-foreground/20"
      >
        {number}
      </div>

      <div className="flex flex-col gap-1.5">
        <Heading as="h3" size="xs">
          {title}
        </Heading>
        <Text size="sm" className="text-muted-foreground">
          {description}
        </Text>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {capabilities.map((capability) => (
          <li key={capability}>
            <span className="inline-flex items-center rounded-full border border-border/50 px-2.5 py-1 text-[0.7rem] text-muted-foreground transition-colors duration-300 ease-out group-hover:border-foreground/25 group-hover:text-foreground/80">
              {capability}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ProcessStep }

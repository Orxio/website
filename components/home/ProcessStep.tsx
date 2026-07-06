import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { cn } from "@/lib/utils"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  isLast?: boolean
}

function ProcessStep({ number, title, description, isLast }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background font-heading text-base font-semibold text-foreground"
        >
          {number}
        </div>
        {!isLast && <div aria-hidden="true" className="w-px flex-1 bg-border" />}
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

export { ProcessStep }

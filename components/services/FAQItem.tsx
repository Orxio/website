import { ChevronDown } from "lucide-react"

import { Text } from "@/components/typography/Text"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown
          aria-hidden="true"
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <Text size="sm" className="mt-3 text-muted-foreground">
        {answer}
      </Text>
    </details>
  )
}

export { FAQItem }

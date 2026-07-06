import type { ReactNode } from "react"

import { Heading } from "@/components/typography/Heading"

interface LegalSectionProps {
  id: string
  title: string
  children: ReactNode
}

function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <div
      id={id}
      className="flex scroll-mt-24 flex-col gap-3 border-t border-border py-8 first:border-t-0 first:pt-0"
    >
      <Heading as="h2" size="sm">
        {title}
      </Heading>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  )
}

export { LegalSection }

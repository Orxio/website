import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

const CAPABILITY_CHIPS: Record<string, [string, string, string]> = {
  "Enterprise AI Strategy": ["AI Roadmaps", "Governance", "Workshops"],
  "AI Agents": ["Copilots", "Multi-Agent", "Assistants"],
  "Intelligent Automation": ["Workflow", "RPA", "Integration"],
  "Data Platforms": ["Lakehouse", "Analytics", "Governance"],
  "Generative AI Solutions": ["RAG", "LLMs", "Knowledge"],
  "Custom AI Applications": ["Enterprise Apps", "Portals", "Dashboards"],
}

function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  const chips = CAPABILITY_CHIPS[title]

  return (
    <Card className="group relative h-full gap-5 overflow-hidden border-border/60 bg-gradient-to-b from-card to-card/70 py-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-foreground/25 hover:shadow-2xl hover:shadow-foreground/5">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

      <CardHeader className="relative gap-0 px-7">
        <div className="flex size-12 items-center justify-center rounded-xl border border-border/40 bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-sm transition-all duration-300 ease-out group-hover:border-foreground/20 group-hover:shadow-[0_0_20px_-4px] group-hover:shadow-primary/50">
          <Icon aria-hidden="true" className="size-6" />
        </div>
        <Heading as="h3" size="xs" className="mt-5">
          {title}
        </Heading>
      </CardHeader>

      <CardContent className="relative flex flex-col px-7">
        <Text size="sm" className="text-muted-foreground">
          {description}
        </Text>

        {chips && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <li key={chip}>
                <span className="inline-flex items-center rounded-full border border-border/50 px-2.5 py-1 text-[0.7rem] text-muted-foreground transition-colors duration-300 ease-out group-hover:border-foreground/25 group-hover:text-foreground/80">
                  {chip}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="relative mt-auto border-t border-border/50 px-7">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          Learn more
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </Link>
      </CardFooter>
    </Card>
  )
}

export { ServiceCard }

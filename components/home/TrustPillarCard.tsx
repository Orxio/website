import type { LucideIcon } from "lucide-react"

import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TrustPillarCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function TrustPillarCard({
  icon: Icon,
  title,
  description,
}: TrustPillarCardProps) {
  return (
    <Card className="group relative h-full gap-5 overflow-hidden border-border/60 bg-gradient-to-b from-card to-card/70 py-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

      <CardHeader className="relative gap-0 px-7">
        <div className="flex size-12 items-center justify-center rounded-xl border border-border/40 bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-sm transition-colors duration-300 ease-out group-hover:border-foreground/20">
          <Icon aria-hidden="true" className="size-6" />
        </div>
        <Heading as="h3" size="xs" className="mt-5">
          {title}
        </Heading>
      </CardHeader>

      <CardContent className="relative px-7">
        <Text size="sm" className="text-muted-foreground">
          {description}
        </Text>
      </CardContent>
    </Card>
  )
}

export { TrustPillarCard }

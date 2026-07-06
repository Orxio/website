import type { LucideIcon } from "lucide-react"

import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface EngagementTypeCardProps {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

function EngagementTypeCard({
  icon: Icon,
  title,
  description,
  href,
}: EngagementTypeCardProps) {
  return (
    <a href={href} className="group block h-full">
      <Card className="h-full transition-colors group-hover:border-primary/40">
        <CardHeader>
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon aria-hidden="true" className="size-5" />
          </div>
          <Heading as="h3" size="xs" className="mt-2">
            {title}
          </Heading>
        </CardHeader>
        <CardContent>
          <Text size="sm" className="text-muted-foreground">
            {description}
          </Text>
        </CardContent>
      </Card>
    </a>
  )
}

export { EngagementTypeCard }

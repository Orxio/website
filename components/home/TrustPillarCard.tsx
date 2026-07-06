import type { LucideIcon } from "lucide-react"

import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TrustPillarCardProps {
  icon: LucideIcon
  title: string
  description: string
}

function TrustPillarCard({ icon: Icon, title, description }: TrustPillarCardProps) {
  return (
    <Card className="h-full">
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
  )
}

export { TrustPillarCard }

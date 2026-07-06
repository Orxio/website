import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface TechnologyCardProps {
  title: string
  items: string[]
}

function TechnologyCard({ title, items }: TechnologyCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <Heading as="h3" size="xs">
          {title}
        </Heading>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item}>
              <Text size="sm" className="text-muted-foreground">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export { TechnologyCard }

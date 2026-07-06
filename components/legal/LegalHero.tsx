import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"

interface LegalHeroProps {
  title: string
  lastUpdated: string
}

function LegalHero({ title, lastUpdated }: LegalHeroProps) {
  return (
    <Section size="md">
      <Container size="md">
        <div className="flex flex-col gap-3">
          <Heading as="h1" size="xl">
            {title}
          </Heading>
          <Text size="sm" className="text-muted-foreground">
            Last updated: {lastUpdated}
          </Text>
        </div>
      </Container>
    </Section>
  )
}

export { LegalHero }

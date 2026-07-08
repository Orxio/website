import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { RelatedServicesGrid } from "@/components/services/engine/RelatedServicesGrid"
import { RelatedServicesJourney } from "@/components/services/engine/RelatedServicesJourney"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import type { ServicePageContent } from "@/lib/services/types"

type RelatedServicesSectionProps = ServicePageContent["relatedServices"]

function RelatedServicesSection({
  layout,
  heading,
  description,
  items,
}: RelatedServicesSectionProps) {
  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            {heading}
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            {description}
          </Text>
        </div>

        {layout === "journey" ? (
          <RelatedServicesJourney items={items} />
        ) : (
          <RelatedServicesGrid items={items} />
        )}
      </Container>
    </Section>
  )
}

export { RelatedServicesSection }

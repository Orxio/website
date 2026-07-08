import type { IconKey } from "@/lib/services/icons"

type ServiceSlug =
  | "enterprise-ai-strategy"
  | "ai-agents"
  | "intelligent-automation"
  | "data-platforms"
  | "generative-ai"
  | "custom-ai-applications"

interface CardItem {
  icon: IconKey
  title: string
  description: string
}

interface CardGridSectionContent {
  /** Anchor target for in-page CTAs (e.g. the Hero's "Explore Capabilities" link). */
  id?: string
  heading: string
  description: string
  items: CardItem[]
  columns: 2 | 3 | 4
}

interface RelatedServiceLink {
  /** Present only when the parent section's layout is "journey". */
  question?: string
  slug: ServiceSlug
  icon: IconKey
  title: string
  description: string
}

interface ServiceFAQ {
  question: string
  answer: string
}

interface ServicePageContent {
  slug: ServiceSlug
  metadata: {
    title: string
    description: string
  }
  serviceType: string
  areaServed: string

  hero: {
    eyebrow: string
    headline: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    capabilities: string[]
  }

  businessChallenges: CardGridSectionContent

  approach: {
    heading: string
    description: string
    principles: { label: string; description: string }[]
  }

  /** id should be "capabilities" — the Hero's secondary CTA anchors here. */
  capabilities: CardGridSectionContent

  businessOutcomes: CardGridSectionContent

  faq: ServiceFAQ[]

  relatedServices: {
    layout: "journey" | "grid"
    heading: string
    description: string
    items: RelatedServiceLink[]
  }
}

export type {
  ServiceSlug,
  CardItem,
  CardGridSectionContent,
  RelatedServiceLink,
  ServiceFAQ,
  ServicePageContent,
}

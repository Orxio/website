import { FinalCTASection } from "@/components/home/FinalCTASection"
import { IndustriesSection } from "@/components/home/IndustriesSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { TechnologySection } from "@/components/home/TechnologySection"
import { ApproachSection } from "@/components/services/ApproachSection"
import { CardGridSection } from "@/components/services/engine/CardGridSection"
import { EngagementModelSection } from "@/components/services/EngagementModelSection"
import { FAQSection } from "@/components/services/FAQSection"
import { RelatedServicesSection } from "@/components/services/RelatedServicesSection"
import { ServiceHero } from "@/components/services/ServiceHero"
import type { ServicePageContent } from "@/lib/services/types"

interface ServicePageRendererProps {
  content: ServicePageContent
}

/** Renders all 12 service-page sections from a single ServicePageContent object. */
function ServicePageRenderer({ content }: ServicePageRendererProps) {
  return (
    <>
      <ServiceHero
        eyebrow={content.hero.eyebrow}
        headline={content.hero.headline}
        description={content.hero.description}
        primaryCtaLabel={content.hero.primaryCta.label}
        primaryCtaHref={content.hero.primaryCta.href}
        secondaryCtaLabel={content.hero.secondaryCta.label}
        secondaryCtaHref={content.hero.secondaryCta.href}
        capabilities={content.hero.capabilities}
      />
      <CardGridSection {...content.businessChallenges} />
      <ApproachSection {...content.approach} />
      <CardGridSection {...content.capabilities} />
      <ProcessSection />
      <TechnologySection />
      <IndustriesSection />
      <CardGridSection {...content.businessOutcomes} />
      <EngagementModelSection />
      <FAQSection faqs={content.faq} />
      <RelatedServicesSection {...content.relatedServices} />
      <FinalCTASection />
    </>
  )
}

export { ServicePageRenderer }

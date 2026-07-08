import type { Metadata } from "next";

import { FinalCTASection } from "@/components/home/FinalCTASection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { ApproachSection } from "@/components/services/ApproachSection";
import { BusinessChallengesSection } from "@/components/services/BusinessChallengesSection";
import { BusinessOutcomesSection } from "@/components/services/BusinessOutcomesSection";
import { CapabilitiesSection } from "@/components/services/CapabilitiesSection";
import { EngagementModelSection } from "@/components/services/EngagementModelSection";
import { ENTERPRISE_AI_STRATEGY_FAQS } from "@/components/services/enterprise-ai-strategy-faq-data";
import { FAQSection } from "@/components/services/FAQSection";
import { RelatedServicesSection } from "@/components/services/RelatedServicesSection";
import { ServiceHero } from "@/components/services/ServiceHero";

export const metadata: Metadata = {
  title: "Enterprise AI Strategy",
  description:
    "Enterprise AI strategy consulting: AI readiness assessment, use case prioritization, governance frameworks, and vendor-neutral roadmaps for production-ready AI.",
  alternates: {
    canonical: "/services/enterprise-ai-strategy",
  },
};

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Enterprise AI Strategy",
  provider: { "@type": "Organization", name: "ORXIO" },
  areaServed: "Enterprise organizations across regulated and technically complex industries",
  description:
    "Enterprise AI strategy consulting: AI readiness assessment, use case prioritization, governance frameworks, and vendor-neutral roadmaps for production-ready AI.",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ENTERPRISE_AI_STRATEGY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EnterpriseAiStrategyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ServiceHero
        eyebrow="Enterprise AI Strategy"
        headline="A Roadmap Your Organization Can Actually Execute"
        description="A governed, prioritized, and technically grounded roadmap for AI investment — validated against your data, infrastructure, and risk posture before a single engineering dollar is committed."
        primaryCtaLabel="Book a Strategy Call"
        primaryCtaHref="/contact"
        secondaryCtaLabel="Explore Capabilities"
        secondaryCtaHref="#capabilities"
        capabilities={[
          "Executive Workshops",
          "AI Governance",
          "Enterprise Roadmaps",
          "Solution Architecture",
        ]}
      />
      <BusinessChallengesSection />
      <ApproachSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TechnologySection />
      <IndustriesSection />
      <BusinessOutcomesSection />
      <EngagementModelSection />
      <FAQSection faqs={ENTERPRISE_AI_STRATEGY_FAQS} />
      <RelatedServicesSection />
      <FinalCTASection />
    </>
  );
}

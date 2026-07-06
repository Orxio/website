import type { Metadata } from "next";

import { FinalCTASection } from "@/components/home/FinalCTASection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyOrxioSection } from "@/components/home/WhyOrxioSection";
import { EngagementModelSection } from "@/components/services/EngagementModelSection";
import { FAQS } from "@/components/services/faq-data";
import { FAQSection } from "@/components/services/FAQSection";
import { ServicesHero } from "@/components/services/ServicesHero";

export const metadata: Metadata = {
  title: "Enterprise AI Services",
  description:
    "Enterprise AI consulting, AI agents, intelligent automation, data platforms, and custom AI applications, delivered from strategy through production.",
  alternates: {
    canonical: "/services",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ServicesHero />
      <ServicesSection />
      <WhyOrxioSection />
      <ProcessSection />
      <EngagementModelSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

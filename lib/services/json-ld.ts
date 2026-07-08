import type { ServicePageContent } from "@/lib/services/types"

function buildServiceJsonLd(content: ServicePageContent) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: content.serviceType,
    provider: { "@type": "Organization", name: "ORXIO" },
    areaServed: content.areaServed,
    description: content.metadata.description,
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return { service, faq }
}

export { buildServiceJsonLd }

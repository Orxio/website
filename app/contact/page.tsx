import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { EngagementOptionsSection } from "@/components/contact/EngagementOptionsSection";
import { FAQS } from "@/components/contact/faq-data";
import { FAQSection } from "@/components/contact/FAQSection";
import { ResponseExpectationSection } from "@/components/contact/ResponseExpectationSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a discovery conversation with ORXIO about your enterprise AI strategy, agents, automation, or data platform initiative.",
  alternates: {
    canonical: "/contact",
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ContactHero />
      <EngagementOptionsSection />
      <ContactForm />
      <ResponseExpectationSection />
      <FAQSection />
    </>
  );
}

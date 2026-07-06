import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalSection } from "@/components/legal/LegalSection";
import { Text } from "@/components/typography/Text";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ORXIO collects, uses, and protects information submitted through this site.",
  alternates: {
    canonical: "/privacy",
  },
};

// Placeholder — set NEXT_PUBLIC_CONTACT_EMAIL before production launch.
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@orxio.ai";

export default function PrivacyPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" lastUpdated="January 1, 2026" />
      <Section size="md">
        <Container size="md">
          <LegalSection id="overview" title="1. Overview">
            <Text as="p">
              This Privacy Policy explains how ORXIO (&quot;ORXIO,&quot;
              &quot;we,&quot; &quot;us&quot;) handles information collected
              through this website. By using this site, you agree to the
              practices described below.
            </Text>
          </LegalSection>

          <LegalSection id="information-we-collect" title="2. Information We Collect">
            <Text as="p">
              When you submit our contact form, we collect the information
              you provide, such as your name, work email, company, and
              project details. Our servers also automatically log standard
              technical information, such as IP address, browser type, and
              pages visited.
            </Text>
            <Text as="p">
              We use a single functional preference, your light or dark
              theme selection, stored in your browser&apos;s local storage.
              This preference is not used for tracking or shared with third
              parties.
            </Text>
          </LegalSection>

          <LegalSection id="how-we-use-information" title="3. How We Use Information">
            <Text as="p">
              We use the information we collect to respond to inquiries,
              schedule discovery conversations, operate and improve this
              site, and comply with legal obligations.
            </Text>
          </LegalSection>

          <LegalSection id="information-sharing" title="4. Information Sharing">
            <Text as="p">
              We do not sell personal information. We may share information
              with service providers who help us operate this site, or when
              required by law.
            </Text>
          </LegalSection>

          <LegalSection id="data-retention" title="5. Data Retention">
            <Text as="p">
              We retain information for as long as necessary to respond to
              your inquiry and fulfill the purposes described in this
              policy, unless a longer retention period is required by law.
            </Text>
          </LegalSection>

          <LegalSection id="your-rights" title="6. Your Rights">
            <Text as="p">
              You may request access to, correction of, or deletion of your
              personal information by contacting us using the details
              below.
            </Text>
          </LegalSection>

          <LegalSection id="security" title="7. Security">
            <Text as="p">
              We take reasonable measures to protect information submitted
              through this site. No method of transmission or storage is
              completely secure, and we cannot guarantee absolute security.
            </Text>
          </LegalSection>

          <LegalSection id="childrens-privacy" title="8. Children's Privacy">
            <Text as="p">
              This site is not directed to children and we do not knowingly
              collect information from children.
            </Text>
          </LegalSection>

          <LegalSection id="changes-to-this-policy" title="9. Changes to This Policy">
            <Text as="p">
              We may update this policy from time to time. Changes take
              effect when posted, with the &quot;Last updated&quot; date
              revised accordingly.
            </Text>
          </LegalSection>

          <LegalSection id="contact-us" title="10. Contact Us">
            <Text as="p">
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-foreground underline underline-offset-4 hover:text-primary"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </Text>
          </LegalSection>
        </Container>
      </Section>
    </>
  );
}

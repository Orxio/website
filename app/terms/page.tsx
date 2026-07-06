import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalSection } from "@/components/legal/LegalSection";
import { Text } from "@/components/typography/Text";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the ORXIO website.",
  alternates: {
    canonical: "/terms",
  },
};

// Placeholder — set NEXT_PUBLIC_CONTACT_EMAIL before production launch.
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@orxio.ai";

export default function TermsPage() {
  return (
    <>
      <LegalHero title="Terms of Service" lastUpdated="January 1, 2026" />
      <Section size="md">
        <Container size="md">
          <LegalSection id="acceptance-of-terms" title="1. Acceptance of Terms">
            <Text as="p">
              By accessing or using this website, you agree to these Terms
              of Service. If you do not agree, please do not use this site.
            </Text>
          </LegalSection>

          <LegalSection id="use-of-the-site" title="2. Use of the Site">
            <Text as="p">
              You may use this site for lawful purposes only. You agree not
              to misuse the site, interfere with its operation, or attempt
              to access it using automated means without our permission.
            </Text>
          </LegalSection>

          <LegalSection id="intellectual-property" title="3. Intellectual Property">
            <Text as="p">
              All content on this site, including text, graphics, and
              branding, is owned by ORXIO or its licensors and may not be
              reproduced or used without prior written permission.
            </Text>
          </LegalSection>

          <LegalSection id="no-professional-advice" title="4. No Professional Advice">
            <Text as="p">
              Content on this site is provided for general informational
              purposes only and does not constitute consulting, technical,
              legal, or professional advice. Any engagement with ORXIO is
              governed by a separate, signed agreement.
            </Text>
          </LegalSection>

          <LegalSection id="third-party-links" title="5. Third-Party Links">
            <Text as="p">
              This site may link to third-party websites. We are not
              responsible for the content or practices of any site we do
              not operate.
            </Text>
          </LegalSection>

          <LegalSection id="disclaimer-of-warranties" title="6. Disclaimer of Warranties">
            <Text as="p">
              This site is provided on an &quot;as is&quot; and
              &quot;as available&quot; basis, without warranties of any
              kind, express or implied.
            </Text>
          </LegalSection>

          <LegalSection id="limitation-of-liability" title="7. Limitation of Liability">
            <Text as="p">
              To the fullest extent permitted by law, ORXIO is not liable
              for any indirect, incidental, or consequential damages
              arising from your use of this site.
            </Text>
          </LegalSection>

          <LegalSection id="governing-law" title="8. Governing Law">
            <Text as="p">
              These terms are governed by the laws of the jurisdiction in
              which ORXIO is incorporated, without regard to conflict-of-law
              principles.
            </Text>
          </LegalSection>

          <LegalSection id="changes-to-these-terms" title="9. Changes to These Terms">
            <Text as="p">
              We may update these terms from time to time. Changes take
              effect when posted, with the &quot;Last updated&quot; date
              revised accordingly.
            </Text>
          </LegalSection>

          <LegalSection id="contact-us" title="10. Contact Us">
            <Text as="p">
              Questions about these terms can be sent to{" "}
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

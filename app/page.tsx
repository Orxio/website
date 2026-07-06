import { Container } from "@/components/layout/Container";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/layout/Section";
import { Navbar } from "@/components/navigation/Navbar";
import { Heading } from "@/components/typography/Heading";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Section>
          <Container>
            <Heading as="h1" size="xl">
              ORXIO
            </Heading>
          </Container>
        </Section>
      </PageWrapper>
    </>
  );
}

import { Hero } from "@/components/home/Hero";
import { TechnologySection } from "@/components/home/TechnologySection";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />
        <TechnologySection />
      </PageWrapper>
    </>
  );
}

import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Hero } from "@/components/home/Hero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { WhyOrxioSection } from "@/components/home/WhyOrxioSection";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/navigation/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Hero />
        <ServicesSection />
        <ProcessSection />
        <WhyOrxioSection />
        <TechnologySection />
        <IndustriesSection />
        <FinalCTASection />
      </PageWrapper>
    </>
  );
}

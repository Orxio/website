import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Hero } from "@/components/home/Hero";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { WhyOrxioSection } from "@/components/home/WhyOrxioSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <WhyOrxioSection />
      <TechnologySection />
      <IndustriesSection />
      <FinalCTASection />
    </>
  );
}

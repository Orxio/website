import type { Metadata } from "next";

import { FinalCTASection } from "@/components/home/FinalCTASection";
import { WhyOrxioSection } from "@/components/home/WhyOrxioSection";
import { AboutHero } from "@/components/about/AboutHero";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { PrinciplesSection } from "@/components/about/PrinciplesSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "ORXIO's mission, vision, and operating principles: senior-led, transparent, outcome-focused enterprise AI delivery built for long-term business value.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVisionSection />
      <PrinciplesSection />
      <LeadershipSection />
      <WhyOrxioSection />
      <FinalCTASection />
    </>
  );
}

"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Building2,
  Handshake,
  Scale,
  ShieldCheck,
  Target,
  type LucideIcon,
} from "lucide-react"

import { TrustPillarCard } from "@/components/home/TrustPillarCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface TrustPillar {
  icon: LucideIcon
  title: string
  description: string
}

const TRUST_PILLARS: TrustPillar[] = [
  {
    icon: Building2,
    title: "Enterprise First",
    description: "Production-ready AI systems designed for scale.",
  },
  {
    icon: Target,
    title: "Business Before Models",
    description:
      "Every engagement starts with measurable business outcomes.",
  },
  {
    icon: Scale,
    title: "Vendor Neutral",
    description: "Technology selected based on customer needs.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description: "Enterprise-grade governance, privacy and architecture.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description:
      "AI initiatives focused on operational and financial impact.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "From strategy through deployment and continuous optimization.",
  },
]

function WhyOrxioSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="lg">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Why Leading Organizations Choose ORXIO
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Enterprises don&apos;t adopt AI for its own sake — they adopt it to
            move a P&amp;L. ORXIO pairs deep engineering with a
            business-first delivery model, so every engagement is
            accountable to outcomes, not just outputs.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TRUST_PILLARS.map((pillar) => (
            <motion.div key={pillar.title} variants={slideUp} className="h-full">
              <TrustPillarCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { WhyOrxioSection }

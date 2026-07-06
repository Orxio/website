"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Handshake,
  Layers,
  Rocket,
  Scale,
  ShieldCheck,
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
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Security, governance, and compliance considerations embedded from day one.",
  },
  {
    icon: Layers,
    title: "Built to Scale",
    description:
      "Cloud-native architectures designed to grow with your business and workloads.",
  },
  {
    icon: Rocket,
    title: "Production-Ready AI",
    description:
      "From proof of concept to production deployment with reliability and observability in mind.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description:
      "We focus on business KPIs, operational efficiency, and ROI rather than model benchmarks.",
  },
  {
    icon: Scale,
    title: "Responsible AI",
    description:
      "Human oversight, governance, transparency, and safe AI deployment practices.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "From strategy and implementation to optimization and continuous improvement.",
  },
]

function WhyOrxioSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Why ORXIO
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Enterprise AI requires more than models and prompts. ORXIO
            designs secure, scalable, and production-ready AI systems built
            for long-term business value.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TRUST_PILLARS.map((pillar) => (
            <motion.div key={pillar.title} variants={slideUp}>
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

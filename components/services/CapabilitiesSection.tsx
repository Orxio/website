"use client"

import { motion } from "framer-motion"
import {
  ClipboardCheck,
  Compass,
  ListOrdered,
  Map,
  Presentation,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { TrustPillarCard } from "@/components/home/TrustPillarCard"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Capability {
  icon: LucideIcon
  title: string
  description: string
}

const CAPABILITIES: Capability[] = [
  {
    icon: ClipboardCheck,
    title: "AI Readiness Assessment",
    description:
      "A scored evaluation across data, infrastructure, governance, and organizational capability.",
  },
  {
    icon: ListOrdered,
    title: "Use Case Prioritization",
    description:
      "Opportunities identified and ranked against a documented value, feasibility, and risk method.",
  },
  {
    icon: ShieldCheck,
    title: "Governance Framework",
    description:
      "Data privacy, model risk, and compliance considerations defined for your specific regulatory context.",
  },
  {
    icon: Compass,
    title: "Vendor-Neutral Technology Direction",
    description:
      "A recommended technology direction shaped by your constraints, not a partner incentive.",
  },
  {
    icon: Map,
    title: "Phased Roadmap",
    description:
      "Sequencing, indicative resourcing, and defined success metrics for every phase.",
  },
  {
    icon: Presentation,
    title: "Executive Presentation & Strategy Document",
    description:
      "A final presentation and written strategy document your team can act on immediately.",
  },
]

function CapabilitiesSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section id="capabilities" size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            What&apos;s Included
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            A structured Discover-and-Design engagement, from readiness
            assessment through a roadmap your team can execute.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((capability) => (
            <motion.div key={capability.title} variants={slideUp} className="h-full">
              <TrustPillarCard
                icon={capability.icon}
                title={capability.title}
                description={capability.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { CapabilitiesSection }

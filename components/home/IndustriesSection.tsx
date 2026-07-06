"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  Building2,
  Cpu,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  type LucideIcon,
} from "lucide-react"

import { IndustryCard } from "@/components/home/IndustryCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Industry {
  icon: LucideIcon
  title: string
  description: string
}

const INDUSTRIES: Industry[] = [
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Fraud detection, underwriting, customer service, and document intelligence.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Clinical workflows, patient engagement, and knowledge assistants.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Predictive maintenance, quality assurance, and operations intelligence.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Commerce",
    description:
      "Recommendations, customer support, and inventory intelligence.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Lead intelligence, property insights, and customer engagement.",
  },
  {
    icon: Truck,
    title: "Logistics & Mobility",
    description:
      "Route optimization, fleet intelligence, and operations automation.",
  },
  {
    icon: Cpu,
    title: "SaaS & Technology",
    description: "AI copilots, workflow automation, and knowledge systems.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Research assistants, document workflows, and client intelligence.",
  },
]

function IndustriesSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Industries We Serve
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            ORXIO helps organizations across industries design, deploy, and
            scale intelligent systems tailored to their operational
            challenges and opportunities.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div key={industry.title} variants={slideUp}>
              <IndustryCard
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { IndustriesSection }

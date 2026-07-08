"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
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
  tags: [string, string, string]
}

const INDUSTRIES: Industry[] = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "AI copilots, predictive maintenance, quality inspection, knowledge assistants, factory automation.",
    tags: ["Production", "Quality", "Operations"],
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Customer support, risk analysis, document intelligence, fraud workflows, internal copilots.",
    tags: ["Banking", "Insurance", "Compliance"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Clinical documentation, patient support, knowledge search, workflow automation, secure AI systems.",
    tags: ["Providers", "Hospitals", "Operations"],
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commerce",
    description:
      "Customer service, recommendation engines, inventory intelligence, marketing automation.",
    tags: ["Retail", "Commerce", "CX"],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Fleet intelligence, shipment visibility, warehouse copilots, forecasting, route optimization.",
    tags: ["Fleet", "Warehouse", "Planning"],
  },
  {
    icon: Building2,
    title: "Enterprise Operations",
    description:
      "HR, Finance, Legal, IT, Procurement, and enterprise workflow automation.",
    tags: ["HR", "Finance", "Operations"],
  },
]

function IndustriesSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="lg">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Industries We Transform
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Every industry has different workflows, regulations, and data
            challenges. ORXIO designs AI solutions that fit each business
            domain instead of forcing generic models into every problem.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div key={industry.title} variants={slideUp} className="h-full">
              <IndustryCard
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                tags={industry.tags}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { IndustriesSection }

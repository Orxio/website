"use client"

import { motion } from "framer-motion"
import {
  AppWindow,
  Compass,
  Database,
  Sparkles,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import { ServiceCard } from "@/components/home/ServiceCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

const SERVICES: Service[] = [
  {
    icon: Compass,
    title: "Enterprise AI Strategy",
    description:
      "AI strategy, use case discovery, roadmap creation, and transformation planning.",
  },
  {
    icon: Sparkles,
    title: "AI Agents",
    description:
      "Task automation, multi-agent systems, copilots, and intelligent assistants.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Workflow automation and operational efficiency powered by AI.",
  },
  {
    icon: Database,
    title: "Data Platforms",
    description:
      "Modern data foundations designed for analytics, AI, and decision intelligence.",
  },
  {
    icon: Wand2,
    title: "Generative AI Solutions",
    description:
      "Enterprise copilots, semantic search, knowledge assistants, and GenAI products.",
  },
  {
    icon: AppWindow,
    title: "Custom AI Applications",
    description:
      "Secure, scalable AI applications tailored to your business requirements.",
  },
]

function ServicesSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Enterprise AI Services
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            From strategy to deployment, ORXIO helps organizations design,
            build, and scale intelligent systems that deliver measurable
            business outcomes.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={slideUp}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { ServicesSection }

"use client"

import { motion } from "framer-motion"
import { Route, ShieldCheck, Target, Users, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { TrustPillarCard } from "@/components/home/TrustPillarCard"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Outcome {
  icon: LucideIcon
  title: string
  description: string
}

const OUTCOMES: Outcome[] = [
  {
    icon: ShieldCheck,
    title: "Reduce Implementation Risk",
    description:
      "Validate technical, data, and organizational feasibility before committing engineering budget.",
  },
  {
    icon: Target,
    title: "Prioritize High-Value AI Investments",
    description:
      "Rank opportunities by business value and feasibility, not internal enthusiasm.",
  },
  {
    icon: Users,
    title: "Align Leadership Around Execution",
    description:
      "Give business and technical stakeholders one shared plan and one definition of success.",
  },
  {
    icon: Route,
    title: "Build an Enterprise Roadmap",
    description:
      "A phased, resourced plan your organization can execute without further outside strategy work.",
  },
]

function BusinessOutcomesSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Business Outcomes
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            The impact a structured strategy engagement is designed to
            produce — measured by execution, not by the deliverables
            handed over.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {OUTCOMES.map((outcome) => (
            <motion.div key={outcome.title} variants={slideUp} className="h-full">
              <TrustPillarCard
                icon={outcome.icon}
                title={outcome.title}
                description={outcome.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { BusinessOutcomesSection }

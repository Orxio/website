"use client"

import { motion } from "framer-motion"
import {
  ArrowLeftRight,
  FlaskConical,
  ListFilter,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { TrustPillarCard } from "@/components/home/TrustPillarCard"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Challenge {
  icon: LucideIcon
  title: string
  description: string
}

const CHALLENGES: Challenge[] = [
  {
    icon: ListFilter,
    title: "Too Many Competing Ideas",
    description:
      "Every function has an AI idea. Few organizations have a consistent way to rank them by value and feasibility.",
  },
  {
    icon: ShieldAlert,
    title: "Governance Arrives Too Late",
    description:
      "Security, privacy, and model-risk questions surface after a pilot is underway, becoming blockers instead of design inputs.",
  },
  {
    icon: ArrowLeftRight,
    title: "Vendor Selection Before Strategy",
    description:
      "Platforms get chosen before the problem is defined, locking in technical constraints prematurely.",
  },
  {
    icon: FlaskConical,
    title: "Pilots With No Path to Production",
    description:
      "A successful proof of concept often has no defined owner, budget, or architecture for scaling past it.",
  },
]

function BusinessChallengesSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            The Challenges We Solve
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Organizations rarely fail at AI because the technology doesn&apos;t
            work. They fail for reasons a structured strategy engagement is
            designed to prevent.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {CHALLENGES.map((challenge) => (
            <motion.div key={challenge.title} variants={slideUp} className="h-full">
              <TrustPillarCard
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { BusinessChallengesSection }

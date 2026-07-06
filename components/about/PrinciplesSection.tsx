"use client"

import { motion } from "framer-motion"
import { Eye, Lightbulb, Target, UserCheck, type LucideIcon } from "lucide-react"

import { PrincipleCard } from "@/components/about/PrincipleCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Principle {
  icon: LucideIcon
  title: string
  description: string
}

const PRINCIPLES: Principle[] = [
  {
    icon: UserCheck,
    title: "Practitioner-Led",
    description:
      "Every engagement is led by senior practitioners who have built and operated production AI systems, not delegated to junior teams.",
  },
  {
    icon: Target,
    title: "Outcome Over Hype",
    description:
      "We evaluate every AI opportunity against real business value, not novelty or industry trends.",
  },
  {
    icon: Eye,
    title: "Transparency by Default",
    description:
      "Clients see how decisions are made, what tradeoffs exist, and what a system can and cannot do.",
  },
  {
    icon: Lightbulb,
    title: "Pragmatic Innovation",
    description:
      "We adopt new AI capabilities deliberately, only where they create durable advantage.",
  },
]

function PrinciplesSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Our Principles
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            The operating philosophy that shapes how we think, decide, and
            work with every client.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {PRINCIPLES.map((principle) => (
            <motion.div key={principle.title} variants={slideUp}>
              <PrincipleCard
                icon={principle.icon}
                title={principle.title}
                description={principle.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { PrinciplesSection }

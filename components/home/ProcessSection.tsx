"use client"

import { motion } from "framer-motion"

import { ProcessStep } from "@/components/home/ProcessStep"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Step {
  number: string
  title: string
  description: string
}

const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Discover",
    description: "Business objectives, AI opportunities, and success metrics.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architecture, data strategy, governance, and AI planning.",
  },
  {
    number: "03",
    title: "Build",
    description: "Engineering, integrations, testing, and implementation.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Production rollout, monitoring, and enablement.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Continuous improvement, AI evaluation, and scaling.",
  },
]

function ProcessSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="md">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Our Delivery Process
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            ORXIO follows a structured, enterprise-ready approach to
            designing, deploying, and scaling AI solutions.
          </Text>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 flex flex-col"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.li key={step.number} variants={slideUp}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { ProcessSection }

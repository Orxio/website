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

const RESPONSE_STEPS: Step[] = [
  {
    number: "01",
    title: "We Review",
    description:
      "Every submission is reviewed by a senior practitioner within one business day.",
  },
  {
    number: "02",
    title: "We Schedule",
    description:
      "We reach out to schedule a focused discovery conversation at a time that works for you.",
  },
  {
    number: "03",
    title: "We Discuss",
    description:
      "A short, no-pressure conversation to understand your goals and explore whether we're a fit.",
  },
]

function ResponseExpectationSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="md">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            What Happens Next
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            A clear, low-pressure path from your first message to a
            scheduled conversation.
          </Text>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 flex flex-col"
        >
          {RESPONSE_STEPS.map((step, index) => (
            <motion.li key={step.number} variants={slideUp}>
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === RESPONSE_STEPS.length - 1}
              />
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { ResponseExpectationSection }

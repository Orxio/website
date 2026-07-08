"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface Principle {
  label: string
  description: string
}

const PRINCIPLES: Principle[] = [
  {
    label: "Business Before Models",
    description:
      "Every recommendation starts from a measurable business outcome, not a preferred technology.",
  },
  {
    label: "Vendor Neutral by Design",
    description:
      "Technology direction is shaped by your constraints, not a partner incentive.",
  },
  {
    label: "Governance From Day One",
    description:
      "Security, privacy, and compliance are treated as design inputs, not a later fix.",
  },
]

function ApproachSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-6"
        >
          <motion.div variants={slideUp} className="flex flex-col gap-4">
            <Heading as="h2" size="lg">
              The ORXIO Approach
            </Heading>
            <Text size="lg" className="max-w-prose text-muted-foreground">
              Technical depth without vendor affiliation — a recommendation
              shaped by your constraints and your business case, not by
              which platform we have an incentive to sell.
            </Text>
          </motion.div>

          <motion.ul variants={slideUp} className="flex flex-col gap-4">
            {PRINCIPLES.map((principle) => (
              <li key={principle.label} className="border-t border-border/60 pt-4">
                <Text as="span" size="md" className="font-semibold text-foreground">
                  {principle.label}
                </Text>
                <Text size="sm" className="mt-1 text-muted-foreground">
                  {principle.description}
                </Text>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </Section>
  )
}

export { ApproachSection }

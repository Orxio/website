"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import type { ServicePageContent } from "@/lib/services/types"
import { useMotionPreset } from "@/lib/motion"

type ApproachSectionProps = ServicePageContent["approach"]

function ApproachSection({ heading, description, principles }: ApproachSectionProps) {
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
              {heading}
            </Heading>
            <Text size="lg" className="max-w-prose text-muted-foreground">
              {description}
            </Text>
          </motion.div>

          <motion.ul variants={slideUp} className="flex flex-col gap-4">
            {principles.map((principle) => (
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

"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

function LeadershipSection() {
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
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.div variants={slideUp}>
            <Heading as="h2" size="lg">
              Senior-Led, Accountable Delivery
            </Heading>
          </motion.div>

          <motion.div variants={slideUp}>
            <Text size="lg" className="max-w-prose text-muted-foreground">
              ORXIO engagements are led by senior practitioners from the
              first conversation to production deployment. We believe
              accountability cannot be delegated, so the people who scope
              your engagement are the same people responsible for
              delivering it.
            </Text>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export { LeadershipSection }

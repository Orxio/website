"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Display } from "@/components/typography/Display"
import { Lead } from "@/components/typography/Lead"
import { Text } from "@/components/typography/Text"
import { Button } from "@/components/ui/button"
import { useMotionPreset } from "@/lib/motion"

function ServicesHero() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="md">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.div variants={slideUp}>
            <Text
              as="span"
              size="sm"
              className="font-medium tracking-widest text-primary uppercase"
            >
              Enterprise AI Services
            </Text>
          </motion.div>

          <motion.div variants={slideUp}>
            <Display as="h1" size="sm">
              AI Services Built for Enterprise Outcomes
            </Display>
          </motion.div>

          <motion.div variants={slideUp}>
            <Lead className="mx-auto">
              From strategy to production, ORXIO delivers the enterprise AI
              capabilities organizations need to move from experimentation to
              measurable business impact.
            </Lead>
          </motion.div>

          <motion.div variants={slideUp}>
            <Button render={<Link href="/contact" />} nativeButton={false}>
              Book a Strategy Call
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export { ServicesHero }

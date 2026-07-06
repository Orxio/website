"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Display } from "@/components/typography/Display"
import { Lead } from "@/components/typography/Lead"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

function AboutHero() {
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
              About ORXIO
            </Text>
          </motion.div>

          <motion.div variants={slideUp}>
            <Display as="h1" size="sm">
              Building Intelligent Enterprises
            </Display>
          </motion.div>

          <motion.div variants={slideUp}>
            <Lead className="mx-auto">
              ORXIO exists to help organizations move beyond experimentation
              and build AI systems that are secure, scalable, and built to
              last.
            </Lead>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export { AboutHero }

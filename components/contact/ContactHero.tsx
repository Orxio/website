"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Display } from "@/components/typography/Display"
import { Lead } from "@/components/typography/Lead"
import { Text } from "@/components/typography/Text"
import { Button } from "@/components/ui/button"
import { useMotionPreset } from "@/lib/motion"

function ContactHero() {
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
              Contact ORXIO
            </Text>
          </motion.div>

          <motion.div variants={slideUp}>
            <Display as="h1" size="sm">
              Let&apos;s Discuss Your AI Strategy
            </Display>
          </motion.div>

          <motion.div variants={slideUp}>
            <Lead className="mx-auto">
              Tell us about your organization and where you are in your AI
              journey. A senior practitioner will follow up to schedule a
              focused discovery conversation, not a sales pitch.
            </Lead>
          </motion.div>

          <motion.div variants={slideUp}>
            <Button
              render={<a href="#contact-form" />}
              nativeButton={false}
            >
              Start the Conversation
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export { ContactHero }

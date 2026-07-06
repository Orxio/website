"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { FAQS } from "@/components/contact/faq-data"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { FAQItem } from "@/components/services/FAQItem"
import { useMotionPreset } from "@/lib/motion"

function FAQSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="md">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Frequently Asked Questions
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Answers to common questions about getting in touch with ORXIO.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 flex flex-col"
        >
          {FAQS.map((faq) => (
            <motion.div key={faq.question} variants={slideUp}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { FAQSection }

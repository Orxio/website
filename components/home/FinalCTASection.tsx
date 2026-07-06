"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Button } from "@/components/ui/button"
import { useMotionPreset } from "@/lib/motion"

const TRUST_STATEMENT_ITEMS = [
  "Discovery focused",
  "No obligation",
  "Enterprise ready",
]

function FinalCTASection() {
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
          className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-muted/40 px-6 py-16 text-center sm:px-12 sm:py-20"
        >
          <motion.div variants={slideUp}>
            <Heading as="h2" size="lg">
              Ready to Build Your AI Strategy?
            </Heading>
          </motion.div>

          <motion.div variants={slideUp}>
            <Text size="lg" className="max-w-prose text-muted-foreground">
              Whether you&apos;re exploring AI for the first time or scaling
              enterprise AI initiatives, ORXIO helps organizations move from
              ideas to measurable business outcomes.
            </Text>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button render={<Link href="/contact" />} nativeButton={false}>
              Book a Strategy Call
            </Button>
            <Button
              render={<Link href="/services" />}
              nativeButton={false}
              variant="outline"
            >
              Explore Our Services
            </Button>
          </motion.div>

          <motion.ul
            variants={slideUp}
            aria-label="Engagement highlights"
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
          >
            {TRUST_STATEMENT_ITEMS.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                <Text as="span" size="sm" className="text-muted-foreground">
                  {item}
                </Text>
                {index < TRUST_STATEMENT_ITEMS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground/50"
                  >
                    &bull;
                  </span>
                )}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </Section>
  )
}

export { FinalCTASection }

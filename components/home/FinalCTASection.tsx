"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Button } from "@/components/ui/button"
import { useMotionPreset } from "@/lib/motion"

const TRUST_ITEMS = ["Strategy", "Architecture", "Delivery"]

function FinalCTASection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container className="max-w-[900px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-background/70 px-6 py-16 text-center shadow-xl backdrop-blur-lg sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,var(--primary)_0%,transparent_70%)] opacity-[0.08]"
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div variants={slideUp}>
              <Text
                as="span"
                size="sm"
                className="font-medium tracking-widest text-primary uppercase"
              >
                Ready to Build Enterprise AI?
              </Text>
            </motion.div>

            <motion.div variants={slideUp}>
              <Heading as="h2" size="lg">
                Let&apos;s Design Your AI Strategy Together
              </Heading>
            </motion.div>

            <motion.div variants={slideUp}>
              <Text size="lg" className="max-w-prose text-muted-foreground">
                Whether you&apos;re exploring your first AI initiative or
                scaling enterprise-wide automation, ORXIO helps transform
                ideas into production-ready AI systems that deliver
                measurable business outcomes.
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
                className="border-foreground/15 transition-all duration-300 ease-out hover:-translate-y-px hover:border-foreground/30 hover:bg-foreground/5"
              >
                Explore Services
              </Button>
            </motion.div>

            <motion.ul
              variants={slideUp}
              aria-label="Engagement pillars"
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {TRUST_ITEMS.map((item) => (
                <li key={item}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground transition-colors duration-300 ease-out hover:border-foreground/25 hover:text-foreground/80">
                    <Check aria-hidden="true" className="size-3.5" />
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export { FinalCTASection }

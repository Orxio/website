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

interface ServiceHeroProps {
  eyebrow: string
  headline: string
  description: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  /** Short capability labels shown as a muted pill strip under the CTAs. */
  capabilities?: string[]
}

/** Parameterized hero for individual service pages — reuses ServicesHero's exact structure with per-service content. */
function ServiceHero({
  eyebrow,
  headline,
  description,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  capabilities,
}: ServiceHeroProps) {
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
              {eyebrow}
            </Text>
          </motion.div>

          <motion.div variants={slideUp}>
            <Display as="h1" size="sm">
              {headline}
            </Display>
          </motion.div>

          <motion.div variants={slideUp}>
            <Lead className="mx-auto">{description}</Lead>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button
              render={<Link href={primaryCtaHref} />}
              nativeButton={false}
              className="shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
            >
              {primaryCtaLabel}
            </Button>
            <Button
              render={<Link href={secondaryCtaHref} />}
              nativeButton={false}
              variant="outline"
              className="border-foreground/15 transition-all duration-300 ease-out hover:-translate-y-px hover:border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
            >
              {secondaryCtaLabel}
            </Button>
          </motion.div>

          {capabilities && capabilities.length > 0 && (
            <motion.ul
              variants={slideUp}
              aria-label="Capabilities"
              className="flex flex-wrap items-center justify-center gap-2"
            >
              {capabilities.map((capability) => (
                <li key={capability}>
                  <span className="inline-flex items-center rounded-full border border-border/50 px-2.5 py-1 text-[0.7rem] text-muted-foreground transition-colors duration-300 ease-out hover:border-foreground/25 hover:text-foreground/80">
                    {capability}
                  </span>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </Container>
    </Section>
  )
}

export { ServiceHero }

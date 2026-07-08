"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { HeroIllustration } from "@/components/home/HeroIllustration"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Display } from "@/components/typography/Display"
import { Lead } from "@/components/typography/Lead"
import { Text } from "@/components/typography/Text"
import { Button } from "@/components/ui/button"
import { useMotionPreset } from "@/lib/motion"

const TRUST_ITEMS = [
  "Enterprise AI",
  "AI Agents",
  "Automation",
  "Data Platforms",
  "Custom AI Applications",
]

function Hero() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")
  const fade = useMotionPreset("fade")

  return (
    <Section size="lg" className="overflow-hidden pt-[4.8rem] sm:pt-[6.4rem]">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-start gap-6"
          >
            <motion.div variants={slideUp}>
              <Text
                as="span"
                size="sm"
                className="font-medium tracking-widest text-primary uppercase"
              >
                Enterprise AI Consulting &amp; AI Products
              </Text>
            </motion.div>

            <motion.div variants={slideUp}>
              <Display as="h1" size="md">
                Design. Build. Scale. Enterprise AI.
              </Display>
            </motion.div>

            <motion.div variants={slideUp}>
              <Lead>
                ORXIO helps organizations design, build, and scale AI
                solutions through Enterprise AI Consulting, AI Agents,
                Intelligent Automation, Data Platforms, and Custom AI
                Applications.
              </Lead>
            </motion.div>

            <motion.div
              variants={slideUp}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                className="shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg"
              >
                Book a Strategy Call
              </Button>
              <Button
                render={<Link href="/solutions" />}
                nativeButton={false}
                variant="outline"
                className="border-foreground/15 transition-all duration-300 ease-out hover:border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
              >
                Explore Our Solutions
              </Button>
            </motion.div>

            <motion.ul
              variants={slideUp}
              aria-label="Trusted focus areas"
              className="flex flex-wrap gap-x-2 gap-y-1"
            >
              {TRUST_ITEMS.map((item, index) => (
                <li key={item} className="flex items-center gap-2">
                  <Text as="span" size="sm" className="text-muted-foreground">
                    {item}
                  </Text>
                  {index < TRUST_ITEMS.length - 1 && (
                    <span aria-hidden="true" className="text-muted-foreground/50">
                      &bull;
                    </span>
                  )}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fade}
            className="lg:-translate-x-4 lg:-translate-y-6"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export { Hero }

"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useMotionPreset } from "@/lib/motion"

const PANELS = [
  {
    title: "Mission",
    description:
      "To help enterprises translate AI ambition into measurable, responsible, and lasting business outcomes.",
  },
  {
    title: "Vision",
    description:
      "A future where intelligent systems are a trusted, integral part of how every enterprise operates, not a separate experiment running alongside the business.",
  },
]

function MissionVisionSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Mission &amp; Vision
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            What drives ORXIO, and the future we&apos;re building toward.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {PANELS.map((panel) => (
            <motion.div key={panel.title} variants={slideUp}>
              <Card className="h-full">
                <CardHeader>
                  <Heading as="h3" size="xs">
                    {panel.title}
                  </Heading>
                </CardHeader>
                <CardContent>
                  <Text size="lg" className="text-muted-foreground">
                    {panel.description}
                  </Text>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { MissionVisionSection }

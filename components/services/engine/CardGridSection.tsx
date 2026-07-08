"use client"

import { motion } from "framer-motion"

import { TrustPillarCard } from "@/components/home/TrustPillarCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { resolveIcon } from "@/lib/services/icons"
import type { CardGridSectionContent } from "@/lib/services/types"
import { useMotionPreset } from "@/lib/motion"
import { cn } from "@/lib/utils"

const COLUMN_CLASSES: Record<CardGridSectionContent["columns"], string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

/** Generic Section→Container→header→grid→TrustPillarCard shell — replaces the previously duplicated per-purpose section components. */
function CardGridSection({
  id,
  heading,
  description,
  items,
  columns,
}: CardGridSectionContent) {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section id={id} size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            {heading}
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            {description}
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className={cn("mt-16 grid grid-cols-1 gap-6", COLUMN_CLASSES[columns])}
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={slideUp} className="h-full">
              <TrustPillarCard
                icon={resolveIcon(item.icon)}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { CardGridSection }

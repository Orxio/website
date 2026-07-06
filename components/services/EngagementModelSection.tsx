"use client"

import { motion } from "framer-motion"
import { Compass, Hammer, Handshake, type LucideIcon } from "lucide-react"

import { EngagementCard } from "@/components/services/EngagementCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface EngagementModel {
  icon: LucideIcon
  title: string
  description: string
}

const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    icon: Compass,
    title: "Strategy Sprint",
    description:
      "A fixed-scope discovery engagement to identify high-value AI opportunities, align stakeholders, and define a clear roadmap.",
  },
  {
    icon: Hammer,
    title: "Project Delivery",
    description:
      "End-to-end design, build, and deployment of a defined AI solution, from architecture through production rollout.",
  },
  {
    icon: Handshake,
    title: "Managed AI Partnership",
    description:
      "Ongoing optimization, governance, and scaling support as your AI systems mature and expand across the business.",
  },
]

function EngagementModelSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Engagement Models
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Choose the engagement model that matches where you are in your AI
            journey, from early discovery to long-term managed partnership.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {ENGAGEMENT_MODELS.map((model) => (
            <motion.div key={model.title} variants={slideUp}>
              <EngagementCard
                icon={model.icon}
                title={model.title}
                description={model.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { EngagementModelSection }

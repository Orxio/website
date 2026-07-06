"use client"

import { motion } from "framer-motion"
import { Calendar, Handshake, MessageCircle, type LucideIcon } from "lucide-react"

import { EngagementTypeCard } from "@/components/contact/EngagementTypeCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface EngagementOption {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

const ENGAGEMENT_OPTIONS: EngagementOption[] = [
  {
    icon: Calendar,
    title: "Strategy Call",
    description:
      "Ready to explore a specific AI initiative? Book time with our team to discuss scope, feasibility, and next steps.",
    href: "#contact-form",
  },
  {
    icon: Handshake,
    title: "Partnership Inquiry",
    description:
      "Interested in partnering with ORXIO or exploring a joint opportunity? We'd like to hear from you.",
    href: "#contact-form",
  },
  {
    icon: MessageCircle,
    title: "General Inquiry",
    description:
      "Have a question about our services, industries, or approach? Reach out and we'll point you in the right direction.",
    href: "#contact-form",
  },
]

function EngagementOptionsSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            How Can We Help?
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            Choose the option that best matches why you&apos;re reaching out,
            or skip ahead to the form below.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {ENGAGEMENT_OPTIONS.map((option) => (
            <motion.div key={option.title} variants={slideUp}>
              <EngagementTypeCard
                icon={option.icon}
                title={option.title}
                description={option.description}
                href={option.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { EngagementOptionsSection }

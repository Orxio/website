"use client"

import { motion } from "framer-motion"

import { TechnologyCard } from "@/components/home/TechnologyCard"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface TechnologyCategory {
  title: string
  items: string[]
}

const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    title: "AI Models",
    items: ["OpenAI", "Anthropic", "Google Gemini"],
  },
  {
    title: "AI Frameworks",
    items: ["LangChain", "LangGraph", "Model Context Protocol (MCP)"],
  },
  {
    title: "Cloud",
    items: ["Microsoft Azure", "Amazon Web Services", "Google Cloud"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Pinecone", "Databricks"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript"],
  },
]

function TechnologySection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container>
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            Trusted AI Technologies
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            We design and deliver enterprise AI solutions using modern,
            production-ready platforms and frameworks.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {TECHNOLOGY_CATEGORIES.map((category) => (
            <motion.div key={category.title} variants={slideUp}>
              <TechnologyCard title={category.title} items={category.items} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { TechnologySection }

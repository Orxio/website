"use client"

import { motion } from "framer-motion"
import {
  Cloud,
  Container,
  Database,
  GitBranch,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react"

import { TechnologyCard } from "@/components/home/TechnologyCard"
import { Container as LayoutContainer } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"

interface TechnologyCategory {
  icon: LucideIcon
  title: string
  description: string
  items: string[]
}

const TECHNOLOGY_CATEGORIES: TechnologyCategory[] = [
  {
    icon: Layers,
    title: "Foundation Models",
    description:
      "Frontier language models powering reasoning, generation, and enterprise copilots.",
    items: ["OpenAI", "Anthropic", "Gemini", "Llama"],
  },
  {
    icon: GitBranch,
    title: "AI Frameworks",
    description:
      "Orchestration and protocol layers for building reliable, multi-step AI systems.",
    items: ["LangChain", "LangGraph", "MCP"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    description:
      "Enterprise-grade infrastructure for secure, scalable AI deployment.",
    items: ["Azure", "AWS", "Google Cloud"],
  },
  {
    icon: Database,
    title: "Data Platforms",
    description:
      "Modern data and vector infrastructure for analytics, search, and retrieval.",
    items: ["Databricks", "Snowflake", "PostgreSQL", "Pinecone"],
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "Workflow and integration tooling that connects AI to core business systems.",
    items: ["n8n", "REST APIs", "Webhooks"],
  },
  {
    icon: Container,
    title: "DevOps",
    description:
      "Production-grade tooling for shipping, scaling, and operating AI reliably.",
    items: ["Docker", "Kubernetes", "GitHub Actions", "Vercel"],
  },
]

function TechnologySection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <LayoutContainer size="lg">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            The Enterprise AI Technology Stack
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            We design and deliver enterprise AI solutions on a curated,
            production-ready stack — grouped by the capability each layer
            provides.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {TECHNOLOGY_CATEGORIES.map((category) => (
            <motion.div key={category.title} variants={slideUp} className="h-full">
              <TechnologyCard
                icon={category.icon}
                title={category.title}
                description={category.description}
                items={category.items}
              />
            </motion.div>
          ))}
        </motion.div>
      </LayoutContainer>
    </Section>
  )
}

export { TechnologySection }

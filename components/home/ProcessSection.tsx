"use client"

import { motion } from "framer-motion"

import { ProcessStep } from "@/components/home/ProcessStep"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { useMotionPreset } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface Step {
  number: string
  title: string
  description: string
  capabilities: [string, string, string]
}

const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, assess AI readiness, and identify high-value opportunities.",
    capabilities: ["Business Discovery", "AI Readiness", "Opportunity Assessment"],
  },
  {
    number: "02",
    title: "Design",
    description:
      "Define AI strategy, architect the solution, and build the data foundation.",
    capabilities: ["AI Strategy", "Solution Architecture", "Data Foundation"],
  },
  {
    number: "03",
    title: "Build",
    description:
      "Engineer AI agents, automation, and enterprise-grade applications.",
    capabilities: ["AI Agents", "Automation", "Enterprise Applications"],
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Ship securely, integrate with core systems, and monitor in production.",
    capabilities: ["Secure Deployment", "Integration", "Monitoring"],
  },
  {
    number: "05",
    title: "Optimize",
    description: "Measure impact, improve continuously, and scale what works.",
    capabilities: ["Analytics", "Continuous Improvement", "Scale"],
  },
]

function ProcessSection() {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <Section size="lg">
      <Container size="lg">
        <div className="flex flex-col items-start gap-4">
          <Heading as="h2" size="lg">
            The Enterprise AI Delivery Framework
          </Heading>
          <Text size="lg" className="max-w-prose text-muted-foreground">
            A structured, enterprise-ready framework for designing,
            building, and scaling AI solutions from first workshop to
            production at scale.
          </Text>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-16 grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-0"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              variants={slideUp}
              className={cn(
                "relative",
                index > 0 &&
                  "lg:before:absolute lg:before:top-11 lg:before:-left-6 lg:before:h-px lg:before:w-6 lg:before:bg-border lg:before:content-['']"
              )}
            >
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                capabilities={step.capabilities}
              />
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { ProcessSection }

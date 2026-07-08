"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { resolveIcon } from "@/lib/services/icons"
import { useMotionPreset } from "@/lib/motion"
import type { RelatedServiceLink } from "@/lib/services/types"

interface RelatedServicesJourneyProps {
  items: RelatedServiceLink[]
}

/** Guided question → connector → card flow, ported verbatim from the original hand-built Enterprise AI Strategy section. */
function RelatedServicesJourney({ items }: RelatedServicesJourneyProps) {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-3"
    >
      {items.map((step, index) => {
        const Icon = resolveIcon(step.icon)
        return (
          <motion.li
            key={step.slug}
            variants={slideUp}
            className="flex w-full flex-col items-center gap-3"
          >
            {index > 0 && (
              <ChevronDown
                aria-hidden="true"
                className="size-4 text-muted-foreground/40"
              />
            )}
            {step.question && (
              <Text size="sm" className="text-center text-muted-foreground">
                {step.question}
              </Text>
            )}
            <ChevronDown
              aria-hidden="true"
              className="size-4 text-muted-foreground/40"
            />
            <Link
              href={`/services/${step.slug}`}
              className="group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-card to-card/70 p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

              <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-sm transition-colors duration-300 ease-out group-hover:border-foreground/20">
                <Icon aria-hidden="true" className="size-6" />
              </div>
              <div className="relative flex flex-col gap-1">
                <Heading as="h3" size="xs">
                  {step.title}
                </Heading>
                <Text size="sm" className="text-muted-foreground">
                  {step.description}
                </Text>
              </div>
              <ArrowRight
                aria-hidden="true"
                className="relative ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:text-primary"
              />
            </Link>
          </motion.li>
        )
      })}
    </motion.ol>
  )
}

export { RelatedServicesJourney }

"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Heading } from "@/components/typography/Heading"
import { Text } from "@/components/typography/Text"
import { resolveIcon } from "@/lib/services/icons"
import { useMotionPreset } from "@/lib/motion"
import type { RelatedServiceLink } from "@/lib/services/types"

interface RelatedServicesGridProps {
  items: RelatedServiceLink[]
}

/** Plain 3-up cross-sell grid — the alternative to the guided journey, for services without a natural linear next-step narrative. */
function RelatedServicesGrid({ items }: RelatedServicesGridProps) {
  const stagger = useMotionPreset("stagger")
  const slideUp = useMotionPreset("slideUp")

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
    >
      {items.map((item) => {
        const Icon = resolveIcon(item.icon)
        return (
          <motion.div key={item.slug} variants={slideUp} className="h-full">
            <Link
              href={`/services/${item.slug}`}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-card to-card/70 p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />

              <div className="relative flex flex-1 flex-col gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl border border-border/40 bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-sm transition-colors duration-300 ease-out group-hover:border-foreground/20">
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Heading as="h3" size="xs">
                    {item.title}
                  </Heading>
                  <Text size="sm" className="text-muted-foreground">
                    {item.description}
                  </Text>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors duration-300 ease-out group-hover:text-primary">
                  Learn more
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export { RelatedServicesGrid }

"use client"

import { useReducedMotion } from "framer-motion"
import type { Transition, Variants } from "framer-motion"

const EASE: Transition["ease"] = [0.16, 1, 0.3, 1]
const DURATION = 0.5
const DISTANCE = 24

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION, ease: EASE } },
}

const slideUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
}

const slideDown: Variants = {
  hidden: { opacity: 0, y: -DISTANCE },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

const reduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

const motionPresets = { fade, slideUp, slideDown, stagger } as const

type MotionPresetName = keyof typeof motionPresets

/** Returns the requested preset, swapped for a subtle opacity-only fallback when the user prefers reduced motion. */
function useMotionPreset(name: MotionPresetName): Variants {
  const prefersReducedMotion = useReducedMotion()
  if (prefersReducedMotion) {
    return name === "stagger" ? stagger : reduced
  }
  return motionPresets[name]
}

export { fade, slideUp, slideDown, stagger, useMotionPreset }
export type { MotionPresetName }

"use client"

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef, type PointerEvent } from "react"

import { useMotionPreset } from "@/lib/motion"

const HERO_IMAGE_SRC = "/brand/hero-illustration-v2.png"

const EDGE_MASK =
  "radial-gradient(ellipse 68% 68% at 50% 50%, black 52%, transparent 100%)"

/** Premium hero artwork — a single image blended into the page with glow, an edge mask, and subtle motion. */
function HeroIllustration() {
  const fade = useMotionPreset("fade")
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.6 })
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20, mass: 0.6 })
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-8, 8])
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-8, 8])

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) return
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  function handlePointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fade}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[59.9rem] lg:max-w-[67.3rem]"
    >
      {/* premium blurred background glow */}
      <div className="pointer-events-none absolute inset-[-7%] -z-10 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-[30%] -z-10 rounded-full bg-foreground/10 blur-2xl" />

      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative"
      >
        {/* mouse parallax layer */}
        <motion.div
          style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
          className="relative"
        >
          {/* ambient float / drift / rotation / breathing layer */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    x: [0, 6, -4, 0],
                    y: [0, -12, 4, 0],
                    rotate: [0, 0.8, -0.6, 0],
                    scale: [1, 1.02, 1.01, 1],
                  }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                    x: { duration: 13, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                  }
            }
            className="relative aspect-[3/2] w-full"
            style={{
              WebkitMaskImage: EDGE_MASK,
              maskImage: EDGE_MASK,
            }}
          >
            <Image
              src={HERO_IMAGE_SRC}
              alt=""
              fill
              sizes="(min-width: 1024px) 1079px, (min-width: 640px) 958px, 90vw"
              quality={90}
              className="object-contain drop-shadow-2xl"
            />
            {/* glass reflection overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export { HeroIllustration }

"use client"

import { motion } from "framer-motion"

import { useMotionPreset } from "@/lib/motion"

interface Node {
  id: string
  cx: number
  cy: number
  r: number
  colorClass: string
}

const NODES: Node[] = [
  { id: "n1", cx: 240, cy: 120, r: 7, colorClass: "fill-primary" },
  { id: "n2", cx: 120, cy: 200, r: 5, colorClass: "fill-chart-2" },
  { id: "n3", cx: 340, cy: 190, r: 6, colorClass: "fill-chart-3" },
  { id: "n4", cx: 200, cy: 280, r: 4, colorClass: "fill-chart-4" },
  { id: "n5", cx: 320, cy: 320, r: 5, colorClass: "fill-chart-5" },
  { id: "n6", cx: 100, cy: 320, r: 4, colorClass: "fill-primary" },
  { id: "n7", cx: 380, cy: 300, r: 3, colorClass: "fill-chart-2" },
]

const CONNECTIONS: [string, string][] = [
  ["n1", "n2"],
  ["n1", "n3"],
  ["n2", "n4"],
  ["n3", "n5"],
  ["n4", "n5"],
  ["n2", "n6"],
  ["n3", "n7"],
  ["n5", "n7"],
]

function findNode(id: string) {
  return NODES.find((node) => node.id === id)!
}

/** Decorative abstract node network — no photography, no literal AI iconography. */
function HeroIllustration() {
  const fade = useMotionPreset("fade")

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fade}
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <div className="absolute inset-0 rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-foreground/[0.04] via-transparent to-primary/[0.06] shadow-2xl backdrop-blur-xl" />
      <div className="absolute inset-6 rounded-[2rem] border border-border/40" />

      <svg
        viewBox="0 0 480 480"
        className="relative h-full w-full"
        fill="none"
      >
        <defs>
          <radialGradient id="hero-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" style={{ stopColor: "var(--primary)" }} stopOpacity={0.16} />
            <stop offset="100%" style={{ stopColor: "var(--primary)" }} stopOpacity={0} />
          </radialGradient>
          <pattern
            id="hero-grid"
            width={40}
            height={40}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={1} cy={1} r={1} className="fill-border" />
          </pattern>
        </defs>

        <rect width="480" height="480" fill="url(#hero-grid)" opacity={0.5} />
        <circle cx="240" cy="240" r="220" fill="url(#hero-glow)" />

        <rect
          x="150"
          y="70"
          width="150"
          height="150"
          rx="24"
          className="stroke-border"
          strokeOpacity={0.5}
          transform="rotate(12 225 145)"
        />

        {CONNECTIONS.map(([fromId, toId]) => {
          const from = findNode(fromId)
          const to = findNode(toId)
          return (
            <line
              key={`${fromId}-${toId}`}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              className="stroke-foreground"
              strokeOpacity={0.12}
              strokeWidth={1.5}
            />
          )
        })}

        {NODES.map((node) => (
          <circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            className={node.colorClass}
          />
        ))}
      </svg>
    </motion.div>
  )
}

export { HeroIllustration }

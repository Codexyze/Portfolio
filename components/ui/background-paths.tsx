"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 8 * position} -${189 + i * 8}C-${
      380 - i * 8 * position
    } -${189 + i * 8} -${312 - i * 8 * position} ${216 - i * 8} ${
      152 - i * 8 * position
    } ${343 - i * 8}C${616 - i * 8 * position} ${470 - i * 8} ${
      684 - i * 8 * position
    } ${875 - i * 8} ${684 - i * 8 * position} ${875 - i * 8}`,
    width: 1 + i * 0.05,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={path.width}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + path.id * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: path.id * 0.2,
            }}
          />
        ))}

        {/* Add some floating dots for extra visual interest */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={50 + i * 60}
            cy={100 + (i % 3) * 80}
            r="2"
            fill="rgba(255,255,255,0.2)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BackgroundPaths() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 8 * position} -${189 + i * 8}C-${
      380 - i * 8 * position
    } -${189 + i * 8} -${312 - i * 8 * position} ${216 - i * 8} ${
      152 - i * 8 * position
    } ${343 - i * 8}C${616 - i * 8 * position} ${470 - i * 8} ${
      684 - i * 8 * position
    } ${875 - i * 8} ${684 - i * 8 * position} ${875 - i * 8}`,
    width: 1 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgba(37, 99, 235, 0.15)"
            strokeWidth={path.width}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 6 + path.id * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: path.id * 0.15,
            }}
          />
        ))}

        {/* Add floating particles */}
        {Array.from({ length: 10 }, (_, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={50 + i * 70}
            cy={100 + (i % 3) * 70}
            r="1.5"
            fill="rgba(37, 99, 235, 0.4)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}

        {/* Add subtle connecting lines */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={i * 120}
            y1={80}
            x2={i * 120 + 150}
            y2={200}
            stroke="rgba(37, 99, 235, 0.2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BackgroundPaths() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-pitch-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Add subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Add floating particles for depth */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

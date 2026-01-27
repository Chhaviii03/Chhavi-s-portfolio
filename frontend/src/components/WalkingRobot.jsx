import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WalkingRobot({ direction = 'right' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const startX = direction === 'right' ? -120 : window.innerWidth + 120
  const endX = direction === 'right' ? window.innerWidth + 120 : -120

  return (
    <div ref={ref} className="relative w-full h-16 overflow-hidden py-4">
      {isInView && (
        <motion.div
          variants={robotVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/2 -translate-y-1/2"
        >
          <motion.div
            variants={walkVariants}
            animate="animate"
            className="text-pink-primary"
          >
            {/* Simple robot SVG */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Robot body */}
              <rect x="12" y="10" width="16" height="18" rx="2" fill="currentColor" opacity="0.9" />
              {/* Robot head */}
              <rect x="14" y="6" width="12" height="8" rx="1" fill="currentColor" opacity="0.9" />
              {/* Eyes */}
              <circle cx="18" cy="10" r="1.5" fill="#000000" />
              <circle cx="22" cy="10" r="1.5" fill="#000000" />
              {/* Legs */}
              <rect x="15" y="28" width="3" height="6" fill="currentColor" opacity="0.9" />
              <rect x="22" y="28" width="3" height="6" fill="currentColor" opacity="0.9" />
              {/* Arms */}
              <rect x="8" y="12" width="4" height="8" rx="1" fill="currentColor" opacity="0.9" />
              <rect x="28" y="12" width="4" height="8" rx="1" fill="currentColor" opacity="0.9" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

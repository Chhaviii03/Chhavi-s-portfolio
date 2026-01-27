import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Stable positions/sizes so particles don’t jump on re-render — 4 particles
const PARTICLES = [
  { left: '12%', size: 2.5, duration: 52, color: 'rgba(255, 77, 141, 0.14)' },
  { left: '34%', size: 3, duration: 61, color: 'rgba(255, 160, 200, 0.12)' },
  { left: '58%', size: 2, duration: 47, color: 'rgba(255, 77, 141, 0.15)' },
  { left: '81%', size: 3.5, duration: 68, color: 'rgba(255, 120, 170, 0.13)' },
]

const BackgroundParticles = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (prefersReducedMotion) return null

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -2 }}
      aria-hidden
    >
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            willChange: 'transform',
          }}
          animate={{
            y: ['100vh', '-10vh'],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default BackgroundParticles

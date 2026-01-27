import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const BackgroundAnimation = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        animate={{
          x: [0, 140, -120, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'rgba(255, 77, 141, 0.18)',
          filter: 'blur(90px)',
        }}
      />

      {/* Orb 2 */}
      <motion.div
        animate={{
          x: [0, -160, 120, 0],
          y: [0, 140, -100, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '60%',
          right: '20%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'rgba(255, 77, 141, 0.15)',
          filter: 'blur(90px)',
        }}
      />

      {/* Orb 3 */}
      <motion.div
        animate={{
          x: [0, 120, -140, 0],
          y: [0, -100, 120, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '45%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'rgba(255, 77, 141, 0.12)',
          filter: 'blur(90px)',
        }}
      />
    </div>
  )
}

export default BackgroundAnimation

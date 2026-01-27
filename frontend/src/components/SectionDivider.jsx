import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const SectionDivider = ({ direction = 'right' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* No background text - robot only */}
      </div>
    )
  }

  const robotVariants = {
    initial: {
      x: direction === 'right' ? '-150%' : '150%',
    },
    animate: {
      x: direction === 'right' ? '150%' : '-150%',
      transition: {
        duration: 8,
        ease: 'linear',
      },
    },
  }

  const walkVariants = {
    animate: {
      y: [0, -2, 0, -2, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div 
      ref={ref} 
      className="relative w-full h-32 overflow-visible flex items-center justify-center"
      style={{ zIndex: 10 }}
    >
      {/* Premium Robot */}
      {isInView && (
        <motion.div
          variants={robotVariants}
          initial="initial"
          animate="animate"
          className="absolute"
          style={{ 
            zIndex: 20,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <motion.div
            variants={walkVariants}
            animate="animate"
            style={{
              filter: 'drop-shadow(0 0 16px rgba(255, 77, 141, 0.5))',
            }}
          >
            {/* Premium Minimal Robot SVG */}
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Robot Head - Clean rounded square */}
              <rect
                x="16"
                y="10"
                width="24"
                height="20"
                rx="3"
                fill="#ff4d8d"
              />
              
              {/* Eyes - Minimal dots */}
              <circle cx="24" cy="20" r="2" fill="#000000" />
              <circle cx="32" cy="20" r="2" fill="#000000" />
              
              {/* Body - Main rectangle */}
              <rect
                x="14"
                y="30"
                width="28"
                height="22"
                rx="2"
                fill="#ff4d8d"
              />
              
              {/* Left Arm */}
              <rect
                x="6"
                y="34"
                width="8"
                height="3"
                rx="1.5"
                fill="#ff4d8d"
              />
              
              {/* Right Arm */}
              <rect
                x="42"
                y="34"
                width="8"
                height="3"
                rx="1.5"
                fill="#ff4d8d"
              />
              
              {/* Left Leg */}
              <rect
                x="18"
                y="52"
                width="5"
                height="4"
                rx="1"
                fill="#ff4d8d"
              />
              
              {/* Right Leg */}
              <rect
                x="33"
                y="52"
                width="5"
                height="4"
                rx="1"
                fill="#ff4d8d"
              />
              
              {/* Subtle accent line */}
              <line
                x1="20"
                y1="38"
                x2="36"
                y2="38"
                stroke="#000000"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default SectionDivider


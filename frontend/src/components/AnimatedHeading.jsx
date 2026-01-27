import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const AnimatedHeading = ({ text, direction = 'left', className = '', onAnimationComplete }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Split text into characters, preserving spaces
  const characters = text.split('')

  if (prefersReducedMotion) {
    return (
      <h2 ref={ref} className={className}>
        {text}
      </h2>
    )
  }

  // Direction mapping:
  // direction="right" means robot goes left→right, heading reveals left→right (normal order)
  // direction="left" means robot goes right→left, heading reveals right→left (reverse order)
  const isReverse = direction === 'left'

  // Calculate total animation duration
  useEffect(() => {
    if (isInView && !prefersReducedMotion && !animationComplete) {
      const totalDuration = characters.length * 0.06 + 0.5 // last delay + duration
      const timer = setTimeout(() => {
        setAnimationComplete(true)
        if (onAnimationComplete) {
          onAnimationComplete()
        }
      }, totalDuration * 1000)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, prefersReducedMotion, animationComplete, characters.length, onAnimationComplete])

  const letterVariants = {
    hidden: {
      opacity: 0,
      x: isReverse ? 20 : -20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  // For reverse (right→left), we reverse the array but display in original order
  const displayChars = isReverse ? [...characters].reverse() : characters

  return (
    <h2 ref={ref} className={className}>
      {characters.map((char, index) => {
        // Calculate stagger index based on direction
        const staggerIndex = isReverse ? characters.length - 1 - index : index
        
        return (
          <motion.span
            key={`${index}-${char}`}
            custom={staggerIndex}
            variants={letterVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        )
      })}
    </h2>
  )
}

export default AnimatedHeading


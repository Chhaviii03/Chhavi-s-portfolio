import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ROBOT_SVG = (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="10" width="24" height="20" rx="3" fill="#ff4d8d" />
    <circle cx="24" cy="20" r="2" fill="#000000" />
    <circle cx="32" cy="20" r="2" fill="#000000" />
    <rect x="14" y="30" width="28" height="22" rx="2" fill="#ff4d8d" />
    <rect x="6" y="34" width="8" height="3" rx="1.5" fill="#ff4d8d" />
    <rect x="42" y="34" width="8" height="3" rx="1.5" fill="#ff4d8d" />
    <rect x="18" y="52" width="5" height="4" rx="1" fill="#ff4d8d" />
    <rect x="33" y="52" width="5" height="4" rx="1" fill="#ff4d8d" />
    <line x1="20" y1="38" x2="36" y2="38" stroke="#000000" strokeWidth="0.5" opacity="0.2" />
  </svg>
)

const SectionIntro = ({
  sectionRef,
  title,
  introText,
  onAnimationComplete,
}) => {
  const containerRef = useRef(null)
  const robotRef = useRef(null)
  const isSectionInView = useInView(sectionRef ?? containerRef, { margin: '-100px 0px -100px 0px', threshold: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const handler = (e) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (!isSectionInView) hasAnimatedRef.current = false
  }, [isSectionInView])

  useEffect(() => {
    if (isSectionInView) onAnimationComplete?.()
  }, [isSectionInView, onAnimationComplete])

  useEffect(() => {
    if (!isSectionInView || prefersReducedMotion || !robotRef.current) return
    if (hasAnimatedRef.current) return
    hasAnimatedRef.current = true

    const node = robotRef.current
    const run = async () => {
      const { animate } = await import('framer-motion')
      await animate(node, { x: '50vw', y: 0 }, { duration: 0 })
      await animate(node, { x: 0 }, { duration: 1.7, ease: 'linear' })
      await animate(node, { y: [0, -14, 0] }, { duration: 0.28, ease: 'easeOut' })
      await animate(node, { x: '-50vw' }, { duration: 1.7, ease: 'linear' })
    }
    run()
  }, [isSectionInView, prefersReducedMotion])

  return (
    <div ref={containerRef} className="relative w-full pb-8">
      {/* Divider line — at very top of section, fades with section visibility */}
      <div
        className="absolute left-0 right-0 top-0 h-[2px] w-full transition-opacity duration-500"
        style={{
          backgroundColor: 'rgba(255, 77, 141, 0.6)',
          boxShadow: '0 0 8px rgba(255, 77, 141, 0.35)',
          opacity: isSectionInView ? 1 : 0,
        }}
      />

      {/* Heading pill — centered on divider, divider splits behind it */}
      <div className="relative z-10 flex justify-center min-h-[22px]">
        <div
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full -mt-[19px] bg-[#000]"
          style={{
            border: '1.5px solid rgba(255, 77, 141, 0.6)',
            borderRadius: '999px',
          }}
        >
          <span className="text-[#ff4d8d] text-sm md:text-base" aria-hidden>✦</span>
          <h2
            className="font-medium uppercase text-[#ff4d8d]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2rem',
              letterSpacing: '0.3em',
            }}
          >
            {title}
          </h2>
          <span className="text-[#ff4d8d] text-sm md:text-base" aria-hidden>✦</span>
        </div>
      </div>

      {/* Editorial intro — static, no animation */}
      {introText && (
        <p
          className="text-center mt-4 max-w-xl mx-auto text-sm font-normal"
          style={{ color: 'rgba(255, 255, 255, 0.6)' }}
        >
          {introText}
        </p>
      )}

      {/* Robot — walks on divider (right→left), hops over pill, once per section entry */}
      {!prefersReducedMotion && (
        <div
          className="absolute left-0 right-0 flex justify-center pointer-events-none"
          style={{ zIndex: 5, top: '-54px', height: '56px' }}
        >
          <motion.div
            ref={robotRef}
            className="flex-shrink-0 -translate-x-1/2 self-end"
            initial={{ x: '50vw', y: 0 }}
            style={{
              filter: 'drop-shadow(0 0 16px rgba(255, 77, 141, 0.5))',
            }}
          >
            {ROBOT_SVG}
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default SectionIntro

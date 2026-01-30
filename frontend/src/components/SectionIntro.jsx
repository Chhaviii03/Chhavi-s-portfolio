import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const SectionIntro = ({
  sectionRef,
  title,
  introText,
  onAnimationComplete,
}) => {
  const containerRef = useRef(null)
  const isSectionInView = useInView(sectionRef ?? containerRef, { margin: '-100px 0px -100px 0px', threshold: 0 })

  useEffect(() => {
    if (isSectionInView) onAnimationComplete?.()
  }, [isSectionInView, onAnimationComplete])

  return (
    <div ref={containerRef} className="relative w-full pb-6">
      {/* Divider line — at very top of section, fades with section visibility */}
      <div
        className="absolute left-0 right-0 top-0 h-px w-full transition-opacity duration-300"
        style={{
          backgroundColor: 'rgba(255, 77, 141, 0.45)',
          opacity: isSectionInView ? 1 : 0,
        }}
      />

      {/* Heading pill — centered on divider */}
      <div className="relative z-10 flex justify-center min-h-[28px]">
        <div
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full -mt-3.5 bg-[#000] border-[1.5px] border-pink-primary/60"
        >
          <span className="text-pink-primary text-sm md:text-base" aria-hidden>✦</span>
          <h2
            className="font-semibold uppercase text-pink-primary text-base md:text-lg tracking-[0.2em]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </h2>
          <span className="text-pink-primary text-sm md:text-base" aria-hidden>✦</span>
        </div>
      </div>

      {introText && (
        <p className="text-center mt-4 max-w-xl mx-auto text-sm text-white/60 leading-relaxed">
          {introText}
        </p>
      )}
    </div>
  )
}

export default SectionIntro

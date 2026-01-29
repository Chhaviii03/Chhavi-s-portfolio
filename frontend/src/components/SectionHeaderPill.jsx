import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const SectionHeaderPill = ({
  text,
  onAnimationComplete,
  className = '',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (isInView) onAnimationComplete?.()
  }, [isInView, onAnimationComplete])

  return (
    <div ref={ref} className={`flex justify-center mb-16 ${className}`}>
      <div
        className="inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 rounded-full
                   bg-black-near border shadow-[0_0_20px_rgba(255,77,141,0.06)]"
        style={{
          borderWidth: '1px',
          borderColor: 'rgba(255,77,141,0.45)',
          borderRadius: '999px',
        }}
      >
        <span
          className="flex-shrink-0 text-base md:text-lg leading-none"
          style={{ color: '#ff4d8d' }}
          aria-hidden
        >
          ✨
        </span>
        <div className="text-center">
          <h2
            className="font-bold uppercase text-white"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.35rem',
              letterSpacing: '0.28em',
              color: '#ffffff',
            }}
          >
            {text}
          </h2>
        </div>
        <span
          className="flex-shrink-0 text-base md:text-lg leading-none"
          style={{ color: '#ff4d8d' }}
          aria-hidden
        >
          ✨
        </span>
      </div>
    </div>
  )
}

export default SectionHeaderPill

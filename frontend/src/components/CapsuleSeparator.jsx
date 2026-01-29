import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const CapsuleSeparator = ({ title, subtitle }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-center py-8 px-4"
    >
      <div
        className="inline-flex flex-col items-center gap-1 px-6 py-3 rounded-full
                   bg-gradient-to-r from-[rgba(255,77,141,0.15)] to-[rgba(255,77,141,0.05)]
                   border border-[rgba(255,77,141,0.4)]
                   shadow-[0_0_40px_rgba(255,77,141,0.15)]"
        style={{
          fontSize: '0.9rem',
          letterSpacing: '0.25em',
          color: '#ffffff',
        }}
      >
        <span className="uppercase font-medium tracking-[0.25em]">{title}</span>
        {subtitle && (
          <span
            className="italic opacity-70"
            style={{ fontSize: '0.85rem' }}
          >
            {subtitle}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default CapsuleSeparator

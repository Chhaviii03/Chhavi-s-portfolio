import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import SectionIntro from '../components/SectionIntro'

const education = [
  {
    institution: 'Rajiv Gandhi Institute of Petroleum Technology',
    program: 'Integrated Dual Degree (B.Tech + M.Tech)',
    detail: 'Computer Science & Artificial Intelligence',
  },
  {
    institution: 'Patna Doon Public School',
    program: 'Class 12th (CBSE Board)',
    detail: 'Percentage: 87%',
  },
  {
    institution: 'Amity International School',
    program: 'Class 10th (CBSE Board)',
    detail: 'Percentage: 97.2%',
  },
]

const Education = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  const sectionRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} id="education" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black-near">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          sectionRef={sectionRef}
          title="Education"
          introText="Academic background."
          onAnimationComplete={() => setHeadingComplete(true)}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={headingComplete ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-6 max-w-2xl mx-auto"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full group relative bg-black-bg rounded-2xl p-6 border border-pink-primary/30 
                       hover:border-pink-primary/50 transition-all duration-300 overflow-hidden
                       shadow-[0_0_25px_rgba(255,77,141,0.25)] hover:shadow-[0_0_40px_rgba(255,77,141,0.45)]
                       transition-shadow duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-lg font-heading font-bold text-white mb-1">
                  {item.institution}
                </h3>
                <p className="text-gray-soft italic text-sm mb-2">
                  {item.program}
                </p>
                <p className="text-pink-primary font-medium text-sm">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

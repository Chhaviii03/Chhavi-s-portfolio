import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGraduationCap, FaSchool } from 'react-icons/fa'
import SectionIntro from '../components/SectionIntro'

const education = [
  {
    institution: 'Rajiv Gandhi Institute of Petroleum Technology',
    program: 'Integrated Dual Degree (B.Tech + M.Tech)',
    detail: 'Computer Science & Artificial Intelligence',
    Icon: FaGraduationCap,
  },
  {
    institution: 'Patna Doon Public School',
    program: 'Class 12th (CBSE Board)',
    detail: 'Percentage: 87%',
    Icon: FaSchool,
  },
  {
    institution: 'Amity International School',
    program: 'Class 10th (CBSE Board)',
    detail: 'Percentage: 97.2%',
    Icon: FaSchool,
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
    <section ref={sectionRef} id="education" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black-near">
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
          className="flex flex-col items-center gap-4 max-w-2xl mx-auto"
        >
          {education.map((item, index) => {
            const IconComponent = item.Icon
            return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="w-full group relative bg-black-bg rounded-xl p-5 border border-pink-primary/25 
                       hover:border-pink-primary/40 hover:shadow-card-glow transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/[0.03] to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-base font-heading font-bold text-white mb-1 flex items-center gap-2">
                  <IconComponent className="text-pink-primary/80 shrink-0 text-sm" aria-hidden />
                  <span>{item.institution}</span>
                </h3>
                <p className="text-gray-soft italic text-sm mb-1">
                  {item.program}
                </p>
                <p className="text-pink-primary font-medium text-sm">
                  {item.detail}
                </p>
              </div>
            </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBuilding, FaCalendarAlt } from 'react-icons/fa'
import SectionIntro from '../components/SectionIntro'

const PositionsOfResponsibility = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  const sectionRef = useRef(null)
  const positions = [
    {
      role: 'General Secretary',
      organization: 'IEEE Student Branch',
      duration: 'September 2025 – Present',
      description: 'Led student chapter operations and coordination. Oversaw technical, editorial, and event-driven initiatives. Facilitated collaboration between teams and external bodies.',
      logo: 'IEEE',
    },
    {
      role: 'IEEE Day 2025 Ambassador',
      organization: 'IEEE UP Section',
      duration: 'July 2025 – Present',
      description: 'Representing IEEE at the section level for IEEE Day 2025 initiatives. Supporting outreach, engagement, and coordination of IEEE Day activities. Acting as a liaison between student bodies and the IEEE UP Section.',
      logo: 'IEEE',
    },
    {
      role: 'Editorial and PR Head',
      organization: 'IEEE RGIPT Student Branch',
      duration: 'September 2024 – September 2025',
      description: 'Managed editorial strategy, public relations, and outreach. Led content creation and communications for events and initiatives. Strengthened chapter visibility and engagement.',
      logo: 'IEEE',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section ref={sectionRef} id="positions" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black-bg">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          sectionRef={sectionRef}
          title="Positions of Responsibility"
          introText="Leadership roles and organizational responsibilities."
          onAnimationComplete={() => setHeadingComplete(true)}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={headingComplete ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {positions.map((position, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative bg-black-near rounded-xl p-6 border border-pink-primary/20 
                       hover:border-pink-primary/35 hover:shadow-card-glow transition-all duration-200 overflow-hidden ${
                         index === 2 && positions.length === 3 ? 'md:col-span-2 md:mx-auto md:max-w-2xl' : ''
                       }`}
              whileHover={{ y: -2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/[0.02] to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-200" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-black-bg border border-pink-primary/15 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:border-pink-primary/25 transition-all duration-200">
                    <span className="text-xs font-bold text-white/60 group-hover:text-pink-primary transition-colors">
                      {position.logo}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-heading font-bold text-pink-primary mb-1 group-hover:text-pink-primary/80 transition-colors">
                      {position.role}
                    </h3>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                      <FaBuilding className="text-pink-primary/70 shrink-0" />
                      <span>{position.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-soft text-xs">
                      <FaCalendarAlt className="text-pink-primary/50 shrink-0" />
                      <span>{position.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-soft text-sm leading-relaxed">
                  {position.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PositionsOfResponsibility


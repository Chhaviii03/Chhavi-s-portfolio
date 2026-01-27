import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBuilding, FaCalendarAlt, FaUserTie } from 'react-icons/fa'
import AnimatedHeading from '../components/AnimatedHeading'

const PositionsOfResponsibility = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
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
    <section id="positions" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedHeading
            text="Positions of Responsibility"
            direction="right"
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
            onAnimationComplete={() => setHeadingComplete(true)}
          />
          <p className="text-gray-soft text-lg max-w-2xl mx-auto mt-6">
            Leadership roles and organizational responsibilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={headingComplete ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {positions.map((position, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative bg-black-near rounded-2xl p-8 border border-pink-primary/20 
                       hover:border-pink-primary/50 transition-all duration-300 overflow-hidden ${
                         index === 2 && positions.length === 3 ? 'md:col-span-2 md:mx-auto md:max-w-2xl' : ''
                       }`}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 rounded-lg bg-black-bg border border-pink-primary/10 flex items-center justify-center opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:border-pink-primary/30 transition-all duration-300">
                    <span className="text-xs font-bold text-white/60 group-hover:text-pink-primary transition-colors">
                      {position.logo}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-pink-primary mb-2 group-hover:text-pink-primary/80 
                                 transition-colors">
                      {position.role}
                    </h3>
                    <div className="flex items-center gap-2 text-white font-semibold text-lg mb-2">
                      <FaBuilding className="text-pink-primary/70" />
                      <span>{position.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-soft text-sm">
                      <FaCalendarAlt className="text-pink-primary/50" />
                      <span>{position.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-soft leading-relaxed">
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


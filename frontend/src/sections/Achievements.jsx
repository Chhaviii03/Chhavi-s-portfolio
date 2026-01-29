import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaAward, FaMedal, FaTrophy } from 'react-icons/fa'
import SectionIntro from '../components/SectionIntro'

const Achievements = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  const sectionRef = useRef(null)
  const achievements = [
    {
      title: '2nd Runner-up',
      event: 'Devbhoomi CyberHack 3.0',
      description: 'Secured third position in competitive cybersecurity hackathon',
      icon: FaTrophy,
      color: 'text-pink-primary',
      logo: 'Hackathon',
    },
    {
      title: '1st Runner-up',
      event: 'IEEE KodeKurrent',
      description: 'Achieved second position in prestigious coding competition',
      icon: FaMedal,
      color: 'text-pink-primary',
      logo: 'IEEE',
    },
    {
      title: 'Selected Participant',
      event: 'ACM India Summer School',
      description: 'Selected for advanced computer science summer program',
      icon: FaAward,
      color: 'text-pink-primary',
      logo: 'ACM',
    },
    {
      title: 'National Finalist',
      event: 'HPCL MEL Energy Quest',
      description: 'Reached finals in energy innovation competition',
      icon: FaAward,
      color: 'text-pink-primary',
      logo: 'HPCL',
    },
    {
      title: '2nd place',
      event: 'GFG HackaGeek Hackathon\'24',
      description: 'Secured second place by building ML driven web app for emotion-infused TT',
      icon: FaTrophy,
      color: 'text-pink-primary',
      logo: 'GFG',
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
    <section ref={sectionRef} id="achievements" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black-near">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          sectionRef={sectionRef}
          title="Achievements"
          introText="Recognitions in competitive programming and hackathons."
          onAnimationComplete={() => setHeadingComplete(true)}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={headingComplete ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative rounded-2xl p-8 overflow-hidden
                         bg-gradient-to-b from-[rgba(255,255,255,0.03)] to-[rgba(0,0,0,0.6)]
                         border-2 border-[rgba(255,77,141,0.18)]
                         shadow-[0_0_40px_rgba(255,77,141,0.08)] hover:shadow-[0_0_60px_rgba(255,77,141,0.14)]
                         transition-all duration-300 ease-out ${
                           achievement.event === 'GFG HackaGeek Hackathon\'24' ? 'md:col-span-2 md:mx-auto md:max-w-2xl' : ''
                         }`}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/[0.03] to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo Placeholder */}
                    <div className="w-16 h-16 rounded-lg bg-black-near border border-pink-primary/10 flex items-center justify-center opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:border-pink-primary/30 transition-all duration-300">
                      <span className="text-xs font-bold text-white/60 group-hover:text-pink-primary transition-colors">
                        {achievement.logo}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-pink-primary transition-colors"
                          style={{ color: 'rgba(255,255,255,0.95)' }}>
                        {achievement.title}
                      </h3>
                      <p className="text-pink-primary font-semibold text-lg mb-2">
                        {achievement.event}
                      </p>
                    </div>
                  </div>
                  
                  {achievement.description && (
                    <p className="text-gray-soft leading-[1.6]">
                      {achievement.description}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements




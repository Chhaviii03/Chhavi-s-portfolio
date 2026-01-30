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
    <section ref={sectionRef} id="achievements" className="min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black-near">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative rounded-xl p-6 overflow-hidden
                         bg-black-bg/60 border border-pink-primary/20
                         hover:border-pink-primary/35 hover:shadow-card-glow transition-all duration-200 ${
                           achievement.event === 'GFG HackaGeek Hackathon\'24' ? 'md:col-span-2 md:mx-auto md:max-w-2xl' : ''
                         }`}
                whileHover={{ y: -2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/[0.02] to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-black-near border border-pink-primary/15 flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:border-pink-primary/25 transition-all duration-200">
                      <span className="text-xs font-bold text-white/60 group-hover:text-pink-primary transition-colors">
                        {achievement.logo}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-heading font-bold mb-1 text-white/95 group-hover:text-pink-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-pink-primary font-semibold text-sm mb-1">
                        {achievement.event}
                      </p>
                    </div>
                  </div>
                  
                  {achievement.description && (
                    <p className="text-gray-soft text-sm leading-relaxed">
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




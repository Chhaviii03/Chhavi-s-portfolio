import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBrain, FaDatabase, FaMicrophone } from 'react-icons/fa'
import {
    SiC,
    SiCplusplus,
    SiDocker,
    SiFlask,
    SiGithubactions,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPython,
    SiPytorch,
    SiReact
} from 'react-icons/si'
import SectionIntro from '../components/SectionIntro'

const TechnicalSkills = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  const sectionRef = useRef(null)
  
  const skills = [
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Python', Icon: SiPython },
    { name: 'C', Icon: SiC },
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Flask', Icon: SiFlask },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'Neo4j', Icon: FaDatabase },
    { name: 'Docker', Icon: SiDocker },
    { name: 'GitHub Actions', Icon: SiGithubactions },
    { name: 'NLP', Icon: FaBrain },
    { name: 'Speech Processing', Icon: FaMicrophone },
    { name: 'PyTorch', Icon: SiPytorch },
  ]

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills]

  return (
    <section ref={sectionRef} id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          sectionRef={sectionRef}
          title="Technical Skills"
          introText="Technologies and tools I work with."
          onAnimationComplete={() => setHeadingComplete(true)}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black-bg to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={headingComplete ? {
                x: [0, -3024], // Move by half the duplicated set (14 cards * 216px each)
              } : {}}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              style={{ width: 'max-content' }}
            >
              {duplicatedSkills.map((skill, index) => {
                const IconComponent = skill.Icon
                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 w-44 h-28 rounded-lg bg-black-near border border-pink-primary/15 
                             flex flex-col items-center justify-center gap-2 hover:border-pink-primary/40 
                             hover:shadow-card-glow transition-all duration-200 group"
                    whileHover={{ scale: 1.03, y: -2 }}
                  >
                    <IconComponent className="text-3xl text-pink-primary group-hover:opacity-90 transition-opacity" />
                    <span className="text-white font-medium text-sm group-hover:text-pink-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Additional static grid for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="md:hidden mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-lg bg-black-near border border-pink-primary/15 p-3 
                         flex flex-col items-center justify-center gap-1.5 hover:border-pink-primary/35 
                         hover:shadow-card-glow transition-all duration-200"
              >
                <IconComponent className="text-2xl text-pink-primary" />
                <span className="text-white font-medium text-xs text-center leading-tight">{skill.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills


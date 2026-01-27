import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  SiCplusplus, 
  SiPython, 
  SiC, 
  SiReact, 
  SiNodedotjs, 
  SiFlask, 
  SiMongodb, 
  SiMysql, 
  SiDocker, 
  SiGithubactions,
  SiPytorch
} from 'react-icons/si'
import { FaBrain, FaMicrophone, FaDatabase } from 'react-icons/fa'
import AnimatedHeading from '../components/AnimatedHeading'

const TechnicalSkills = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedHeading
            text="Technical Skills"
            direction="right"
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
            onAnimationComplete={() => setHeadingComplete(true)}
          />
          <p className="text-gray-soft text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black-bg to-transparent z-10 pointer-events-none"></div>

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
                    className="flex-shrink-0 w-48 h-32 rounded-xl bg-black-near border border-pink-primary/20 
                             flex flex-col items-center justify-center gap-3 hover:border-pink-primary/50 
                             hover:shadow-pink-glow transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <IconComponent className="text-4xl text-pink-primary group-hover:scale-110 transition-transform" />
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
          initial={{ opacity: 0, y: 20 }}
          animate={headingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="md:hidden mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.Icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl bg-black-near border border-pink-primary/20 p-4 
                         flex flex-col items-center justify-center gap-2 hover:border-pink-primary/50 
                         hover:shadow-pink-glow transition-all duration-300"
              >
                <IconComponent className="text-3xl text-pink-primary" />
                <span className="text-white font-medium text-xs text-center">{skill.name}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills


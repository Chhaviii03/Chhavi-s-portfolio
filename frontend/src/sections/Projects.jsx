import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import AnimatedHeading from '../components/AnimatedHeading'

const Projects = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  
  const projects = [
    {
      title: 'EmotiVox 2.0',
      image: new URL('../assets/images/emotivox2.0.png', import.meta.url).href,
      description: 'Advanced emotion recognition system using voice analysis and NLP. Processes real-time audio streams to detect emotional states with high accuracy, integrating machine learning models for sentiment analysis and voice pattern recognition.',
      tech: ['Python', 'PyTorch', 'NLP', 'Speech Processing', 'Flask'],
      github: 'https://github.com/Chhaviii03',
      demo: 'https://emotivox20.netlify.app/',
    },
    {
      title: 'GeoNexus AI',
      image: new URL('../assets/images/geonexus_ai.png', import.meta.url).href,
      description: 'Intelligent geospatial data analysis platform leveraging AI for location-based insights. Built with graph databases for complex spatial relationships and scalable backend architecture for handling large datasets.',
      tech: ['Node.js', 'Neo4j', 'Python', 'AI/ML', 'Express'],
      github: 'https://github.com/Chhaviii03/GeoNexus_AI.git',
      demo: null,
    },
    {
      title: 'Web3 FraudTrail Intelligence System',
      image: new URL('../assets/images/fraudnet.png', import.meta.url).href,
      description: 'Blockchain-based fraud detection and tracking system. Implements intelligent pattern recognition to identify suspicious transactions across decentralized networks with real-time monitoring capabilities.',
      tech: ['Blockchain', 'Node.js', 'MongoDB', 'Web3', 'Express'],
      github: 'https://github.com/Chhaviii03/ETH_FraudDetection_System.git',
      demo: null,
    },
    {
      title: 'CTrace Debugger',
      image: new URL('../assets/images/CTrace.png', import.meta.url).href,
      description: 'Advanced debugging tool for C/C++ applications with intelligent trace analysis. Features real-time execution tracking, memory leak detection, and performance profiling with intuitive visualization.',
      tech: ['C++', 'C', 'Debugging Tools', 'System Programming'],
      github: 'https://github.com/Chhaviii03/CTrace.git',
      demo: null,
    },
    {
      title: 'Talent Scout',
      image: new URL('../assets/images/talentscout.png', import.meta.url).href,
      description: 'AI-powered system for talent evaluation and role-fit analysis using structured inputs and intelligent scoring. Focus on backend logic, evaluation pipelines, and decision automation.',
      tech: ['Python', 'AI/ML', 'Backend', 'Decision Systems', 'Automation'],
      github: 'https://github.com/Chhaviii03/TalentScout.git',
      demo: 'https://chhaviii03-talentscout-app-qygxtl.streamlit.app/',
    },
    {
      title: 'EmotiVox 1.0',
      image: new URL('../assets/images/emotivox1.0.png', import.meta.url).href,
      description: 'Initial version of the EmotiVox system focusing on emotion-aware text-to-speech generation. Foundation for later real-time voice cloning and multilingual emotion pipelines. Evolved into EmotiVox 2.0.',
      tech: ['Python', 'Text-to-Speech', 'NLP', 'Emotion Processing'],
      github: 'https://github.com/Chhaviii03/AIEMOTION.git',
      demo: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black-near">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedHeading
            text="Projects"
            direction="left"
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
            onAnimationComplete={() => setHeadingComplete(true)}
          />
          <p className="text-gray-soft text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={headingComplete ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-black-bg rounded-2xl p-6 border border-pink-primary/20 
                       hover:border-pink-primary/50 transition-all duration-300 cursor-pointer
                       hover:shadow-pink-glow overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/5 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project Image */}
              <div className="relative mb-6 rounded-lg overflow-hidden bg-black-near border border-pink-primary/10">
                <img
                  src={project.image}
                  alt={`${project.title} architecture`}
                  className="
                    w-full h-full aspect-video object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.03]
                  "
                />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-primary/30 rounded-lg transition-all duration-300 pointer-events-none"></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-pink-primary 
                              transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-soft mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-pink-primary/10 text-pink-primary 
                               rounded-full border border-pink-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-soft hover:text-pink-primary 
                               transition-colors group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-soft hover:text-pink-primary 
                               transition-colors group/link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects




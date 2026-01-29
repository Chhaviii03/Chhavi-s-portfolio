import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SectionIntro from '../components/SectionIntro'

const CARD_WIDTH = 360
const CARD_GAP = 24
const CARD_STEP = CARD_WIDTH + CARD_GAP

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

const n = projects.length
const extendedProjects = [...projects, ...projects, ...projects]

const Projects = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const touchStartX = useRef(0)

  const centerOffset = containerWidth > 0 ? containerWidth / 2 - CARD_WIDTH / 2 : 384
  const activeExtendedIndex = n + currentIndex

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const update = () => setContainerWidth(el.clientWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % n)
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + n) % n)
  }, [])

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e) => {
    const endX = e.changedTouches[0].clientX
    const delta = touchStartX.current - endX
    if (delta > 50) goNext()
    else if (delta < -50) goPrev()
  }, [goNext, goPrev])

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black-near">
      <div className="max-w-7xl mx-auto">
        <SectionIntro
          sectionRef={sectionRef}
          title="Projects"
          introText="Selected work focused on systems, intelligence, and scale."
          onAnimationComplete={() => setHeadingComplete(true)}
        />

        <div className="relative group/carousel overflow-hidden">
          {/* Left arrow — hover only (desktop), hidden on mobile */}
          <button
            type="button"
            onClick={goPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                       items-center justify-center text-pink-primary
                       bg-transparent border border-pink-primary/50
                       opacity-0 group-hover/carousel:opacity-100
                       hover:border-pink-primary/70 hover:shadow-[0_0_20px_rgba(255,77,141,0.2)]
                       transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-primary/50
                       -translate-x-2 md:-translate-x-4"
            aria-label="Previous project"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow — hover only (desktop), hidden on mobile */}
          <button
            type="button"
            onClick={goNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full
                       items-center justify-center text-pink-primary
                       bg-transparent border border-pink-primary/50
                       opacity-0 group-hover/carousel:opacity-100
                       hover:border-pink-primary/70 hover:shadow-[0_0_20px_rgba(255,77,141,0.2)]
                       transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-primary/50
                       translate-x-2 md:translate-x-4"
            aria-label="Next project"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={containerRef}
            className="relative w-full py-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y pinch-zoom' }}
          >
            <motion.div
              className="flex gap-6"
              style={{
                width: extendedProjects.length * CARD_STEP - CARD_GAP,
              }}
              animate={{
                x: -(activeExtendedIndex * CARD_STEP) + centerOffset,
              }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              {extendedProjects.map((project, i) => {
                const isActive = headingComplete && i === activeExtendedIndex
                return (
                  <motion.div
                    key={`${i}-${project.title}`}
                    className="flex-shrink-0 w-[360px] max-w-[85vw]"
                    animate={{
                      scale: headingComplete ? (isActive ? 1.06 : 0.93) : 1,
                      opacity: headingComplete ? (isActive ? 1 : 0.65) : 0.9,
                    }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                  >
                    <div
                      className={`group relative h-full bg-black-bg rounded-[16px] p-6 cursor-pointer overflow-hidden
                                 border transition-all duration-300
                                 ${isActive
                                   ? 'border-[rgba(255,77,141,0.5)] shadow-[0_0_40px_rgba(255,77,141,0.25)]'
                                   : 'border-[rgba(255,77,141,0.35)]'
                                 }
                                 hover:border-pink-primary/50 hover:shadow-pink-glow`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-primary/5 to-transparent opacity-0
                                    group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="relative mb-6 rounded-lg overflow-hidden bg-black-near
                                    border border-pink-primary/20 shadow-[0_0_15px_rgba(255,77,141,0.15)]
                                    group-hover:shadow-[0_0_25px_rgba(255,77,141,0.3)] transition-shadow duration-300">
                        <img
                          src={project.image}
                          alt={`${project.title} architecture`}
                          className="w-full h-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-pink-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-soft mb-6 leading-relaxed line-clamp-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs font-medium bg-pink-primary/10 text-pink-primary rounded-full border border-pink-primary/20"
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
                              className="flex items-center gap-2 text-gray-soft hover:text-pink-primary transition-colors group/link"
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
                              className="flex items-center gap-2 text-gray-soft hover:text-pink-primary transition-colors group/link"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform" />
                              <span className="text-sm">Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

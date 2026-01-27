import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'positions', label: 'Positions of Responsibility' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact Me' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto pl-2 pr-4 sm:pl-3 sm:pr-6 lg:pl-4 lg:pr-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <motion.div
              className="text-2xl font-heading font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              CB
            </motion.div>
            
            {/* Editorial text label - moved to left */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:inline-block font-hero text-xs font-medium text-white/60 tracking-[0.25em] leading-none ml-4 mr-6 uppercase"
            >
              SOFTWARE·AI·ML
            </motion.span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-pink-primary'
                    : 'text-gray-soft hover:text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-primary"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu navItems={navItems} scrollToSection={scrollToSection} activeSection={activeSection} />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

const MobileMenu = ({ navItems, scrollToSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 bg-black-bg/98 backdrop-blur-md border-t border-pink-primary/20"
        >
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  setIsOpen(false)
                }}
                className={`px-6 py-3 text-left text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-pink-primary bg-pink-primary/10'
                    : 'text-gray-soft hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar




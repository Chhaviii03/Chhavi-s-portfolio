import { useEffect, useState } from 'react'
import BackgroundOrbs from './components/BackgroundAnimation'
import BackgroundParticles from './components/BackgroundParticles'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollProgressAndBackTop from './components/ScrollProgressAndBackTop'
import SectionDivider from './components/SectionDivider'
import About from './sections/About'
import Achievements from './sections/Achievements'
import ContactMe from './sections/ContactMe'
import Education from './sections/Education'
import PositionsOfResponsibility from './sections/PositionsOfResponsibility'
import Projects from './sections/Projects'
import TechnicalSkills from './sections/TechnicalSkills'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'achievements', 'positions', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative bg-black-bg">
      <BackgroundParticles />
      <BackgroundOrbs />
      <ScrollProgressAndBackTop />
      <Navbar activeSection={activeSection} />
      <About />
      <SectionDivider direction="left" />
      <Projects />
      <SectionDivider direction="right" />
      <TechnicalSkills />
      <SectionDivider direction="right" />
      <Achievements />
      <SectionDivider direction="right" />
      <PositionsOfResponsibility />
      <SectionDivider direction="left" />
      <Education />
      <SectionDivider direction="right" />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App




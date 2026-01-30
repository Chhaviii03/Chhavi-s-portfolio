import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const About = () => {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(null)
  
  // Try to load cutout image, fallback to profile.jpg
  useEffect(() => {
    // Try cutout image first
    import('../assets/images/chhavi-cutout.png')
      .then((module) => setImageSrc(module.default))
      .catch(() => {
        // Fallback to profile.jpg in public folder
        setImageSrc('/profile.jpg')
      })
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Chhavi_Bhatt_Resume.pdf'
    link.download = 'Chhavi_Bhatt_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              className="text-4xl md:text-5xl lg:text-6xl font-hero font-semibold text-white leading-[1.15] tracking-tight whitespace-nowrap"
            >
              CHHAVI BHATT
            </motion.h1>
            
            {/* Primary Tagline - Cursive/Serif Italic */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
              className="text-2xl md:text-3xl font-serif italic font-medium text-white leading-snug"
            >
              Just a girl, trying to git through life
            </motion.p>

            {/* Secondary Descriptor - Italic + Muted */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
              className="text-base md:text-lg italic font-normal text-white/70 leading-relaxed"
            >
              AI/ML • Software Systems • Data Engineering
            </motion.p>

            {/* Context Line */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: 'easeOut' }}
              className="text-sm md:text-base font-hero font-normal text-gray-soft/80 leading-relaxed max-w-xl"
            >
              Computer Science & AI student passionate about building systems that feel human.
            </motion.p>

            {/* Download Resume Button */}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
              onClick={handleDownloadResume}
              className="px-7 py-3.5 bg-pink-primary text-white font-semibold rounded-lg text-sm
                         hover:shadow-pink-glow transition-shadow duration-200 mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-full bg-pink-primary/10 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-pink-primary/25 
                            bg-black-bg transition-shadow duration-200 hover:shadow-pink-glow">
                <div className="w-full h-full bg-black-bg flex items-center justify-center">
                  {imageSrc && !imageError ? (
                    <img
                      src={imageSrc}
                      alt="Chhavi Bhatt"
                      className="w-full h-full object-contain"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <span className="text-6xl md:text-8xl font-bold text-pink-primary/30">CB</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About




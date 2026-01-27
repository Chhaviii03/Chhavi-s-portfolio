import axios from 'axios'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane } from 'react-icons/fa'
import AnimatedHeading from '../components/AnimatedHeading'

const ContactMe = () => {
  const [headingComplete, setHeadingComplete] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await axios.post('/api/contact', formData)
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black-bg flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <AnimatedHeading
            text="Contact Me"
            direction="left"
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-4"
            onAnimationComplete={() => setHeadingComplete(true)}
          />
          <p className="text-gray-soft text-lg">
            Let's connect and build something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-black-near rounded-2xl p-8 border border-pink-primary/20 
                   hover:border-pink-primary/50 transition-all duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black-bg border border-pink-primary/20 rounded-lg 
                         text-white placeholder-gray-soft focus:outline-none focus:border-pink-primary 
                         focus:shadow-pink-glow transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black-bg border border-pink-primary/20 rounded-lg 
                         text-white placeholder-gray-soft focus:outline-none focus:border-pink-primary 
                         focus:shadow-pink-glow transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black-bg border border-pink-primary/20 rounded-lg 
                         text-white placeholder-gray-soft focus:outline-none focus:border-pink-primary 
                         focus:shadow-pink-glow transition-all duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>

            {status.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}
              >
                {status.type === 'success' ? (
                  <FaCheckCircle className="text-xl" />
                ) : (
                  <FaExclamationCircle className="text-xl" />
                )}
                <span>{status.message}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-pink-primary text-white font-semibold rounded-lg 
                       hover:shadow-pink-glow-lg transition-all duration-300 flex items-center 
                       justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactMe




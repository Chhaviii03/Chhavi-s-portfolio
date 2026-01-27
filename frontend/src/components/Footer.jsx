import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer 
      className="py-12 px-4 sm:px-6 lg:px-8 relative"
      style={{ 
        backgroundColor: '#000000',
        zIndex: 30,
        borderTop: '1px solid rgba(255, 77, 141, 0.1)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Line 1: Primary CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-soft text-lg"
        >
          Want to connect with me on other platforms?
        </motion.p>

        {/* Line 2: Secondary CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-soft text-base"
        >
          You can reach out to me here 👇
        </motion.p>

        {/* Line 3: Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-6 py-4"
        >
          <motion.a
            href="https://www.linkedin.com/in/chhavi-pradeep-bhatt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-primary hover:text-pink-primary/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <FaLinkedin className="text-3xl drop-shadow-[0_0_8px_rgba(255,77,141,0.6)]" />
          </motion.a>
          <motion.a
            href="https://github.com/Chhaviii03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-primary hover:text-pink-primary/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FaGithub className="text-3xl drop-shadow-[0_0_8px_rgba(255,77,141,0.6)]" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_.simply_insane._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-primary hover:text-pink-primary/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Instagram Profile"
            title="Instagram"
          >
            <FaInstagram className="text-3xl drop-shadow-[0_0_8px_rgba(255,77,141,0.6)]" />
          </motion.a>
          <motion.a
            href="mailto:chhavipradeepbhatt@gmail.com"
            className="text-pink-primary hover:text-pink-primary/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Send Email"
            title="Email"
          >
            <FaEnvelope className="text-3xl drop-shadow-[0_0_8px_rgba(255,77,141,0.6)]" />
          </motion.a>
        </motion.div>

        {/* Line 4: Sign-off */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white text-base font-medium pt-4"
        >
          
          Chhavi Bhatt
        </motion.p>

        {/* Line 5: Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-soft text-sm pt-2"
        >
          © 2026. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer


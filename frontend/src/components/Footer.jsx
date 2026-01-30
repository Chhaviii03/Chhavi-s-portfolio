import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer 
      className="py-10 px-4 sm:px-6 lg:px-8 relative border-t border-pink-primary/10 bg-black-bg"
      style={{ zIndex: 30 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-5">
        {/* Line 1: Primary CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-soft text-base leading-relaxed"
        >
          Want to connect with me on other platforms?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-soft text-sm leading-relaxed"
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl text-pink-primary" />
          </motion.a>
          <motion.a
            href="https://github.com/Chhaviii03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-primary hover:text-pink-primary/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FaGithub className="text-2xl text-pink-primary" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/_.simply_insane._/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-primary hover:text-pink-primary/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Instagram Profile"
            title="Instagram"
          >
            <FaInstagram className="text-2xl text-pink-primary" />
          </motion.a>
          <motion.a
            href="mailto:chhavipradeepbhatt@gmail.com"
            className="text-pink-primary hover:text-pink-primary/80 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Send Email"
            title="Email"
          >
            <FaEnvelope className="text-2xl text-pink-primary" />
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


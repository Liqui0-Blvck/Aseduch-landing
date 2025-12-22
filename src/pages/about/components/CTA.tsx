import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">¿Te gustaría ser parte?</h2>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
        Únete a nuestra comunidad de educadores y fortalece tu voz en la construcción de una mejor educación para Chile.
      </p>
      <Link
        to="/partners"
        className="inline-block bg-[#C0392B] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
      >
        ¡Hazte Socio!
      </Link>
    </motion.div>
  )
}

export default CTA

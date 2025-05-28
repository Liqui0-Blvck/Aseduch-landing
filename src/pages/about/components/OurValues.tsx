import { motion } from 'framer-motion'
import { FaBalanceScale, FaUsers, FaComments, FaChalkboardTeacher, FaHandshake, FaBullseye } from 'react-icons/fa'
import CTA from './CTA'


const OurValues = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
      <h2 className="text-4xl font-extrabold text-[#1E3A5F] mb-12">Nuestros Valores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            icon: <FaBalanceScale className="text-4xl text-[#C0392B] mb-2" />, 
            label: "Transparencia",
            description: "Actuamos con honestidad y apertura en todos nuestros procesos y decisiones, fomentando la confianza y la rendición de cuentas entre nuestros socios y la comunidad educativa."
          },
          {
            icon: <FaUsers className="text-4xl text-[#1E3A5F] mb-2" />, 
            label: "Equidad",
            description: "Promovemos la igualdad de oportunidades para todos los educadores, asegurando un trato justo y sin discriminación, y luchando por una educación inclusiva y de calidad para todos."
          },
          {
            icon: <FaComments className="text-4xl text-[#C0392B] mb-2" />, 
            label: "Colaboración",
            description: "Fomentamos el trabajo en equipo, el diálogo y la cooperación entre nuestros miembros y aliados, convencidos de que juntos logramos un mayor impacto en la educación chilena."
          },
          {
            icon: <FaChalkboardTeacher className="text-4xl text-[#1E3A5F] mb-2" />, 
            label: "Vocación",
            description: "Valoramos la pasión y el compromiso por la enseñanza, reconociendo la dedicación de quienes eligen educar y transformar vidas a través del aprendizaje."
          },
          {
            icon: <FaHandshake className="text-4xl text-[#C0392B] mb-2" />, 
            label: "Compromiso",
            description: "Nos involucramos activamente en la defensa de los derechos de los educadores y en la mejora continua del sistema educativo, manteniendo siempre el bienestar de nuestros estudiantes como prioridad."
          },
          {
            icon: <FaBullseye className="text-4xl text-[#1E3A5F] mb-2" />, 
            label: "Respeto",
            description: "Creemos en el trato digno y respetuoso hacia todas las personas, valorando la diversidad de opiniones y experiencias dentro de nuestra organización y en la sociedad."
          },
        ].map((val, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            {val.icon}
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">{val.label}</h3>
            <p className="text-gray-700 leading-relaxed">{val.description}</p>
          </div>
        ))}
      </div>
      </motion.div>

      <div className="mt-20">
        <CTA />
      </div>
    </section>
  )
}

export default OurValues

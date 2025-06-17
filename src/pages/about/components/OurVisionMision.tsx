import { motion } from 'framer-motion'
import { FaBullseye, FaHandshake } from 'react-icons/fa'

import CTA from "./CTA";

const OurVisionMision = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1E3A5F] text-center mb-12">Misión y Visión</h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Descubre la misión y visión que guían a ASEDUCH en su compromiso con la educación y el desarrollo profesional de los docentes en Chile.
        </p>
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <FaBullseye className="text-4xl text-[#C0392B] mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2 text-center">Nuestra Misión</h2>
            <p className="text-gray-700 text-center">
            Nuestra primera preocupación son los niños, niñas y adolescentes del sistema educativo chileno, como también todos aquellos que por diversas razones han tenido que desertar de él. Por ellos buscamos aportar en la discusión, investigación, diseño e implementación de políticas públicas que impacten positivamente en la educación, en la diversidad de niveles, modalidades y dependencias administrativas en la que ésta se desarrolla, generando cambios a favor de los aprendizajes de los estudiantes.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <FaHandshake className="text-4xl text-[#C0392B] mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2 text-center">Nuestra Visión</h2>
            <p className="text-gray-700 text-center">
            Así mismo, somos una organización comprometida con la sociedad desde la función gremial, manteniendo la independencia de los partidos políticos y las autoridades de Gobierno y Municipales, y buscamos acrecentar los beneficios y mejoras en las condiciones laborales de nuestros socios, a fin de motivar su perseverancia en el sistema educativo y atraer a él a cada vez más personas con verdadera vocación.
            </p>
          </div>
        </motion.div>
        <div className="mt-20">
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default OurVisionMision

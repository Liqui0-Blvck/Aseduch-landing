import React from 'react'
import { Seo } from '../../../components/Seo'
import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'

const requirements = [
  "Profesionales de la Educación con título de profesor o educador (Ley 19.070 de 1991).",
  "Profesionales con título de profesor o educador reconocido por el Estado.",
  "Docentes con experiencia (contrato > 1 año) aunque no estén titulados.",
  "Profesionales extranjeros con título validado según normas vigentes.",
  "Asistentes de la Educación (Ley 19.464) con labor profesional o paradocente.",
];


const InscriptionRequeriment = () => {

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Seo
        title="Requisitos de Inscripción | ASEDUCH"
        description="Requisitos de Inscripción | ASEDUCH"
        url="/partners/inscription-requeriment"
      />

      <div>
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-4 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h1 variants={fadeIn} className="text-4xl font-bold text-[#1E3A5F]">
            Únete a ASEDUCH
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-600">
            Forma parte de la comunidad que impulsa una educación de calidad en Chile.
          </motion.p>
          <Link
            target="_blank"
            to="https://docs.google.com/forms/d/e/1FAIpQLSdThRdAzUdfRNNKI8U165pZ5neqiOuAnVWORfTBELx6cV-eqw/viewform"
            className="inline-block bg-[#C0392B] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            ¡Quiero ser socio!
          </Link>
        </motion.div>

        {/* Requisitos */}
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-bold text-[#1E3A5F] mb-4">
            Requisitos de inscripción
          </motion.h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {requirements.map((req, i) => (
              <motion.li
                key={i}
                variants={fadeIn}
                whileHover={{ x: 5 }}
                transition={{ type: "tween" }}
              >
                {req}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  )
}

export default InscriptionRequeriment

import { motion } from 'framer-motion'
import { FaBullseye, FaHandshake } from 'react-icons/fa'

import CTA from "./CTA";

const OurVisionMision = () => {
  const missionPoints = [
    "Fortalecer el desarrollo profesional, ético y humano de quienes trabajan en educación.",
    "Defender y dignificar la labor docente.",
    "Mejorar las condiciones laborales.",
    "Incentivar la vocación educativa.",
    "Garantizar el bienestar integral de quienes educan.",
    "Promover una educación de calidad, inclusiva, plural y justa para todas y todos los estudiantes.",
  ];

  const visionPoints = [
    "Ser una organización gremial líder y referente nacional en la defensa, promoción y dignificación de la labor educativa.",
    "Consolidarnos como una comunidad profesional unida, innovadora y respetada.",
    "Inspirar confianza en las familias, los estudiantes y la sociedad.",
    "Impulsar políticas públicas que fortalezcan la educación como derecho y bien común.",
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-[#C0392B] uppercase mb-3">Propósito</p>
          <h1 className="text-4xl font-extrabold text-[#1E3A5F]">Misión y Visión</h1>
        </div>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Conoce los principios que orientan el trabajo de ASEDUCH y nuestro compromiso con quienes educan y con la mejora del sistema educativo.
        </p>
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
                <FaBullseye className="text-2xl text-[#C0392B]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Nuestra Misión</h2>
                <p className="text-gray-700 leading-relaxed">
                  La Asociación de Educadores de Chile A.G. (ASEDUCH) tiene como misión:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {missionPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#C0392B]" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 shadow-sm ring-1 ring-black/5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center">
                <FaHandshake className="text-2xl text-[#C0392B]" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Nuestra Visión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nuestra visión es:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {visionPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#C0392B]" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

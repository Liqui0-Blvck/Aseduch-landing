import React from 'react'
import { Seo } from '../../../components/Seo'
import { motion, type Variants } from 'framer-motion'
import conversemos from '../../../assets/conversemos.png'
import asesoria_legal from '../../../assets/asesoria-legal.png'
import convivencia from '../../../assets/convivencia.png'
import teach_in_usa from '../../../assets/participate-learning.webp'
import CTAP from './CTAP'

const Advices = () => {

    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

    const container: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

      const services = [
        {
          title: "Atención Psicológica",
          icon: conversemos,
          color: "from-blue-400 to-blue-600",
          perks: ["Fonasa", "20% de descuento", "Virtual y presencial", "Lun–Vie 9:30–22:00"],
        },
        {
          title: "Asesoría Legal",
          icon: asesoria_legal,
          color: "from-green-400 to-green-600",
          perks: ["Consulta básica 20 min", "Análisis integral hasta $30.000"],
        },
        {
          title: "Teach in USA",
          icon: teach_in_usa,
          color: "from-indigo-400 to-indigo-600",
          perks: [
            "Visa intercambio cultural",
            "Maestría en EE.UU.",
            "Salario competitivo",
            "Acompañamiento completo",
          ],
        },
        {
          title: "Asesoría en Convivencia Escolar",
          icon: convivencia,
          color: "from-red-400 to-red-600",
          perks: [
            "Asesoría a Comunidades Educativas",
            "Capacitación en convivencia escolar",
            "Orientación en resolución de conflictos",
            "Asesoría en protocolos de actuación",
            "Asesoría en prevención de violencia escolar",
          ]
        }
      ];

  return (
    <>
    <Seo
      title="Consejos para Socios | ASEDUCH"
      description="Consejos para Socios | ASEDUCH"
      url="/partner/advices"
    />

    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-2xl font-bold text-[#1E3A5F] text-center mb-8"
            initial="hidden"
            whileInView="show"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            Asesorías para Socios
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
              >
                <img src={s.icon} alt={s.title} className="h-32 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {s.title}
                </h3>
                <ul className="text-gray-600 space-y-1 mb-4">
                  {s.perks.map((perk, j) => (
                    <li key={j} className="flex items-start">
                      <span className="mr-2 text-[#C0392B]">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CTAP />    
      </section>
    </>
  )
}

export default Advices

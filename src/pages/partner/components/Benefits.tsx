
import { motion, type Variants } from 'framer-motion'
import { Seo } from '../../../components/Seo';
import CTAP from './CTAP';

import finis from '../../../assets/logo_finis_terrae.png'
import andes from '../../../assets/Logo_uandes.png'
import san_sebastian from '../../../assets/san_sebastian.png'
import el_desarrollo from '../../../assets/el_desarrollo_u.png'
import andres_bello from '../../../assets/andres_bellos.png'
import ucentral from '../../../assets/u_central.png'

const benefits = [
  {
    name: "Universidad Central de Chile",
    logo: ucentral,
    perks: [
      "30% de descuento en el arancel de Diplomados, Postítulos y Cursos de Educación Continua (Online, Semipresencial y Presencial) para socios ASEDUCH, cónyuges e hijos.",
      "100% de descuento en la matrícula si se inscriben 5 o más socios en un mismo programa (cumpliendo el mínimo requerido).",
      "Cupo máximo de 20 becas por trimestre, asignadas por orden de postulación y requisitos.",
    ],
  },
  {
    name: "Universidad San Sebastián",
    logo: san_sebastian,
    perks: ["15% de descuento en arancel de cursos, diplomados y magíster"],
  },
  {
    name: "Universidad de los Andes",
    logo: andes,
    perks: ["10% de descuento en cursos, programas cerrados, diplomados y magíster"],
  },
  {
    name: "Universidad Finis Terrae",
    logo: finis,
    perks: ["20% de descuento en cursos y diplomados, magíster"],
  },
  {
    name: "Universidad Andrés Bello",
    logo: andres_bello,
    perks: [
      "15% en magíster",
      "20% en diplomados y postítulos",
      "20% en cursos cerrados",
    ],
  },
  {
    name: "Universidad del Desarrollo",
    logo: el_desarrollo,
    perks: ["15% en magíster, diplomados y cursos"],
  },
];

const Benefits = () => {

    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

    const container: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

    

  return (
    <>
      <Seo 
        title="Beneficios para Socios | ASEDUCH"
        description="Beneficios para Socios | ASEDUCH"
        url="/partner/benefits"
      />

      <div className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-bold text-[#1E3A5F] text-center mb-8">
            Beneficios para Socios
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-center text-center transition"
              >
                <img src={b.logo} alt={b.name} className="h-24 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{b.name}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {b.perks.map((perk, j) => (
                    <li key={j}>{perk}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <CTAP />
    </>
  )
}

export default Benefits
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../../components/Seo";

import finis from '../../assets/logo_finis_terrae.png'
import andes from '../../assets/Logo_uandes.png'
import san_sebastian from '../../assets/san_sebastian.png'
import el_desarrollo from '../../assets/el_desarrollo_u.png'
import andres_bello from '../../assets/andres_bellos.png'

import conversemos from '../../assets/conversemos.png'
import asesoria_legal from '../../assets/asesoria-legal.png'
import convivencia from '../../assets/convivencia.png'
import teach_in_usa from '../../assets/participate-learning.webp'

const requirements = [
  "Profesionales de la Educación con título de profesor o educador (Ley 19.070 de 1991).",
  "Profesionales con título de profesor o educador reconocido por el Estado.",
  "Docentes con experiencia (contrato > 1 año) aunque no estén titulados.",
  "Profesionales extranjeros con título validado según normas vigentes.",
  "Asistentes de la Educación (Ley 19.464) con labor profesional o paradocente.",
];

const benefits = [
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

const duties = {
  title: "Obligaciones de los socios",
  items: [
    "Conocer y cumplir Estatutos, Reglamentos y Código de Ética.",
    "Desempeñar con celo y oportunidad las comisiones encomendadas.",
    "Pagar puntualmente las cuotas sociales (ordinarias y extraordinarias).",
    "Cautelar la imagen moral y el patrimonio de ASEDUCH.",
  ],
};

const rights = {
  title: "Derechos de los socios",
  items: [
    "Ser informado de las actividades nacionales, regionales y provinciales.",
    "Recibir orientación ante intereses profesionales.",
    "Acceder a perfeccionamiento y crecimiento profesional.",
    "Obtener prestaciones sociales establecidas por la Asociación.",
    "Elegir y ser elegido en los organismos de ASEDUCH.",
    "Renunciar con los mismos derechos que al ingresar.",
  ],
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

// Animations
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




export default function Socios() {
  return (
    <>
      <Seo 
        title="Hazte Socio | ASEDUCH"
        description="Únete a ASEDUCH y accede a beneficios exclusivos, incluyendo descuentos en universidades, asesoría legal, atención psicológica y más."
        url="/partners"
      />
    <section className="bg-white text-gray-800 py-20 space-y-24">
      {/* Hero */}
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
          to={`https://docs.google.com/forms/d/e/1FAIpQLSdThRdAzUdfRNNKI8U165pZ5neqiOuAnVWORfTBELx6cV-eqw/viewform`}
          className="inline-block bg-[#C0392B] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition"
        >
          Inscríbete Ahora
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

      {/* Beneficios */}
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

      {/* Deberes y Derechos */}
      <section className="py-20 bg-white">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Derechos y Deberes de los Socios</h2>
          <p className="text-gray-500 mt-2">(ARTÍCULO 7° de los ESTATUTOS DE ASEDUCH)</p>
        </div>

        {/* Cards */}
        <motion.div
          className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {[duties, rights].map((sec, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`bg-white rounded-xl shadow-md p-8 border-l-4 ${
                idx === 0 ? "border-[#C0392B]" : "border-[#1E3A5F]"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{sec.title}</h3>
              <ul className="space-y-3 text-gray-700">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex items-start">
                    <span className="mt-1 mr-2 text-[#C0392B]">{idx === 0 ? "✓" : "✓"}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Asesorías */}
      <section className="bg-white py-20">
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
    </section>

      {/* CTA final */}
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">¿Listo para unirte?</h2>
        <Link
          className="inline-block bg-[#C0392B] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          target="_blank"
          to={`https://docs.google.com/forms/d/e/1FAIpQLSdThRdAzUdfRNNKI8U165pZ5neqiOuAnVWORfTBELx6cV-eqw/viewform`}>
          Inscríbete Ahora
        </Link>
      </motion.div>
    </section>
    </>
  );
}

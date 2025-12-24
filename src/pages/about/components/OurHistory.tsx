import { motion } from 'framer-motion'

const OurHistory = ({ directiva_grupo }: { directiva_grupo: string }) => {
  const milestones = [
    {
      title: "Fundación",
      description:
        "En Santiago el 7 de abril del año 2022 a las 19 horas, en dependencias del Liceo Industrial de Santiago ubicado en Sierra Bella, 1141, se constituye la Asociación de Educadores de Chile, la que usará también el nombre de ASEDUCH.",
    },
    {
      title: "Primera Directiva y Estatutos",
      description:
        "En ese momento se procede a nombrar por aclamación unánime a nuestra primera Directiva. Presidió la reunión don José Luis Velasco Guzmán y actuó como Secretario don Manuel Dannemann Correa. Después de un amplio debate, los asistentes acuerdan por unanimidad aprobar los primeros Estatutos, los cuales, en septiembre de 2025, se aprobaron oficialmente, dando vida formal a la Asociación de Educadores de Chile A.G. y consolidándonos como una institución abierta, plural y comprometida con el país.",
    },
  ];

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div>
        <p className="text-sm font-semibold tracking-wider text-[#C0392B] uppercase mb-3">
          Historia
        </p>
        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">
          Nuestra Historia
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          La Asociación de Educadores de Chile A.G. (ASEDUCH) nació con una convicción profunda: la educación chilena necesita una voz gremial con independencia política, técnica, ética y centrada en las personas que sostienen, día a día, el aprendizaje de millones de estudiantes.
        </p>
        <div className="bg-blue-50/60 rounded-2xl p-6 ring-1 ring-black/5 mb-6">
          <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Lo que nos distingue</h3>
          <p className="text-gray-700 leading-relaxed">
          En primer lugar se destaca que nuestra asociación incluye por primera vez a los asistentes de la educación en el gremio de los educadores, reconociendo que su labor es sustancial y complementaria a la labor del docente.
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {milestones.map((m) => (
            <div key={m.title} className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-black/5">
              <h3 className="text-lg font-semibold text-[#1E3A5F]">{m.title}</h3>
              <p className="mt-2 text-gray-700 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-black/5 mb-6">
          <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">Quiénes conforman ASEDUCH hoy</h3>
          <p className="text-gray-700 leading-relaxed">
            Hoy, la Asociación reúne a docentes de todos los niveles y a quienes trabajan fuera de un establecimiento educacional, comprometidos con un mismo anhelo: hacer de la educación una fuerza transformadora para Chile, a través del bienestar y el potenciamiento de sus educadores.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            {[
              "Asistentes de la educación",
              "Educadores diferenciales",
              "Educadoras de párvulos",
              "Profesionales técnicos",
              "Estudiantes de pedagogía",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#C0392B]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50/60 rounded-2xl p-6 ring-1 ring-black/5 mb-6">
          <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">Comunidad en construcción permanente</h3>
          <p className="text-gray-700 leading-relaxed">
            ASEDUCH es una comunidad en construcción permanente, abierta a todas las personas que creen en la vocación de educar y en el poder de un trabajo conjunto.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">Nuestros socios participan en:</p>
          <ul className="mt-3 space-y-2 text-gray-700">
            {[
              "Instancias de formación",
              "Diálogo y vinculación territorial",
              "Acompañamiento laboral",
              "Espacios de decisión gremial",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#C0392B]" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-6 bg-white shadow-sm ring-1 ring-black/5 mb-6">
          <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">Compromiso de largo plazo</h3>
          <p className="text-gray-700 leading-relaxed">
            Aunque somos una organización joven, nuestro compromiso es de largo plazo. ASEDUCH nace para permanecer, crecer y convertirse en un actor relevante en el debate educativo nacional.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Con visión de futuro, independencia y profundo respeto por quienes enseñan y aprenden, seguiremos avanzando hacia un Chile donde los educadores y la educación sean siempre un motivo de orgullo y esperanza.
          </p>
        </div>
        
      </div>
      <div className="w-full self-start md:sticky md:top-24">
          <div className="relative w-full max-w-2xl aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              loading="lazy"
              src={directiva_grupo}
              alt='Equipo directivo Fundador de ASEDUCH'
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-sm font-medium">Fundadores</p>
                <h3 className="text-xl font-bold">Asociación de Educadores de Chile A.G.</h3>
              </div>
            </div>
          </div>
        </div>
</motion.div>
  )
}

export default OurHistory

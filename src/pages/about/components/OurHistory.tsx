import { motion } from 'framer-motion'

const OurHistory = ({ directiva_grupo }: { directiva_grupo: string }) => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">
          Nuestra Historia
        </h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
        Somos un grupo de educadoras y educadores (profesores titulados, docentes de otras profesiones y asistentes de la educación) que trabajamos en los diferentes niveles, modalidades y dependencias administrativas del sistema educacional chileno, pertenecientes a diversas comunidades educativas, unidos para crear la ASOCIACIÓN DE EDUCADORES DE CHILE, ASEDUCH, desde la independencia política pero con convicción, con el propósito de aportar con hechos concretos a la igualdad de oportunidades de todos los niños, niñas y adolescentes de nuestro país, para garantizarles acceso a una educación de calidad, plural e inclusiva y, a través de esto, lograr el desarrollo personal de estudiantes y educadores.
        </p>
        
      </div>
      <div
          className="w-full  flex justify-center"
        >
          <div className="relative w-full max-w-2xl aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white">
            <img
              loading="lazy"
              src={directiva_grupo}
              alt='Equipo directivo Fundador de ASEDUCH'
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
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

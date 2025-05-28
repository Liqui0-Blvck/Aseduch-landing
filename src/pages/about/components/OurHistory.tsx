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
          Nuestra primera preocupación son los niños, niñas y adolescentes del sistema educativo chileno, como también todos aquellos que por diversas razones han tenido que desertar de él. Por ellos buscamos aportar en la discusión, investigación, diseño e implementación de políticas públicas que impacten positivamente en la educación.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          También somos una organización comprometida con la sociedad desde la función gremial, independiente de partidos políticos y autoridades, que busca mejorar las condiciones laborales de nuestros socios y atraer a personas con vocación educativa.
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

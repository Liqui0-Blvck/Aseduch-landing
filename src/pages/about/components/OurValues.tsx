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
      <h2 className="text-4xl font-extrabold text-[#1E3A5F] mb-12">Valores de los educadores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            icon: <FaBalanceScale className="text-4xl text-[#C0392B] mb-2" />, 
            label: "La educación como bien público",
            description: "Creemos en la educación como un bien público, en el cual los niños y jóvenes tienen derecho a participar en igualdad de oportunidades y los adultos la obligación de proveerla, de manera plural, inclusiva y de calidad, independientemente de los estilos, formas, proyectos educativos o modalidades de administración de los establecimientos, todos legítimos y respetables."
          },
          {
            icon: <FaUsers className="text-4xl text-[#1E3A5F] mb-2" />, 
            label: "Derecho preferente de los padres",
            description: "Creemos que los padres tienen el derecho preferente de escoger el tipo de educación que habrán de darle a sus hijos, respetando su libertad para elegir proyectos educativos diversos, de acuerdo con sus propias convicciones."
          },
          {
            icon: <FaComments className="text-4xl text-[#C0392B] mb-2" />, 
            label: "Comunidades y Centros Educativos",
            description: "Creemos en las Comunidades y Centros Educativos como un lugar esencial de encuentro y desarrollo de todas las personas que participan en ellas, que acoge, transforma y entrega protección a sus estudiantes, en la que los padres y apoderados pueden confiar y aprender."
          },
          {
            icon: <FaChalkboardTeacher className="text-4xl text-[#1E3A5F] mb-2" />, 
            label: "Rol de los educadores profesionales",
            description: "Creemos en el rol preponderante de los educadores profesionales en la sociedad, ya sean estos profesores titulados, docentes de otras profesiones o asistentes de la educación."
          },
          {
            icon: <FaHandshake className="text-4xl text-[#C0392B] mb-2" />, 
            label: "Asociatividad gremial",
            description: "Creemos en la asociatividad gremial como ente para trabajar por mejorar las condiciones laborales de sus socios, su formación permanente, la comunicación entre pares y, en general, su calidad de vida."
          },
          {
            icon: <FaBullseye className="text-4xl text-[#1E3A5F] mb-2" />, 
            label: "Diálogo",
            description: "Creemos en el diálogo como la forma para buscar la verdad y el modo de resolución de diferencias y problemas."
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

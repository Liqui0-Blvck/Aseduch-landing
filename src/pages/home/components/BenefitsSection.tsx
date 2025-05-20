import { motion } from "framer-motion";

const benefits = [
  {
    title: "Formación continua",
    description: "Accede a cursos, talleres y seminarios exclusivos que fortalecen tu desarrollo profesional docente."
  },
  {
    title: "Defensa gremial activa",
    description: "Acompañamiento ante situaciones laborales injustas, con asesoría legal y representación institucional."
  },
  {
    title: "Descuentos y convenios",
    description: "Beneficios en salud, tecnología, educación y más, gracias a convenios con instituciones asociadas."
  },
  {
    title: "Participación activa",
    description: "Oportunidad de integrarte a comisiones, actividades y espacios de decisión en la asociación."
  },
  {
    title: "Red de apoyo docente",
    description: "Comparte experiencias, inquietudes y soluciones junto a otros educadores en espacios colaborativos."
  },
  {
    title: "Visibilidad profesional",
    description: "Publicación de buenas prácticas, investigaciones y experiencias educativas en medios institucionales."
  }
];

export default function BenefitsSection() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">¿Por qué ser parte de ASEDUCH?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Al integrarte como socio/a de ASEDUCH, accedes a una red de apoyo profesional, formación continua y defensa activa de tus derechos laborales como educador/a.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-blue-600 min-h-[240px] flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">{item.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

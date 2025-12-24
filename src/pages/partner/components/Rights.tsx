import { motion, type Variants } from 'framer-motion'
import { Seo } from '../../../components/Seo';
import CTAP from './CTAP';

const Rights = () => {

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

    const container: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };

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
          "Recibir orientación frente a sus derechos y necesidades en su ejercicio laboral.",
          "Obtener prestaciones sociales establecidas por la Asociación.",
          "Elegir y ser elegido en los organismos de ASEDUCH.",
          "Renunciar con los mismos derechos que al ingresar.",
        ],
      };

  return (
    <>
      <Seo 
        title="Derechos y Deberes de los Socios | ASEDUCH"
        description="Derechos y Deberes de los Socios | ASEDUCH"
        url="/partner/rights"
      />

      <section className="py-20 bg-white">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Derechos y Deberes de los Socios</h2>
          <p className="text-gray-500 mt-2">(ARTÍCULO 6° de los ESTATUTOS DE ASEDUCH)</p>
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

      <CTAP />
    </>
  )
}

export default Rights

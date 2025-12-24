import { motion } from "framer-motion";
import { Seo } from "../../components/Seo"
import OurHistory from "./components/OurHistory";

import aseduch_directorio from '../../assets/aseduch-directorio.jpg'
import CTA from "./components/CTA";

export default function AboutPage() {
  

  return (
    <>
      <Seo 
        title="Sobre Nosotros | ASEDUCH"
        description="ASEDUCH es una organización sin fines de lucro que reúne y representa a educadores en Chile, promoviendo su desarrollo profesional y una educación de calidad."
        url="/about"
      />
      <section className="bg-white text-gray-800 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* ¿Quiénes Somos? */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-extrabold text-[#1E3A5F] mb-4">
            ¿Quiénes Somos?
          </h1>
          <p className="text-lg text-gray-600">
            ASEDUCH es una organización sin fines de lucro que reúne a docentes, educadores y asistentes de la educación. Promovemos el desarrollo profesional, la defensa de la dignidad laboral y el fortalecimiento de una educación de calidad, inclusiva y plural.
          </p>
        </motion.div>
        

        <OurHistory directiva_grupo={aseduch_directorio}/>
        <CTA/>
      </div>
    </section>
    </>
  );
}

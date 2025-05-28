import { motion } from "framer-motion";
import { Seo } from "../../components/Seo"
import OurHistory from "./components/OurHistory";

import directiva_grupo from "../../assets/foto-aseduch-grupo.jpg"; // Asegúrate de actualizar esta imagen
import CTA from "./components/CTA";

export default function AboutPage() {
  

  return (
    <>
      <Seo 
        title="Sobre Nosotros | ASEDUCH"
        description="ASEDUCH es una organización sin fines de lucro que representa a los educadores de Chile, promoviendo el desarrollo profesional y la educación de calidad."
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
            ASEDUCH es una organización sin fines de lucro que representa a los educadores de Chile, promoviendo el desarrollo profesional, la defensa de sus derechos y el fortalecimiento de la educación pública y de calidad.
          </p>
        </motion.div>
        

        <OurHistory directiva_grupo={directiva_grupo}/>
        <CTA/>
      </div>
    </section>
    </>
  );
}

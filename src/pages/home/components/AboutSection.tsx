import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from 'framer-motion';
import { Link } from "react-router-dom";

import { useMedia } from "../../../hooks/useMedia";

function CountUp({ to = 6, duration = 2 }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      onUpdate(value) {
        setDisplay(Math.floor(value));
      },
    });

    return controls.stop;
  }, [to, duration]);

  return (
    <motion.span
      className="text-4xl font-extrabold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {display}+
    </motion.span>
  );
}


const ids = [3672, 3671];


export default function AboutSection() {
  const { media: images } = useMedia(ids);

  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Texto con animación */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-sm font-semibold text-blue-500 uppercase mb-2 tracking-wider">
            ¿Quiénes Somos?
          </h3>
          <h2 className="text-4xl font-extrabold text-[#1E3A5F] mb-6">
            ASEDUCH: Vocación, Comunidad y Compromiso
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Representamos a los educadores de Chile, promoviendo su desarrollo profesional, la defensa de sus derechos y una educación pública, inclusiva y de calidad.
          </p>

          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">➤</span> Formación docente continua
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">➤</span> Defensa del rol del educador
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-500 text-lg">➤</span> Comunidad profesional colaborativa
            </li>
          </ul>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block bg-[#C0392B] hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Conoce más sobre ASEDUCH
            </Link>
          </div>
        </motion.div>

        {/* Imágenes animadas */}
        {images.length === 2 && (
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={images[0].media_details?.sizes?.full?.source_url || images[0].source_url}
              alt={images[0].title?.rendered}
              className="rounded-[80px_0_0_0] object-cover w-full h-72 shadow-md"
            />
            <div className="flex flex-col gap-4">
              <motion.div
                className="bg-[#1E3A5F] text-white text-center rounded-[0_80px_0_0] h-28 flex flex-col justify-center items-center shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <CountUp to={6} duration={2} />
                <span className="text-sm">Años fortaleciendo la educación</span>
              </motion.div>
              <img
                src={images[1].media_details?.sizes?.full?.source_url || images[1].source_url}
                alt={images[1].title?.rendered}
                className="rounded-[0_0_80px_0] object-cover w-full h-40 shadow-md"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

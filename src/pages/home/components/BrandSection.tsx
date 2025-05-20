import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import finis from '../../../assets/logo_finis_terrae.png';
import andes from '../../../assets/Logo_uandes.png';
import san_sebastian from '../../../assets/san_sebastian.png';
import el_desarrollo from '../../../assets/el_desarrollo_u.png';
import andres_bello from '../../../assets/andres_bellos.png';

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

export default function BrandsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const width = useWindowSize();

  // Logos
  const logos = [
    san_sebastian,
    andes,
    finis,
    andres_bello,
    el_desarrollo,
  ];
  const allLogos = [...logos, ...logos];

  // Si la pantalla es menor a 768px, acelera y reduce gap
  const isMobile = width < 768;
  const duration = isMobile ? 20 : 30;
  const gapClass = isMobile ? 'gap-10' : 'gap-20';

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          Instituciones con las que tenemos convenio
        </h2>
      </div>

      <div className="relative overflow-hidden" ref={containerRef}>
        <motion.div
          className={`flex ${gapClass} w-max`}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          }}
        >
          {allLogos.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center h-32 w-48"
            >
              <img
                src={src}
                alt={`Logo convenio ${idx % logos.length}`}
                className="h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

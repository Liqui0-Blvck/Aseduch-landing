import { motion } from 'framer-motion'
import CTA from "./CTA";
import denise_ibarboure from "../../../assets/denise-ibarboure.jpg";
import gaston_eduardo from "../../../assets/Gaston.jpeg";
import james from "../../../assets/james.jpg";
import jose_luis from "../../../assets/jose-luis.jpg";
import tamara_constanzo from "../../../assets/tamara-constanzo.jpg";
import maritza from "../../../assets/maritza-cott.jpg"

const OurDirective = () => {
  const directiva = [
      {
        id: "denise",
        src: denise_ibarboure,
        alt: "Denise Ibarboure C",
        title: "Denise Ibarboure C",
        position: "Vicepresidente",
        description:
          "Profesora de Educación Física Universidad Católica de Valparaíso. Magíster en Dirección de Centros Educativos Universidad Villanueva, Madrid.",
      },
      {
        id: "james",
        src: james,
        alt: "James Edward Tucker",
        title: "James Edward Tucker",
        position: "Director",
        description:
          "Profesor Británico y miembro de redes Teach for All y Heads Forward. Magíster en Filosofía y Literatura y en Gestión de Políticas Públicas por la Universidad de Londres. Director Ejecutivo en Chartwell International School, Vitacura.",
      },
      {
        id: "tamara",
        src: tamara_constanzo,
        alt: "Tamara Constanzo Jara",
        title: "Tamara Constanzo Jara",
        position: "Tesorero",
        description:
          "Magíster en Gestión Estratégica y Liderazgo Educacional (UNAB). Profesora de Educación Básica (UANDES). Ex coordinadora nacional del programa Escuelas Arriba y Jefa Provincial de Educación Santiago Centro.",
      },
      {
        id: "gaston",
        src: gaston_eduardo,
        alt: "Gastón Eduardo Díaz",
        title: "Gastón Eduardo Díaz Norambuena",
        position: "Pro Secretario",
        description:
          "Profesor de Estado en Historia y Geografía. Licenciado en Ciencias Jurídicas y Sociales. Magíster en Ciencias Políticas con mención en Participación Democrática.",
      },
      {
        id: "maritza",
        src: maritza,
        alt: "Maritza Cottenie",
        title: "Maritza Cottenie",
        position: "Directora Ejecutivo ASEDUCH",
        description: 
          `Profesora de CCNN y Biología, Magíster en Educación de la P. Universidad
          Católica, Post Título en Ciencias de La Familia con alta experiencia en docencia y
          dirección de centros educativos a nivel escolar y univarsitario.`

      }
      
    ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#1E3A5F] text-center mb-6">Nuestro Equipo Directivo</h1>
        <p className="text-lg text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          Conoce a las personas que lideran ASEDUCH y representan el compromiso, la experiencia y la vocación de servicio que caracteriza a nuestra organización.
        </p>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Presidente */}
          <div className="mb-16 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
          <img
            src={jose_luis}
            alt="José Luis Velasco"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">José Luis Velasco</h3>
        <p className="text-lg text-[#C0392B] font-medium mb-4">Presidente</p>
        <p className="text-gray-700 leading-relaxed max-w-2xl">
          Profesor de Historia y Geografía y Master en Artes Liberales en Pedagogía. Con experiencia docente y de gestión en educación superior y escolar. Ha liderado iniciativas en sectores público y privado, con foco en emprendimiento y desarrollo social.
        </p>
      </div>
    </div>
    </div>

    {/* Otros miembros */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
    {directiva.map((person) => (
      <motion.div 
        key={person.id} 
        className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
        whileHover={{ y: -5 }}
      >
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <img
            src={person.src}
            alt={person.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/150?text=Imagen+no+disponible';
            }}
          />
        </div>
        <h5 className='text-sm font-bold text-[#1E3A5F]'>{person.position}</h5>
        <h4 className="text-lg font-bold text-[#1E3A5F] mb-1">{person.title}</h4>
        <p className="text-sm text-gray-600">{person.description}</p>
      </motion.div>
    ))}
    </div>

    {/* Nota sobre la foto del directorio */}
    <div className="mt-16 bg-blue-50 p-6 rounded-xl max-w-4xl mx-auto">
    <h4 className="text-lg font-semibold text-[#1E3A5F] mb-3">Sobre Nuestro Equipo</h4>
    <p className="text-gray-700">
      Nuestro equipo directivo está compuesto por profesionales de la educación comprometidos con la mejora continua del sistema educativo chileno. Trabajamos en conjunto para representar los intereses de los educadores y promover una educación de calidad en todo el país.
    </p>
    </div>
    </motion.div>
    <div className="mt-20">
      {/* CTA antes del footer */}
      <CTA />
    </div>
  </div>
</section>
  );
}

export default OurDirective

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../../components/Seo";
import {
  FaHandshake,
  FaBullseye,
  FaBalanceScale,
  FaUsers,
  FaComments,
  FaChalkboardTeacher
} from "react-icons/fa";
import { DocumentosInstitucionales } from "../../components/DocumentosInstitucionales";

// Importar imágenes
import denise_ibarboure from "../../assets/denise-ibarboure.jpg";
import gaston_eduardo from "../../assets/gaston-eduardo.jpg";
import james from "../../assets/james.jpg";
import jose_luis from "../../assets/jose-luis.jpg";
import tamara_constanzo from "../../assets/tamara-constanzo.jpg";
import directiva_grupo from "../../assets/foto-aseduch-grupo.jpg"; // Asegúrate de actualizar esta imagen

export default function AboutPage() {
  const directiva = [
    {
      id: "denise",
      src: denise_ibarboure,
      alt: "Denise Ibarboure C",
      title: "Denise Ibarboure C",
      description:
        "Profesora de Educación Física Universidad Católica de Valparaíso. Magíster en Dirección de Centros Educativos Universidad Villanueva, Madrid.",
    },
    {
      id: "james",
      src: james,
      alt: "James Edward Tucker",
      title: "James Edward Tucker",
      description:
        "Profesor Británico y miembro de redes Teach for All y Heads Forward. Magíster en Filosofía y Literatura y en Gestión de Políticas Públicas por la Universidad de Londres. Director Ejecutivo en Chartwell International School, Vitacura.",
    },
    {
      id: "tamara",
      src: tamara_constanzo,
      alt: "Tamara Constanzo Jara",
      title: "Tamara Constanzo Jara",
      description:
        "Magíster en Gestión Estratégica y Liderazgo Educacional (UNAB). Profesora de Educación Básica (UANDES). Ex coordinadora nacional del programa Escuelas Arriba y Jefa Provincial de Educación Santiago Centro.",
    },
    {
      id: "gaston",
      src: gaston_eduardo,
      alt: "Gastón Eduardo Díaz",
      title: "Gastón Eduardo Díaz Norambuena",
      description:
        "Profesor de Estado en Historia y Geografía. Licenciado en Ciencias Jurídicas y Sociales. Magíster en Ciencias Políticas con mención en Participación Democrática.",
    },
    
  ];

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

        {/* Misión y Visión */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <FaBullseye className="text-4xl text-[#C0392B] mb-4" />
            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-2">
              Nuestra Misión
            </h2>
            <p className="text-gray-700">
              Promover el respeto, el reconocimiento y la mejora continua del rol docente, impulsando acciones gremiales, sociales y pedagógicas que dignifiquen nuestra labor.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 shadow">
            <FaHandshake className="text-4xl text-[#C0392B] mb-4" />
            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-2">
              Nuestra Visión
            </h2>
            <p className="text-gray-700">
              Ser una organización sólida, inclusiva y activa en la transformación educativa del país, contribuyendo a una sociedad más justa desde la formación integral.
            </p>
          </div>
        </motion.div>

        {/* Historia */}
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
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={directiva_grupo}
              alt="ASEDUCH directiva"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Valores */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-10">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <FaBalanceScale />, label: "Transparencia" },
              { icon: <FaUsers />, label: "Equidad" },
              { icon: <FaComments />, label: "Colaboración" },
              { icon: <FaChalkboardTeacher />, label: "Vocación" },
              { icon: <FaHandshake />, label: "Compromiso" },
              { icon: <FaBullseye />, label: "Respeto" },
            ].map((val, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-xl shadow flex items-center space-x-4">
                <div className="text-3xl text-[#C0392B]">{val.icon}</div>
                <span className="text-lg font-medium text-gray-800 break-words">{val.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Documentos Institucionales */}
        <DocumentosInstitucionales />

        {/* Directiva */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12">Nuestro Equipo Directivo</h2>

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

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">¿Te gustaría ser parte?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Únete a nuestra comunidad de educadores y fortalece tu voz en la construcción de una mejor educación para Chile.
          </p>
          <Link
            to="/react/partners"
            className="inline-block bg-[#C0392B] text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition"
          >
            ¡Hazte Socio!
          </Link>
        </motion.div>
      </div>
    </section>
    </>
  );
}

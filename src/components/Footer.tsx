import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../assets/aseduch-logo.jpg";
import logo_fundacion from "../assets/logo-fundacion-celeste (1).png";

export default function Footer() {
  const location = useLocation();
  const isFoundationPage = location.pathname.includes('/foundation');

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Columna 1: Logo + descripción */}
        <motion.div
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3">
            <img 
              src={isFoundationPage ? logo_fundacion : logo} 
              alt="ASEDUCH Logo" 
              className="h-14" 
            />
            <div>
              <div className="text-lg font-bold text-gray-800">
                {isFoundationPage ? 'Fundación ASEDUCH' : 'ASEDUCH'}
              </div>
              <div className="text-xs text-gray-600">
                {isFoundationPage ? 'Fundación de Educadores de Chile' : 'Asociación de Educadores de Chile A.G.'}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mt-2">
            Trabajando por una educación de calidad y el bienestar de los educadores del país desde 1998.
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com/Aseduch/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://x.com/aseduch1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition" aria-label="Twitter">
              <FaX size={16} />
            </a>
            <a href="https://instagram.com/aseduch_/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://youtube.com/UCSmp_0yZJG5On1kC1-mqbjw/videos" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600 transition" aria-label="YouTube">
              <FaYoutube size={18} />
            </a>
            <a href="https://www.linkedin.com/company/asociación-de-educadores-de-chile/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* Columna 2: Enlaces rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/react/" className="text-gray-600 hover:text-blue-600 transition">Inicio</Link></li>
            <li><Link to="/react/about" className="text-gray-600 hover:text-blue-600 transition">Quiénes Somos</Link></li>
            <li><Link to="/react/docs" className="text-gray-600 hover:text-blue-600 transition">Documentos</Link></li>
            <li><Link to="/react/partners" className="text-gray-600 hover:text-blue-600 transition">Socios</Link></li>
            <li><Link to="/react/news" className="text-gray-600 hover:text-blue-600 transition">Actividades</Link></li>
            <li><Link to="/react/media" className="text-gray-600 hover:text-blue-600 transition">Medios</Link></li>
          </ul>
        </motion.div>

        {/* Columna 3: Fundación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Fundación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/react/foundation" className="text-gray-600 hover:text-blue-600 transition">Documentos</Link></li>
            <li><Link to="/react/foundation/activities" className="text-gray-600 hover:text-blue-600 transition">Actividades</Link></li>
            <li><Link to="/react/foundation/donations" className="text-gray-600 hover:text-blue-600 transition">Donaciones</Link></li>
          </ul>
        </motion.div>

        {/* Columna 4: Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span className="text-gray-600">Santiago, Chile</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-600" />
              <span className="text-gray-600">+56 932410208</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:contacto@aseduch.cl" className="text-gray-600 hover:text-blue-600 transition">
                contacto@aseduch.cl
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Línea inferior */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} ASEDUCH - Asociación de Educadores de Chile. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}

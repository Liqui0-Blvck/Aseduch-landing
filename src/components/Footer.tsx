import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/aseduch-logo.jpg";

export default function Footer() {

  return (
    <footer className="bg-[#0D1224] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">
        {/* Columna 1: Logo + descripción */}
        <motion.div
          className="flex flex-col space-y-6 items-start sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <img src={logo} alt="ASEDUCH Logo" className="w-26" height={45} width={80} />
            <p className="text-base text-gray-300 leading-relaxed">
            <strong>Asociación de Educadores de Chile</strong>, trabajando por una educación de calidad y el bienestar de los educadores del país.
          </p>
        </motion.div>

        {/* Columna 2: Enlaces rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
          <ul className="space-y-3 text-base text-gray-300">
            <li><Link to="/" className="hover:underline">Inicio</Link></li>
            <li><Link to="/react/about" className="hover:underline">Quiénes Somos</Link></li>
            <li><Link to="/react/docs" className="hover:underline">Documentos</Link></li>
            <li><Link to="/react/partners" className="hover:underline">Socios</Link></li>
            <li><Link to="/react/news" className="hover:underline">Noticias</Link></li>
            <li><Link to="/react/medios" className="hover:underline">Medios</Link></li>
          </ul>
        </motion.div>

        {/* Columna 3: Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6">Contacto</h3>
          <ul className="space-y-4 text-base text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 text-xl">📍</span> Santiago, Chile
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 text-xl">📞</span> +56 932410208
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 text-xl">✉️</span> contacto@aseduch.cl
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Línea inferior */}
      <motion.div
        className="mt-14 border-t border-white/10 pt-5 text-center text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} ASEDUCH - Asociación de Educadores de Chile. Todos los derechos reservados.
      </motion.div>

      
    </footer>
  );
}

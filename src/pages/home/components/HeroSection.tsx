import aseduch_grupo from '../../../assets/foto-aseduch-grupo.jpg';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function HeroSection() {

  return (
    <section className="bg-[#F4F7FB] min-h-[90vh] flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-32">

        <div
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1E3A5F] leading-tight mb-6">
            Asociación de Educadores<br />de Chile <span className="text-4xl lg:text-5xl">A.G.</span>
          </h1>
          <p className="text-gray-700 text-xl lg:text-2xl mb-10 leading-relaxed">
            Trabajando juntos por una educación de calidad<br />
            y el bienestar de los educadores chilenos.
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 w-full max-w-md mx-auto lg:max-w-none mb-8">
            <Link
              to="/react/partners"
              className="bg-[#C0392B] hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors text-center"
            >
              ¡Únete a ASEDUCH!
            </Link>
            <Link
              to="/react/about"
              className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors text-center"
            >
              Conoce más
            </Link>
          </div>
          
          {/* Redes Sociales */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a href="https://facebook.com/Aseduch/" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] hover:text-blue-600 transition-colors" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/aseduch1" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] hover:text-gray-800 transition-colors" aria-label="X (Twitter)">
              <FaX size={20} className="mt-0.5" />
            </a>
            <a href="https://instagram.com/aseduch_/?hl=es" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] hover:text-pink-600 transition-colors" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com/@asociaciónAseduch24/videos" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] hover:text-red-600 transition-colors" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.linkedin.com/company/asociación-de-educadores-de-chile/" target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] hover:text-blue-700 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Imagen animada */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-2xl aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-white">
            <img
              loading="lazy"
              src={aseduch_grupo}
              alt='Equipo directivo de ASEDUCH'
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <div className="text-white">
                <p className="text-sm font-medium">Equipo Directivo</p>
                <h3 className="text-xl font-bold">Asociación de Educadores de Chile A.G.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

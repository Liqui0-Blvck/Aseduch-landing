import aseduch_grupo from '../../../assets/foto-aseduch-grupo.jpg';
import { Link } from "react-router-dom";

export default function HeroSection() {

  return (
    <section className="bg-[#F4F7FB] min-h-[90vh] flex items-center py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-32">

        <div
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1E3A5F] leading-tight mb-8">
            Asociación de Educadores<br /> de Chile
          </h1>
          <p className="text-gray-700 text-xl lg:text-2xl mb-10 leading-relaxed">
            Trabajando juntos por una educación de calidad<br />
            y el bienestar de los educadores chilenos.
          </p>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 w-full max-w-md mx-auto lg:max-w-none">
            <Link
              to="/react/partners"
              className="bg-[#C0392B] hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              ¡Únete a ASEDUCH!
            </Link>
            <Link
              to="/react/about"
              className="text-gray-800 hover:text-[#C0392B] px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Conoce más
            </Link>
          </div>
        </div>

        {/* Imagen animada */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="w-full max-w-lg aspect-[16/10] bg-gray-200 rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
            <img
              loading="lazy"
              src={aseduch_grupo}
              alt={'Imagen principal'}
              className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Seo } from "../components/Seo";

export default function NotFound({ 
  message = 'Lo sentimos, la página que buscas no existe.', 
  button = 'Volver al inicio',
  link = '/'
  }: { message?: string, button?: string, link?: string }) {
  return (
    <>
      <Seo 
        title="Página no encontrada | ASEDUCH"
        description="Lo sentimos, la página que buscas no existe."
        url="/404"
      />
      <motion.div
      className="flex flex-col items-center justify-center h-screen bg-white px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-9xl font-extrabold text-[#1E3A5F] mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8 text-center">
        {message}
      </p>
      <Link
        to={link}
        className="inline-block bg-[#C0392B] hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
      >
        {button}
      </Link>
    </motion.div>
    </>
  );
}

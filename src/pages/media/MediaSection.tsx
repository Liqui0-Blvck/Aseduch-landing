import { useState } from "react";
import { motion, type Variants } from "framer-motion";

type MediaType = "videos" | "podcasts" | "presentaciones";

/* Esta interfaz define la estructura de cada elemento multimedia.
   - Para videos de YouTube, guardamos solo el ID del video en la URL
   - El campo start es para indicar en qué segundo debe empezar el video
   - thumbnail es opcional y se usa para mostrar una vista previa personalizada */
interface MediaItem {
  id: number;
  title: string;
  url: string;
  start?: number;
  thumbnail?: string;
}


/* Lista de videos de YouTube. Cada video tiene su ID único de YouTube
   y podemos especificar en qué segundo debe comenzar */
const videoUrls: MediaItem[] = [
  {
    id: 1,
    title: "Entrevista Radial Presidente Aseduch",
    url: "OBUpkbhSZwA",
    start: 7,  // El video empezará en el segundo 7
  },
  // Aquí puedes agregar más videos cuando los necesites
  {
    id: 2,
    title: "Seminario Aseduch",
    url: "WbsnSiJhMpI",
    start: 2,  // El video empezará en el segundo 2
  },
];

const podcasts: MediaItem[] = [

];

const presentaciones: MediaItem[] = [

];

const tabs: { label: string; key: MediaType }[] = [
  { label: "Videos", key: "videos" },
  { label: "Podcasts", key: "podcasts" },
  { label: "Presentaciones", key: "presentaciones" },
];


const tabContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const tabItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function MediaSection() {
  const [activeTab, setActiveTab] = useState<MediaType>("videos");


  const items: MediaItem[] =
    activeTab === "videos"
      ? videoUrls
      : activeTab === "podcasts"
      ? podcasts
      : presentaciones;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#1E3A5F]">Medios</h2>
          <p className="text-gray-600">
            Explora nuestra galería multimedia: videos, podcasts y presentaciones.
          </p>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center space-x-4"
          initial="hidden"
          animate="show"
          variants={tabContainer}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              variants={tabItem}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 font-medium rounded-full transition ${
                activeTab === tab.key
                  ? "bg-[#1E3A5F] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de Media */}
        {items.length > 0 ? (
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={tabContainer}
          >
            {items.map((item) => {

              /* Construimos la URL del embed según el tipo de contenido:
                 - Para YouTube, usamos la versión nocookie por privacidad y agregamos
                   el parámetro start si está especificado
                 - Para otros tipos de contenido, usamos la URL directamente */
              const embedSrc =
                activeTab === "videos"
                  ? `https://www.youtube-nocookie.com/embed/${item.url}${
                      item.start ? `?start=${item.start}` : ""
                    }`
                  : item.url;

              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  {/* Video */}
                  {activeTab === "videos" && (
                    <div className="aspect-video bg-black">
                      <iframe
                        src={embedSrc}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}

                  {/* Podcast */}
                  {activeTab === "podcasts" && (
                    <div className="p-6 flex flex-col items-center">
                      <audio controls className="w-full">
                        <source src={item.url} />
                        Tu navegador no soporta audio.
                      </audio>
                    </div>
                  )}

                  {/* Presentación */}
                  {activeTab === "presentaciones" && (
                    <div className="aspect-video bg-gray-100">
                      <iframe
                        src={item.url}
                        title={item.title}
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}

                  {/* Título */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">
            No hay elementos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}

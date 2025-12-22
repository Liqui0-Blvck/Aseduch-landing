import { useState } from "react";
import { motion, type Variants } from "framer-motion";

import { FaPodcast, FaVideo, FaRegNewspaper } from "react-icons/fa";
import PrensaFiles from "./PrensaFiles";
type MediaType =  "videos" | "podcasts" | "prensa";

/* Esta interfaz define la estructura de cada elemento multimedia.
   - Para videos de YouTube, guardamos solo el ID del video en la URL
   - El campo start es para indicar en qué segundo debe empezar el video
   - thumbnail es opcional y se usa para mostrar una vista previa personalizada */
interface MediaItem {
  id: number;
  title: string;
  url?: string; // Para videos y podcasts
  start?: number;
  thumbnail?: string;
  date?: string;
  description?: string;
  link?: string; // Para prensa y radio
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
  {
    id: 3,
    title: "Entrevista Radio Agricultura",
    url: "q31mNHTXgbM",
    start: 2
  },
  {
    id: 4,
    title: "Entrevista A José Luis Velasco",
    url: "JwtO2U_xq7E",
    start: 2
  },
  {
    id: 5,
    title: "Por que ASEDUCH es una alternativa al colegio de profesores",
    url: "fGYlOJzIfd4",
    start: 2
  },
  {
    id: 6,
    title: "ASEDUCH y la suspensión de clases por las elecciones 2024",
    url: "7AORg6Achhs",
    start: 2
  }
];

const podcasts: MediaItem[] = [
  { id: 1, title: "Entrevista Radio Cooperativa", date: "2025-03-15", description: "Entrevista Radio Cooperativa", url: "https://open.spotify.com/embed/episode/2RE6DNXVKxoX0bZ7gWOt6X" },
];

const tabs: { label: string; key: MediaType; icon: React.ReactNode }[] = [
  // { label: "Radio", key: "radio", icon: <FaBroadcastTower /> },
  { label: "Videos", key: "videos", icon: <FaVideo /> },
  { label: "Podcasts", key: "podcasts", icon: <FaPodcast /> },
  { label: "Prensa", key: "prensa", icon: <FaRegNewspaper /> },
];


const tabContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const tabItem: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};


export default function MediaSection() {
  const [activeTab, setActiveTab] = useState<MediaType>("videos");

  let items: MediaItem[] = [];
  switch (activeTab) {
    case "videos":
      items = videoUrls;
      break;
    case "podcasts":
      items = podcasts;
      break;
    default:
      items = [];
  }

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#1E3A5F]">Medios de comunicación</h2>
          <p className="text-gray-600">
            En esta sección encontrarás una variedad de contenidos que reflejan la actividad y la voz de ASEDUCH.
          </p>
        </div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial="hidden"
          animate="show"
          variants={tabContainer}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              className={`px-5 py-2 rounded-full font-semibold text-lg border transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.key
                  ? "bg-[#1E3A5F] text-white border-[#1E3A5F]"
                  : "bg-gray-100 text-[#1E3A5F] border-gray-300 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.key)}
              variants={tabItem}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Contenido por tab */}
        <div>
          {activeTab === "videos" && (
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-2 text-indigo-700">
                    <FaVideo />
                    <span className="font-bold">{item.title}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">{item.date}</div>
                  <div className="text-gray-700 mb-2">{item.description}</div>
                  <div className="w-full aspect-video rounded overflow-hidden mt-2">
                    <iframe src={`https://www.youtube.com/embed/${item.url}${item.start ? `?start=${item.start}` : ""}`} title={item.title} allowFullScreen className="w-full h-60"></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "podcasts" && (
            <div className="grid md:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-1 text-pink-700">
                    <FaPodcast className="text-base" />
                    <span className="font-semibold text-base">{item.title}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-0.5">{item.date}</div>
                  <div className="text-sm text-gray-600 mb-1 text-center">{item.description}</div>
                  <div className="w-full rounded overflow-hidden mt-1 h-20">
                    <iframe src={item.url} title={item.title} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className="w-full h-24"></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "prensa" && (
            <PrensaFiles />
          )}
        </div>
      </div>
    </section>
  );
}

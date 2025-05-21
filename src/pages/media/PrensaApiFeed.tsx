import { useEffect, useMemo, useState } from "react";
import { FaRegNewspaper, FaExternalLinkAlt } from "react-icons/fa";

interface PrensaItem {
  id: number;
  title: string;
  date: string;
  description: string;
  sourceUrl?: string;
}

// Cambia esta URL por la de tu WordPress si es necesario
const WORDPRESS_API_URL = "https://aseduch.cl/wp-json/wp/v2/posts?category_name=prensa&_embed";



export default function PrensaApiFeed() {
  const [prensa, setPrensa] = useState<PrensaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetch(WORDPRESS_API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener datos de prensa");
        return res.json();
      })
      .then((data: any[]) => {
        const mapped = data.map((item) => ({
          id: item.id,
          title: item.title?.rendered || "Sin título",
          date: item.date ? item.date.substring(0, 10) : "",
          description: item.excerpt?.rendered ? item.excerpt.rendered.replace(/<[^>]+>/g, "") : "",
          sourceUrl: item.meta?.fuente || item.link || undefined,
        }));
        setPrensa(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError("No se pudieron cargar las noticias de prensa. Intenta nuevamente más tarde.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10 text-gray-500">Cargando prensa...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;


  return (
    <div className="grid md:grid-cols-2 gap-8">
      {prensa.map((item) => (
        <div key={item.id} className="block bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-2 text-[#1E3A5F]">
            <FaRegNewspaper />
            <span className="font-bold">{item.title}</span>
          </div>
          <div className="text-xs text-gray-500 mb-1">{item.date}</div>
          <div className="text-gray-700 mb-2">{item.description}</div>
          {item.sourceUrl && (
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline font-semibold mt-2"
            >
              Ver noticia <FaExternalLinkAlt className="inline-block" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

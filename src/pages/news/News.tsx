import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { Seo } from "../../components/Seo";
import { usePosts } from "../../hooks/usePosts";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PER_PAGE = 10;

export default function News() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");


  /* Uso el hook personalizado para manejar la paginación y búsqueda de posts.
     Me aseguro de mantener el estado de carga y si hay más posts por cargar */
  const { posts, loading, hasMore, page, setPage } = usePosts({
    perPage: PER_PAGE,
    search,
    categoryName: "noticias"
  });


  /* Cada vez que el usuario busca algo nuevo, volvemos a la primera página
     para mostrar los resultados desde el inicio */
  useEffect(() => {
    setPage(1);
  }, [search]);


  /* A veces WordPress puede devolver posts duplicados, así que
     me aseguro de que cada post aparezca una sola vez usando sus IDs */
  const uniquePosts = useMemo(() => {
    const seen = new Set<number>();
    return posts.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  }, [posts]);


  const skeletons = Array.from({ length: PER_PAGE });

  return (
    <>
      <Seo
        title="Noticias | ASEDUCH"
        description="Mantente informado con las últimas noticias, eventos y comunicados de ASEDUCH."
        url="https://aseduch.cl/react/news"
      />

      <section className="bg-white text-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#1E3A5F]">Noticias</h2>
            <p className="text-gray-600">
              Mantente al día con las últimas novedades y comunicados de ASEDUCH.
            </p>
          </div>

          {/* Buscador */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Buscar por título…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]"
            />
          </div>

          {/* Grid */}
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {loading && !uniquePosts.length ? (
              // Skeletons mientras cargan
              skeletons.map((_, i) => (
                <div
                  key={`loading-${i}`}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow"
                >
                  <div className="h-48 bg-gray-200 animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mt-4" />
                  </div>
                </div>
              ))
            ) : (
              <>
                {/* Posts ya cargados */}
                {uniquePosts.map((post) => {
                  const media = post._embedded?.["wp:featuredmedia"]?.[0];
                  const imgSrc =
                    media?.media_details?.sizes?.medium?.source_url ||
                    media?.source_url ||
                    "";

                  const date = new Date(post.date).toLocaleDateString("es-CL", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });

                  return (
                    <motion.div
                      key={post.id}
                      variants={fadeInUp}
                      className="cursor-pointer bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
                      onClick={() => navigate(`/react/news/${post.id}`)}
                    >
                      {imgSrc && (
                        <img
                          src={imgSrc}
                          alt={post.title.rendered}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3
                          className="text-xl font-semibold text-gray-900 mb-2"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                        <p
                          className="text-gray-700 text-sm mb-4 flex-grow"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        />
                        <time className="text-gray-500 text-xs">
                          {date}
                        </time>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Skeletons al final mientras carga más */}
                {loading && page > 1 &&
                  skeletons.map((_, i) => (
                    <div
                      key={`loading-${i}`}
                      className="bg-gray-50 rounded-2xl overflow-hidden shadow"
                    >
                      <div className="h-48 bg-gray-200 animate-pulse" />
                      <div className="p-6 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mt-4" />
                      </div>
                    </div>
                  ))}
              </>
            )}
          </motion.div>

          {/* Cargar más */}
          {hasMore && !loading && (
            <div className="text-center mt-12">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="bg-[#1E3A5F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#16304c] transition"
              >
                Cargar más
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

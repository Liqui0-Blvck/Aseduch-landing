import { useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { usePosts } from "../../../hooks/usePosts";
import { Link } from "react-router-dom";

const PER_PAGE = 6;

// Variants para el grid y los items
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function NewsSection() {
  const { posts, loading } = usePosts({
    perPage: PER_PAGE,
    categoryName: "noticias",
  });
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Deduplicar posts por ID y limitar a PER_PAGE
  const uniquePosts = useMemo(() => {
    const seen = new Set<number>();
    const uniques = posts.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
    return uniques.slice(0, PER_PAGE);
  }, [posts]);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A5F]">Noticias</h2>
          <Link to="/news/" className="text-[#1E3A5F] hover:underline">
            Ver todas →
          </Link>
        </div>

        {loading && !hasAnimatedIn ? (
          // Skeletons mientras cargan
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: PER_PAGE }).map((_, i) => (
              <div
                key={`loader-${i}`}
                className="bg-gray-100 rounded-2xl overflow-hidden animate-pulse h-80"
              />
            ))}
          </div>
        ) : (
          // Grid animado de noticias
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onAnimationComplete={() => setHasAnimatedIn(true)}
          >
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
                  variants={itemVariants}
                  className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col"
                >
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={post.title.rendered}
                      className="rounded-xl mb-4 w-full h-48 object-cover"
                      loading="lazy"
                    />
                  )}

                  <p className="text-sm text-gray-500 mb-2">{date}</p>

                  <h3
                    className="text-lg font-semibold text-gray-800 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <Link
                    to={`/news/${post.id}`}
                    className="mt-auto text-[#1E3A5F] font-medium hover:underline self-start"
                  >
                    Leer más →
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}

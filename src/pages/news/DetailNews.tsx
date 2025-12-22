import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Seo } from "../../components/Seo";
import { motion } from "framer-motion";
import { LazyImage } from "../../components/LazyImage";
import { usePost } from "../../hooks/usePost";
import { stripFirstImageAndTitle } from "../../utils/stripContent";
import NotFound from "../404";
import NewsSkeleton from "./components/NewsSkeleton";

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    author?: Array<{ name: string }>;
    "wp:term"?: Array<Array<{ id: number; slug: string }>>;
    "wp:featuredmedia"?: Array<{
      media_details: { sizes: { full?: { source_url: string } } };
      source_url: string;
    }>;
  };
}

const BASE_PATH = "/news";

export default function DetailNews() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();


  /* Primero cargo los detalles de la noticia usando su ID.
     El hook usePost se encarga de hacer el fetch a WordPress */
  const { post, loading: loadingPost, error: errorPost } = usePost(id);


  /* Cuando el usuario navega entre noticias, hay que asegurarse
     de que empiece viendo desde arriba de la página */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  const [related, setRelated] = useState<WPPost[]>([]);
  // @ts-ignore
  const [loadingRelated, setLoadingRelated] = useState(false);


  /* Cuando tenemos la noticia principal, buscamos otras noticias relacionadas
     de la misma categoría para mostrarlas al final. Excluimos la noticia actual
     y limitamos a 3 noticias relacionadas para no sobrecargar la página */
  useEffect(() => {
    // Si no hay categorías asociadas a la noticia, no hacemos nada
    if (!post?._embedded?.["wp:term"]?.[0]?.length) return;
    
    // Obtenemos el ID de la categoría principal de la noticia
    const catId = post._embedded["wp:term"]![0][0].id;

    // Marcamos que estamos cargando noticias relacionadas
    setLoadingRelated(true);
    
    // Hacemos el fetch a WordPress para obtener las noticias relacionadas
    fetch(
      `https://aseduch.cl/wp-json/wp/v2/posts?_embed&per_page=3&categories=${catId}&exclude=${post.id}`
    )
      .then((res) => res.json())
      .then((data: WPPost[]) => {
        // Actualizamos el estado con las noticias relacionadas obtenidas
        setRelated(data);
      })
      .catch((error) => {
        // Si hay un error, lo mostramos en la consola
        console.error(error);
      })
      .finally(() => {
        // Marcamos que ya terminamos de cargar las noticias relacionadas
        setLoadingRelated(false);
      });
  }, [post]);


  const featured =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details.sizes.full
      ?.source_url ||
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "";

  if (errorPost) {
    return (
      <NotFound
        message="Lo sentimos, la noticia que buscas no existe."
        link="/news"
        button="Volver a las noticias"
      />
    );
  }

  return (
    <>
      {/* SEO dinámico */}
      {post && (
        <Seo
          title={`${post.title.rendered} | ASEDUCH`}
          description={post.excerpt.rendered.replace(/<[^>]*>/g, "").trim()}
          url={`https://aseduch.cl${BASE_PATH}/${id}`}
          image={featured}
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: post.title.rendered.replace(/<[^>]+>/g, ""),
            image: [featured],
            datePublished: post.date,
            publisher: {
              "@type": "Organization",
              name: "ASEDUCH",
              logo: {
                "@type": "ImageObject",
                url: "https://aseduch.cl/aseduch-logo.jpg",
              },
            },
            description: post.excerpt.rendered.replace(/<[^>]*>/g, "").trim(),
          }}
        />
      )}

      <article className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
        {loadingPost || !post ? (
          <NewsSkeleton />
        ) : (
          <>
            {/* Título */}
            <motion.h1
              className="text-4xl font-extrabold text-[#1E3A5F] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            {/* Meta */}
            <p className="text-sm text-gray-500 mb-8">
              {new Date(post.date).toLocaleDateString("es-CL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            {/* Imagen */}
            {featured && (
              <motion.div
                className="mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <LazyImage
                  src={featured}
                  alt={post.title.rendered}
                  aspectRatio="16/9"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            )}
            {/* Contenido */}
            <section
              className="prose lg:prose-xl mb-16"
              dangerouslySetInnerHTML={{
                __html: stripFirstImageAndTitle(post.content.rendered).replace(
                  /<a[^>]*>(?:\s*Volver a Noticias\s*)<\/a>/gi,
                  ""
                ),
              }}
            />
          </>
        )}

        {/* Noticias Relacionadas */}
        {!loadingPost && related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-semibold text-[#1E3A5F] mb-6">
              Noticias Relacionadas
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => {
                const media = r._embedded?.["wp:featuredmedia"]?.[0];
                const thumb =
                  // @ts-ignore
                  media?.media_details?.sizes?.medium?.source_url ||
                  media?.source_url ||
                  "";

                return (
                  <motion.div
                    key={r.id}
                    className="cursor-pointer bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate(`${BASE_PATH}/${r.id}`)}
                  >
                    {thumb && (
                      <LazyImage
                        src={thumb}
                        alt={r.title.rendered}
                        aspectRatio="16/9"
                        className="rounded-t-xl"
                      />
                    )}
                    <div className="p-4">
                      <h3
                        className="text-lg font-medium text-gray-900 mb-2"
                        dangerouslySetInnerHTML={{ __html: r.title.rendered }}
                      />
                      <time className="text-gray-500 text-xs">
                        {new Date(r.date).toLocaleDateString("es-CL", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

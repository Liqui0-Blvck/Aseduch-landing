import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MediaSection from "./pages/media/MediaSection";
import NotFound from "./pages/404";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Lazy-load de layout
const Navbar    = lazy(() => import("./components/Navbar"));
const Footer    = lazy(() => import("./components/Footer"));

// Lazy-load de páginas
const Home      = lazy(() => import("./pages/home/Home"));
const About     = lazy(() => import("./pages/about/About"));
const Documents = lazy(() => import("./pages/documents/Documents"));
const Partners  = lazy(() => import("./pages/partner/Partners"));
const News      = lazy(() => import("./pages/news/News"));
const DetailNews = lazy(() => import("./pages/news/DetailNews"));
const Foundation = lazy(() => import("./pages/foundation/Foundation"));

// Fallback sencillo para Suspense
function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {useScrollToTop()}
      {/* Carga Navbar bajo demanda */}
      <Suspense fallback={<Loader />}>
        <Navbar />
      </Suspense>

      {/* Rutas perezosas */}
      <Suspense fallback={<Loader />}>
        <Routes>
          
          <Route path="/react/" element={<Home />} />
          <Route path="/react/about" element={<About />} />
          <Route path="/react/docs" element={<Documents />} />
          <Route path="/react/partners" element={<Partners />} />
          <Route path="/react/news" element={<News />} />
          <Route path="/react/news/:id" element={<DetailNews />} />
          <Route path="/react/media" element={<MediaSection />}/>
          <Route path="/react/foundation" element={<Foundation />}/>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>

      {/* Carga Footer bajo demanda */}
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </>
  );
}

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
const FoundationActivities = lazy(() => import("./pages/foundation/components/FoundationActivities"));
const FoundationDonations = lazy(() => import("./pages/foundation/components/DonationInfo"));
const VisionMision = lazy(() => import("./pages/about/components/OurVisionMision"));
const Values     = lazy(() => import("./pages/about/components/OurValues"));
const Directive  = lazy(() => import("./pages/about/components/OurDirective"));
const SocialQuote = lazy(() => import("./pages/partner/components/SocialQuotes"));
const Rights = lazy(() => import("./pages/partner/components/Rights"));
const Advices = lazy(() => import("./pages/partner/components/Advices"));
const Benefits = lazy(() => import("./pages/partner/components/Benefits"));


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
          <Route path="/react/media" element={<MediaSection />} />
          <Route path="/react/media/press-media/:id" element={<DetailNews />} />
          <Route path="/react/foundation" element={<Foundation />} />
          <Route path="/react/foundation/activities" element={<FoundationActivities activities={[]} />} />
          <Route path="/react/foundation/donations" element={<FoundationDonations />} />
          <Route path="/react/about" element={<About />} />
          <Route path="/react/about/vision-mision" element={<VisionMision />} />
          <Route path="/react/about/values" element={<Values />} />
          <Route path="/react/about/directive" element={<Directive />} />
          <Route path="/react/partners" element={<Partners />} />
          <Route path="/react/partners/advices" element={<Advices />} />
          <Route path="/react/partners/rights" element={<Rights />} />
          <Route path="/react/partners/social-quotes" element={<SocialQuote />} />
          <Route path="/react/partners/benefits" element={<Benefits />} />
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

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MediaSection from "./pages/media/MediaSection";
import NotFound from "./pages/404";
import { useScrollToTop } from "./hooks/useScrollToTop";
import SocialQuotes from "./pages/partner/components/SocialQuotes";

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
// const SocialQuote = lazy(() => import("./pages/partner/components/SocialQuotes"));
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
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Documents />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<DetailNews />} />
          <Route path="/media" element={<MediaSection />} />
          <Route path="/media/press-media/:id" element={<DetailNews />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/foundation/activities" element={<FoundationActivities activities={[]} />} />
          <Route path="/foundation/donations" element={<FoundationDonations />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/vision-mision" element={<VisionMision />} />
          <Route path="/about/values" element={<Values />} />
          <Route path="/about/directive" element={<Directive />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/advices" element={<Advices />} />
          <Route path="/partners/rights" element={<Rights />} />
          <Route path="/partners/social-quotes" element={<SocialQuotes />} />
          <Route path="/partners/benefits" element={<Benefits />} />
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

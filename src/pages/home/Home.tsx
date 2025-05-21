import React, { lazy, Suspense } from "react";
import HeroSection from "./components/HeroSection";
import { Seo } from "../../components/Seo";

// Lazy load de secciones pesadas
const BrandSection     = lazy(() => import("./components/BrandSection"));
const AboutSection     = lazy(() => import("./components/AboutSection"));
const BenefitsSection  = lazy(() => import("./components/BenefitsSection"));
const NewsSection      = lazy(() => import("./components/NewsSection"));
const PaymentSection   = lazy(() => import("./components/PaymentSection"));

// Un spinner sencillito
function Loader() {
  return (
    <div className="flex justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
}

// Error Boundary muy simple
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return <div className="p-10 text-center text-red-600">Oops! Algo salió mal.</div>;
    }
    return this.props.children;
  }
}

export default function Home() {
  return (
    <>
      <Seo 
        title="ASEDUCH | Asociación de Educadores de Chile"
        description="ASEDUCH es la voz de los educadores chilenos, trabajando por una educación de calidad y el desarrollo profesional docente."
        url="/"
      />
      <HeroSection />

      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <BrandSection />
          <AboutSection />
          <BenefitsSection />
          <PaymentSection />
          <NewsSection />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

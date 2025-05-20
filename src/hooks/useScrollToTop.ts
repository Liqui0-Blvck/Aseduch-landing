// src/hooks/useScrollToTop.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook que, al detectar un cambio en la ruta (pathname),
 * desplaza la ventana al inicio (top: 0).
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantáneo al top; cambia behavior a 'smooth' si quieres animación
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
}

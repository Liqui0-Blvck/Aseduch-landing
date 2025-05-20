// src/hooks/useJsonLd.ts
import { useEffect } from 'react';

/**
 * Inserta un <script type="application/ld+json"> con el JSON proporcionado,
 * y lo elimina al desmontar.
 */
export function useJsonLd(json: object) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(json);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [json]);
}
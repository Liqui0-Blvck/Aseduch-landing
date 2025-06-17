// src/components/Seo.tsx
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useJsonLd }     from '../hooks/useJsonLd';
import { useEffect }     from 'react';

interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  jsonLd?: object;
}

export function Seo({ title, description, url, image, jsonLd }: SeoProps) {
  useEffect(() => {
    if (!url) return;
    let link: HTMLLinkElement|null = document.querySelector(`link[rel="canonical"]`);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [url]);

  return null;
}

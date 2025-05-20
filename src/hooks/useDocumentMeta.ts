import { useEffect } from 'react';

interface MetaProps {
  name: string;
  content: string;
}

export function useDocumentMeta({ name, content }: MetaProps) {
  useEffect(() => {
    let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }, [name, content]);
}

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

describe('useDocumentMeta', () => {
  beforeEach(() => {
    // Limpiar meta tags antes de cada prueba
    document.head.innerHTML = '';
  });

  afterEach(() => {
    // Limpiar meta tags después de cada prueba
    document.head.innerHTML = '';
  });

  it('should create a new meta tag if it does not exist', () => {
    renderHook(() => useDocumentMeta({ name: 'description', content: 'Test description' }));

    const metaTag = document.querySelector('meta[name="description"]');
    expect(metaTag).toBeTruthy();
    expect(metaTag?.getAttribute('content')).toBe('Test description');
  });

  it('should update existing meta tag content', () => {
    const { rerender } = renderHook(
      (props) => useDocumentMeta(props),
      { initialProps: { name: 'description', content: 'Initial description' } }
    );

    // Verificar contenido inicial
    let metaTag = document.querySelector('meta[name="description"]');
    expect(metaTag?.getAttribute('content')).toBe('Initial description');

    // Actualizar contenido
    rerender({ name: 'description', content: 'Updated description' });

    // Verificar que se actualizó el contenido
    metaTag = document.querySelector('meta[name="description"]');
    expect(metaTag?.getAttribute('content')).toBe('Updated description');
  });

  it('should handle multiple meta tags', () => {
    renderHook(() => useDocumentMeta({ name: 'description', content: 'Test description' }));
    renderHook(() => useDocumentMeta({ name: 'keywords', content: 'test, keywords' }));

    const descriptionTag = document.querySelector('meta[name="description"]');
    const keywordsTag = document.querySelector('meta[name="keywords"]');

    expect(descriptionTag?.getAttribute('content')).toBe('Test description');
    expect(keywordsTag?.getAttribute('content')).toBe('test, keywords');
  });
});

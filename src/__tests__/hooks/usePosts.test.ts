import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePosts } from '../../hooks/usePosts';
import type { WordPressPost } from '../../types/GeneralType';

// Mock de la respuesta de WordPress
const mockPosts: WordPressPost[] = [
  {
    id: 1,
    title: { rendered: 'Post 1' },
    excerpt: { rendered: 'Excerpt 1' },
    content: { rendered: 'Content 1' },
    date: '2025-05-19T22:00:00',
    modified: '2025-05-19T22:00:00',
    slug: 'post-1',
    link: 'https://aseduch.cl/post-1',
    categories: [1],
    featured_media: 1,
    _embedded: {
      'wp:featuredmedia': [
        {
          id: 1,
          date: '2025-05-19T22:00:00',
          slug: 'image-1',
          title: { rendered: 'Image 1' },
          alt_text: 'Image 1 Alt',
          source_url: 'image1.jpg',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 800,
            height: 600,
            file: 'image1.jpg',
            sizes: {
              medium: {
                file: 'image1-medium.jpg',
                width: 300,
                height: 225,
                mime_type: 'image/jpeg',
                source_url: 'image1-medium.jpg'
              }
            }
          }
        }
      ]
    }
  },
  {
    id: 2,
    title: { rendered: 'Post 2' },
    excerpt: { rendered: 'Excerpt 2' },
    content: { rendered: 'Content 2' },
    date: '2025-05-19T21:00:00',
    modified: '2025-05-19T21:00:00',
    slug: 'post-2',
    link: 'https://aseduch.cl/post-2',
    categories: [1],
    featured_media: 2,
    _embedded: {
      'wp:featuredmedia': [
        {
          id: 2,
          date: '2025-05-19T21:00:00',
          slug: 'image-2',
          title: { rendered: 'Image 2' },
          alt_text: 'Image 2 Alt',
          source_url: 'image2.jpg',
          media_type: 'image',
          mime_type: 'image/jpeg',
          media_details: {
            width: 800,
            height: 600,
            file: 'image2.jpg',
            sizes: {
              medium: {
                file: 'image2-medium.jpg',
                width: 300,
                height: 225,
                mime_type: 'image/jpeg',
                source_url: 'image2-medium.jpg'
              }
            }
          }
        }
      ]
    }
  }
];

// Mock de fetch global
const mockFetch = vi.fn();
global.fetch = mockFetch as unknown as typeof global.fetch;

describe('usePosts', () => {
  const originalFetch = global.fetch;

  afterAll(() => {
    global.fetch = originalFetch;
  });
  beforeEach(() => {
    vi.resetAllMocks();
    // Configurar el mock de fetch para devolver posts
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockPosts)
    });
  });

  it('should fetch posts on mount', async () => {
    const { result } = renderHook(() => usePosts({ perPage: 10 }));

    // Verificar estado inicial
    expect(result.current.loading).toBe(true);
    expect(result.current.posts).toEqual([]);

    // Esperar a que se resuelva la promesa
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Verificar que se hayan cargado los posts
    expect(result.current.loading).toBe(false);
    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.hasMore).toBe(false);
  });

  it('should filter posts by search term', async () => {
    const { result, rerender } = renderHook(
      ({ search }) => usePosts({ perPage: 10, search }), 
      { initialProps: { search: '' } }
    );

    // Esperar la carga inicial
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Simular búsqueda
    await act(async () => {
      rerender({ search: 'Post 1' });
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Verificar que fetch fue llamado con el término de búsqueda
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('search=Post+1')
    );
  });

  it('should handle pagination', async () => {
    const { result } = renderHook(() => usePosts({ perPage: 1 }));

    // Esperar carga inicial
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Cargar siguiente página
    await act(async () => {
      result.current.setPage(2);
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Verificar que fetch fue llamado con el offset correcto
    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('page=2')
    );
  });

  it('should handle fetch errors', async () => {
    // Simular error de fetch
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => usePosts({ perPage: 10 }));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeTruthy();
    expect(result.current.posts).toEqual([]);
  });

  it('should handle 400 error as no more pages', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 400,
      json: () => Promise.resolve([])
    } as Response);

    const { result } = renderHook(() => usePosts({ perPage: 10 }));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(result.current.hasMore).toBe(false);
    expect(result.current.posts).toEqual([]);
  });

  it('should filter by category name', async () => {
    const { result } = renderHook(() => usePosts({ categoryName: 'test-category' }));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(mockFetch).toHaveBeenCalledWith(
      expect.stringContaining('category_name=test-category')
    );
    expect(result.current.loading).toBe(false);
  });

  it('should reset state when filters change', async () => {
    // Configurar respuestas del mock para cada llamada
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockPosts)
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([mockPosts[0]]) // Segunda llamada devuelve un post para mantener hasMore en true
      } as Response);

    const { result, rerender } = renderHook(
      ({ search }) => usePosts({ search }), 
      { initialProps: { search: '' } }
    );

    // Esperar carga inicial
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Verificar estado inicial
    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.page).toBe(1);

    // Cambiar filtro y verificar reset inmediato
    rerender({ search: 'new search' });
    
    // Verificar que el estado se reinició inmediatamente
    expect(result.current.posts).toEqual([]);
    expect(result.current.page).toBe(1);
    expect(result.current.hasMore).toBe(true);
    
    // Esperar la nueva carga
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Verificar que se cargó el nuevo resultado
    expect(result.current.posts).toEqual([mockPosts[0]]);
  });

  it('should not fetch more when hasMore is false', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([mockPosts[0]]) // Devolver solo un post
    } as Response);

    const { result } = renderHook(() => usePosts({ perPage: 2 }));

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // Al devolver menos posts que perPage, hasMore debería ser false
    expect(result.current.hasMore).toBe(false);

    const initialCallCount = mockFetch.mock.calls.length;

    // Intentar cargar más páginas
    await act(async () => {
      result.current.setPage(2);
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    // No debería haber hecho más llamadas a fetch
    expect(mockFetch.mock.calls.length).toBe(initialCallCount);
  });
});

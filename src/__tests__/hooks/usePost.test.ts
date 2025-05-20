import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePost } from '../../hooks/usePost';
import type { WordPressPost } from '../../types/GeneralType';

describe('usePost', () => {
  const mockPost: WordPressPost = {
    id: 1,
    title: { rendered: 'Test Post' },
    excerpt: { rendered: 'Test Excerpt' },
    content: { rendered: 'Test Content' },
    date: '2025-05-19T22:00:00',
    modified: '2025-05-19T22:00:00',
    slug: 'test-post',
    link: 'https://aseduch.cl/test-post',
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
  };

  const mockFetch = vi.fn();
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.resetAllMocks();
    global.fetch = mockFetch;
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('should fetch post when id is provided', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockPost)
    });

    const { result } = renderHook(() => usePost('1'));

    // Verificar estado inicial
    expect(result.current.loading).toBe(true);
    expect(result.current.post).toBeNull();
    expect(result.current.error).toBeNull();

    // Esperar a que se resuelva la promesa
    await act(async () => {
      await Promise.resolve(); // Esperar al siguiente tick
    });

    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    // Verificar que se cargó el post
    expect(result.current.post).toEqual(mockPost);
    expect(result.current.error).toBeNull();
    expect(mockFetch).toHaveBeenCalledWith('https://aseduch.cl/wp-json/wp/v2/posts/1?_embed=true');
  });

  it('should handle fetch errors', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 404
    });

    const { result } = renderHook(() => usePost('1'));

    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.post).toBeNull();
    expect(result.current.error).toBe('Error 404');
  });

  it('should not fetch when id is not provided', () => {
    const { result } = renderHook(() => usePost());

    expect(result.current.loading).toBe(true);
    expect(result.current.post).toBeNull();
    expect(result.current.error).toBeNull();
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it('should update when post id changes', async () => {
    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ...mockPost, id: 1 })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ ...mockPost, id: 2 })
      });

    const { result, rerender } = renderHook((id) => usePost(id), {
      initialProps: '1'
    });

    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.post?.id).toBe(1);

    // Cambiar el ID
    rerender('2');

    await vi.waitFor(() => {
      expect(result.current.post?.id).toBe(2);
    });
  });
});

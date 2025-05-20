import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMedia } from '../../hooks/useMedia';
import type { WordPressImage } from '../../types/GeneralType';

describe('useMedia', () => {
  const mockMedia: WordPressImage[] = [
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
    },
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
  ];

  const mockFetch = vi.fn();
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.resetAllMocks();
    global.fetch = mockFetch;
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it('should fetch media items', async () => {
    // Configurar las promesas de fetch para que se resuelvan inmediatamente
    mockFetch.mockClear();
    // Configurar respuestas inmediatas para cada URL
    mockFetch
      .mockResolvedValueOnce({ json: () => Promise.resolve(mockMedia[0]) })
      .mockResolvedValueOnce({ json: () => Promise.resolve(mockMedia[1]) });

    const { result } = renderHook(() => useMedia([1, 2]));

    // Estado inicial
    expect(result.current.loading).toBe(true);
    expect(result.current.media).toEqual([]);

    // Esperar a que se completen las promesas
    await act(async () => {
      await Promise.resolve();
    });

    // Asegurarse de que todas las actualizaciones de estado se hayan procesado
    await act(async () => {});
    await act(async () => {});

    // Verificar estado final
    expect(result.current.loading).toBe(false);
    expect(result.current.media).toEqual(mockMedia);
    expect(mockFetch).toHaveBeenCalledWith('https://aseduch.cl/wp-json/wp/v2/media/1');
    expect(mockFetch).toHaveBeenCalledWith('https://aseduch.cl/wp-json/wp/v2/media/2');

    vi.useRealTimers();
  });

  it('should handle fetch errors', async () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    mockFetch.mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useMedia([1]));

    await vi.waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.media).toEqual([]);
    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });

  it('should update when media ids change', async () => {
    mockFetch
      .mockResolvedValueOnce({ json: () => Promise.resolve(mockMedia[0]) })
      .mockResolvedValueOnce({ json: () => Promise.resolve(mockMedia[1]) });

    const { result, rerender } = renderHook((ids: number[]) => useMedia(ids), {
      initialProps: [1]
    });

    // Esperar la carga inicial
    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.media).toEqual([mockMedia[0]]);

    // Cambiar los IDs
    mockFetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockMedia[1]) });
    
    await act(async () => {
      rerender([2]);
      await Promise.resolve();
    });

    expect(result.current.media).toEqual([mockMedia[1]]);
    expect(result.current.loading).toBe(false);
  });
});

import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

describe('useDocumentTitle', () => {
  const originalTitle = document.title;

  beforeEach(() => {
    // Restaurar el título original antes de cada prueba
    document.title = originalTitle;
  });

  it('should update document title', () => {
    renderHook(() => useDocumentTitle('New Title'));
    expect(document.title).toBe('New Title');
  });

  it('should update title when prop changes', () => {
    const { rerender } = renderHook((title) => useDocumentTitle(title), {
      initialProps: 'Initial Title'
    });

    expect(document.title).toBe('Initial Title');

    rerender('Updated Title');
    expect(document.title).toBe('Updated Title');
  });
});

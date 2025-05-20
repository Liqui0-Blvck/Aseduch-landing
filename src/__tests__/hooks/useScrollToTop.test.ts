import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { useLocation } from 'react-router-dom';

// Mock de react-router-dom
vi.mock('react-router-dom', () => ({
  useLocation: vi.fn()
}));

describe('useScrollToTop', () => {
  const mockLocation = { pathname: '/initial' };
  const mockScrollTo = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
    (useLocation as any).mockReturnValue(mockLocation);
    window.scrollTo = mockScrollTo;
  });

  it('should scroll to top when pathname changes', () => {
    renderHook(() => useScrollToTop());

    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });

  it('should scroll to top when location changes', () => {
    const { rerender } = renderHook(() => useScrollToTop());

    // Primera llamada al montar
    expect(mockScrollTo).toHaveBeenCalledTimes(1);

    // Simular cambio de ruta
    (useLocation as any).mockReturnValue({ pathname: '/new-route' });
    rerender();

    // Debería llamarse de nuevo
    expect(mockScrollTo).toHaveBeenCalledTimes(2);
    expect(mockScrollTo).toHaveBeenLastCalledWith({ top: 0, behavior: 'auto' });
  });

  it('should not scroll if pathname remains the same', () => {
    const { rerender } = renderHook(() => useScrollToTop());

    // Primera llamada al montar
    expect(mockScrollTo).toHaveBeenCalledTimes(1);

    // Rerender sin cambiar pathname
    rerender();

    // No debería llamarse de nuevo
    expect(mockScrollTo).toHaveBeenCalledTimes(1);
  });
});

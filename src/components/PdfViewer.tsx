import { useState, useMemo } from 'react';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Spinner } from './Spinner';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfViewerProps {
  fileUrl: string;
  onClose: () => void;
}

export function PdfViewer({ fileUrl, onClose }: PdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Check if the URL is absolute or relative
  const getPdfUrl = (url: string) => {
    try {
      // If it's already an absolute URL, use it directly
      new URL(url);
      return url;
    } catch (e) {
      // If it's a relative URL, construct the full URL
      return `${window.location.origin}${url.startsWith('/') ? '' : '/'}${url}`;
    }
  };

  // Usar useMemo para mantener una URL estable y evitar bucles infinitos
  const pdfUrl = useMemo(() => {
    return `${getPdfUrl(fileUrl)}?t=${new Date().getTime()}`;
  }, [fileUrl]);


  // Handle PDF loading state
  const handleDocumentLoadSuccess = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error);
    setIsLoading(false);
    setError('No se pudo cargar el documento. Por favor, inténtelo de nuevo más tarde.');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col z-50 p-4">
      <div className="flex justify-between items-center bg-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold">Vista Previa del Documento</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Cerrar visor de PDF"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex-1 bg-white rounded-b-lg overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
            <Spinner size="lg" />
          </div>
        )}
        
        {error ? (
          <div className="h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Error al cargar el documento</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Cerrar
              </button>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Abrir en una pestaña nueva
              </a>
            </div>
          </div>
        ) : (
          <div className="h-full w-full">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={SpecialZoomLevel.PageFit}
                onDocumentLoad={handleDocumentLoadSuccess}
                renderError={(error) => (
                  <div className="p-6 text-center">
                    <div className="text-red-600 mb-4">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Error al cargar el documento</h3>
                    <p className="text-gray-600 mb-4">{error?.message || 'Ocurrió un error al cargar el PDF'}</p>
                    <div className="flex justify-center space-x-3">
                      <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                      >
                        Cerrar
                      </button>
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Abrir en una pestaña nueva
                      </a>
                    </div>
                  </div>
                )}
              />
            </Worker>
          </div>
        )}
      </div>
    </div>
  );
}

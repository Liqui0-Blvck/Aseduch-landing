import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Spinner } from '../../components/Spinner';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function DocumentViewer() {
  const { documentUrl } = useParams<{ documentUrl: string }>();
  const navigate = useNavigate();
  const [pdfUrl, setPdfUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Decode the URL-encoded document path
  const decodedUrl = documentUrl ? decodeURIComponent(documentUrl) : '';
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    if (!decodedUrl) {
      setError('No se ha especificado un documento para visualizar');
      setIsLoading(false);
      return;
    }

    const fetchPdf = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(decodedUrl);
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo cargar el documento`);
        }
        
        const blob = await response.blob();
        
        // Check if the response is actually a PDF
        if (blob.type !== 'application/pdf') {
          throw new Error('El archivo solicitado no es un documento PDF válido');
        }
        
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setError(null);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError(err instanceof Error ? err.message : 'Error al cargar el documento');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPdf();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [decodedUrl]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-gray-600">Cargando documento...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error al cargar el documento</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Volver atrás
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Visualizador de Documentos
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Cerrar visor de PDF"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-[calc(100vh-200px)]">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                renderError={() => (
                  <div className="p-8 text-center">
                    <div className="text-red-500 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Error al cargar el documento</h2>
                    <p className="text-gray-600 mb-6">No se pudo cargar el documento solicitado. Por favor, inténtelo de nuevo más tarde.</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Reintentar
                    </button>
                  </div>
                )}
              />
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
}

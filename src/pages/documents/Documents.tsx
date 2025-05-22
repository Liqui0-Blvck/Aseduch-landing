import { motion } from "framer-motion";
import { FaFilePdf, FaTimes } from 'react-icons/fa';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useState } from 'react';
import { Seo } from "../../components/Seo";
import { PdfViewer } from "../../components/PdfViewer";

// Configuración de worker para react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// Definición de tipos para los documentos
type Categoria = 'analisis' | 'declaraciones';

interface DocumentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  fecha: string;
  categoria: Categoria;
  destacado?: boolean;
  type: 'pdf' | 'other';
  directUrl?: string;
}

const documentosPorCategoria: Record<Categoria, { titulo: string; documentos: DocumentItem[] }> = {
  analisis: {
    titulo: "Análisis y Propuestas",
    documentos: [
      {
        id: 'propuestas-reactivacion-educativa',
        title: "Propuestas para la Reactivación Educativa",
        description: "Documento con propuestas clave para la educación post-pandemia.",
        url: "/react/assets/analisis/Propuestas-Reactivacion-Educativa.pdf",
        fecha: "2023",
        categoria: 'analisis',
        destacado: true,
        type: 'pdf',
        directUrl: "/react/assets/analisis/Propuestas-Reactivacion-Educativa.pdf"
      },
      {
        id: 'minuta-xd',
        title: "Minuta Base de la nueva Constitución",
        description: "Minuta de análisis educativo.",
        url: "/react/assets/analisis/minuta-xd.pdf",
        fecha: "2023",
        categoria: 'analisis',
        type: 'pdf',
        directUrl: "/react/assets/analisis/minuta-xd.pdf"
      }
    ]
  },
  declaraciones: {
    titulo: "Declaraciones Públicas",
    documentos: [
      {
        id: 'declaracion-estatutos',
        title: "Estatutos de la Asociación",
        description: "Documento oficial con los estatutos actualizados de ASEDUCH A.G.",
        url: "/react/assets/declaraciones/Estatutos-ASEDUCH_7abr2022.pdf",
        fecha: "07/04/2022",
        categoria: 'declaraciones',
        destacado: true,
        type: 'pdf',
        directUrl: "/react/assets/declaraciones/Estatutos-ASEDUCH_7abr2022.pdf"
      },
      {
        id: 'minuta-22022-simce',
        title: "Minuta SIMCE 2022",
        description: "Minuta sobre resultados SIMCE 2022.",
        url: "/react/assets/declaraciones/Minuta-22022-SIMCE.pdf",
        fecha: "2022",
        categoria: 'declaraciones',
        type: 'pdf',
        directUrl: "/react/assets/declaraciones/Minuta-22022-SIMCE.pdf"
      },
      {
        id: 'declaracion-simce-2022',
        title: "Declaración SIMCE 2022",
        description: "Declaración pública sobre el SIMCE 2022.",
        url: "/react/assets/declaraciones/declaracion-simce-2022.pdf",
        fecha: "2022",
        categoria: 'declaraciones',
        type: 'pdf',
        directUrl: "/react/assets/declaraciones/declaracion-simce-2022.pdf"
      },
      {
        id: 'toma-liceos',
        title: "Posición sobre Toma de Liceos",
        description: "Declaración oficial de ASEDUCH ante las ocupaciones estudiantiles y abandono de deberes.",
        url: "/react/assets/declaraciones/toma-liceos.pdf",
        fecha: "2023",
        categoria: 'declaraciones',
        type: 'pdf',
        directUrl: "/react/assets/declaraciones/toma-liceos.pdf"
      }
    ]
  }
};

export default function Documents() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria>('analisis');

  const handleDocumentClick = (url: string) => {
    setSelectedPdf(url);
  };

  // Obtener todos los documentos para mostrar los destacados
  const todosLosDocumentos = Object.values(documentosPorCategoria).flatMap(cat => cat.documentos);
  const documentosDestacados = todosLosDocumentos.filter(doc => doc.destacado);

  return (
    <>
      <Seo
        title="Documentos | ASEDUCH"
        description="Accede a los documentos oficiales, estatutos, minutas y material informativo de ASEDUCH. Encuentra información sobre políticas educativas y propuestas."
        url="/documents"
      />
      <section className="bg-white py-16 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">
            Documentos Institucionales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accede a los documentos oficiales, análisis y declaraciones de ASEDUCH.
          </p>
        </motion.div>

        {/* Navegación por categorías */}
        <div className="flex justify-center mb-12">
          <nav className="flex space-x-1 rounded-lg bg-gray-100 p-1">
            {Object.entries(documentosPorCategoria).map(([key, categoria]) => (
              <button
                key={key}
                onClick={() => setCategoriaActiva(key as Categoria)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                  categoriaActiva === key
                    ? 'bg-white shadow-sm text-[#1E3A5F]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {categoria.titulo}
              </button>
            ))}
          </nav>
        </div>

        {/* Documentos destacados */}
        {documentosDestacados.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Documentos Destacados</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {documentosDestacados.map((doc) => (
                <motion.div
                  key={doc.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  onClick={() => handleDocumentClick(doc.url)}
                >
                  <div className="h-1 w-12 bg-[#C0392B] rounded mb-4" />
                  <div className="text-[#1E3A5F] text-2xl mb-4">
                    <FaFilePdf />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 flex-grow mb-4">
                    {doc.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    Publicado el {doc.fecha}
                  </div>
                  <div className="mt-auto">
                    <button className="inline-flex items-center justify-center bg-[#1E3A5F] hover:bg-[#16304c] text-white px-4 py-2 rounded-full text-sm font-medium transition w-full">
                      Ver documento
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Lista de documentos por categoría */}
        <div className="space-y-12">
          {Object.entries(documentosPorCategoria).map(([key, categoria]) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={categoriaActiva !== key ? 'hidden' : ''}
            >
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">{categoria.titulo}</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {categoria.documentos.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#1E3A5F] transition cursor-pointer"
                      onClick={() => handleDocumentClick(doc.url)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-[#1E3A5F] text-2xl mt-1">
                          <FaFilePdf />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {doc.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {doc.description}
                          </p>
                          <div className="text-xs text-gray-500">
                            Publicado el {doc.fecha}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Vista previa del documento</h3>
              <button 
                onClick={() => setSelectedPdf(null)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Cerrar visor de PDF"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Vista previa del documento
                      </h3>
                      <button
                        onClick={() => setSelectedPdf(null)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <FaTimes className="h-6 w-6" />
                      </button>
                    </div>
                    <PdfViewer fileUrl={selectedPdf} onClose={() => setSelectedPdf(null)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    </>
    
  );
}

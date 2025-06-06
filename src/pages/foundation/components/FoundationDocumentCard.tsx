import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

export interface FoundationDocument {
  id: number;
  title: string;
  type: string;
  size: string;
  url: string;
  fecha?: string;
}

interface FoundationDocumentCardProps {
  doc: FoundationDocument;
  onViewOnline?: (url: string) => void;
}

export default function FoundationDocumentCard({ doc, onViewOnline }: FoundationDocumentCardProps) {
  const handleViewClick = (e: React.MouseEvent) => {
    if (onViewOnline) {
      e.preventDefault();
      onViewOnline(doc.url);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200 h-full cursor-pointer"
      whileHover={{ y: -5, borderColor: '#3B82F6' }}
      onClick={onViewOnline ? handleViewClick : undefined}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Barra decorativa superior */}
        <div className="h-1 w-12 bg-blue-600 rounded mb-4" />
        
        <div className="flex items-start mb-4">
          <div className="text-blue-600 mr-3 mt-1">
            <FaFilePdf className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-1">{doc.title}</h3>
            <p className="text-sm text-gray-500">
              {doc.type} • {doc.size} {doc.fecha && `• ${doc.fecha}`}
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mt-auto pt-4">
          {onViewOnline ? (
            <button
              onClick={handleViewClick}
              className="inline-flex items-center justify-center bg-[#1E3A5F] hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium transition w-full sm:w-auto"
            >
              Ver documento
            </button>
          ) : (
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1E3A5F] hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium transition w-full sm:w-auto"
            >
              Ver documento <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
          )}
          
          <a
            href={doc.url}
            download
            className="inline-flex items-center justify-center border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium transition w-full sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaDownload className="mr-2" /> Descargar
          </a>
        </div>
      </div>
    </motion.div>
  );
}

import { FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';

export interface FoundationDocument {
  id: number;
  title: string;
  type: string;
  size: string;
  url: string;
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FaFilePdf className="w-6 h-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">{doc.type} • {doc.size}</p>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-blue-900 mb-4 flex-grow">{doc.title}</h3>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {onViewOnline ? (
            <button
              onClick={handleViewClick}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <FaEye className="mr-2" /> Ver PDF
            </button>
          ) : (
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <FaEye className="mr-2" /> Ver PDF
            </a>
          )}
          
          <a
            href={doc.url}
            download
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="mr-2" /> Descargar
          </a>
        </div>
      </div>
    </div>
  );
}

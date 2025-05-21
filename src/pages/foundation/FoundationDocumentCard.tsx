import { FaFilePdf, FaArrowRight, FaDownload } from 'react-icons/fa';

export interface FoundationDocument {
  id: number;
  title: string;
  type: string;
  size: string;
  url: string;
}

export default function FoundationDocumentCard({ doc }: { doc: FoundationDocument }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-600">
            <FaFilePdf className="w-6 h-6" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">{doc.type} • {doc.size}</p>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
        <div className="flex space-x-4 mt-4">
          <a
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            Ver en línea <FaArrowRight className="ml-2" />
          </a>
          <a
            href={doc.url}
            download
            className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar <FaDownload className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

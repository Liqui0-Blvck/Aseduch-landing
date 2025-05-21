import { motion } from "framer-motion";
import { DocumentLink } from "./DocumentLink";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Documento {
  titulo: string;
  descripcion: string;
  url: string;
  tipo: 'pdf' | 'docx' | 'externo';
  fecha: string;
}

export function DocumentosInstitucionales() {
  const documentos: Documento[] = [
    {
      titulo: "Estatutos de la Asociación",
      descripcion: "Documento oficial con los estatutos actualizados de ASEDUCH A.G.",
      url: "/documentos/estatutos-aseduch.pdf",
      tipo: 'pdf',
      fecha: "07/04/2022"
    },
    {
      titulo: "Reglamento Interno",
      descripcion: "Reglamento que rige el funcionamiento interno de la asociación.",
      url: "/documentos/reglamento-interno.pdf",
      tipo: 'pdf',
      fecha: "15/03/2023"
    },
    {
      titulo: "Estatutos Fundación ASEDUCH",
      descripcion: "Documentación oficial de la Fundación ASEDUCH.",
      url: "https://fundacion.aseduch.cl/estatutos",
      tipo: 'externo',
      fecha: "10/05/2023"
    },
    {
      titulo: "Memoria Anual 2023",
      descripcion: "Resumen de actividades y logros del año 2023.",
      url: "/documentos/memoria-anual-2023.pdf",
      tipo: 'pdf',
      fecha: "15/01/2024"
    },
    {
      titulo: "Reglamento de Ética",
      descripcion: "Código de conducta y principios éticos de la asociación.",
      url: "/documentos/reglamento-etica.pdf",
      tipo: 'pdf',
      fecha: "22/08/2022"
    },
    {
      titulo: "Informe de Gestión 2023",
      descripcion: "Balance y resultados del período 2023.",
      url: "/documentos/informe-gestion-2023.docx",
      tipo: 'docx',
      fecha: "30/03/2024"
    }
  ];

  const getIcono = (tipo: string) => {
    switch(tipo) {
      case 'pdf':
        return <FaFilePdf className="text-red-500 text-2xl" />;
      case 'docx':
        return <FaFileWord className="text-blue-500 text-2xl" />;
      default:
        return <FaExternalLinkAlt className="text-gray-500 text-2xl" />;
    }
  };

  return (
    <motion.section 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center">
          Documentos Institucionales
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentos.map((doc, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="mt-1">
                    {getIcono(doc.tipo)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E3A5F] mb-1">
                      {doc.titulo}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Fecha: {doc.fecha}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {doc.descripcion}
                </p>
                <div className="flex justify-end">
                  <DocumentLink 
                    url={doc.url} 
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    showExternalIcon={doc.tipo === 'externo'}
                    showDownload={doc.tipo !== 'externo'}
                    downloadName={doc.titulo.toLowerCase().replace(/\s+/g, '-')}
                  >
                    {doc.tipo === 'externo' ? 'Ver documento' : 'Descargar'}
                  </DocumentLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

import { motion } from "framer-motion";
import { PdfViewer } from "./PdfViewer";
import { useState } from "react";

interface Documento {
  titulo: string;
  descripcion: string;
  url: string;
  tipo: 'pdf' | 'docx' | 'externo';
  fecha: string;
}

export function DocumentosInstitucionales() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const documentos: Documento[] = [
    {
      titulo: "Estatutos de la Asociación",
      descripcion: "Documento oficial con los estatutos actualizados de ASEDUCH A.G.",
      url: "/react/assets/declaraciones/Estatutos-ASEDUCH_7abr2022.pdf",
      tipo: 'pdf',
      fecha: "07/04/2022"
    },
    {
      titulo: "Estatutos Fundación ASEDUCH",
      descripcion: "Documentación oficial de la Fundación ASEDUCH.",
      url: "/react/assets/fundacion/escritura_constitucion.pdf",
      tipo: 'pdf',
      fecha: "10/05/2023"
    },
  ];



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
              onClick={() => setSelectedPdf(doc.url)}
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
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
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedPdf && (
        <PdfViewer 
          fileUrl={selectedPdf}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </motion.section>
  );
}

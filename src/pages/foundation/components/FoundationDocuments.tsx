import { useState } from 'react';
import { motion } from 'framer-motion';
import { PdfViewer } from '../../../components/PdfViewer';
import FoundationDocumentCard, { type FoundationDocument } from './FoundationDocumentCard';

interface FoundationDocumentsProps {
  documents: FoundationDocument[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function FoundationDocuments({ documents }: FoundationDocumentsProps) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const handleViewOnline = (url: string) => setSelectedPdf(url);
  const handleClosePdf = () => setSelectedPdf(null);

  return (
    <motion.section 
      className="py-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-3 tracking-tight">Documentos Institucionales</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Accede y descarga los principales documentos que rigen y respaldan el trabajo de la Fundación ASEDUCH.
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {documents.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-16 bg-gray-50 rounded-xl border border-gray-200">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <p className="text-lg">No hay documentos disponibles por el momento.</p>
              <p className="text-sm text-gray-400 mt-2">Vuelve a consultar más tarde.</p>
            </div>
          ) : (
            documents.map((doc) => (
              <motion.div key={doc.id} variants={itemVariants} className="h-full">
                <FoundationDocumentCard doc={doc} onViewOnline={handleViewOnline} />
              </motion.div>
            ))
          )}
        </motion.div>
        
        {/* Mensaje informativo */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">¿Necesitas algún documento adicional?</h3>
          <p className="text-blue-700 mb-2">
            Si requieres algún documento institucional que no encuentras aquí, no dudes en contactarnos.
          </p>
          <a 
            href="mailto:documentos@aseduch.cl" 
            className="inline-flex items-center text-blue-700 hover:text-blue-900 font-medium"
          >
            documentos@aseduch.cl
          </a>
        </div>
      </div>
      
      {/* Visor de PDF Modal */}
      {selectedPdf && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-full max-w-6xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl relative"
          >
            <PdfViewer fileUrl={selectedPdf} onClose={handleClosePdf} />
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

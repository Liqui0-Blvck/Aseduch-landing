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
    <section className="space-y-8 bg-white rounded-xl shadow-sm p-8">
      <div className="mb-8 text-left border-l-4 border-blue-600 pl-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 tracking-tight">Documentos Institucionales</h2>
        <p className="text-base md:text-lg text-blue-700 max-w-2xl">
          Accede y descarga los principales documentos que rigen y respaldan el trabajo de la Fundación ASEDUCH.
        </p>
      </div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {documents.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-12 bg-gray-50 rounded-lg">
            <svg className="w-12 h-12 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            <p>No hay documentos disponibles por el momento.</p>
          </div>
        ) : (
          documents.map((doc) => (
            <motion.div key={doc.id} variants={itemVariants}>
              <FoundationDocumentCard doc={doc} onViewOnline={handleViewOnline} />
            </motion.div>
          ))
        )}
      </motion.div>
      
      {/* Visor de PDF Modal */}
      {selectedPdf && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="w-full max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            <PdfViewer fileUrl={selectedPdf} onClose={handleClosePdf} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

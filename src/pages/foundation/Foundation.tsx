import { motion } from 'framer-motion';
import { useState } from 'react';
import { Seo } from '../../components/Seo';
import { PdfViewer } from '../../components/PdfViewer';
import FoundationActivityCard from './FoundationActivityCard'; // Mantén sólo los imports usados

interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  url: string;
}

// Sample data - replace with actual data from your CMS/API
const documents = [
  {
    id: 1,
    title: 'Estatutos Fundación ASEDUCH',
    type: 'PDF',
    size: '2.4 MB',
    url: '/react/assets/fundacion/escritura_constitucion.pdf'
  }
];

const activities: Activity[] = [];

const donationOptions = [
  {
    id: 1,
    title: 'Transferencia Bancaria',
    description: 'Realiza tu donación directamente a nuestra cuenta bancaria',
    details: [
      'Banco: Banco de Chile',
      'Tipo de cuenta: Cuenta Corriente',
      'N° de cuenta: 98765432',
      'RUT: 12.345.678-9',
      'Email: donaciones@aseduch.cl'
    ]
  },
  {
    id: 2,
    title: 'Plataformas de Pago',
    description: 'Dona de forma segura con tarjeta de crédito o débito',
    platforms: [
      { name: 'Webpay', url: '#' },
      { name: 'PayPal', url: '#' },
      { name: 'Mercado Pago', url: '#' }
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Foundation() {
  const [activeTab, setActiveTab] = useState('documentos');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);


  // Handler para abrir visor PDF (igual que Documents)
  const handleDocumentClick = (url: string) => {
    setSelectedPdf(url);
  };

  // Handler para cerrar visor
  const handleClosePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo 
        title="Fundación ASEDUCH | Apoya la Educación en Chile"
        description="Conoce nuestra fundación, actividades y formas de contribuir a la educación en Chile."
        url="/fundacion"
      />
      


      {/* Hero Section Mejorado */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2 text-left"
          >
            Fundación ASEDUCH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-700 max-w-2xl text-left"
          >
            Trabajando por una educación de calidad y accesible para todos en Chile
          </motion.p>
        </div>
      </section>

      {/* Tabs Navigation Mejorado */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 pt-2">
            {[
              { id: 'documentos', label: 'Documentos' },
              { id: 'actividades', label: 'Actividades' },
              { id: 'donaciones', label: 'Donaciones' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-t-lg text-base font-semibold transition border-b-4 focus:outline-none ${
                  activeTab === tab.id
                    ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm'
                    : 'border-transparent text-gray-500 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-xl shadow-md mt-8">
        {/* Documents Tab */}
        {activeTab === 'documentos' && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="mb-8 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 tracking-tight">Documentos Institucionales</h2>
              <p className="text-base md:text-lg text-blue-700 max-w-2xl">
                Accede y descarga los principales documentos que rigen y respaldan el trabajo de la Fundación ASEDUCH.
              </p>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {documents.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-12">
                  No hay documentos disponibles por el momento.
                </div>
              ) : (
                documents.map((doc) => (
                  <motion.div
                    key={doc.id}
                    variants={fadeInUp}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition flex flex-col cursor-pointer"
                    onClick={() => handleDocumentClick(doc.url)}
                  >
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{doc.title}</h3>
                    <div className="text-sm text-gray-500 mb-2">{doc.type} &bull; {doc.size}</div>
                    <button
                      className="inline-flex items-center justify-center bg-[#1E3A5F] hover:bg-[#16304c] text-white px-4 py-2 rounded-full text-sm font-medium transition mt-4"
                      onClick={e => { e.stopPropagation(); handleDocumentClick(doc.url); }}
                    >
                      Ver documento
                    </button>
                  </motion.div>
                ))
              )}
            </motion.div>
          </motion.section>
        )}

        {/* Activities Tab */}
        {activeTab === 'actividades' && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="mb-8 text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 tracking-tight">Próximas Actividades</h2>
              <p className="text-base md:text-lg text-blue-700 max-w-2xl">
                Participa en los eventos, talleres y seminarios que impulsa la Fundación para fortalecer la educación en Chile.
              </p>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="space-y-8"
            >
              {activities.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  No hay actividades programadas por el momento.
                </div>
              ) : (
                activities.map((activity) => (
                  <motion.div key={activity.id} variants={fadeInUp} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition">
                    <FoundationActivityCard activity={activity} />
                  </motion.div>
                ))
              )}
            </motion.div>
          </motion.section>
        )}

        {/* Donations Tab */}
        {activeTab === 'donaciones' && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.div variants={fadeInUp} className="text-left max-w-2xl mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 tracking-tight">Apoya Nuestra Misión</h2>
              <p className="text-base md:text-lg text-blue-700">
                Tu donación nos ayuda a seguir trabajando por una educación de calidad en Chile. ¡Cada aporte cuenta!
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {donationOptions.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-12">
                  No hay opciones de donación disponibles por el momento.
                </div>
              ) : (
                donationOptions.map((option) => (
                  <motion.div key={option.id} variants={fadeInUp} className={`rounded-2xl shadow-lg transition flex flex-col ${option.title === 'Transferencia Bancaria' ? 'bg-gradient-to-br from-blue-50 via-white to-blue-100 border-2 border-blue-200 p-7' : 'bg-white border border-gray-200 p-6 hover:shadow-lg'}`}>
                    {/* Tarjeta especial para Transferencia Bancaria */}
                    {option.title === 'Transferencia Bancaria' ? (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v3.75m-18 0v6.75A2.25 2.25 0 005.25 19.5h13.5A2.25 2.25 0 0021 17.25V10.5m-18 0h18" />
                            </svg>
                          </span>
                          <h3 className="text-xl font-bold text-blue-900 tracking-tight">{option.title}</h3>
                        </div>
                        <p className="text-blue-800 mb-6 font-medium">{option.description}</p>
                        <div className="grid gap-3 mb-4">
                          {option.details && option.details.map((d: string, i: number) => {
                            // Detectar si el dato es copiable
                            let label = '', value = '', isCopy = false;
                            if (d.includes(':')) {
                              [label, value] = d.split(':').map(str => str.trim());
                              // Solo algunos datos se pueden copiar
                              isCopy = /cuenta|rut|email/i.test(label);
                            } else {
                              value = d;
                            }
                            return (
                              <div key={i} className="flex items-center gap-2 text-base">
                                <span className="font-semibold text-blue-900 min-w-[110px]">{label ? label + ':' : ''}</span>
                                <span className="text-blue-700 select-all">{value}</span>
                                {isCopy && value && (
                                  <button
                                    className="ml-2 px-2 py-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-900 text-xs font-semibold border border-blue-200 transition"
                                    onClick={() => {navigator.clipboard.writeText(value)}}
                                    title={`Copiar ${label}`}
                                  >
                                    Copiar
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <span className="text-xs text-gray-500">¡Gracias por tu aporte! Si tienes dudas, escríbenos a <span className="underline">donaciones@aseduch.cl</span></span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                          </span>
                          <h3 className="text-xl font-bold text-yellow-700 tracking-tight">{option.title}</h3>
                        </div>
                        <p className="text-yellow-800 mb-4 font-medium">{option.description}</p>
                        {option.details && (
                          <ul className="text-sm text-gray-600 mb-4 space-y-1">
                            {option.details.map((d: string, i: number) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        )}
                        {option.platforms && (
                          <div className="flex flex-wrap gap-4 mt-4 mb-2">
                            {option.platforms.map((platform: { name: string; url: string }) => (
                              <button
                                key={platform.name}
                                className="flex items-center gap-2 bg-yellow-200 text-yellow-600 px-6 py-3 rounded-full text-base font-semibold cursor-not-allowed opacity-70 border-2 border-yellow-300 shadow-sm"
                                disabled
                                tabIndex={-1}
                              >
                                {/* Ícono de plataforma genérico */}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                                </svg>
                                {platform.name}
                              </button>
                            ))}
                          </div>
                        )}
                        <div className="text-xs text-yellow-700 mt-2">Próximamente disponible. ¡Gracias por tu interés en apoyar nuestra misión!</div>
                      </>
                    )}
                  </motion.div>
                ))
              )}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-blue-50 rounded-xl p-6 text-left mt-10 border border-blue-100 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                ¿Necesitas factura por tu donación?
              </h3>
              <p className="text-blue-700 mb-3">
                Escríbenos a <a href="mailto:contabilidad@aseduch.cl" className="font-medium underline">contabilidad@aseduch.cl</a> con los datos de tu donación y te enviaremos la factura correspondiente.
              </p>
              <p className="text-xs text-blue-600">
                Las donaciones son deducibles de impuestos según la Ley de Donaciones con Fines Sociales.
              </p>
            </motion.div>
          </motion.section>
        )}
      </main>
    {/* Visor de PDF Modal */}
    {selectedPdf && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <PdfViewer fileUrl={selectedPdf || ''} onClose={handleClosePdf} />
      </div>
    )}
  </div>
); 
}

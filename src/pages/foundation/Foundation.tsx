import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFilePdf, FaCalendarAlt, FaHandHoldingUsd, FaArrowRight, FaDownload, FaCopy } from 'react-icons/fa';
import { Seo } from '../../components/Seo';
import { DocumentButton } from '../../components/DocumentLink';

// Sample data - replace with actual data from your CMS/API
const documents = [
  {
    id: 1,
    title: 'Estatutos Fundación ASEDUCH',
    type: 'PDF',
    size: '2.4 MB',
    url: '/documents/estatutos-aseduch.pdf'
  },
  {
    id: 2,
    title: 'Memoria Anual 2024',
    type: 'PDF',
    size: '3.1 MB',
    url: '/documents/memoria-2024.pdf'
  },
  {
    id: 3,
    title: 'Informe de Gestión',
    type: 'PDF',
    size: '1.8 MB',
    url: '/documents/informe-gestion.pdf'
  }
];

const activities = [
  {
    id: 1,
    title: 'Seminario de Educación Inclusiva',
    date: '15 Junio 2024',
    description: 'Un espacio para reflexionar sobre las prácticas educativas inclusivas en el aula.',
    image: '/images/seminario-educacion-inclusiva.jpg',
    url: '/actividades/seminario-educacion-inclusiva'
  },
  {
    id: 2,
    title: 'Taller de Neuroeducación',
    date: '28 Julio 2024',
    description: 'Aprende cómo aplicar los principios de la neurociencia en el proceso de enseñanza-aprendizaje.',
    image: '/images/taller-neuroeducacion.jpg',
    url: '/actividades/taller-neuroeducacion'
  },
  {
    id: 3,
    title: 'Congreso Internacional de Educación',
    date: '10 Septiembre 2024',
    description: 'Encuentro con expertos internacionales en innovación educativa.',
    image: '/images/congreso-educacion.jpg',
    url: '/actividades/congreso-educacion'
  }
];

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


  return (
    <div className="min-h-screen bg-gray-50">
      <Seo 
        title="Fundación ASEDUCH | Apoya la Educación en Chile"
        description="Conoce nuestra fundación, actividades y formas de contribuir a la educación en Chile."
        url="/fundacion"
      />
      


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Fundación ASEDUCH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Trabajando por una educación de calidad y accesible para todos en Chile
          </motion.p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto">
            {[
              { id: 'documentos', label: 'Documentos' },
              { id: 'actividades', label: 'Actividades' },
              { id: 'donaciones', label: 'Donaciones' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Documents Tab */}
        {activeTab === 'documentos' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-8">
              Documentos Institucionales
            </motion.h2>
            
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {documents.map((doc) => (
                <motion.div
                  key={doc.id}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
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
                      <DocumentButton 
                        url={doc.url}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                        icon={FaArrowRight}
                      >
                        Ver en línea
                      </DocumentButton>
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Activities Tab */}
        {activeTab === 'actividades' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-8">
              Próximas Actividades
            </motion.h2>
            
            <motion.div 
              variants={staggerContainer}
              className="space-y-8"
            >
              {activities.map((activity) => (
                <motion.div
                  key={activity.id}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 md:flex"
                >
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img 
                      className="w-full h-full object-cover" 
                      src={activity.image} 
                      alt={activity.title} 
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center text-gray-500 mb-2">
                      <FaCalendarAlt className="mr-2" />
                      <span>{activity.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <a 
                      href={activity.url}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ver más detalles <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Donations Tab */}
        {activeTab === 'donaciones' && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Apoya Nuestra Misión</h2>
              <p className="text-xl text-gray-600">
                Tu donación nos ayuda a seguir trabajando por una educación de calidad en Chile.
                ¡Cada aporte cuenta!
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {donationOptions.map((option) => (
                <motion.div
                  key={option.id}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <FaHandHoldingUsd className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  
                  {option.details ? (
                    <div className="space-y-2 mt-4">
                      {option.details.map((detail, index) => (
                        <div key={index} className="flex">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => {
                            const details = option.details?.join('\n') || '';
                            navigator.clipboard.writeText(details);
                          }}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                        >
                          <FaCopy className="mr-1" /> Copiar datos bancarios
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 mt-4">
                      {option.platforms?.map((platform) => (
                        <a
                          key={platform.name}
                          href={platform.url}
                          className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                          Donar con {platform.name}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-blue-50 rounded-xl p-8 text-center mt-12"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                ¿Necesitas factura por tu donación?
              </h3>
              <p className="text-blue-700 mb-6">
                Escríbenos a <a href="mailto:contabilidad@aseduch.cl" className="font-medium underline">contabilidad@aseduch.cl</a> con los datos de tu donación y te enviaremos la factura correspondiente.
              </p>
              <p className="text-sm text-blue-600">
                Las donaciones son deducibles de impuestos según la Ley de Donaciones con Fines Sociales.
              </p>
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

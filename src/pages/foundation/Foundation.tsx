import { motion } from 'framer-motion';
import { useState } from 'react';
import { Seo } from '../../components/Seo';
import FoundationDocumentCard from './FoundationDocumentCard';
import FoundationActivityCard from './FoundationActivityCard';
import FoundationDonationCard from './FoundationDonationCard';

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
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-2 tracking-tight">Documentos Institucionales</h2>
              <p className="text-lg text-blue-700 max-w-2xl mx-auto">
                Accede y descarga los principales documentos que rigen y respaldan el trabajo de la Fundación ASEDUCH.
              </p>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {documents.map((doc) => (
                <motion.div key={doc.id} variants={fadeInUp}>
                  <FoundationDocumentCard doc={doc} />
                </motion.div>
              ))}
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
            <motion.div variants={fadeInUp} className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-2 tracking-tight">Próximas Actividades</h2>
              <p className="text-lg text-blue-700 max-w-2xl mx-auto">
                Participa en los eventos, talleres y seminarios que impulsa la Fundación para fortalecer la educación en Chile.
              </p>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="space-y-10"
            >
              {activities.map((activity) => (
                <motion.div key={activity.id} variants={fadeInUp}>
                  <FoundationActivityCard activity={activity} />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Donations Tab */}
        {activeTab === 'donaciones' && (
          <motion.section
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-2 tracking-tight">Apoya Nuestra Misión</h2>
              <p className="text-lg text-blue-700">
                Tu donación nos ayuda a seguir trabajando por una educación de calidad en Chile. ¡Cada aporte cuenta!
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-10"
            >
              {donationOptions.map((option) => (
                <motion.div key={option.id} variants={fadeInUp}>
                  <FoundationDonationCard option={option} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-8 text-center mt-12 border border-blue-200 shadow-sm"
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
          </motion.section>
        )}
      </main>
    </div>
  );
}

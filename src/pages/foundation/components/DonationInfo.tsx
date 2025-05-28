import { motion } from 'framer-motion';
import { Seo } from '../../../components/Seo';
import { FaUniversity, FaCreditCard, FaRegCopy, FaCheck, FaInfoCircle } from 'react-icons/fa';

const donationOptions = [
  {
    id: 1,
    title: 'Transferencia Bancaria',
    icon: <FaUniversity className="w-6 h-6" />,
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
    icon: <FaCreditCard className="w-6 h-6" />,
    description: 'Dona de forma segura con tarjeta de crédito o débito',
    platforms: [
      { name: 'Webpay', url: '#' },
      { name: 'PayPal', url: '#' },
      { name: 'Mercado Pago', url: '#' }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function DonationInfo() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // En una aplicación real, aquí mostraríamos una notificación de éxito
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Seo 
        title="Donaciones Fundación ASEDUCH"
        description="Conoce cómo donar y apoyar la misión de la Fundación ASEDUCH."
        url="/foundation/donations"
      />
      
      <div className="bg-blue-900 py-12 mb-8">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Donaciones Fundación ASEDUCH</h1>
          <p className="text-blue-100 text-center mt-4 max-w-2xl mx-auto">
            Tu aporte hace posible nuestra misión de fortalecer la educación en Chile
          </p>
        </div>
      </div>
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <motion.div 
          className="bg-white rounded-xl shadow-sm p-8 mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mb-8 border-l-4 border-blue-600 pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 tracking-tight">Datos para Donaciones</h2>
            <p className="text-base md:text-lg text-blue-700 max-w-2xl">
              Conoce las diferentes formas en que puedes apoyar nuestra labor educativa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {donationOptions.map(option => (
              <motion.div 
                key={option.id} 
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-600 text-white mr-3">
                    {option.icon}
                  </div>
                  <h2 className="text-xl font-bold text-blue-900">{option.title}</h2>
                </div>
                
                <p className="text-blue-800 mb-4">{option.description}</p>
                
                {option.details && (
                  <div className="bg-white rounded-lg border border-blue-100 p-4 mb-4">
                    <ul className="space-y-3">
                      {option.details.map((detail, i) => {
                        const [label, value] = detail.split(': ');
                        return (
                          <li key={i} className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">{label}:</span>
                            <div className="flex items-center">
                              <span className="text-blue-900 font-semibold mr-2">{value}</span>
                              {value && (
                                <button 
                                  onClick={() => copyToClipboard(value)}
                                  className="text-blue-600 hover:text-blue-800 focus:outline-none"
                                  title="Copiar al portapapeles"
                                >
                                  <FaRegCopy />
                                </button>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                
                {option.platforms && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {option.platforms.map(platform => (
                      <button
                        key={platform.name}
                        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
                        disabled
                      >
                        {platform.name}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg mb-8"
            variants={itemVariants}
          >
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                <FaInfoCircle className="w-6 h-6 text-blue-200" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">¿Por qué donar a la Fundación ASEDUCH?</h3>
                <p className="text-blue-100 mb-4">
                  Tu donación contribuye directamente a programas educativos que benefician a estudiantes y docentes en todo Chile. Cada aporte nos permite:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-blue-200 mr-2 flex-shrink-0" />
                    <span>Implementar programas de capacitación docente</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-blue-200 mr-2 flex-shrink-0" />
                    <span>Otorgar becas a estudiantes de escasos recursos</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-blue-200 mr-2 flex-shrink-0" />
                    <span>Desarrollar material educativo innovador</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-blue-50 border border-blue-200 rounded-xl p-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-2">¿Necesitas factura por tu donación?</h3>
            <p className="text-blue-700 mb-2">
              Escríbenos a <a href="mailto:contabilidad@aseduch.cl" className="underline font-medium hover:text-blue-900 transition-colors">contabilidad@aseduch.cl</a> con los datos de tu donación y te enviaremos la factura correspondiente.
            </p>
            <p className="text-sm text-blue-600">Las donaciones son deducibles de impuestos según la Ley de Donaciones con Fines Sociales.</p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

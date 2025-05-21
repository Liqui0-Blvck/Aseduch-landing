import { motion } from 'framer-motion';
import { FaUniversity, FaCopy, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

export default function PaymentSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const bankInfo = bankDetails.details.join('\n');
    navigator.clipboard.writeText(bankInfo).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const bankDetails = {
    title: 'Datos Bancarios',
    description: 'Realiza tu pago mediante transferencia bancaria',
    icon: <FaUniversity className="w-8 h-8 text-blue-600" />,
    details: [
      'Banco: Banco de Chile',
      'Tipo de cuenta: Cuenta Corriente',
      'N° de cuenta: 12345678',
      'RUT: 12.345.678-9',
      'Email: tesoreria@aseduch.cl',
      'Asunto: Pago de cuota socio',
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Datos de Transferencia
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Realiza tu pago mediante transferencia bancaria
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
            {bankDetails.icon}
          </div>
          <div className="flex justify-between items-center mb-6 relative">
            <h3 className="text-xl font-semibold text-gray-900">
              {bankDetails.title}
            </h3>
            <button
              onClick={handleCopyToClipboard}
              className="absolute -top-30 right-0 flex items-center space-x-1 px-3 py-1.5 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
              title="Copiar datos bancarios"
            >
              {copied ? (
                <>
                  <FaCheck className="text-green-500" />
                  <span>¡Copiado!</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          
          <div className="space-y-4">
            {bankDetails.details.map((detail, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-blue-50 rounded-xl p-6 text-center"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            ¿Necesitas ayuda con tu transferencia?
          </h3>
          <p className="text-blue-700 mb-4">
            Escríbenos a nuestro correo de contacto.
          </p>
          <a
            href="mailto:contacto@aseduch.cl"
            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}

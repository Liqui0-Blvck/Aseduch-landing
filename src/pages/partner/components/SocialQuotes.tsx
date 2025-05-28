import { useState } from 'react'
import { Seo } from '../../../components/Seo'
import { motion, type Variants } from 'framer-motion'
import { FaCheck, FaCopy, FaUniversity } from 'react-icons/fa'
import CTAP from './CTAP'



const SocialQuotes = () => {
  const [copied, setCopied] = useState(false);
  
  const handleCopyToClipboard = () => {
    const bankInfo = bankDetails.details.join('\n');
    navigator.clipboard.writeText(bankInfo).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  }

  return (
    <>
      <Seo 
        title="Cuotas Sociales | ASEDUCH"
        description="Únete a ASEDUCH y accede a beneficios exclusivos, incluyendo descuentos en universidades, asesoría legal, atención psicológica y más."
        url="/partners"
      />

      <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-[#1E3A5F] mb-3">Cuotas Sociales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Mantén tu membresía al día para seguir disfrutando de todos los beneficios de ser parte de la <b>Asociación de Educadores de Chile A.G.</b>
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Valores */}
            <motion.div
              className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg border-t-4 border-[#C0392B] flex flex-col items-center min-h-[320px]"
              variants={fadeIn}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#C0392B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Valores</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex justify-between w-full">
                  <span>Cuota Anual:</span>
                  <span className="font-semibold">$60.000</span>
                </li>
                <li className="flex justify-between w-full">
                  <span>Cuota Mensual:</span>
                  <span className="font-semibold">$5.000</span>
                </li>
                <li className="text-xs text-gray-500 mt-4 w-full">
                  * Valores válidos para el año 2025, sujetos a cambio
                </li>
              </ul>
            </motion.div>
            {/* Formas de Pago */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1E3A5F] flex flex-col items-center min-h-[320px]"
              variants={fadeIn}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-[#1E3A5F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10h18M9 16h6"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Formas de Pago</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center"><span className="text-[#C0392B] mr-2">•</span> Transferencia bancaria</li>
                <li className="flex items-center"><span className="text-[#C0392B] mr-2">•</span> Pago presencial en oficinas</li>
                <li className="flex items-center"><span className="text-[#C0392B] mr-2">•</span> Débito automático (próximamente)</li>
              </ul>
            </motion.div>
            {/* Datos Bancarios */}
            <motion.div
              className="relative bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 flex flex-col items-center min-h-[320px]"
              variants={fadeIn}
            >
              <div className="mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10v10h18V10M3 6h18v4H3z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Datos Bancarios</h3>
              <div className="space-y-2 w-full">
                {bankDetails.details.map((detail, index) => (
                  <p key={index} className="text-gray-700 text-base flex items-center"><span className="mr-2">🏦</span>{detail}</p>
                ))}
              </div>
              <button
                onClick={handleCopyToClipboard}
                className="absolute top-2 right-2 flex items-center space-x-1 px-3 py-1.5 text-sm rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
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
            </motion.div>
          </div>
          
        </div>

        <CTAP />
      </section>
    </>
  )
}

export default SocialQuotes

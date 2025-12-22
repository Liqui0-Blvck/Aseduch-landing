import React from 'react'
import { MdMail } from 'react-icons/md'

const CTAP = () => {
  return (
    <div className="w-full px-4 sm:px-8">
      <div className="mt-10 sm:mt-16 flex flex-col items-center">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A5F] mb-3 text-center leading-tight">
          ¿Listo para ser parte de la Asociación de Educadores de Chile A.G.?
        </h3>
        <p className="text-gray-600 max-w-xl w-full text-center mb-6 text-base sm:text-lg px-2">
          Únete a nuestra comunidad de educadores y accede a beneficios exclusivos, descuentos en instituciones educativas y asesorías personalizadas.
        </p>
        <a
          className="inline-block w-full sm:w-auto bg-[#C0392B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-700 transition text-base sm:text-lg shadow-lg text-center"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdThRdAzUdfRNNKI8U165pZ5neqiOuAnVWORfTBELx6cV-eqw/viewform"
        >
          ¡Quiero ser socio!
        </a>
      </div>

      {/* Contacto rápido */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="mt-8 flex flex-col sm:flex-row items-center sm:justify-between bg-white rounded-xl shadow p-4 sm:p-6 gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#C0392B]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3 10.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M16 3v2"/><path d="M8 3v2"/></svg>
            <span className="font-semibold text-base sm:text-lg text-[#1E3A5F] text-center">¿Tienes dudas sobre tu membresía?</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <a href="mailto:contacto@aseduch.cl" className="flex items-center justify-center bg-[#C0392B] text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm sm:text-base w-full sm:w-auto">
              <MdMail />
              <span className="ml-2">Escríbenos</span>
            </a>
            <a href="https://wa.me/56932410208" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base w-full sm:w-auto text-center">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTAP

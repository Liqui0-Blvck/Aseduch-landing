import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import { Seo } from "../../components/Seo";

interface DocumentItem {
  title: string;
  description: string;
  url: string;
}

const documents: DocumentItem[] = [
  {
    title: "Estatutos",
    description:
      "Documento oficial con los estatutos actualizados de ASEDUCH.",
    url: "https://docs.google.com/viewerng/viewer?url=https%3A%2F%2Faseduch.cl%2Fwp-content%2Fuploads%2F2022%2F05%2FEstatutos-ASEDUCH_7abr2022.pdf",
  },
  {
    title: "12 propuestas para la Reactivación Educativa",
    description:
      "Propuestas clave para impulsar la educación post-pandemia.",
    url: "https://aseduch.cl/wp-content/uploads/2023/03/Propuestas-Reactivacion-Educativa.docx",
  },
  {
    title: "Declaración SIMCE 2022",
    description:
      "Análisis de resultados SIMCE 2022 y recomendaciones para el sistema.",
    url: "https://aseduch.cl/wp-content/uploads/2023/06/Declaracion-sobre-resultados-SIMCE-2022.jpeg",
  },
  {
    title: "Autoridad Docente",
    description:
      "Minuta sobre la importancia del liderazgo pedagógico autónomo.",
    url: "https://aseduch.cl/wp-content/uploads/2023/04/Minuta-032022-Autoridad-Docente.docx",
  },
  {
    title: "Toma de Liceos",
    description:
      "Posición de ASEDUCH ante ocupaciones y abandono de deberes.",
    url: "https://aseduch.cl/wp-content/uploads/2023/07/Declaracion-1.png",
  },
  {
    title: "Bases Constitución",
    description:
      "Bases para garantizar educación inclusiva en la nueva Constitución.",
    url: "https://aseduch.cl/wp-content/uploads/2023/04/Minuta-42022-Bases-para-las-normas-educacionales-para-una-nueva-Constitucion.docx",
  },
  {
    title: "Minuta SIMCE",
    description:
      "Recomendaciones de ASEDUCH sobre la evaluación SIMCE 2022.",
    url: "https://aseduch.cl/wp-content/uploads/2023/04/Minuta-22022-SIMCE.docx",
  },
];

export default function Documents() {
  return (
    <>
      <Seo 
        title="Documentos | ASEDUCH"
        description="Accede a los documentos oficiales, estatutos, minutas y material informativo de ASEDUCH. Encuentra información sobre políticas educativas y propuestas."
        url="/documents"
      />
      <section className="bg-white py-20 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <motion.h2
          className="text-3xl font-bold text-[#1E3A5F] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Documentos
        </motion.h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Accede a los documentos oficiales, estatutos y material informativo de ASEDUCH.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {documents.map((doc, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* barra superior */}
              <div className="h-1 w-12 bg-[#C0392B] rounded mb-4" />
              {/* icono */}
              <div className="text-[#1E3A5F] text-2xl mb-4">
                <FaFileAlt />
              </div>
              {/* título */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              {/* descripción */}
              <p className="text-gray-600 flex-grow mb-6">
                {doc.description}
              </p>
              {/* botón de descarga */}
              <a
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-[#1E3A5F] hover:bg-[#16304c] text-white px-4 py-2 rounded-full text-sm font-medium transition"
              >
                Descargar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

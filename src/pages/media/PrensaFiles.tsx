import { useState, useEffect } from 'react';
import { FaRegNewspaper, FaDownload, FaChevronDown, FaChevronUp, FaEye } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { PdfViewer } from '../../components/PdfViewer';

// Interfaz simplificada para los archivos de prensa
interface PrensaFile {
  id: number;
  title: string;
  year: string;
  path: string;
  type: string;
  source: string;
  date: string;
}

// Interfaz para agrupar archivos por año
interface PrensaYearGroup {
  year: string;
  files: PrensaFile[];
  isOpen: boolean;
}

// Datos de prensa organizados por año y con información clara
const prensaData: PrensaFile[] = [
  // 2021
  { id: 1, title: 'Profesores a la espera', year: '2021', path: encodeURI('/assets/prensa/Prensa_2021/Carta_ElMer_20211125_Profesores_a_la_espera.pdf'), type: 'Carta', source: 'El Mercurio', date: '25/11/2021' },
  // { id: 2, title: 'De héroes a antagonistas', year: '2021', path: encodeURI('/assets/prensa/Prensa_2021/Columna_LaTer_20211102_De_heroes_a_antagonistas.pdf'), type: 'Columna', source: 'La Tercera', date: '02/11/2021' },
  { id: 3, title: 'Nuevo gremio docente', year: '2021', path: encodeURI('/assets/prensa/Prensa_2021/Editorial_ElMer_20211031_Nuevo_gremio_docente.pdf'), type: 'Editorial', source: 'El Mercurio', date: '31/10/2021' },
  { id: 4, title: 'Gremio alternativo al CCPP', year: '2021', path: encodeURI('/assets/prensa/Prensa_2021/Editorial_LaTer_20211125_Gremio_alternativo_al_CCPP.pdf'), type: 'Editorial', source: 'La Tercera', date: '25/11/2021' },
  // { id: 5, title: 'Entrevista a José Luis Velasco', year: '2021', path: encodeURI('/assets/prensa/Prensa_2021/Entrevista_EmolTV_20211103_JoseLuisVelasco.pdf'), type: 'Entrevista', source: 'Emol TV', date: '03/11/2021' },
  { id: 6, title: 'Docentes crean nuevo gremio', year: '2021', path: encodeURI('/assets/prensa/Prensa_2021/Nota_ElMer_20211028_Docentes_crean_nuevo_gremio.pdf'), type: 'Nota', source: 'El Mercurio', date: '28/10/2021' },
  
  // 2022
  { id: 7, title: 'Educación Libre y Diversa', year: '2022', path: encodeURI('/assets/prensa/Prensa_2022/20220110_ElMer_Carta_Educ.Libre_y_Diversa.pdf'), type: 'Carta', source: 'El Mercurio', date: '10/01/2022' },
  { id: 8, title: 'CC.PP pone en duda retorno a clases', year: '2022', path: encodeURI('/assets/prensa/Prensa_2022/20220202_ElMer_Nota_CC.PP_pone_en_duda_retorno_a_clases.pdf'), type: 'Nota', source: 'El Mercurio', date: '02/02/2022' },
  { id: 9, title: 'Clases remotas', year: '2022', path: encodeURI('/assets/prensa/Prensa_2022/20220321_LaTer_Carta_Clases_remotasjpeg.pdf'), type: 'Carta', source: 'La Tercera', date: '21/03/2022' },
  { id: 10, title: 'Emplazan al Mineduc a publicar', year: '2022', path: encodeURI('/assets/prensa/Prensa_2022/20220402_ElMer_Nota_Emplazan_al_Mineduc_a_publicar.pdf'), type: 'Nota', source: 'El Mercurio', date: '02/04/2022' },
  // { id: 11, title: 'Asociación alternativa al CC.PP', year: '2022', path: encodeURI('/assets/prensa/Prensa_2022/20220408_ElMer_Nota_Asociacion_alternativa_al_CC.PP..pdf'), type: 'Nota', source: 'El Mercurio', date: '08/04/2022' },
  // { id: 12, title: 'Entrevista a José Luis Velasco', year: '2022', path: encodeURI('/assets/prensa/Prensa_2022/20220412_CNN_Entrevista_JoseLuisVelasco.mov'), type: 'Entrevista', source: 'CNN', date: '12/04/2022' },
  
  // 2023
  { id: 13, title: 'De otro planeta', year: '2023', path: encodeURI('/assets/prensa/Prensa_2023/20230629_Carta_LaTer_De_otro_planeta.pdf'), type: 'Carta', source: 'La Tercera', date: '29/06/2023' },
  { id: 14, title: 'Paro improcedente', year: '2023', path: encodeURI('/assets/prensa/Prensa_2023/20230723_Carta_ElMer_Paro_improcedente.pdf'), type: 'Carta', source: 'El Mercurio', date: '23/07/2023' },
  // { id: 15, title: 'Entrevista a José Luis Velasco', year: '2023', path: encodeURI('/assets/prensa/Prensa_2023/20230726_Entrevista_ElLibero_JoseLuisVelasco.pdf'), type: 'Entrevista', source: 'El Líbero', date: '26/07/2023' },
  { id: 16, title: 'Paro CC.PP', year: '2023', path: encodeURI('/assets/prensa/Prensa_2023/20230801_Nota_ElMer_Paro_CC.PP..pdf'), type: 'Nota', source: 'El Mercurio', date: '01/08/2023' },
  
  // 2024
  // { id: 17, title: 'Mérito, selección y excelencia', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Carta_respuesta_ElMer_Merito_seleccion_y_excelencia.pdf'), type: 'Carta', source: 'El Mercurio', date: '15/03/2024' },
  { id: 18, title: 'Tiempo de Convivencia', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Carta_ElMer_20240518_Tiempo_de_Convivencia.pdf'), type: 'Carta', source: 'El Mercurio', date: '18/05/2024' },
  { id: 19, title: 'La indiferencia a la violencia', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Carta_LaTer_20240718_La_indiferencia_a_la_violencia.pdf'), type: 'Carta', source: 'La Tercera', date: '18/07/2024' },
  { id: 20, title: 'El paro por violencia', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Carta_LaTer_20240806_El_paro_por_violencia.pdf'), type: 'Carta', source: 'La Tercera', date: '06/08/2024' },
  // { id: 21, title: 'Qué estamos haciendo mal', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Carta_LaTer_20240909_Que_estamos_haciendo_mal.pdf'), type: 'Carta', source: 'La Tercera', date: '09/09/2024' },
  // { id: 22, title: 'Romper el círculo', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Carta_LaTer_20241028_Romper_el_circulo.pdf'), type: 'Carta', source: 'La Tercera', date: '28/10/2024' },
  { id: 23, title: 'Asistir para aprender', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Carta_LaTer_20241208_Asistir_para_aprender.pdf'), type: 'Carta', source: 'La Tercera', date: '08/12/2024' },
  // { id: 24, title: 'Entrevista a José Luis Velasco', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Entrevista_ElMer_20241101_JoseLuisVelasco.pdf'), type: 'Entrevista', source: 'El Mercurio', date: '01/11/2024' },
  // { id: 25, title: 'Sin cupos escolares', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Nota_ElMer_20240315_Sin_cupos_escolares.pdf'), type: 'Nota', source: 'El Mercurio', date: '15/03/2024' },
  // { id: 26, title: 'Servicio Prime SAE', year: '2024', path: encodeURI('/assets/prensa/Prensa_2024/Nota_ElMer_20240416_Servicio_Prime_SAE.pdf'), type: 'Nota', source: 'El Mercurio', date: '16/04/2024' }
];

export default function PrensaFiles() {
  const [yearGroups, setYearGroups] = useState<PrensaYearGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  
  useEffect(() => {
    // Agrupar los archivos por año
    const groupedByYear = prensaData.reduce((groups, file) => {
      const year = file.year;
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(file);
      return groups;
    }, {} as Record<string, PrensaFile[]>);
    
    // Crear los grupos de años ordenados de más reciente a más antiguo
    const years = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a));
    
    const yearGroups: PrensaYearGroup[] = years.map((year, index) => ({
      year,
      files: groupedByYear[year],
      isOpen: index === 0 // El año más reciente estará abierto por defecto
    }));
    
    setYearGroups(yearGroups);
    setLoading(false);
  }, []);
  
  // Función para alternar la apertura/cierre de un grupo de año
  const toggleYearGroup = (year: string) => {
    setYearGroups(prevGroups => 
      prevGroups.map(group => 
        group.year === year ? { ...group, isOpen: !group.isOpen } : group
      )
    );
  };
  
  // Función para preparar la URL del PDF con timestamp para evitar caché
  const preparePdfUrl = (pdfPath: string): string => {
    // Crear una URL con timestamp para evitar caché
    const url = new URL(pdfPath, window.location.origin);
    url.searchParams.append('t', new Date().getTime().toString());
    return url.toString();
  };
  
  // Función para manejar la visualización de PDFs
  const handleViewPdf = (pdfPath: string) => {
    // Lista de archivos problemáticos que deben abrirse en una nueva pestaña
    const problematicFiles = [
      'Merito_seleccion_y_excelencia',
      'analisis',
      'declaracion',
      'fundacion'
    ];
    
    // Verificar si es un archivo problemático
    const isProblematicFile = problematicFiles.some(term => pdfPath.toLowerCase().includes(term.toLowerCase()));
    
    if (isProblematicFile) {
      // Para archivos problemáticos, abrir en una nueva pestaña
      window.open(preparePdfUrl(pdfPath), '_blank');
    } else {
      // Para los demás archivos, usar el visor de PDF integrado
      setSelectedPdf(preparePdfUrl(pdfPath));
    }
  };

  if (loading) return <div className="text-center py-10 text-gray-500">Cargando archivos de prensa...</div>;
  
  return (
    <div className="space-y-8">
      {selectedPdf && (
        <PdfViewer fileUrl={selectedPdf} onClose={() => setSelectedPdf(null)} />
      )}
      {yearGroups.map((group) => (
        <div key={group.year} className="bg-white rounded-xl shadow overflow-hidden">
          {/* Cabecera del año */}
          <button
            onClick={() => toggleYearGroup(group.year)}
            className="w-full flex justify-between items-center p-4 bg-[#1E3A5F] text-white hover:bg-[#2a4f7c] transition-colors"
          >
            <h3 className="text-xl font-bold flex items-center gap-3">
              <FaRegNewspaper />
              Prensa {group.year}
            </h3>
            <span>
              {group.isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          
          {/* Contenido del año (archivos) */}
          <AnimatePresence>
            {group.isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-4 p-4">
                  {group.files.map((file, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-[#1E3A5F]">
                            {file.title}
                          </h4>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                              {file.type}
                            </span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                              {file.source}
                            </span>
                            <span className="text-xs text-gray-500">
                              {file.date}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleViewPdf(file.path)}
                            className="text-[#1E3A5F] hover:text-[#2a4f7c] p-2 rounded-full hover:bg-gray-200 transition-colors"
                            title="Ver archivo"
                          >
                            <FaEye />
                          </button>
                          <a 
                            href={preparePdfUrl(file.path)} 
                            download
                            className="text-[#1E3A5F] hover:text-[#2a4f7c] p-2 rounded-full hover:bg-gray-200 transition-colors"
                            title="Descargar archivo"
                          >
                            <FaDownload />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

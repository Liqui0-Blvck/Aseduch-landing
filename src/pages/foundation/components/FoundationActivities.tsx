import { motion } from 'framer-motion';
import { Seo } from '../../../components/Seo';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

interface Activity {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  url: string;
  location?: string;
}

interface FoundationActivitiesProps {
  activities: Activity[];
}

// Datos de ejemplo para mostrar cuando no hay actividades reales
const sampleActivities: Activity[] = [
  {
    id: 1,
    title: 'Seminario: Innovación Educativa 2025',
    date: '15 de Junio, 2025 - 09:00 hrs',
    location: 'Centro Cultural de Santiago',
    description: 'Expertos nacionales e internacionales compartirán experiencias y estrategias innovadoras para transformar la educación en Chile.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    url: '#'
  },
  {
    id: 2,
    title: 'Taller: Herramientas Digitales para Docentes',
    date: '28 de Junio, 2025 - 15:30 hrs',
    location: 'Modalidad Online',
    description: 'Aprende a utilizar las últimas herramientas tecnológicas para potenciar tus clases y mejorar la experiencia de aprendizaje de tus estudiantes.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    url: '#'
  },
  {
    id: 3,
    title: 'Conferencia: Educación Inclusiva y Diversidad',
    date: '10 de Julio, 2025 - 10:00 hrs',
    location: 'Auditorio Universidad de Chile',
    description: 'Analizaremos estrategias efectivas para crear ambientes educativos inclusivos que respeten y celebren la diversidad en todas sus formas.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    url: '#'
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 12 }
  }
};

export default function FoundationActivities({ activities }: FoundationActivitiesProps) {
  // Si no hay actividades proporcionadas, usar las de ejemplo
  const displayActivities = activities.length > 0 ? activities : sampleActivities;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Seo 
        title="Actividades Fundación ASEDUCH | Eventos y Talleres"
        description="Conoce y participa en las próximas actividades organizadas por la Fundación ASEDUCH para fortalecer la educación en Chile."
        url="/foundation/activities"
      />
      
      <div className="bg-blue-900 py-12 mb-8">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Actividades Fundación ASEDUCH</h1>
          <p className="text-blue-100 text-center mt-4 max-w-2xl mx-auto">
            Participa en nuestros eventos y contribuye al fortalecimiento de la educación en Chile
          </p>
        </div>
      </div>
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <section className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="mb-8 border-l-4 border-blue-600 pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 tracking-tight">Próximas Actividades</h2>
            <p className="text-base md:text-lg text-blue-700 max-w-2xl">
              Participa en los eventos, talleres y seminarios que impulsa la Fundación para fortalecer la educación en Chile.
            </p>
          </div>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayActivities.map((activity) => (
              <motion.div 
                key={activity.id} 
                variants={itemVariants} 
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition group"
              >
                <div className="md:flex">
                  {activity.image && (
                    <div className="md:w-1/3 relative overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.title} 
                        className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    </div>
                  )}
                  
                  <div className="p-6 md:w-2/3 flex flex-col">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{activity.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-blue-600 mr-2" />
                        {activity.date}
                      </div>
                      
                      {activity.location && (
                        <div className="flex items-center">
                          <FaMapMarkerAlt className="text-blue-600 mr-2" />
                          {activity.location}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-base text-gray-700 mb-4 flex-grow">{activity.description}</p>
                    
                    {activity.url && (
                      <div className="mt-auto">
                        <a 
                          href={activity.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          Más información <FaExternalLinkAlt className="ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">¿Quieres proponer una actividad?</h3>
            <p className="text-blue-700 mb-4">Si tienes una propuesta de actividad o quieres colaborar con la Fundación, escríbenos.</p>
            <a 
              href="mailto:actividades@aseduch.cl" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Contactar a la Fundación
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

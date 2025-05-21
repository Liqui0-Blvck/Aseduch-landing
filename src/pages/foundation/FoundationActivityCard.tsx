import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

export interface FoundationActivity {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  url: string;
}

export default function FoundationActivityCard({ activity }: { activity: FoundationActivity }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 md:flex">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          className="w-full h-full object-cover" 
          src={activity.image} 
          alt={activity.title} 
        />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-gray-500 mb-2">
            <FaCalendarAlt className="mr-2" />
            <span>{activity.date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
          <p className="text-gray-600 mb-4">{activity.description}</p>
        </div>
        <a 
          href={activity.url}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-2"
        >
          Ver más detalles <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
}

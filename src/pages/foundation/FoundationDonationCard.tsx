import { FaHandHoldingUsd, FaCopy } from 'react-icons/fa';

export interface FoundationDonationOption {
  id: number;
  title: string;
  description: string;
  details?: string[];
  platforms?: { name: string; url: string }[];
}

export default function FoundationDonationCard({ option }: { option: FoundationDonationOption }) {
  const handleCopy = () => {
    const details = option.details?.join('\n') || '';
    navigator.clipboard.writeText(details);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
          <FaHandHoldingUsd className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
        <p className="text-gray-600 mb-4">{option.description}</p>
        {option.details && (
          <div className="space-y-2 mt-4">
            {option.details.map((detail, idx) => (
              <div key={idx} className="flex">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">{detail}</span>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                onClick={handleCopy}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                <FaCopy className="mr-1" /> Copiar datos bancarios
              </button>
            </div>
          </div>
        )}
        {option.platforms && (
          <div className="space-y-3 mt-4">
            {option.platforms.map((platform) => (
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
      </div>
    </div>
  );
}

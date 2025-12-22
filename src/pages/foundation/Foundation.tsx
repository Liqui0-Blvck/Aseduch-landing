import { Seo } from '../../components/Seo';
import type { FoundationDocument } from './components/FoundationDocumentCard';
import FoundationDocuments from './components/FoundationDocuments';

const foundationDocuments: FoundationDocument[] = [
  {
    id: 1,
    title: 'Estatutos Fundación ASEDUCH',
    type: 'PDF',
    size: '1.2 MB',
    url: '/assets/fundacion/escritura_constitucion.pdf',
    fecha: '10/05/2023'
  },
];

export default function Foundation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Seo 
        title="Fundación ASEDUCH | Apoya la Educación en Chile"
        description="Conoce nuestra fundación, actividades y formas de contribuir a la educación en Chile."
        url="/fundacion"
      />
      <div className="bg-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Fundación ASEDUCH</h1>
          <p className="text-blue-100 text-center mt-4 max-w-2xl mx-auto">
            Comprometidos con el desarrollo y fortalecimiento de la educación en Chile
          </p>
        </div>
      </div>
      <main className="flex-1 w-full">
        <FoundationDocuments documents={foundationDocuments} />
      </main>
    </div>
  );
}

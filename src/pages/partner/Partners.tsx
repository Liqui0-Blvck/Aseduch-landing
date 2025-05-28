import { Seo } from "../../components/Seo";
import CTAP from "./components/CTAP";
import InscriptionRequeriment from "./components/InscriptionRequeriment";


export default function Socios() {

  return (
    <>
      <Seo 
        title="Hazte Socio | ASEDUCH"
        description="Únete a ASEDUCH y accede a beneficios exclusivos, incluyendo descuentos en universidades, asesoría legal, atención psicológica y más."
        url="/partners"
      />
      <section className="bg-white text-gray-800 py-20 space-y-24">
        <InscriptionRequeriment />
      </section>
    </>
  );
}



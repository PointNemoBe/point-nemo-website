import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar } from "lucide-react";
import { ExcursionList } from "./excursions/ExcursionList";
import { ExcursionInfoBox } from "./excursions/ExcursionInfoBox";
import { ExcursionIncludesList } from "./excursions/ExcursionIncludesList";
import { excursionData } from "./excursions/ExcursionData";
const ExcursionsSection = () => {
  return <section id="excursions" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Nos excursions</h2>
        <p className="section-subtitle max-w-3xl mx-auto">Des balades nature guidées à la découverte de paysages et d'écosystèmes variés.</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
          <ExcursionInfoBox icon={<MapPin className="h-6 w-6 text-nemo-forest" />} title="Où ça se passe ?">
            <p className="text-gray-600">
              Les excursions ont lieu en <strong>Brabant wallon</strong> et dans ses environs, selon la demande, dans des lieux choisis 
              pour la diversité de leurs paysages et écosystèmes. Le lieu peut être adapté en fonction des besoins spécifiques.
            </p>
          </ExcursionInfoBox>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <ExcursionInfoBox icon={<Users className="h-6 w-6 text-nemo-forest" />} title="Pour qui ?">
            <p className="text-gray-600">
              <strong>Adultes et ados</strong> (à partir de 10-12 ans), en <strong>groupes de 5 à 15 personnes</strong> (max 20). 
              Aucun prérequis, juste de la curiosité et de bonnes chaussures !
            </p>
          </ExcursionInfoBox>
        </div>
      </div>
      
      <ExcursionList excursions={excursionData} />
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-display font-semibold mb-4 text-center">Chaque sortie comprend :</h3>
        <ExcursionIncludesList />
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-display font-semibold mb-6">Vous avez un besoin spécifique ?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Les tarifs des excursions dépendent du lieu, du nombre de participants et des activités personnalisées. 
          Chaque expérience est ajustée pour répondre à vos besoins spécifiques. N'hésitez pas à me contacter pour un devis personnalisé.
        </p>
        <Button asChild size="lg" className="bg-nemo-forest hover:bg-nemo-moss">
          <a href="#contact">
            <Calendar className="mr-2 h-5 w-5" />
            Demander un devis personnalisé
          </a>
        </Button>
      </div>
    </section>;
};
export default ExcursionsSection;
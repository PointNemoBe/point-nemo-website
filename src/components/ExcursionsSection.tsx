
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { ExcursionList } from "./excursions/ExcursionList";
import { ExcursionIncludesList } from "./excursions/ExcursionIncludesList";
import { excursionData } from "./excursions/ExcursionData";
import { ExcursionFAQ } from "./excursions/ExcursionFAQ";

const ExcursionsSection = () => {
  return (
    <section id="excursions" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Nos excursions</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Des balades nature guidées immersives, à la découverte de paysages et
          écosystèmes variés.
        </p>
      </div>

      <div className="flex justify-center items-center w-full">
        <ExcursionList excursions={excursionData} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-display font-semibold mb-4 text-center">
          Chaque sortie comprend :
        </h3>
        <ExcursionIncludesList />
      </div>

      <ExcursionFAQ />

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-display font-semibold mb-6">
          Vous avez un besoin spécifique ?
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Les tarifs des excursions dépendent du lieu, du nombre de participants
          et des activités personnalisées. Chaque expérience est ajustée pour
          répondre à vos besoins spécifiques. N'hésitez pas à me contacter pour
          un devis personnalisé.
        </p>
        <Button asChild size="lg" className="bg-nemo-forest hover:bg-nemo-moss">
          <a href="#contact">
            <Calendar className="mr-2 h-5 w-5" />
            Demander un devis personnalisé
          </a>
        </Button>
      </div>
    </section>
  );
};
export default ExcursionsSection;


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Users } from "lucide-react";

export const ExcursionFAQ = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto mb-12">
      <h3 className="text-2xl font-display font-semibold mb-6 text-center">
        Questions fréquentes
      </h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <MapPin className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Où ça se passe ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              Les excursions ont lieu en <strong>Brabant wallon</strong> et dans
              ses environs, selon la demande, dans des lieux choisis pour la
              diversité de leurs paysages et écosystèmes. Le lieu peut être
              adapté en fonction des besoins spécifiques.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <Users className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Pour qui ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              <strong>Adultes et ados</strong> (à partir de 10-12 ans), en{" "}
              <strong>groupes de 5 à 15 personnes</strong> (max 20). Aucun
              prérequis, juste de la curiosité et de bonnes chaussures !
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

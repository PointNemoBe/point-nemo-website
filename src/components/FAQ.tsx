

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Users, Clock, Euro, HelpCircle, Link } from "lucide-react";

export const FAQAccordion = () => {
  return (
    <div id="faq" className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto mb-12">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <MapPin className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Où se déroulent les excursions ?
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
            Pour qui sont adaptées les excursions ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              <strong>Adultes et ados</strong> (à partir de 10-12 ans), en{" "}
              <strong>groupes de 5 à 15 personnes</strong> (max 20). Aucun
              prérequis, juste de la curiosité et de bonnes chaussures !
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <Clock className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Quelle est la durée d'une excursion ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              Les excursions durent généralement <strong>3 heures</strong>, sur un parcours de 3 à 5 km. 
              Nous prenons le temps d'observer, d'apprendre et de nous connecter à la nature.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <Euro className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Quels sont les tarifs des excursions ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              Les tarifs dépendent du lieu, du nombre de participants et des activités personnalisées. 
              Chaque expérience est ajustée pour répondre à vos besoins spécifiques. 
              N'hésitez pas à me contacter pour obtenir un devis personnalisé.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <HelpCircle className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Faut-il avoir des connaissances préalables en nature ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              Absolument pas ! Les excursions Point Nemo sont conçues pour être accessibles à tous, 
              qu'on soit passionné de nature ou simplement curieux d'en savoir plus. 
              L'objectif est justement de vous faire découvrir la richesse des écosystèmes qui nous entourent, 
              sans prérequis particuliers.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <Link className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Les excursions sont-elles disponibles en anglais ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              Oui, pour les groupes internationaux ou ceux préférant l'anglais, 
              toutes les excursions peuvent être proposées en anglais, 
              garantissant ainsi une expérience inclusive et fluide.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};



const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-display font-bold text-center mb-8 text-nemo-forest">
            Questions Fréquentes
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Retrouvez ici les réponses aux questions les plus fréquemment posées sur nos excursions et nos services.
          </p>
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

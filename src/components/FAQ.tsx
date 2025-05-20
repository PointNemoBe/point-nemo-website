import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Users, Clock, Euro, HelpCircle, CloudRain, Brain, Link, Dog } from "lucide-react";

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
              Les excursions de Point Nemo ont lieu à <strong>Nivelles et dans les communes voisines</strong>, tant en Brabant wallon qu'en Hainaut: 
              Ronquières, Feluy, Ittre, Braine-l'Alleud, Waterloo, Genappe, Villers-la-Ville, Les Bons-Villers, Ottignies-Louvain-la-Neuve, Lasne, Mont-Saint-Guibert, Chastre…

              Des exceptions sont possibles, notamment en Forêt de Soignes (Bruxelles), par exemple pour des activités de type team building.

              Le lieu peut aussi être adapté en fonction des besoins spécifiques.
              
              N'hésitez pas à me contacter pour en discuter !
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
              <strong>Adultes et enfants</strong> à partir de 10-12 ans, en{" "}
              <strong>groupes de 5 à 20 personnes</strong>. Aucun
              prérequis, juste de la curiosité et de bonnes chaussures !
              Concernant les personnes à mobilité réduite (PMR), il est préférable de
              me contacter pour discuter des possibilités d'adaptation de l'itinéraire 
              afin de garantir une expérience agréable pour tous.
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
              Les excursions durent généralement <strong>3-4 heures</strong>, sur un parcours de 3 à 5 km. 
              Cependant, la durée et la distance peut être adaptée selon vos besoins.
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
              N'hésitez pas à me contacter pour obtenir plus d'informations et un devis personnalisé.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <Brain className="h-5 w-5 text-nemo-forest flex-shrink-0" />
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
            <CloudRain className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Puis-je reporter en cas de mauvais temps ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              Les excursions ont lieu en toute saison, y compris par temps de pluie. 
              Dans ce cas, il est conseillé de prévoir des vêtements adaptés. 
              Des instructions adéquates seront fournies avant l'excursion.
              Cependant, en cas de conditions météorologiques extrêmes (pluies torrentielles, orages violents, alertes officielles, fermetures de forêts, etc.),
              la sécurité des participants est primordiale. Dans ce cas,
              la prestation pourra être reportée d'un commun accord.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <Dog className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Les animaux de compagnie sont-ils autorisés ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              En principe, <strong>les animaux de compagnie ne sont pas autorisés lors des balades.</strong> Même
              si nous les adorons, leur présence n'est généralement pas compatible avec 
              l'observation de la nature, et surtout de la faune sauvage qui pourrait être effrayée 
              ou perturbée. Merci de votre compréhension !
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-6">
          <AccordionTrigger className="flex gap-2 text-nemo-forest font-medium">
            <Link className="h-5 w-5 text-nemo-forest flex-shrink-0" />
            Les excursions sont-elles disponibles en anglais ?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-600">
              Oui, pour les groupes internationaux ou les personnes ne parlant pas français,
              toutes les excursions peuvent être proposées en anglais.
            </p>
          </AccordionContent>
        </AccordionItem> */}
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

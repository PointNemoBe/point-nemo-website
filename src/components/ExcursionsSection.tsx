import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, Calendar, Backpack, Building, Sparkles, BookOpen, Compass } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const excursionData = [
  {
    id: 2,
    title: "Team building nature",
    description: "Marre du paintball ou du bowling ? Offrez à votre équipe une vraie bouffée d'air. Une activité originale, ressourçante et pleine de sens, à deux pas du bureau.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 heures",
    audience: "Entreprises",
    difficulty: "Modéré",
    location: "Sur mesure",
    icon: <Building className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Excursion familiale",
    description: "Une balade pensée pour petits et grands curieux, avec des contenus accessibles, des jeux d'observation et des temps d'échange pour toute la famille.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "3 heures",
    audience: "Familles",
    difficulty: "Facile",
    location: "Brabant wallon",
    icon: <Users className="h-5 w-5" />
  },
  {
    id: 4,
    title: "Sortie sur mesure",
    description: "Une excursion personnalisée selon vos envies, votre lieu, votre public. Contactez-moi pour créer ensemble une expérience nature qui correspond exactement à vos besoins.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "Variable",
    audience: "Sur mesure",
    difficulty: "Adaptée",
    location: "À définir",
    icon: <Sparkles className="h-5 w-5" />
  }
];

const ExcursionsCard = ({ excursion }) => {
  return (
    <Card className="h-full overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={excursion.image} 
          alt={excursion.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className="bg-nemo-forest hover:bg-nemo-moss flex items-center gap-1">
            {excursion.icon}
            {excursion.audience}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {excursion.duration}
          </div>
        </div>
        <CardTitle className="text-xl font-display text-nemo-forest">{excursion.title}</CardTitle>
        <CardDescription className="font-medium flex items-center gap-1">
          <MapPin className="h-4 w-4 text-nemo-forest" />
          {excursion.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{excursion.description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button className="w-full bg-nemo-forest hover:bg-nemo-moss">
          En savoir plus
        </Button>
      </CardFooter>
    </Card>
  );
};

const ExcursionsSection = () => {
  return (
    <section id="excursions" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Nos excursions</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Des balades guidées d'environ 3 heures, sur un parcours de 3 à 5 km, à la découverte 
          de paysages et d'écosystèmes variés : bois, prairies, zones humides, terrains agricoles...
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
          <div className="bg-nemo-leaf/20 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-nemo-forest" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Où ça se passe ?</h3>
            <p className="text-gray-600">
              Les excursions ont lieu en <strong>Brabant wallon</strong> et dans ses environs, selon la demande, dans des lieux choisis 
              pour la diversité de leurs paysages et écosystèmes. Le lieu peut être adapté en fonction des besoins spécifiques.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="bg-nemo-leaf/20 p-3 rounded-full">
            <Users className="h-6 w-6 text-nemo-forest" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Pour qui ?</h3>
            <p className="text-gray-600">
              <strong>Adultes et ados</strong> (à partir de 10-12 ans), en <strong>groupes de 5 à 15 personnes</strong> (max 20). 
              Aucun prérequis, juste de la curiosité et de bonnes chaussures !
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
        {excursionData.map(excursion => (
          <ExcursionsCard key={excursion.id} excursion={excursion} />
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-12 max-w-3xl mx-auto">
        <h3 className="text-2xl font-display font-semibold mb-4 text-center">Chaque sortie comprend :</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="bg-nemo-leaf/20 p-2 rounded-full mt-1">
              <Users className="h-5 w-5 text-nemo-forest" />
            </div>
            <div>
              <p className="font-medium">L'encadrement par un guide nature certifié des Cercles des Naturalistes de Belgique</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-nemo-leaf/20 p-2 rounded-full mt-1">
              <MapPin className="h-5 w-5 text-nemo-forest" />
            </div>
            <div>
              <p className="font-medium">La préparation de l'itinéraire, avec documentation et supports didactiques adaptés</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-nemo-leaf/20 p-2 rounded-full mt-1">
              <BookOpen className="h-5 w-5 text-nemo-forest" />
            </div>
            <div>
              <p className="font-medium">Des explications claires, nourries de science, de terrain et d'exemples concrets</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-nemo-leaf/20 p-2 rounded-full mt-1">
              <Sparkles className="h-5 w-5 text-nemo-forest" />
            </div>
            <div>
              <p className="font-medium">Des activités participatives (observation, jeu, discussion, dégustation, mise en situation...)</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-nemo-leaf/20 p-2 rounded-full mt-1">
              <Compass className="h-5 w-5 text-nemo-forest" />
            </div>
            <div>
              <p className="font-medium">Une bonne dose de déconnexion</p>
            </div>
          </li>
        </ul>
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
    </section>
  );
};

export default ExcursionsSection;

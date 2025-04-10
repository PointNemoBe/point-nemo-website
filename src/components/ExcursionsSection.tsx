
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const excursionData = [
  {
    id: 1,
    title: "Découverte de la faune et flore locale",
    description: "Une excursion guidée pour découvrir la richesse de la biodiversité dans votre région. Idéale pour les familles et les curieux de nature.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "3 heures",
    audience: "Particuliers",
    difficulty: "Facile",
    location: "Forêt de Soignes"
  },
  {
    id: 2,
    title: "Teambuilding éco-responsable",
    description: "Renforcez les liens entre collègues tout en vous reconnectant à la nature. Activités collaboratives et sensibilisation aux enjeux environnementaux.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "Journée entière",
    audience: "Entreprises",
    difficulty: "Modéré",
    location: "Sur mesure"
  },
  {
    id: 3,
    title: "Lecture du paysage et géologie",
    description: "Apprenez à déchiffrer l'histoire géologique de nos territoires et à comprendre comment les paysages se sont formés au fil du temps.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 heures",
    audience: "Tous publics",
    difficulty: "Modéré",
    location: "Ardennes belges"
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
          <Badge className="bg-nemo-forest hover:bg-nemo-moss">{excursion.audience}</Badge>
          <span className="text-sm text-gray-500">{excursion.duration}</span>
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
      <div className="text-center mb-16">
        <h2 className="section-title">Nos excursions</h2>
        <p className="section-subtitle">
          Des expériences immersives pour vous reconnecter à la nature et comprendre votre territoire,
          adaptées aux particuliers comme aux entreprises.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {excursionData.map(excursion => (
          <ExcursionsCard key={excursion.id} excursion={excursion} />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-display font-semibold mb-6">Vous avez un besoin spécifique ?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Toutes nos excursions peuvent être personnalisées selon vos objectifs, la taille de votre groupe et vos contraintes. N'hésitez pas à nous contacter pour une offre sur mesure.
        </p>
        <Button asChild size="lg" className="bg-nemo-forest hover:bg-nemo-moss">
          <a href="#contact">
            <Users className="mr-2 h-5 w-5" />
            Demander un devis personnalisé
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ExcursionsSection;

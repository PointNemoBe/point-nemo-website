
import { Building, Sparkles, Users } from "lucide-react";
import { ExcursionType } from "./types";

export const excursionData: ExcursionType[] = [
  {
    id: 2,
    title: "Team building nature",
    description: "Marre du paintball ou du bowling ? Offrez à votre équipe une vraie bouffée d'air. Une activité originale, ressourçante et pleine de sens, à deux pas du bureau.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4 heures",
    audience: "Entreprises",
    difficulty: "Modéré",
    location: "Brabant Wallon et environs",
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
    location: "Brabant Wallon et environs",
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
    location: "Brabant Wallon et environs",
    icon: <Sparkles className="h-5 w-5" />
  }
];

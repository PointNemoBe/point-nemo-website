
import { Building, Sparkles, Users } from "lucide-react";
import { ExcursionType } from "./types";

export const excursionData: ExcursionType[] = [
  {
    id: 2,
    title: "Team building nature",
    description: "Marre du paintball ou du bowling ? Offrez à votre équipe une véritable bouffée d'air. Une activité originale, ressourçante et pleine de sens, à deux pas du bureau.",
    image: "IMG_1807.jpg",
    duration: "4 heures",
    audience: "Entreprises",
    difficulty: "Modéré",
    location: "Brabant Wallon et environs",
    icon: <Building className="h-5 w-5" />
  },
  {
    id: 3,
    title: "Pour particuliers",
    description: "Des balades pensées pour petits et grands curieux, avec des contenus accessibles, des jeux d'observation et des temps d'échange en famille ou entre amis.",
    image: "IMG_1803.jpg",
    duration: "4 heures",
    audience: "Familles",
    difficulty: "Facile",
    location: "Brabant Wallon et environs",
    icon: <Users className="h-5 w-5" />
  },
  {
    id: 4,
    title: "Sortie sur mesure",
    description: "Une excursion personnalisée selon vos envies, votre lieu, votre public. Contactez-moi pour créer ensemble une expérience nature qui correspond exactement à vos besoins.",
    image: "hautes_fagnes.jpg",
    duration: "Variable",
    audience: "Sur mesure",
    difficulty: "Adaptée",
    location: "Variable",
    icon: <Sparkles className="h-5 w-5" />
  }
];

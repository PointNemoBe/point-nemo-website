
import { Users, MapPin, BookOpen, Sparkles, Compass } from "lucide-react";

export const ExcursionIncludesList = () => {
  return (
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
  );
};


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ExcursionType } from "./types";

export const ExcursionCard = ({ excursion }: { excursion: ExcursionType }) => {
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
          {/* <MapPin className="h-4 w-4 text-nemo-forest" />
          {excursion.location} */}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{excursion.description}</p>
      </CardContent>
      {/* Removed "En savoir plus" button */}
    </Card>
  );
};

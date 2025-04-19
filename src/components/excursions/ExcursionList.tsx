
import { ExcursionCard } from "./ExcursionCard";
import { ExcursionType } from "./types";

export const ExcursionList = ({ excursions }: { excursions: ExcursionType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16 place-items-center justify-center">
      {excursions.map(excursion => (
        <ExcursionCard key={excursion.id} excursion={excursion} />
      ))}
    </div>
  );
};

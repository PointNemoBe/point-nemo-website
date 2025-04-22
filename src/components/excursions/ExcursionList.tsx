
import { ExcursionCard } from "./ExcursionCard";
import { ExcursionType } from "./types";

export const ExcursionList = ({ excursions }: { excursions: ExcursionType[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-16 place-items-center">
      {excursions.map(excursion => (
        <ExcursionCard key={excursion.id} excursion={excursion} />
      ))}
    </div>
  );
};

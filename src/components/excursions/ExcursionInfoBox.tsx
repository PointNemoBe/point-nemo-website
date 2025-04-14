
import { ReactNode } from "react";
import { ExcursionSectionInfoProps } from "./types";

export const ExcursionInfoBox = ({ icon, title, children }: ExcursionSectionInfoProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
      <div className="bg-nemo-leaf/20 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
};


import { ReactNode } from "react";

export type ExcursionType = {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  audience: string;
  //difficulty: string;
  //location: string;
  icon: ReactNode;
};

export type ExcursionSectionInfoProps = {
  icon: ReactNode;
  title: string;
  children: React.ReactNode;
};

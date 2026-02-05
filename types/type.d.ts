import type { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
  className?: string;
}

export type FeatureType = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
};

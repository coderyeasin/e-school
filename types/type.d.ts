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

export type CourseType = {
  id: string;
  calIcon: ReactNode;
  userIcon: ReactNode;
  thumbnail: string;
  title: string;
  description: string;
  btnText: string;
};

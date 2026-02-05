import React from "react";
import type { FeatureType } from "../../../types/type";

const keyFeatures: FeatureType[] = [
  {
    id: "1",
    icon: "/Icon/book.png",
    title: "1500+ Topic",
    subtitle: "Learn Anythings",
  },
  {
    id: "2",
    icon: "/Icon/Student.png",
    title: "1800+ Students",
    subtitle: "Learn Anythings",
  },
  {
    id: "3",
    icon: "/Icon/Test.png",
    title: "9K+ Test Token",
    subtitle: "Learn Anythings",
  },
  {
    id: "4",
    icon: "/Icon/Students.png",
    title: "2000+ Student",
    subtitle: "Learn Anythings",
  },
];

const Features = () => {
  return (
    <section className="flex gap-10 mx-auto">
      {keyFeatures?.map((feature: FeatureType) => (
        <div
          key={feature.id}
          className={` ${feature.id === "2" ? "bg-white border-none shadow-2xl" : "bg-[#F8FFFB]"} flex flex-col justify-center items-center border-2 border-PrimaryColor w-67.5 h-67.5 rounded-xl `}
        >
          <img src={feature.icon} alt={feature.title} className="w-20 h-20" />
          <h3 className="text-2xl font-medium mt-7">{feature.title}</h3>
          <p className="text-base text-[#585859] font-light">
            {feature.subtitle}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Features;

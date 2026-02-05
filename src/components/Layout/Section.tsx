import type { ILayout } from "../../../types/type";

const Section = ({ children, className }: ILayout) => {
  return (
    <section className={`py-10 lg:py-10 ${className}`}>{children}</section>
  );
};

export default Section;

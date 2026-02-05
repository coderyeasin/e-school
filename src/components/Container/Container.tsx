import type { ILayout } from "../../../types/type";

const Container = ({ children, className }: ILayout) => {
  return <div className={`w-full  ${className}`}>{children}</div>;
};

export default Container;

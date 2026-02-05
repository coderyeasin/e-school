import { type ReactNode } from "react";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;

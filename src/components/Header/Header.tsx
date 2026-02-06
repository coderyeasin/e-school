import React, { useState } from "react";

const navLinks = [
  { name: "Books", href: "#books" },
  { name: "Courses", href: "#courses" },
  { name: "Others", href: "#others" },
  { name: "Blog", href: "#blog" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center relative w-full">
        <img src="/Icon/Logo.png" className="w-49.5 h-14.75" alt="Logo" />
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7.5 text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <a
              href="#signin"
              className="py-3 px-7 bg-PrimaryColor text-white rounded-[33px]"
            >
              Sign in
            </a>
          </li>
        </ul>
        {/* Hamburger Icon for small devices only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-FooterColor rounded focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-FooterColor md:hidden z-40 animate-fade-in">
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-lg hover:text-PrimaryColor transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#signin"
                  className="py-3 px-7 bg-PrimaryColor text-white rounded-[33px]"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

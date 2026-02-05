import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <img src="/Icon/Logo.png" className="w-49.5 h-14.75" alt="Logo" />
        <ul className="flex items-center gap-7.5 text-base ">
          <li>
            <a href="#books">Books</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#others">Others</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a
              href="#signin"
              className="py-3 px-7 bg-PrimaryColor text-white rounded-[33px]"
            >
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

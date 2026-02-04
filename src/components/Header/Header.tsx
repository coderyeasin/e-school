import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-around items-center">
        <img src="/src/assets/logo.png" alt="Logo" />
        <ul>
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
            <a href="#signin">Sign in</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

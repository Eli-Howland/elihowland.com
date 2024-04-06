import React, { ReactNode } from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <nav className="navigation">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google is free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

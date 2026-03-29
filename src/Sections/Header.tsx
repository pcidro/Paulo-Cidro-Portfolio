import React, { useState } from "react";
import "../css/header.css";
import { Theme } from "../Context/ThemeContext";
import Switch from "../Components/Switch";

const Header = () => {
  const [menuHamburguer, setMenuHamburger] = useState(false);
  const { setDark, dark } = Theme();

  const toggleMenu = () => setMenuHamburger(!menuHamburguer);

  return (
    <header>
      <div className="header-index">
        <h1 className="main-title">
          <a href="#hero">
            Paulo <span className="highlight-name">Cidro</span>
          </a>
        </h1>

        <nav className={`nav-menu ${menuHamburguer ? "active" : ""}`}>
          <ul className="header-menu">
            <li>
              <a href="#hero">Início</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="contato">Contato</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Switch onChange={() => setDark((prev) => !prev)} checked={dark} />

          <button
            className={`hamburger ${menuHamburguer ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

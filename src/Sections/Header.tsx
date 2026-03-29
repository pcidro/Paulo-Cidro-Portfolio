import React, { useState } from "react";
import "../css/header.css";
import { Theme } from "../Context/ThemeContext";
import Switch from "../Components/Switch";
import { Scroll } from "../Context/ScrollContext";

const Header = () => {
  const [menuHamburguer, setMenuHamburger] = useState(false);
  const { setDark, dark } = Theme();
  const { scrolltoSection, heroRef, projetosRef, skillsRef, contatoRef } =
    Scroll();

  const handleNavClick = (ref: React.RefObject<HTMLElement | null>) => {
    scrolltoSection(ref);
    setMenuHamburger(false);
  };

  const toggleMenu = () => setMenuHamburger(!menuHamburguer);

  return (
    <header>
      <div className="header-index">
        <h1 className="main-title">
          <a onClick={() => handleNavClick(heroRef)}>
            Paulo <span className="highlight-name">Cidro</span>
          </a>
        </h1>

        <nav className={`nav-menu ${menuHamburguer ? "active" : ""}`}>
          <ul className="header-menu">
            <li>
              <a onClick={() => handleNavClick(heroRef)}>Início</a>
            </li>
            <li>
              <a onClick={() => handleNavClick(projetosRef)}>Projetos</a>
            </li>
            <li>
              <a onClick={() => handleNavClick(skillsRef)}>Habilidades</a>
            </li>
            <li>
              <a onClick={() => handleNavClick(contatoRef)}>Contato</a>
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

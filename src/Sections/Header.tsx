import { useState } from "react";
import "../css/header.css";
import Sun from "../assets/sun.svg";
import { Theme } from "../Context/ThemeContext";
import Moon from "../assets/Moon.svg";

const Header = () => {
  const [menuHamburguer, setMenuHamburger] = useState(false);
  const { setDark, dark } = Theme();

  const toggleMenu = () => setMenuHamburger(!menuHamburguer);
  const closeMenu = () => setMenuHamburger(false);

  return (
    <header>
      <div className="header-index">
        <h1 className="main-title">
          Paulo <span className="highlight-name">Cidro</span>
        </h1>

        <nav className={`nav-menu ${menuHamburguer ? "active" : ""}`}>
          <ul className="header-menu">
            <li>
              <a onClick={closeMenu} href="#inicio">
                Início
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#projetos">
                Projetos
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#habilidades">
                Habilidades
              </a>
            </li>
            <li>
              <a onClick={closeMenu} href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button onClick={() => setDark((t) => !t)} className="theme-switcher">
            <img src={`${dark ? Moon : Sun}`} alt="Mudar tema" />
          </button>

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

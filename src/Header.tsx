import React from "react";
import "./css/header.css";
import Sun from "./assets/sun.svg";

const Header = () => {
  return (
    <header>
      <div className="header-index">
        <div className="header-left">
          <ul className="header-menu-left">
            <li>
              <a href="#inicio">Início</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </div>

        <h1 className="main-title">
          Paulo <span className="highlight-name">Cidro</span>
        </h1>

        <div className="header-right">
          <ul className="header-menu-right">
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <div className="theme-switcher">
            <img src={Sun} alt="Mudar tema" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./css/header.css";
import Sun from "./assets/sun.svg";

const Header = () => {
  return (
    <header>
      <div className="header-index">
        <div className="header-left">
          <ul className="header-menu-left">
            <li>Início</li>
            <li>Sobre</li>
            <li>Projetos</li>
          </ul>
        </div>

        <h1 className="main-title">Paulo Cidro</h1>

        <div className="header-right">
          <ul className="header-menu-right">
            <li>Habilidades</li>
            <li>Contato</li>
            <li>Currículo</li>
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

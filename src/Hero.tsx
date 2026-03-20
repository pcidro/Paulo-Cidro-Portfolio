import React from "react";
import "./css/hero.css";
import PauloCidro from "./assets/Pcidro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          <span className="greeting">Olá, eu sou</span>
          <br />
          <span className="name">Paulo Cidro</span>
        </h1>

        <h2 className="subtitle">Web Developer</h2>

        <p className="hero-description">
          Sou Paulo Cidro, desenvolvedor apaixonado por tecnologia. Estudo
          programação e transformo ideias em interfaces modernas, funcionais e
          profissionais. Sempre busco aprender mais, explorar novas ferramentas
          e criar soluções criativas que realmente façam a diferença.
        </p>

        <div className="hero-actions">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>
          <a href="mailto:paulocidro@gmail.com" className="btn-secondary">
            <FontAwesomeIcon icon={faEnvelope} /> Entre em contato
          </a>
        </div>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/paulo-henrique-707110179/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn de Paulo Cidro"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/pcidro"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub de Paulo Cidro"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="image-decoration-ring"></div>
        <img src={PauloCidro} alt="Foto de perfil de Paulo Cidro" />
      </div>

      <div className="scroll-indicator">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </section>
  );
};

export default Hero;

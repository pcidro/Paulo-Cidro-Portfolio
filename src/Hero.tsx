import React from "react";
import PauloCidro from "./assets/Pcidro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./css/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Olá, eu sou <span>Paulo Cidro!</span>
        </h1>
        <span className="role">Desenvolvedor front end</span>
        <p>
          Especializado em criar interfaces modernas, performáticas e
          responsivas
        </p>

        <div className="hero-actions">
          <div className="hero-buttons">
            <a href="/seu-curriculo.pdf" download className="btn-primary">
              Download CV
            </a>
            <a href="#contato" className="btn-secondary">
              Entre em contato
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
      </div>
      <div className="hero-foto">
        <img src={PauloCidro} alt="Foto de perfil de Paulo Cidro" />
      </div>
    </section>
  );
};

export default Hero;

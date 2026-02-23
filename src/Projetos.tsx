import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCode,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import "./css/projetos.css";

const Projetos = () => {
  return (
    <section className="projetos-container">
      <h1 className="projetos-titulo">Projetos</h1>

      <ul className="projetos-grid">
        <li className="projeto-card">
          <div className="projeto-imagem-wrapper">
            <img
              className="imagem-projeto"
              src=""
              alt="Captura de tela do projeto Games Vault"
            />
          </div>
          <div className="projeto-conteudo">
            <h2>Games Vault</h2>
            <p>
              O GameVault é uma aplicação de gerenciamento e catalogação de
              jogos, desenvolvida para permitir que entusiastas organizem sua
              biblioteca pessoal e atribuam notas aos títulos jogados. O projeto
              foi concebido para aplicar conceitos avançados de consumo de APIs
              externas e persistência de dados em tempo real.
            </p>
            <div className="stacks">
              <span className="stack-react">
                <FontAwesomeIcon icon={faReact} /> React
              </span>
              <span className="stack-firebase">
                <FontAwesomeIcon icon={faFire} /> Firebase Auth
              </span>
              <span className="stack-js">
                <FontAwesomeIcon icon={faJs} /> JS
              </span>
            </div>
            <div className="acess">
              <a href="#deploy" className="btn-deploy">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
              </a>
              <a href="#code" className="btn-code">
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            </div>
          </div>
        </li>

        <li className="projeto-card">
          <div className="projeto-imagem-wrapper">
            <img
              className="imagem-projeto"
              src=""
              alt="Captura de tela do projeto Pokedex"
            />
          </div>
          <div className="projeto-conteudo">
            <h2>Pokedex</h2>
            <p>Consumo de API RESTful com paginação.</p>
            <div className="stacks">
              <span className="stack-react">
                <FontAwesomeIcon icon={faReact} /> React
              </span>
              <span className="stack-ts">
                <FontAwesomeIcon icon={faCode} /> TypeScript
              </span>
            </div>
            <div className="acess">
              <a href="#deploy" className="btn-deploy">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
              </a>
              <a href="#code" className="btn-code">
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            </div>
          </div>
        </li>

        <li className="projeto-card">
          <div className="projeto-imagem-wrapper">
            <img
              className="imagem-projeto"
              src=""
              alt="Captura de tela do projeto Pomodoro Timer"
            />
          </div>
          <div className="projeto-conteudo">
            <h2>Pomodoro Timer</h2>
            <p>Gerenciador de tempo focado em produtividade.</p>
            <div className="stacks">
              <span className="stack-html">
                <FontAwesomeIcon icon={faHtml5} /> HTML
              </span>
              <span className="stack-css">
                <FontAwesomeIcon icon={faCss3Alt} /> CSS
              </span>
              <span className="stack-js">
                <FontAwesomeIcon icon={faJs} /> JS
              </span>
            </div>
            <div className="acess">
              <a href="#deploy" className="btn-deploy">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
              </a>
              <a href="#code" className="btn-code">
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            </div>
          </div>
        </li>

        <li className="projeto-card">
          <div className="projeto-imagem-wrapper">
            <img
              className="imagem-projeto"
              src=""
              alt="Captura de tela do projeto Weather App"
            />
          </div>
          <div className="projeto-conteudo">
            <h2>Weather App</h2>
            <p>Previsão do tempo em tempo real.</p>
            <div className="stacks">
              <span className="stack-react">
                <FontAwesomeIcon icon={faReact} /> React
              </span>
              <span className="stack-api">
                <FontAwesomeIcon icon={faCode} /> API
              </span>
            </div>
            <div className="acess">
              <a href="#deploy" className="btn-deploy">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
              </a>
              <a href="#code" className="btn-code">
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projetos;

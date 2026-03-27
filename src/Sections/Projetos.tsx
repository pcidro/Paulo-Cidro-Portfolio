import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faFire } from "@fortawesome/free-solid-svg-icons";
import {
  faTypescript,
  faReact,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import "../css/projetos.css";
import Orby from "../assets/orby.png";
import gamesDb from "../assets/gamesdb.png";
import giuliapsi from "../assets/giuapsi.png";

const Projetos = () => {
  return (
    <section className="projetos-container">
      <h1 className="projetos-titulo">Projetos</h1>

      <ul className="projetos-grid">
        <li className="projeto-card">
          <div className="projeto-imagem-wrapper">
            <img
              className="imagem-projeto"
              src={Orby}
              alt="Captura de tela do projeto"
            />
          </div>
          <div className="projeto-conteudo">
            <h2>Orby E-Commerce</h2>
            <p>
              A Orby é uma plataforma de e-commerce especializada em sneakers,
              desenvolvida para oferecer uma experiência de compra fluida,
              moderna e totalmente responsiva, provisionando a simulação de todo
              o fluxo de compra, desde a seleção do produto até a finalização do
              pedido.
            </p>
            <div className="stacks">
              <span className="stack-react">
                <FontAwesomeIcon icon={faReact} /> React
              </span>
              <span className="stack-ts">
                <FontAwesomeIcon icon={faTypescript} /> TypeScript
              </span>
              <span className="stack-firebase">
                <FontAwesomeIcon icon={faFire} /> Firebase Auth
              </span>
              <span className="stack-firebase">
                <FontAwesomeIcon icon={faFire} /> Firebase FireStore
              </span>
            </div>
            <div className="acess">
              <a
                target="_blank"
                href="https://orbyshoes.netlify.app/"
                className="btn-deploy"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
              </a>
              <a
                target="_blank"
                href="https://github.com/pcidro/Orby-E-Commerce/"
                className="btn-code"
              >
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            </div>
          </div>
        </li>

        <li className="projeto-card">
          <div className="projeto-imagem-wrapper">
            <img
              className="imagem-projeto"
              src={giuliapsi}
              alt="Captura de tela do projeto"
            />
          </div>
          <div className="projeto-conteudo">
            <h2>Site Completo Psicologa</h2>
            <p>
              Um site feito para uma cliente real. O projeto é completamente
              responsivo, garantindo uma navegação fluida em desktops, tablets e
              smartphones. Inclui seções de serviços, metodologia da psicologa,
              depoimentos e integração direta com WhatsApp para agendamentos,
              otimizando a conversão de novos pacientes.
            </p>
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
              <a
                target="blank"
                href="https://psicologagiuliarivolta.com.br/"
                className="btn-deploy"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
              </a>
              <a
                target="_blank"
                href="https://github.com/pcidro/psigiuliarivolta"
                className="btn-code"
              >
                <FontAwesomeIcon icon={faGithub} /> Code
              </a>
            </div>
          </div>
        </li>
        <li className="projeto-card">
          <div className="projeto-imagem-wrapper">
            <img
              className="imagem-projeto"
              src={gamesDb}
              alt="Captura de tela do projeto"
            />
          </div>
          <div className="projeto-conteudo">
            <h2>Games DB</h2>
            <p>
              O Games DB é uma aplicação de gerenciamento e catalogação de
              jogos, desenvolvida para permitir que entusiastas organizem sua
              biblioteca pessoal e atribuam notas aos títulos jogados.
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
              <a
                target="_blank"
                href="https://gamesdeb.netlify.app/"
                className="btn-deploy"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Deploy
              </a>
              <a
                target="_blank"
                href="https://github.com/pcidro/GamesDB"
                className="btn-code"
              >
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

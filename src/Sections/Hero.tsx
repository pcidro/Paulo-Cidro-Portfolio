import "../css/hero.css";
import PauloCidro from "../assets/Pcidro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Scroll } from "../Context/ScrollContext";

const Hero = () => {
  const { heroRef } = Scroll();
  return (
    <section id="inicio" ref={heroRef} className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Olá, eu sou</span>
          <br />
          <span className="highlight-name">Paulo Cidro</span>
        </h1>

        <h2 className="subtitle">Desenvolvedor Full Stack</h2>

        <p className="hero-description">
          Desenvolvedor Full Stack com foco em React, Next.js e TypeScript. Desenvolvo interfaces responsivas e integro aplicações a APIs REST construídas com Node.js, Express, Prisma e PostgreSQL.
        </p>

        <div className="hero-actions">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>
          <a
            href="/curriculo-paulo-cidro.pdf"
            download
            className="btn-secondary"
          >
            Baixar currículo
          </a>
          <a href="mailto:paulohcidro@gmail.com" className="btn-secondary">
            <FontAwesomeIcon icon={faEnvelope} /> Entre em contato
          </a>
        </div>

        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/paulocidro/"
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

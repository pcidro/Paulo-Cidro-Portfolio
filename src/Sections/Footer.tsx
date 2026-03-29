import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "../css/footer.css";
import { Scroll } from "../Context/ScrollContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {
    scrolltoSection,
    heroRef,
    projetosRef,
    skillsRef,
    contatoRef,
    sobreRef,
  } = Scroll();

  return (
    <footer className="footer-container">
      <div className="footer-content-wrapper">
        <div className="footer-brand-section">
          <h2 className="footer-title">Paulo Cidro</h2>
          <p className="footer-description">
            Front-End Developer - Transformando ideias em interfaces modernas e
            funcionais.
          </p>
        </div>

        <div className="footer-nav-section">
          <h3 className="footer-subtitle">Navegação</h3>
          <ul className="footer-nav-list">
            <li>
              <a
                onClick={() => scrolltoSection(heroRef)}
                className="footer-link"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                onClick={() => scrolltoSection(sobreRef)}
                className="footer-link"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                onClick={() => scrolltoSection(skillsRef)}
                className="footer-link"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                onClick={() => scrolltoSection(projetosRef)}
                className="footer-link"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                onClick={() => scrolltoSection(contatoRef)}
                className="footer-link"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <h3 className="footer-subtitle">Redes Sociais</h3>
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/paulocidro/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/pcidro"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://wa.me/5511987698148"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-wrapper"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Paulo Cidro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

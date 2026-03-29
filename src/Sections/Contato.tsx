import "../css/contato.css";
import "../css/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Scroll } from "../Context/ScrollContext";

const Contato = () => {
  const { contatoRef } = Scroll();
  return (
    <section ref={contatoRef} className="contact-container">
      <div className="contact-content-wrapper">
        <h2 className="contact-title">Contato</h2>
        <div className="contact-grid">
          <a
            href="https://www.linkedin.com/in/paulocidro/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-glow"></div>
            <div className="contact-card-content">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Vamos nos conectar</p>
              </div>
            </div>
          </a>

          <a href="mailto:paulohcidro@gmail.com" className="contact-card">
            <div className="contact-card-glow"></div>
            <div className="contact-card-content">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="contact-info">
                <h3>E-mail</h3>
                <p>Me mande um email</p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/pcidro"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-glow"></div>
            <div className="contact-card-content">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faGithub} />
              </div>
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>Veja meus projetos</p>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/5511987698148"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-glow"></div>
            <div className="contact-card-content">
              <div className="contact-icon-wrapper">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="contact-info">
                <h3>WhatsApp</h3>
                <p>Fale diretamente comigo</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;

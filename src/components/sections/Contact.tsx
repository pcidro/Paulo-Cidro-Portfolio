import { useScroll } from "../../hooks/useScroll";
import { socialLinks } from "../../data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "../ui/SectionReveal";

export default function Contact() {
  const { contatoRef } = useScroll();

  return (
    <section id="contato" ref={contatoRef} className="section">
      <div className="container-main">
        <SectionReveal>
          <div className="contact-panel">
            <div className="contact-glow" aria-hidden="true" />

            <h2 className="contact-title" style={{ position: "relative", zIndex: 1 }}>
              Vamos conversar?
            </h2>
            <p className="contact-desc" style={{ position: "relative", zIndex: 1 }}>
              Estou aberto a oportunidades Front-end e Full Stack Júnior. Se você procura alguém
              comprometido com interfaces bem construídas, entre em contato.
            </p>

            <div className="contact-ctas" style={{ position: "relative", zIndex: 1 }}>
              <a href={`mailto:${socialLinks.email}`} className="btn-primary" style={{ gap: "0.5rem", minWidth: 180 }}>
                <FontAwesomeIcon icon={faEnvelope} />
                Enviar e-mail
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ gap: "0.5rem", minWidth: 160 }}>
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
            </div>

            <div className="contact-secondary-links" style={{ position: "relative", zIndex: 1 }}>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
              <span aria-hidden="true" style={{ width: 1, height: 16, background: "var(--border)" }} />
              <a href={socialLinks.cv} download className="contact-link">
                <FontAwesomeIcon icon={faDownload} style={{ fontSize: "0.75rem" }} />
                Currículo
              </a>
              <span aria-hidden="true" style={{ width: 1, height: 16, background: "var(--border)" }} />
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-link">
                <FontAwesomeIcon icon={faWhatsapp} />
                WhatsApp
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

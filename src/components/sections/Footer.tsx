import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { socialLinks } from "../../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand + tagline */}
          <div>
            <div className="footer-brand-name">Paulo Cidro</div>
            <div className="footer-brand-role">
              Desenvolvedor Front-end &amp; Full Stack
            </div>
          </div>

          <p className="footer-tagline">
            Construindo interfaces responsivas e aplicações Full Stack com
            React, Next.js e TypeScript.
          </p>

          {/* Social links */}
          <div className="footer-socials">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer-social-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="footer-social-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="footer-bottom">
          <span>
            &copy; {currentYear} Paulo Cidro, Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

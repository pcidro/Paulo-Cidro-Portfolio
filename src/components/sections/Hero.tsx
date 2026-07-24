import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useScroll } from "../../hooks/useScroll";
import { socialLinks } from "../../data/portfolio";
import heroDesktopImg from "../../assets/herodesktop.webp";
import heroMobileImg from "../../assets/heromobile.webp";

export default function Hero() {
  const { heroRef } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="inicio" ref={heroRef} className="hero-section">

      <div ref={containerRef} style={{ position: "relative", zIndex: 10 }}>

        {/* ── DESKTOP HERO ── */}
        <div className="hero-desktop-wrap">
          <img
            src={heroDesktopImg}
            alt="Paulo Cidro, desenvolvedor Full Stack"
            className="hero-bg-img"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="hero-gradient-overlay" aria-hidden="true" />
          <div className="hero-bottom-fade" aria-hidden="true" />

          <div className="hero-content">
            <div className="hero-text-block">
              {/* Title */}
              <h1 className="hero-title">
                Desenvolvedor{" "}
                <span className="hero-title-accent">Full Stack</span>
              </h1>

              {/* Description */}
              <p className="hero-desc">
                Construo interfaces responsivas, acessíveis e integradas a APIs REST com
                React, Next.js, TypeScript, Node.js, Prisma e PostgreSQL.
              </p>

              {/* CTAs */}
              <div className="hero-ctas">
                <a
                  href="#projetos"
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Ver projetos
                </a>
                <a href={socialLinks.cv} download className="btn-secondary">
                  Baixar currículo
                </a>
              </div>

              {/* Meta */}
              <div className="hero-meta">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hero-meta-link"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hero-meta-link"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <div className="hero-divider" aria-hidden="true" />
                <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "0.75rem" }} />
                  São Paulo, Brasil
                </span>
                <div className="hero-divider" aria-hidden="true" />
                <span>Remoto, híbrido ou presencial</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE HERO (9:16 Portrait Canvas Overlay Composition) ── */}
        <div className="hero-mobile-container">
          {/* Main vertical portrait image */}
          <img
            src={heroMobileImg}
            alt="Paulo Cidro, desenvolvedor Full Stack"
            className="hero-mobile-img"
            width={600}
            height={1067}
            fetchPriority="high"
          />

          {/* Smooth black gradient overlays for seamless background integration */}
          <div className="hero-mobile-gradient-top" aria-hidden="true" />
          <div className="hero-mobile-gradient-bottom" aria-hidden="true" />
          <div className="hero-mobile-vignette" aria-hidden="true" />

          {/* Content directly over lower part of image */}
          <div className="hero-mobile-content">
            {/* Main Title */}
            <h1 className="hero-mobile-title">
              Desenvolvedor <br />
              <span className="hero-mobile-title-accent">Full Stack</span>
            </h1>

            {/* Description */}
            <p className="hero-mobile-desc">
              Construo interfaces responsivas, acessíveis e integradas a APIs REST com React, Next.js, TypeScript, Node.js, Prisma e PostgreSQL.
            </p>

            {/* Action Button */}
            <div className="hero-mobile-ctas">
              <a
                href="#projetos"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver projetos
              </a>
            </div>

            {/* Mobile Meta Links */}
            <div className="hero-mobile-meta">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hero-meta-link">
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.125rem" }} />
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hero-meta-link">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.125rem" }} />
              </a>
              <div className="hero-divider" aria-hidden="true" />
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "rgba(244,246,248,0.7)" }}>
                <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: "0.75rem" }} />
                São Paulo, Brasil
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

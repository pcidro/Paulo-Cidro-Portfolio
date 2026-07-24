import { useState, useEffect, useCallback, useRef } from "react";
import { useScroll } from "../../hooks/useScroll";
import { socialLinks } from "../../data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { id: "inicio", label: "Início" },
  { id: "projetos", label: "Projetos" },
  { id: "competencias", label: "Competências" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { scrollToSection, heroRef, projetosRef, skillsRef, sobreRef, contatoRef, activeSection, scrollProgress } = useScroll();

  const refMap: Record<string, React.RefObject<HTMLElement | null>> = {
    inicio: heroRef,
    projetos: projetosRef,
    competencias: skillsRef,
    sobre: sobreRef,
    contato: contatoRef,
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
    toggleRef.current?.focus();
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    document.body.classList.add("menu-open");
  }, []);

  const toggleMenu = useCallback(() => {
    if (isMenuOpen) closeMenu();
    else openMenu();
  }, [isMenuOpen, closeMenu, openMenu]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last?.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen, closeMenu]);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      menuRef.current.querySelector<HTMLElement>("a")?.focus();
    }
  }, [isMenuOpen]);

  const handleNavClick = (id: string) => {
    const ref = refMap[id];
    if (ref) scrollToSection(ref);
    if (isMenuOpen) closeMenu();
  };

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        {/* Brand */}
        <a
          href="#inicio"
          className="header-brand"
          onClick={(e) => { e.preventDefault(); handleNavClick("inicio"); }}
        >
          Paulo Cidro
        </a>

        {/* Desktop nav */}
        <nav className="header-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              className={`nav-link${activeSection === item.id ? " active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CV button */}
        <a href={socialLinks.cv} download className="header-cv-btn">
          <FontAwesomeIcon icon={faDownload} style={{ fontSize: "0.75rem" }} />
          Baixar CV
        </a>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div style={{ width: 20, display: "flex", flexDirection: "column", gap: 5 }}>
            <span className="hamburger-bar" style={isMenuOpen ? { transform: "rotate(45deg) translateY(7px)" } : {}} />
            <span className="hamburger-bar" style={isMenuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}} />
            <span className="hamburger-bar" style={isMenuOpen ? { transform: "rotate(-45deg) translateY(-7px)" } : {}} />
          </div>
        </button>
      </div>

      {/* Progress bar */}
      <div
        className="header-progress"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden="true"
      />

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal={isMenuOpen}
        aria-label="Menu de navegação"
        className={`mobile-drawer${isMenuOpen ? " open" : ""}`}
      >
        <div className="mobile-drawer-inner">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              className={`mobile-nav-link${activeSection === item.id ? " active" : ""}`}
            >
              {item.label}
            </a>
          ))}

          <a
            href={socialLinks.cv}
            download
            className="mobile-cv-btn"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faDownload} style={{ fontSize: "0.75rem" }} />
            Baixar currículo
          </a>

          <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)", display: "flex", gap: "1rem" }}>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-link" style={{ color: "var(--text-muted)" }}>
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.125rem" }} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-link" style={{ color: "var(--text-muted)" }}>
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.125rem" }} />
            </a>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="contact-link" style={{ color: "var(--text-muted)" }}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "1.125rem" }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

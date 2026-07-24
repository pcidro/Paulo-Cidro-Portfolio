import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useScroll } from "../../hooks/useScroll";
import { featuredProjects, secondaryProjects } from "../../data/portfolio";
import SectionReveal from "../ui/SectionReveal";
import type { FeaturedProject, SecondaryProject } from "../../types";

function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="browser-frame">
      <div className="browser-chrome">
        <span className="browser-dot" style={{ background: "#ff5f57" }} aria-hidden="true" />
        <span className="browser-dot" style={{ background: "#febc2e" }} aria-hidden="true" />
        <span className="browser-dot" style={{ background: "#28c840" }} aria-hidden="true" />
      </div>
      <div style={{ overflow: "hidden" }}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
      </div>
    </div>
  );
}

function FeaturedCard({ project, reversed }: { project: FeaturedProject; reversed: boolean }) {
  return (
    <SectionReveal>
      <article className={`featured-card group${reversed ? " featured-reversed" : ""}`}>
        {/* Image */}
        <div style={{ order: reversed ? 2 : 1 }}>
          <BrowserFrame
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
          />
        </div>

        {/* Content */}
        <div style={{ order: reversed ? 1 : 2 }}>
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          {project.context && (
            <p className="project-context">{project.context}</p>
          )}

          <ul className="project-features">
            {project.features.map((feature) => (
              <li key={feature} className="project-feature-item">
                <span className="feature-dot" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <p className="project-role">{project.role}</p>

          <div className="tech-badges">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>

          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={link.type === "deploy" ? "project-link-deploy" : "project-link-github"}
              >
                <FontAwesomeIcon
                  icon={link.type === "deploy" ? faArrowUpRightFromSquare : faGithub}
                  style={{ fontSize: "0.75rem" }}
                />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}

function SecondaryCard({ project }: { project: SecondaryProject }) {
  return (
    <article className="secondary-card">
      <div className="secondary-img">
        <img
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
        />
      </div>

      <div className="secondary-content">
        <span className="project-category" style={{ marginBottom: 0 }}>{project.category}</span>
        <h4 className="secondary-title">{project.title}</h4>
        <p className="secondary-desc">{project.description}</p>

        <div className="tech-badges" style={{ marginBottom: 0 }}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-links" style={{ marginTop: "0.25rem" }}>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={link.type === "deploy" ? "project-link-deploy" : "project-link-github"}
              style={{ fontSize: "0.8125rem" }}
            >
              <FontAwesomeIcon
                icon={link.type === "deploy" ? faArrowUpRightFromSquare : faGithub}
                style={{ fontSize: "0.6875rem", marginRight: "0.25rem" }}
              />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { projetosRef } = useScroll();

  return (
    <section id="projetos" ref={projetosRef} className="section">
      <div className="container-main">
        {/* Section header — no subtitles */}
        <SectionReveal>
          <div className="section-header">
            <h2 className="section-title">Projetos em destaque</h2>
          </div>
        </SectionReveal>

        {/* Featured projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem", marginBottom: "5rem" }}>
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.id} project={project} reversed={i % 2 !== 0} />
          ))}
        </div>

        {/* More projects — no subtitle label */}
        <SectionReveal>
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--text-primary)" }}>
              Mais projetos
            </h3>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid-3">
            {secondaryProjects.map((project) => (
              <SecondaryCard key={project.id} project={project} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

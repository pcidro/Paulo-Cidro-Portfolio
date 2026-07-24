import { useScroll } from "../../hooks/useScroll";
import { skillGroups } from "../../data/portfolio";
import SectionReveal from "../ui/SectionReveal";

export default function Skills() {
  const { skillsRef } = useScroll();

  return (
    <section id="competencias" ref={skillsRef} className="section section-alt">
      <div className="container-main">
        <SectionReveal>
          <div className="section-header">
            <h2 className="section-title">Competências técnicas</h2>
            <p style={{ marginTop: "1rem", fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "520px" }}>
              Tecnologias e práticas que utilizo na construção de interfaces, APIs e aplicações Full Stack.
            </p>
          </div>
        </SectionReveal>

        <div className="grid-3">
          {skillGroups.map((group, i) => (
            <SectionReveal key={group.title} delay={i * 0.1}>
              <div className="skill-card">
                <h3 className="skill-card-title">{group.title}</h3>
                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li key={skill} className="skill-item">
                      <span className="skill-dot" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

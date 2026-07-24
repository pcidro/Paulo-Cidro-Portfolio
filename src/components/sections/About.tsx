import { useScroll } from "../../hooks/useScroll";
import { profileInfo } from "../../data/portfolio";
import SectionReveal from "../ui/SectionReveal";

export default function About() {
  const { sobreRef } = useScroll();

  return (
    <section id="sobre" ref={sobreRef} className="section">
      <div className="container-main">
        <SectionReveal>
          <div className="section-header">
            <h2 className="section-title">Sobre mim</h2>
          </div>
        </SectionReveal>

        <div className="about-grid">
          <SectionReveal>
            <div className="about-text">
              <p className="about-paragraph">
                Sou formado em Análise e Desenvolvimento de Sistemas e
                desenvolvo aplicações web completas — desde a interface até a
                integração com APIs e bancos de dados.
              </p>
              <p className="about-paragraph">
                Meu foco principal está no ecossistema React, utilizando Next.js
                e TypeScript para construir interfaces modernas e responsivas.
                No back-end, trabalho com Node.js, Express, Prisma e PostgreSQL
                para criar APIs REST robustas.
              </p>
              <p className="about-paragraph">
                Além de projetos pessoais, já desenvolvi e publiquei sites para
                clientes reais, com deploy em domínio próprio. Busco minha
                primeira oportunidade formal como Desenvolvedor Front-end ou
                Full Stack Júnior.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="info-panel">
              <h3 className="info-panel-title">Informações profissionais</h3>
              <dl className="info-list">
                {profileInfo.map((item) => (
                  <div key={item.label}>
                    <dt className="info-item-label">{item.label}</dt>
                    <dd className="info-item-value">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

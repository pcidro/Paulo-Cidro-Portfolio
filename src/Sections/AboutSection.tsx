import { faLanguage, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Scroll } from "../Context/ScrollContext";

const AboutSection = () => {
  const { sobreRef } = Scroll();
  return (
    <section id="sobre" ref={sobreRef} className="about-container">
      <div className="about-content-wrapper">
        <h2 className="about-title">Sobre Mim e Formação</h2>
        <div className="about-grid">
          <div className="about-text-content">
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista e atuo como desenvolvedor web freelancer desde 2025, criando e publicando soluções para clientes reais.
            </p>
            <p>
              Trabalho principalmente com React, Next.js e TypeScript no front-end, além de Node.js, Express, Prisma e PostgreSQL no back-end. Entre meus projetos, desenvolvi o Easy Pizza, um sistema Full Stack com autenticação JWT, controle de acesso, gerenciamento de produtos e acompanhamento de pedidos.
            </p>
            <p>
              Busco minha primeira oportunidade em uma equipe de desenvolvimento como Desenvolvedor Front-end ou Full Stack Júnior, onde eu possa contribuir com aplicações bem estruturadas e continuar evoluindo tecnicamente.
            </p>
          </div>
          <div className="about-card-wrapper">
            <div className="education-card">
              <div className="education-card-glow"></div>
              <div className="education-card-content">
                <div className="education-header">
                  <div className="about-icon-wrapper">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </div>
                  <h3>Análise e Desenvolvimento de Sistemas</h3>
                </div>
                <div className="education-details">
                  <p className="education-institution">
                    UNIP - Universidade Paulista
                  </p>
                  <div className="education-footer">
                    <span className="education-status-dot"></span>
                    <p className="education-year">Conclusão: 2021</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-glow"></div>
              <div className="education-card-content">
                <div className="education-header">
                  <div className="about-icon-wrapper">
                    <FontAwesomeIcon icon={faLanguage} />
                  </div>
                  <h3>Idiomas</h3>
                </div>
                <div className="education-details">
                  <p className="education-institution">Inglês intermediário — leitura técnica e conversação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

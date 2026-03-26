import React from "react";
import "../css/about.css";
const AboutSection = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">Sobre Mim e Formação</h2>

      <div className="about-grid">
        <div className="about-text-content">
          <p>
            Meu nome é Paulo Cidro, sou desenvolvedor front-end. Desde sempre
            gostei muito de tecnologia, usando computador e videogame
            praticamente o dia todo na minha infância.
          </p>
          <p>
            Com o tempo, fui me aproximando mais da área, onde concluí minha
            graduação. Meu foco é transformar ideias em projetos que ajudem
            pessoas e negócios a se conectarem melhor com o público através do
            meu código.
          </p>
          <p>
            Estou sempre estudando e evoluindo, buscando melhorar tanto na parte
            técnica quanto na forma de pensar e resolver problemas, com foco em
            me tornar um desenvolvedor full stack no futuro.
          </p>
        </div>

        <div className="about-card-wrapper">
          <div className="education-card">
            <div className="education-header">
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <span className="education-badge">Tecnólogo</span>
            </div>
            <p className="education-institution">
              UNIP - Universidade Paulista
            </p>
            <p className="education-year">Conclusão: 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { faGlobe, faSchool } from "@fortawesome/free-solid-svg-icons";
import "../css/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content-wrapper">
        <h2 className="about-title">Sobre Mim e Formação</h2>
        <div className="about-grid">
          <div className="about-text-content">
            <p>
              Desde sempre gostei muito de tecnologia, usando computador e
              videogame praticamente o dia todo na minha infância.
            </p>
            <p>
              Com o tempo, fui me aproximando mais da área, onde concluí minha
              graduação. Meu foco é transformar ideias em projetos que ajudem
              pessoas e negócios a se conectarem melhor com o público através do
              meu código.
            </p>
            <p>
              Estou sempre estudando e evoluindo, buscando melhorar tanto na
              parte técnica quanto na forma de pensar e resolver problemas, com
              foco em me tornar um desenvolvedor full stack no futuro.
            </p>
          </div>
          <div className="about-card-wrapper">
            <div className="education-card">
              <div className="education-card-glow"></div>
              <div className="education-card-content">
                <div className="education-header">
                  <div className="about-icon-wrapper">
                    <FontAwesomeIcon icon={faSchool} />
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
                    <FontAwesomeIcon icon={faGlobe} />
                  </div>
                  <h3>Idiomas</h3>
                </div>
                <div className="education-details">
                  <p className="education-institution">Inglês Avançado</p>
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faTypescript,
  faTailwindCss,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "../css/skills.css";
import { Scroll } from "../Context/ScrollContext";
import nextJs from "../assets/nextjs-icon-svgrepo-com.svg";

const SkillsSection = () => {
  const { skillsRef } = Scroll();
  return (
    <section ref={skillsRef} className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">Minhas Skills</h2>
        <p className="skills-subtitle">
          Tecnologias que domino e uso para criar experiências web incríveis
        </p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faHtml5} className="skill-icon html" />
            </div>
          </div>
          <h3 className="skill-name">HTML</h3>
          <p className="skill-description">
            Estrutura semântica, acessibilidade e performance web
          </p>
          <div className="card-border"></div>
        </div>

        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faCss3Alt} className="skill-icon css" />
            </div>
          </div>
          <h3 className="skill-name">CSS</h3>
          <p className="skill-description">
            Layouts responsivos, animações e design visual
          </p>
          <div className="card-border"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faJs} className="skill-icon js" />
            </div>
          </div>
          <h3 className="skill-name">JavaScript</h3>
          <p className="skill-description">Manipulação DOM e ES6+</p>
          <div className="card-border"></div>
        </div>

        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faTypescript} className="skill-icon ts" />
            </div>
          </div>
          <h3 className="skill-name">TypeScript</h3>
          <p className="skill-description">
            Type safety, interfaces e arquitetura robusta
          </p>
          <div className="card-border"></div>
        </div>

        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faReact} className="skill-icon react" />
            </div>
          </div>
          <h3 className="skill-name">React</h3>
          <p className="skill-description">
            Componentes, hooks, Context API e state management
          </p>
          <div className="card-border"></div>
        </div>

        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon
                icon={faTailwindCss}
                className="skill-icon tailwind"
              />
            </div>
          </div>
          <h3 className="skill-name">Tailwind CSS</h3>
          <p className="skill-description">Utility-first CSS</p>
          <div className="card-border"></div>
        </div>
        {/*  */}
        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <img src={nextJs} className="skill-icon-img" alt="" />
            </div>
          </div>
          <h3 className="skill-name">Next Js</h3>
          <p className="skill-description">
            {" "}
            SSR, SSG, rotas e otimização de performance
          </p>
          <div className="card-border"></div>
        </div>

        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon icon={faNodeJs} className="skill-icon node" />
            </div>
          </div>
          <h3 className="skill-name">Node.js</h3>
          <p className="skill-description">
            APIs, regras de negócio e aplicações back-end
          </p>
          <div className="card-border"></div>
        </div>

        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon
                icon={faDatabase}
                className="skill-icon postgresql"
              />
            </div>
          </div>
          <h3 className="skill-name">PostgreSQL</h3>
          <p className="skill-description">
            Modelagem, consultas e persistência de dados relacionais
          </p>
          <div className="card-border"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

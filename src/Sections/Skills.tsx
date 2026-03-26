import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faTypescript,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import "../css/skills.css";

const SkillsSection = () => {
  return (
    <section className="skills-container">
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
              <FontAwesomeIcon
                icon={faHtml5}
                className="skill-icon"
                style={{ color: "#e34f26" }}
              />
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
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="skill-icon"
                style={{ color: "#1572b6" }}
              />
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
              <FontAwesomeIcon
                icon={faJs}
                className="skill-icon"
                style={{ color: "#f7df1e" }}
              />
            </div>
          </div>
          <h3 className="skill-name">JavaScript</h3>
          <p className="skill-description">Manipulação DOM e ES6+</p>
          <div className="card-border"></div>
        </div>

        <div className="skill-card">
          <div className="skill-card-header">
            <div className="skill-icon-wrapper">
              <FontAwesomeIcon
                icon={faTypescript}
                className="skill-icon"
                style={{ color: "#3178c6" }}
              />
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
              <FontAwesomeIcon
                icon={faReact}
                className="skill-icon"
                style={{ color: "#61dafb" }}
              />
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
                className="skill-icon"
                style={{ color: "#06b6d4" }}
              />
            </div>
          </div>
          <h3 className="skill-name">Tailwind CSS</h3>
          <p className="skill-description">Utility-first CSS</p>
          <div className="card-border"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

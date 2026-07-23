import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faTypescript,
  faTailwindCss,
  faNodeJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faCodeBranch, faFire } from "@fortawesome/free-solid-svg-icons";
import "../css/skills.css";
import { Scroll } from "../Context/ScrollContext";
import nextJs from "../assets/nextjs-icon-svgrepo-com.svg";

const skillsData = [
  { name: "React", description: "Componentes, hooks, Context API e state management", icon: faReact, class: "react", type: "icon" },
  { name: "Next.js", description: "SSR, SSG, rotas e otimização de performance", icon: nextJs, class: "next", type: "img" },
  { name: "TypeScript", description: "Type safety, interfaces e arquitetura robusta", icon: faTypescript, class: "ts", type: "icon" },
  { name: "Tailwind CSS", description: "Utility-first CSS, prototipação rápida e responsividade", icon: faTailwindCss, class: "tailwind", type: "icon" },
  { name: "Node.js", description: "Construção de APIs RESTful e aplicações back-end", icon: faNodeJs, class: "node", type: "icon" },
  { name: "Express", description: "Roteamento e middlewares para aplicações Node", icon: faServer, class: "express", type: "icon" },
  { name: "Prisma", description: "ORM moderno para Node.js e TypeScript", icon: faCodeBranch, class: "prisma", type: "icon" },
  { name: "PostgreSQL", description: "Modelagem, consultas e persistência de dados relacionais", icon: faDatabase, class: "postgresql", type: "icon" },
  { name: "Git e GitHub", description: "Controle de versão e colaboração em código", icon: faGithub, class: "github", type: "icon" },
  { name: "Firebase", description: "Autenticação, banco de dados em tempo real e hosting", icon: faFire, class: "firebase", type: "icon" },
  { name: "JavaScript", description: "Manipulação DOM e ES6+", icon: faJs, class: "js", type: "icon" },
  { name: "HTML", description: "Estrutura semântica e acessibilidade", icon: faHtml5, class: "html", type: "icon" },
  { name: "CSS", description: "Layouts responsivos e design visual", icon: faCss3Alt, class: "css", type: "icon" },
];

const SkillsSection = () => {
  const { skillsRef } = Scroll();
  
  return (
    <section id="habilidades" ref={skillsRef} className="skills-container">
      <div className="skills-header">
        <h2 className="skills-title">Tecnologias e ferramentas</h2>
        <p className="skills-subtitle">
          Tecnologias que utilizo na construção de interfaces, APIs e aplicações Full Stack.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-header">
              <div className="skill-icon-wrapper">
                {skill.type === "icon" ? (
                  <FontAwesomeIcon icon={skill.icon as any} className={`skill-icon ${skill.class}`} />
                ) : (
                  <img src={skill.icon as string} className="skill-icon-img" alt={`${skill.name} icon`} />
                )}
              </div>
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="card-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

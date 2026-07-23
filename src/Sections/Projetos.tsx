import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faExternalLinkAlt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTypescript,
  faReact,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faTailwindCss,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import "../css/projetos.css";
import Orby from "../assets/orby.png";
import anaVeiga from "../assets/heroanaveiga.jpg";
import nextJs from "../assets/nextjs-icon-svgrepo-com.svg";
import gamesDb from "../assets/gamesdb.png";
import giuliapsi from "../assets/giuapsi.png";
import barberSchedule from "../assets/BarberSchedule.png";
import easyPizza from "../assets/easypizza.jpg";
import { Scroll } from "../Context/ScrollContext";

const projectsData = [
  {
    id: "easy-pizza",
    title: "Easy Pizza",
    image: easyPizza,
    description:
      "Sistema Full Stack para gerenciamento de pizzaria, com autenticação JWT, controle de acesso, cadastro de produtos com imagens e acompanhamento de pedidos. A interface em Next.js consome uma API REST desenvolvida com Node.js, Express, Prisma e PostgreSQL.",
    technologies: [
      { name: "Next.js", icon: nextJs, type: "img", class: "stack-next" },
      { name: "TypeScript", icon: faTypescript, type: "icon", class: "stack-ts" },
      { name: "Node.js", icon: faNodeJs, type: "icon", class: "stack-node" },
      { name: "PostgreSQL", icon: faDatabase, type: "icon", class: "stack-postgresql" },
    ],
    links: [
      { label: "Ver aplicação", url: "https://pizzaria-front-ecru.vercel.app", icon: faExternalLinkAlt },
      { label: "Front-end", url: "https://github.com/pcidro/PizzariaFront", icon: faGithub },
      { label: "Back-end/API", url: "https://github.com/pcidro/Pizzaria", icon: faGithub },
    ],
  },
  {
    id: "ana-veiga",
    title: "Ana Veiga Psicanalista",
    image: anaVeiga,
    description:
      "Site institucional desenvolvido para cliente real, com blog integrado ao Cosmic CMS, SEO, depoimentos do Google e deploy em domínio próprio.",
    technologies: [
      { name: "React", icon: faReact, type: "icon", class: "stack-react" },
      { name: "TypeScript", icon: faTypescript, type: "icon", class: "stack-ts" },
      { name: "Next.js", icon: nextJs, type: "img", class: "stack-next" },
    ],
    links: [
      { label: "Deploy", url: "https://www.anaveigapsicanalista.com.br/", icon: faExternalLinkAlt },
      { label: "Repositório", url: "https://github.com/pcidro/AnaVeigaPsico", icon: faGithub },
    ],
  },
  {
    id: "barber-schedule",
    title: "Barber Schedule",
    image: barberSchedule,
    description:
      "Sistema Full Stack de agendamentos para barbearia, com validação de disponibilidade, organização dos atendimentos por período e persistência em PostgreSQL com Prisma.",
    technologies: [
      { name: "React", icon: faReact, type: "icon", class: "stack-react" },
      { name: "TypeScript", icon: faTypescript, type: "icon", class: "stack-ts" },
      { name: "Tailwind CSS", icon: faTailwindCss, type: "icon", class: "stack-ts" },
    ],
    links: [
      { label: "Deploy", url: "https://barberschedule-wine.vercel.app/", icon: faExternalLinkAlt },
      { label: "Repositório", url: "https://github.com/pcidro/BarberSchedule", icon: faGithub },
    ],
  },
  {
    id: "orby-ecommerce",
    title: "Orby E-Commerce",
    image: Orby,
    description:
      "E-commerce de sneakers com catálogo, busca, carrinho de compras, autenticação e persistência de pedidos com Firebase Authentication e Cloud Firestore.",
    technologies: [
      { name: "React", icon: faReact, type: "icon", class: "stack-react" },
      { name: "TypeScript", icon: faTypescript, type: "icon", class: "stack-ts" },
      { name: "Firebase", icon: faFire, type: "icon", class: "stack-firebase" },
    ],
    links: [
      { label: "Deploy", url: "https://orbyshoes.netlify.app/", icon: faExternalLinkAlt },
      { label: "Repositório", url: "https://github.com/pcidro/Orby-E-Commerce/", icon: faGithub },
    ],
  },
  {
    id: "giulia-rivolta",
    title: "Giulia Rivolta Psicóloga",
    image: giuliapsi,
    description:
      "Site institucional desenvolvido para cliente real, responsivo e voltado à apresentação dos serviços, depoimentos e conversão de novos pacientes pelo WhatsApp.",
    technologies: [
      { name: "HTML", icon: faHtml5, type: "icon", class: "stack-html" },
      { name: "CSS", icon: faCss3Alt, type: "icon", class: "stack-css" },
      { name: "JavaScript", icon: faJs, type: "icon", class: "stack-js" },
    ],
    links: [
      { label: "Deploy", url: "https://psicologagiuliarivolta.com.br/", icon: faExternalLinkAlt },
      { label: "Repositório", url: "https://github.com/pcidro/psigiuliarivolta", icon: faGithub },
    ],
  },
  {
    id: "games-db",
    title: "Games DB",
    image: gamesDb,
    description:
      "Aplicação para catalogar e organizar jogos favoritos, com autenticação de usuários e gerenciamento de uma biblioteca pessoal.",
    technologies: [
      { name: "React", icon: faReact, type: "icon", class: "stack-react" },
      { name: "Firebase", icon: faFire, type: "icon", class: "stack-firebase" },
      { name: "JavaScript", icon: faJs, type: "icon", class: "stack-js" },
    ],
    links: [
      { label: "Deploy", url: "https://gamesdeb.netlify.app/", icon: faExternalLinkAlt },
      { label: "Repositório", url: "https://github.com/pcidro/GamesDB", icon: faGithub },
    ],
  },
];

const Projetos = () => {
  const { projetosRef } = Scroll();

  return (
    <section id="projetos" ref={projetosRef} className="projetos-container">
      <h2 className="projetos-titulo">Projetos</h2>

      <ul className="projetos-grid">
        {projectsData.map((project) => (
          <li key={project.id} className="projeto-card">
            <div className="projeto-imagem-wrapper">
              <img
                className="imagem-projeto"
                src={project.image}
                alt={`Captura de tela do projeto ${project.title}`}
              />
            </div>
            <div className="projeto-conteudo">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="stacks">
                {project.technologies.map((tech, index) => (
                  <span key={index} className={tech.class}>
                    {tech.type === "icon" ? (
                      <FontAwesomeIcon icon={tech.icon as any} />
                    ) : (
                      <img src={tech.icon as string} alt="" />
                    )}
                    {" "}{tech.name}
                  </span>
                ))}
              </div>
              
              <div className="acess" style={{ flexWrap: 'wrap' }}>
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.url}
                    className={link.label.includes("Deploy") || link.label.includes("aplicação") ? "btn-deploy" : "btn-code"}
                  >
                    <FontAwesomeIcon icon={link.icon} /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projetos;

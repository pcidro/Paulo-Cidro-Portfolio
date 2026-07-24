import type { FeaturedProject, SecondaryProject, SkillGroup, InfoItem } from "../types";

import easyPizzaImg from "../assets/easypizza.jpg";
import anaVeigaImg from "../assets/heroanaveiga.jpg";
import barberImg from "../assets/BarberSchedule.png";
import orbyImg from "../assets/orby.png";
import gamesDbImg from "../assets/gamesdb.png";
import giuliaPsiImg from "../assets/giuapsi.png";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "easy-pizza",
    title: "Easy Pizza",
    category: "Aplicação Full Stack",
    image: easyPizzaImg,
    description:
      "Sistema completo para gerenciamento de pizzaria com painel administrativo e interface de cliente. A aplicação inclui autenticação JWT, controle de acesso por perfil, cadastro e edição de produtos com upload de imagens, acompanhamento de pedidos em tempo real e filtros de busca.",
    context:
      "Projeto desenvolvido para resolver a necessidade de um sistema integrado que conectasse o pedido do cliente ao gerenciamento interno da pizzaria, com fluxo completo de autenticação e controle de acesso.",
    features: [
      "Autenticação JWT com controle de acesso",
      "CRUD de produtos com upload de imagens",
      "Acompanhamento de pedidos",
      "Filtros e busca de produtos",
      "API REST com Prisma e PostgreSQL",
    ],
    role: "Desenvolvimento completo do front-end e back-end",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    links: [
      { label: "Ver aplicação", url: "https://pizzaria-front-ecru.vercel.app", type: "deploy" },
      { label: "Front-end", url: "https://github.com/pcidro/PizzariaFront", type: "github" },
      { label: "Back-end", url: "https://github.com/pcidro/Pizzaria", type: "github" },
    ],
  },
  {
    id: "ana-veiga",
    title: "Ana Veiga Psicanalista",
    category: "Site para cliente real",
    image: anaVeigaImg,
    description:
      "Site institucional desenvolvido para uma psicanalista com blog integrado ao Cosmic CMS, otimização SEO e exibição de depoimentos reais do Google. Publicado em domínio próprio da profissional.",
    context:
      "Projeto desenvolvido sob demanda para uma profissional que precisava de presença digital profissional com blog e captação de pacientes.",
    features: [
      "Blog integrado ao Cosmic CMS",
      "SEO otimizado",
      "Depoimentos reais do Google",
      "Deploy em domínio próprio",
    ],
    role: "Desenvolvimento front-end e integração com CMS",
    technologies: ["React", "TypeScript", "Next.js"],
    links: [
      { label: "Ver site", url: "https://www.anaveigapsicanalista.com.br/", type: "deploy" },
      { label: "Repositório", url: "https://github.com/pcidro/AnaVeigaPsico", type: "github" },
    ],
  },
  {
    id: "barber-schedule",
    title: "Barber Schedule",
    category: "Aplicação Full Stack",
    image: barberImg,
    description:
      "Sistema de agendamentos online para barbearia com validação de disponibilidade em tempo real, organização dos atendimentos por período e persistência dos dados com Prisma e PostgreSQL.",
    context:
      "Aplicação construída para demonstrar competência em agendamentos, validações de horário e integração front-back com banco de dados relacional.",
    features: [
      "Agendamento com validação de horários",
      "Organização por período",
      "Persistência com Prisma e PostgreSQL",
      "Interface responsiva",
    ],
    role: "Desenvolvimento front-end e back-end",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL"],
    links: [
      { label: "Ver aplicação", url: "https://barberschedule-wine.vercel.app/", type: "deploy" },
      { label: "Repositório", url: "https://github.com/pcidro/BarberSchedule", type: "github" },
    ],
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "orby-ecommerce",
    title: "Orby E-Commerce",
    category: "E-commerce",
    image: orbyImg,
    description:
      "E-commerce de sneakers com catálogo, busca, carrinho de compras, autenticação e persistência de pedidos.",
    technologies: ["React", "TypeScript", "Firebase"],
    links: [
      { label: "Deploy", url: "https://orbyshoes.netlify.app/", type: "deploy" },
      { label: "Repositório", url: "https://github.com/pcidro/Orby-E-Commerce/", type: "github" },
    ],
  },
  {
    id: "giulia-rivolta",
    title: "Giulia Rivolta Psicóloga",
    category: "Site para cliente real",
    image: giuliaPsiImg,
    description:
      "Site institucional responsivo para uma psicóloga, voltado à apresentação de serviços e conversão de novos pacientes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "Ver site", url: "https://psicologagiuliarivolta.com.br/", type: "deploy" },
      { label: "Repositório", url: "https://github.com/pcidro/psigiuliarivolta", type: "github" },
    ],
  },
  {
    id: "games-db",
    title: "Games DB",
    category: "Aplicação React",
    image: gamesDbImg,
    description:
      "Aplicação para catalogar e organizar jogos favoritos com autenticação e biblioteca pessoal.",
    technologies: ["React", "Firebase", "JavaScript"],
    links: [
      { label: "Deploy", url: "https://gamesdeb.netlify.app/", type: "deploy" },
      { label: "Repositório", url: "https://github.com/pcidro/GamesDB", type: "github" },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML semântico",
      "CSS responsivo",
    ],
  },
  {
    title: "Back-end e dados",
    skills: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "APIs REST",
      "Autenticação JWT",
      "Firebase",
    ],
  },
  {
    title: "Práticas e ferramentas",
    skills: [
      "Git e GitHub",
      "Integração com APIs",
      "Responsividade",
      "Acessibilidade",
      "Componentização",
      "Modelagem de dados",
      "Deploy",
    ],
  },
];

export const profileInfo: InfoItem[] = [
  { label: "Formação", value: "Análise e Desenvolvimento de Sistemas" },
  { label: "Localização", value: "São Paulo, Brasil" },
  { label: "Objetivo", value: "Front-end ou Full Stack Júnior" },
  { label: "Modalidade", value: "Remoto, híbrido ou presencial" },
  { label: "Inglês", value: "Intermediário" },
  { label: "Stack principal", value: "React, Next.js e TypeScript" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/paulocidro/",
  github: "https://github.com/pcidro",
  email: "paulohcidro@gmail.com",
  whatsapp: "https://wa.me/5511987698148",
  cv: "/curriculo-paulo-cidro.pdf",
};

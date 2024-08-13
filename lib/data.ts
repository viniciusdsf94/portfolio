import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lojaintegrada from "@/public/lojaintegrada.png"
import vozes from "@/public/vozes.png"
import neon from "@/public/banconeon.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre mim",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Competências",
    hash: "#skills",
  },
  {
    name: "Experiência Profissional",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Loja Integrada",
    location: "Desenvolvedor Front-end",
    description:
      "Transição do site anterior em wordpress para código estático em HTML,CSS E JS para melhorar a performance do site (2019-2020)       ",
      description2:
      "Novo site com nova identidade visual em um projeto de pixel perfect usando o figma como base e desenvolvido em React e Typescript",
      description3:
      "Otimização da UX: Remodelação das páginas de criação de loja com intuito de diminuir a fricção do usuário e tendo retorno de 30% de aumento de conversão.",
      description4:
      "Rotina de testes a/b para buscar melhor conversão mudando a UX, alterando planos, diminuindo ou inserindo novos campos na área de cadastro. Tivemos melhoras de resultados de 3%, 5% e até 10% de melhora em relação a versão controle.",
      description5:
      "Otimização contínua de todo o código para melhor performance em SEO - LCP,CLS, FID",
      description6:
      "Criação de landing pages de conversão em Next.js e Tailwind com Styled components para ganharmos agilidade e ter um controle de qualidade e leal a versão no Figma.",
      description7:
      "Utilização de API para tratarmos os dados dos usuários com o banco de dados e o CRM.",
    icon: React.createElement(FaReact),
    date: "Set.2019 - Ago.2024",
  },
  
  {
    title: "Socialrocket",
    location: "Desenvolvedor Front-end",
    description:
      "Manutenção da página principal em Wordpress. Criação de Landing Pages em HTML,CSS e JS. ",
      description2:
      "Otimização de código para melhor performance em SEO",  
      description3:
      "",
      description4:
      "",
      description5:
      "",
      description6:
      "",
      description7:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Fev.2018 - Set.2019",
  },
  {
    title: "Xtech Commerce",
    location: "Estagiário Front-end",
    description:
      'Criação e atualização de templates de e-commerce para  a página de vendas dos clientes. \n ',
    description2:
      "Mais de 30 e-commerces foram desenvolvidos neste período",
      description3:
      "",
      description4:
      "",
      description5:
      "",
      description6:
      "",
      description7:
      "",
    icon: React.createElement(CgWorkAlt),
    date: "Ago.2017 - Fev.2018",
  }
 
] as const;

export const projectsData = [
  {
    title: "Loja Integrada",
    description:
      "Criação e manutanção de todo o site e sistema por 5 anos",
    tags: ["React", "HTML", "Tailwind", "CSS","Javascript" , "RestApi"],
    imageUrl: lojaintegrada,
  },
  {
    title: "Vozes do Ecommerce",
    description:
      "Segunda edição do evento da Loja Integrada. ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: vozes,
  },
  {
    title: "Redesign Banco Neon ",
    description:
      "Landing Page de aquisição banco Neon",
    tags: ["HTML", "CSS", "Javascript", "SASS"],
    imageUrl: neon,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Sass",
  "Tailwind Css",
  "Node.js",
  "Git",
  "Github",
  "API Restful",
  "Framer Motion",
] as const;

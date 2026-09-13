// Edite este arquivo para atualizar os projetos exibidos na seção "Projetos".
// Os dois primeiros foram lidos diretamente do GitHub (github.com/awaydev).

const projects = [
  {
    slug: "johnny-goes",
    name: "Johnny Goes — API de Avaliações",
    period: "Projeto em destaque",
    description:
      "Site institucional para um psicólogo, evoluído de página estática para uma aplicação com backend próprio. Visitantes enviam avaliações (nota + comentário) que ficam salvas em banco de dados e aparecem em tempo real para todos.",
    highlights: [
      "API REST em Node.js + Express para criar e listar avaliações",
      "Persistência em PostgreSQL",
      "Modo de contingência com dados de exemplo quando a API está fora do ar",
      "Suporte a Docker / Docker Compose e deploy em Railway, Render ou Fly.io",
      "Tema claro/escuro no front-end"
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "JavaScript", "Docker"],
    repo: "https://github.com/awaydev/New-Version",
    demo: null
  },
  {
    slug: "portfolio-v1",
    name: "awaydev.github.io — Primeiro Portfólio",
    period: "Projeto pessoal",
    description:
      "Cartão de apresentação digital publicado via GitHub Pages, com HTML, CSS e JavaScript puros — o primeiro passo antes deste portfólio em React.",
    highlights: [
      "Publicado com GitHub Pages",
      "Apresenta trajetória, habilidades e objetivos de carreira",
      "Base para o projeto em destaque (New-Version)"
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    repo: "https://github.com/awaydev/awaydev.github.io",
    demo: "https://awaydev.github.io"
  },
  {
    slug: "este-portfolio",
    name: "Este Portfólio",
    period: "2026",
    description:
      "O site que você está vendo agora: front-end em React (Vite) com um backend Node.js/Express dedicado a receber mensagens de contato.",
    highlights: [
      "Front-end React com componentes reutilizáveis",
      "API própria (/api/contact) para o formulário de contato",
      "Pronto para deploy em Vercel/Netlify (front) + Render/Railway (back)"
    ],
    stack: ["React", "Vite", "Node.js", "Express"],
    repo: "https://github.com/awaydev",
    demo: null
  }
];

export default projects;

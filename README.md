# Portfólio — Felipe Silva Santos

Site de portfólio pessoal em duas partes:

- **`frontend/`** — React + Vite, visual "dev/terminal" escuro. Seções: hero, sobre, skills, projetos (populados com os repositórios reais de [github.com/awaydev](https://github.com/awaydev)) e um formulário de contato.
- **`backend/`** — API em Node.js + Express com a rota `POST /api/contact`, que recebe as mensagens do formulário, salva em `backend/data/contacts.json` e, se configurado, também envia por e-mail.

## Rodando localmente

Pré-requisito: Node.js 18 ou superior.

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

O servidor sobe em `http://localhost:3001`. Por padrão, sem preencher `SMTP_*` no `.env`, ele só salva as mensagens em `data/contacts.json` — nenhum e-mail é enviado, mas o formulário funciona normalmente.

Para enviar as mensagens por e-mail (ex.: com uma [senha de app do Gmail](https://support.google.com/mail/answer/185833)), preencha no `.env`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seuemail@gmail.com
SMTP_PASS=sua-senha-de-app
CONTACT_TO_EMAIL=felipesilva202624@gmail.com
```

### 2. Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Abra `http://localhost:5173`. Em desenvolvimento, o Vite já encaminha `/api` para `http://localhost:3001` (configurado em `vite.config.js`), então não precisa mexer em nada para o formulário funcionar.

## Responsividade e acessibilidade

- O layout é responsivo de telas grandes até ~360px de largura (menu vira um botão hambúrguer, grids viram uma coluna, textos e imagens se ajustam).
- Botão de **modo claro/escuro** no cabeçalho (ícone de sol/lua): a escolha fica salva no navegador (`localStorage`) e, na primeira visita, respeita o tema do sistema operacional do visitante.
- Link "Pular para o conteúdo" (visível ao navegar com Tab, para quem usa teclado ou leitor de tela).
- Animações (como o cursor piscando no hero) e a rolagem suave são desativadas automaticamente para visitantes com "reduzir movimento" ativado no sistema.
- Campos de formulário com fonte de 16px e botões com no mínimo 44px de altura, para não zoomar sozinho no iOS e facilitar o toque no celular.

## Editando o conteúdo

- **Projetos**: edite `frontend/src/data/projects.js`.
- **Textos de sobre/skills/hero**: cada seção é um componente em `frontend/src/components/`.
- **Cores e fontes**: variáveis no topo de `frontend/src/index.css` (`:root { ... }`).
- **Dados de contato**: em `frontend/src/components/Contact.jsx`.

## Deploy

Uma combinação simples e gratuita:

1. **Backend** em [Render](https://render.com) ou [Railway](https://railway.app): suba a pasta `backend/`, defina as variáveis de ambiente do `.env.example` e anote a URL pública (ex.: `https://portfolio-felipe-api.onrender.com`).
2. **Frontend** em [Vercel](https://vercel.com) ou [Netlify](https://netlify.com): suba a pasta `frontend/`, com a variável de ambiente `VITE_API_URL=https://portfolio-felipe-api.onrender.com/api/contact` apontando para o backend do passo 1, e rode `npm run build` (o próprio serviço faz isso automaticamente).

Se preferir hospedagem compartilhada que só roda PHP (cPanel, Hostinger etc.) em vez do backend Node.js, é possível trocar a rota `/api/contact` por um script PHP equivalente (usando `mail()` ou PHPMailer) — o formulário em `Contact.jsx` continua funcionando normalmente, basta apontar `VITE_API_URL` para a URL desse script.

## Stack

React · Vite · Node.js · Express · Nodemailer

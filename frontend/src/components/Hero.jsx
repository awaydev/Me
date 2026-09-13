const ROLES = ["dev fullstack em formação", "estudante de ADS", "futuro entusiasta de infosec"];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker">Estância, SE · Brasil</div>
          <h1>
            Felipe Silva Santos <span className="accent">// Silva</span>
          </h1>
          <div className="role">
            {"> "} {ROLES.join(" · ")}
            <span className="cursor" aria-hidden="true" />
          </div>
          <p className="hero-desc">
            Comecei mexendo em hardware e manutenção de computadores, migrei para o código com
            HTML, CSS e JavaScript, e agora estou construindo projetos completos — front-end em
            React, back-end em Node.js — com a segurança da informação como próximo objetivo.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projetos">
              ver projetos
            </a>
            <a className="btn btn-ghost" href="#contato">
              falar comigo
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/awaydev"
              target="_blank"
              rel="noreferrer"
            >
              github ↗
            </a>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-bar">
            <span className="tdot" />
            <span className="tdot" />
            <span className="tdot" />
            <span className="title">whoami.sh</span>
          </div>
          <div className="terminal-body">
            <div>
              <span className="prompt">felipe@dev</span>:~$ whoami
            </div>
            <div className="out">felipe_silva_santos</div>
            <div>
              <span className="prompt">felipe@dev</span>:~$ cat objetivo.txt
            </div>
            <div className="out">
              curto prazo: <span className="accent">dev fullstack</span>
              <br />
              médio prazo: <span className="accent">segurança da informação</span>
            </div>
            <div>
              <span className="prompt">felipe@dev</span>:~$ ls stack/
            </div>
            <div className="out">html css javascript react node.js</div>
            <div>
              <span className="prompt">felipe@dev</span>:~$ <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

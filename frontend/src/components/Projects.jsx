import projects from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <div className="eyebrow">projetos</div>
        <h2>O que já foi construído</h2>
        <p className="section-lede">
          Direto do GitHub —{" "}
          <a href="https://github.com/awaydev" target="_blank" rel="noreferrer">
            github.com/awaydev
          </a>
          .
        </p>

        <div className="projects-list">
          {projects.map((p) => (
            <article className="project-card" key={p.slug}>
              <div className="project-head">
                <h3>{p.name}</h3>
                <span className="project-period">{p.period}</span>
              </div>
              <p>{p.description}</p>
              <ul className="project-highlights">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="project-footer">
                <div className="skill-tags">
                  {p.stack.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer">
                      repositório ↗
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">
                      demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

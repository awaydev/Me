const GROUPS = [
  {
    title: "Front-end",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Flexbox / Grid"]
  },
  {
    title: "Back-end",
    tags: ["Node.js", "Express", "PostgreSQL", "APIs REST"]
  },
  {
    title: "Infraestrutura & suporte",
    tags: ["Manutenção de computadores", "Docker", "Git / GitHub"]
  },
  {
    title: "Em estudo — rumo a infosec",
    tags: ["Fundamentos de redes", "Boas práticas de segurança", "Linux"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="eyebrow">skills</div>
        <h2>Stack e ferramentas</h2>
        <p className="section-lede">
          O que já uso no dia a dia e o que está sendo construído agora.
        </p>

        <div className="skills-grid">
          {GROUPS.map((g) => (
            <div className="skill-card" key={g.title}>
              <h3>{g.title}</h3>
              <div className="skill-tags">
                {g.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

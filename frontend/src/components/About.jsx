const FACTS = [
  { k: "curso", v: "Análise e Desenvolvimento de Sistemas (ADS)" },
  { k: "cidade", v: "Estância, SE" },
  { k: "objetivo", v: "Dev Fullstack → Segurança da Informação" },
  { k: "vindo de", v: "Manutenção de computadores" },
  { k: "github", v: "github.com/awaydev" }
];

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="eyebrow">sobre</div>
        <h2>Quem escreveu esse código</h2>
        <p className="section-lede">
          Um resumo rápido de onde vim e para onde estou indo.
        </p>

        <div className="about-grid">
          <div>
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e estou construindo,
              projeto por projeto, o caminho para me tornar desenvolvedor fullstack. Antes de
              programar, trabalhava com manutenção de computadores — foi ali que peguei gosto
              por entender como as coisas funcionam por dentro, o que hoje se traduz em curiosidade
              por segurança da informação, meu objetivo de médio prazo.
            </p>
            <p>
              No dia a dia trabalho com HTML, CSS e JavaScript, e estou avançando para React no
              front-end e Node.js no back-end — este portfólio é um exemplo disso na prática, do
              design à API que recebe as mensagens de contato.
            </p>
          </div>
          <div className="about-facts">
            {FACTS.map((f) => (
              <div className="fact" key={f.k}>
                <span className="k">{f.k}</span>
                <span className="v">{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

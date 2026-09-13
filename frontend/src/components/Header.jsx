import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const LINKS = [
  { href: "#sobre", label: "sobre" },
  { href: "#skills", label: "skills" },
  { href: "#projetos", label: "projetos" },
  { href: "#contato", label: "contato" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="dot" aria-hidden="true" />
          felipe@dev:~$
        </a>
        <nav id="primary-navigation" className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

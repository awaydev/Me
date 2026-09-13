import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "/api/contact";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ state: "err", message: "Preencha todos os campos antes de enviar." });
      return;
    }

    setStatus({ state: "sending", message: "Enviando..." });

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Não foi possível enviar a mensagem.");
      }

      setStatus({ state: "ok", message: "Mensagem enviada! Responderei em breve." });
      setForm(initialForm);
    } catch (err) {
      setStatus({ state: "err", message: err.message || "Erro ao enviar. Tente novamente." });
    }
  }

  return (
    <section id="contato">
      <div className="container">
        <div className="eyebrow">contato</div>
        <h2>Bora conversar?</h2>
        <p className="section-lede">
          Sobre oportunidades, projetos ou só para trocar uma ideia sobre dev e segurança.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <a className="contact-link" href="mailto:felipesilva202624@gmail.com">
              <span className="k">@</span> felipesilva202624@gmail.com
            </a>
            <a className="contact-link" href="tel:+5579998036294">
              <span className="k">#</span> (79) 99803-6294
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/felipe-silva-8b7336375"
              target="_blank"
              rel="noreferrer"
            >
              <span className="k">in</span> linkedin.com/in/felipe-silva
            </a>
            <a
              className="contact-link"
              href="https://github.com/awaydev"
              target="_blank"
              rel="noreferrer"
            >
              <span className="k">gh</span> github.com/awaydev
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">nome</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="email">email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary" type="submit" disabled={status.state === "sending"}>
              {status.state === "sending" ? "enviando..." : "enviar mensagem"}
            </button>
            <div className={`form-status ${status.state === "ok" ? "ok" : status.state === "err" ? "err" : ""}`}>
              {status.message}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

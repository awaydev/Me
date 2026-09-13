import { Router } from "express";
import fs from "node:fs/promises";
import path from "node:path";
import nodemailer from "nodemailer";

const router = Router();
const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function saveToFile(entry) {
  let list = [];
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    list = JSON.parse(raw);
  } catch {
    // arquivo ainda não existe — começa uma lista nova
  }
  list.push(entry);
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
}

async function sendEmail(entry) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return false; // envio de e-mail não configurado — segue só salvando localmente
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  await transporter.sendMail({
    from: `"Portfólio — ${entry.name}" <${SMTP_USER}>`,
    replyTo: entry.email,
    to: CONTACT_TO_EMAIL || SMTP_USER,
    subject: `Nova mensagem do portfólio de ${entry.name}`,
    text: entry.message,
    html: `<p><strong>Nome:</strong> ${entry.name}</p><p><strong>Email:</strong> ${entry.email}</p><p>${entry.message.replace(/\n/g, "<br>")}</p>`
  });

  return true;
}

router.post("/", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Preencha nome, email e mensagem." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Informe um email válido." });
  }
  if (message.length > 4000) {
    return res.status(400).json({ error: "Mensagem muito longa." });
  }

  const entry = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString()
  };

  try {
    await saveToFile(entry);
    const emailed = await sendEmail(entry);
    console.log(`[contato] nova mensagem de ${entry.email}${emailed ? " (email enviado)" : " (salva localmente)"}`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contato] erro ao processar mensagem:", err);
    return res.status(500).json({ error: "Erro interno ao processar a mensagem." });
  }
});

export default router;

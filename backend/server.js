import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";

const app = express();
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json({ limit: "50kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "portfolio-felipe-backend" });
});

app.use("/api/contact", contactRouter);

// 404 para qualquer outra rota /api
app.use("/api", (_req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
  console.log(`Aceitando requisições de: ${FRONTEND_URL}`);
});

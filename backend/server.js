const express = require("express");
const path = require("path");
const { Probot } = require("probot");

const app = express();
app.use(express.json());

// === Endpoints soberanos ===
app.get("/directiva", (req, res) => {
  res.json({ status: "ok", message: "Dominio soberano activo" });
});

app.post("/notifyDiscord", (req, res) => {
  const { texto } = req.body;
  console.log("Notificando a Discord:", texto);
  res.json({ status: "sent", texto });
});

// === Probot integrado ===
const probot = new Probot({});
probot.load(app => {
  app.on("issues.opened", async context => {
    return context.octokit.issues.createComment(
      context.issue({ body: "👑 Directiva recibida en Royal Hub Main v77" })
    );
  });
});

// === Servir tu index.html premium ===
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Royal Server corriendo en puerto ${PORT}`);
});

const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const data = req.body;
  sendEmail(data); // Chama a função sendEmail
  res.status(200).send("E-mail enviado com sucesso");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

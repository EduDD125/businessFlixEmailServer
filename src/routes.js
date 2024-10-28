const express = require("express");
const app = express();
app.use(express.json());

routes = express.Router();

routes.post("/api/send-email", (req, res) => {
  const data = req.body;
  sendEmail(data); // Chama a função sendEmail
  res.status(200).send("E-mail enviado com sucesso");
});

module.exports = routes;
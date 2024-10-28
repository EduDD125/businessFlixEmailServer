const express = require("express");
const { sendEmail } = require('./nodemailer');

router = express.Router();



router.get("/api/", (req, res) => {
  console.log("ola")
  res.send("Test")
})

router.post("/api/send-email", (req, res) => {
  const data = req.body;
  console.log("ola")

  try {
    sendEmail(data); // Chama a função sendEmail
    res.status(200).send("E-mail enviado com sucesso");
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).send("Erro ao enviar o e-mail");
  }
});

module.exports = router;
const express = require('express');
const corsMiddleware = require('./corMiddleware');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(corsMiddleware);
app.use(express.json());

app.use("", router);

app.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`);
})
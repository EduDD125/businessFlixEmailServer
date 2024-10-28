const express = require('express');
const corsMiddleware = require('cors');
const routes = require('./routes');


const app = express();
app.use(express.json());
app.use(corsMiddleware);
app.use(routes);

app.listen(3000, () => {
    console.log("Servido rodando na porta 3000");
})
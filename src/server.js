const express = require('express');
const corsMiddleware = require('./corMiddleware');
const routes = require('./routes');


const app = express();
app.use(express.json());
app.use(corsMiddleware);
app.use(routes);

app.listen(3001, () => {
    console.log("Servido rodando na porta 3001");
})
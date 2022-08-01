//inicializando o express e exportando para server.js

const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'It is ok'
    });
});

module.exports = app;

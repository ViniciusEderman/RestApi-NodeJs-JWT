//inicializando o express e exportando para server.js

const express = require('express');
const app = express();
const routeProducts = require('./routes/products');
const routeRequests = require('./routes/requests');

app.use('/products', routeProducts);
app.use('/requests', routeRequests);

module.exports = app;

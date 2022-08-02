//inicializando o express e exportando para server.js

const express = require('express');
const app = express();
const routeProducts = require('./routes/products');
const routeRequests = require('./routes/requests');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use('/products', routeProducts);
app.use('/requests', routeRequests);


// this stretch is a treatment for when you can't find a route:
app.use((req, res, next) => {
    const error =  new Error('Not finded');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
       error: {
        message: error.message
       } 
    });
});

module.exports = app;

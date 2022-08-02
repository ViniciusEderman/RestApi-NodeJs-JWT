//inicializando o express e exportando para server.js

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routeProducts = require('./routes/products');
const routeRequests = require('./routes/requests');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false})); // only data simple
app.use(bodyParser.json()); // only json data 

//cors:
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods',
        'PUT, POST, PATCH, DELETE, GET');

        return res.status(200).send({});
    }

    next();
});

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

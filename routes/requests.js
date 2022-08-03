
const express = require('express');
const router  = express.Router();

//return all requests:
router.get('/', (req, res, next) => {
    res.status(200).send ({
        message: 'Return all requests'
    });
});

// insert a request:
router.post('/', (req, res, next) => {
    const request = {
        id_product: req.body.id_product,
        amount: req.body.amount
    }

    res.status(201).send ({
        message: 'Request inserted',
        requestCreated: request
    });
});

// returns data for only one request:
router.get('/:id_request', (req, res, next) => {
    const id = req.params.id_request;
    
    res.status(200).send({
        message: 'Details about the request', 
        id_request: id
    });
});

// Delete just one request:
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Request deleted'
    });
});

module.exports = router;

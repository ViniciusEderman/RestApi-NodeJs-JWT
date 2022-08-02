
const express = require('express');
const router  = express.Router();

//return all products
router.get('/', (req, res, next) => {
    res.status(200).send ({
        message: 'Return all products'
    });
});

// insert a product
router.post('/', (req, res, next) => {
    const product = {
       name: req.body.name,
       price: req.body.price
    }

    res.status(201).send ({
        message: 'Inserted a product',
        productCreated: product
    });
});

// returns data for only one product
router.get('/:id_product', (req, res, next) => {
    const id = req.params.id_product;
    if( id === 'special') {
        res.status(200).send({
            message: 'This id is special!', 
            id: id
        });
    }
    else {
        res.status(200).send({
            message: 'You only passed a id'
        });
    }
});

// Modify only one product
router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'changed a product'
    });
});

// Delete just one product
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Product is deleted'
    });
});

module.exports = router;

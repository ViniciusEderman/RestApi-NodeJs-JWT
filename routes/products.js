// required express lib:
const express = require('express');
const router  = express.Router();
const mysql = require('../mysql').pool;

//return all products:
router.get('/', (req, res, next) => {
    res.status(200).send ({
        message: 'Return all products'
    });
});

// insert a product:
router.post('/', (req, res, next) => {

    mysql.getConnection((error, connection) => {
        connection.query(
            'INSERT INTO products (name, price) VALUES (?, ?)',
            [req.body.name, req.body.price],
            (error, result, field) => {
                connection.release();
                if(error) {
                   return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send ({
                    message: 'Inserted a product with successful',
                    id_product: result.insertId
                });
            }
        )
    })
});

// returns data for only one product:
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

// Modify only one product:
router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'changed a product'
    });
});

// Delete just one product:
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'Product is deleted'
    });
});

module.exports = router;

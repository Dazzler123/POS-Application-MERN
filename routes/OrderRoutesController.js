const express = require('express');
const router = express.Router();

//return all orders
router.get('/all', (req, res)=> {
    res.json({mssg:'Get Request for All orders in Order API'});
});

//get order by id
router.get('/:id', (req, res)=> {
    res.json({mssg:'Get Request for a specific order in Order API'});
});

//save new order
router.post('/', (req, res)=> {
    res.json({mssg:'Post Request to save a new order in Order API'});
});

//delete order by id
router.delete('/:id', (req, res)=> {
    res.json({mssg:'Delete Request to delete order by id in Order API'});
});

//update order by id
router.patch('/:id', (req, res)=> {
    res.json({mssg:'Delete Request to delete order by id in Order API'});
});

module.exports = router;
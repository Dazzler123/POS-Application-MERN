const express = require('express');

const router = express.Router();

//return all customers
router.get('/all', (req, res) => {
    res.json({mssg:'Get Request for All customers in Customer API'});
});

//get customer by id
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get Request for a specific customer in Customer API'});
});

//save new customer
router.post('/', (req, res) => {
    res.json({mssg: 'Post Request to save a new customer in Customer API'});
});

//delete customer by id
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete Request to delete customer by id in Customer API'});
});

//update customer by id
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Delete Request to delete customer by id in Customer API'});
});

module.exports = router;
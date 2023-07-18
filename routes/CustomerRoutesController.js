const express = require('express');
const Customer = require('../model/Customer');

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
router.post('/', async (req, res) => {
    const {id, name, address, contact} = req.body;
    try {
        const customer = await Customer.create({id,name,address,contact});
        res.status(200).json(customer);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    // res.json({mssg: 'Post Request to save a new customer in Customer API'});
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
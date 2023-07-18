const express = require('express');

const {getCustomerById,
       getAllCustomers,
       saveCustomer,
       updateCustomer,
       deleteCustomer} = require('../controller/CustomerController')

const router = express.Router();

//get all customers
router.get('/all', getAllCustomers);

//get customer by id
router.get('/:id', getCustomerById);

//save new customer
router.post('/', saveCustomer);

//delete customer by id
router.delete('/:id', deleteCustomer);

//update customer by id
router.patch('/:id', updateCustomer);

module.exports = router;
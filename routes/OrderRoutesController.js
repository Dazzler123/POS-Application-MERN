const express = require('express');

const {
    getOrderById,
    getAllOrders,
    saveOrder,
    updateOrder,
    deleteOrder} = require('../controller/OrderController')

const router = express.Router();

//get all orders
router.get('/all', getAllOrders);

//get order by id
router.get('/:id', getOrderById);

//save new order
router.post('/', saveOrder);

//delete order by id
router.delete('/:id', deleteOrder);

//update order by id
router.patch('/:id', updateOrder);

module.exports = router;
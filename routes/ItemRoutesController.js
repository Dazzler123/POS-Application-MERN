const express = require('express');

const {
    getItemById,
    getAllItems,
    saveItem,
    updateItem,
    deleteItem} = require('../controller/ItemController')

const router = express.Router();

//get all items
router.get('/all', getAllItems);

//get item by id
router.get('/:id', getItemById);

//save new item
router.post('/', saveItem);

//delete item by id
router.delete('/:objectId', deleteItem);

//update item by id
router.put('/:objectId', updateItem);

module.exports = router;
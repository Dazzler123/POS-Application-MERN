const express = require('express');
const router = express.Router();

//return all items
router.get('/all', (req, res)=> {
    res.json({mssg:'Get Request for All Items in Item API'});
});

//get item by id
router.get('/:id', (req, res)=> {
    res.json({mssg:'Get Request for a specific item in Item API'});
});

//save new item
router.post('/', (req, res)=> {
    res.json({mssg:'Post Request to save a new item in Item API'});
});

//delete item by id
router.delete('/:id', (req, res)=> {
    res.json({mssg:'Delete Request to delete item by id in Item API'});
});

//update item by id
router.patch('/:id', (req, res)=> {
    res.json({mssg:'Delete Request to delete item by id in Item API'});
});

module.exports = router;
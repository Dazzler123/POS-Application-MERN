const Item = require('../model/Item');

const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require("mongoose");

//return all items
const getAllItems = async (req, res) => {
    const items = await Item.find({}).sort({createdAt: -1})
    res.status(200).json(items);
}

const getItemById = async (req, res) => {
    const {id} = req.params;

    try {
        // Find the item by the custom field 'item_code' and exclude the '_id' field
        const item = await Item.findOne({item_code: id}).select('-_id');

        //check if item is available or not
        if (!item) {
            return res.status(404).json({error: "No such item found!"});
        }
        //send response
        res.status(200).json(item);
    } catch (error) {
        // Handle any errors that occurred during the query
        console.error("Error fetching item:", error);
        res.status(500).json({error: "Internal server error"});
    }
}


const saveItem = async (req, res) => {
    const {item_code, item_name, unit_price, qty_on_hand} = req.body;
    try {
        const item = await Item.create({
            item_code, item_name, unit_price, qty_on_hand});
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateItem = async (req, res) => {
    const {objectId} = req.params;
    const {item_code, item_name, unit_price, qty_on_hand} = req.body;

    if (!mongoose.Types.ObjectId.isValid(objectId)) {
        return res.status(404).json({error: "Invalid ObjectId"});
    }

    try {
        const updatedItem = await Item.findOneAndUpdate(
            {_id: objectId},
            {item_code, item_name, unit_price, qty_on_hand},
            {new: true, runValidators: true} // This will run the Mongoose validation
        );
        if (!updatedItem) {
            return res.status(404).json({error: "No such item found!"});
        }
        return res.status(200).json(updatedItem);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const deleteItem = async (req, res) => {
    const {objectId} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(objectId)) {
        return res.status(404).json({error: "Invalid ObjectId"});
    }

    //remove item
    const item = await Item.findOneAndDelete({_id: objectId});

    //check if item is available or not
    if (!item) {
        return res.status(404).json({error: "No such item found!"});
    }
    res.status(200).json(item);
}

module.exports = {
    getItemById,
    getAllItems,
    saveItem,
    updateItem,
    deleteItem
}
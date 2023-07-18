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
    const item = await Item.findById(id);

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such item found!"})
    }

    //check if item is available or not
    if (!item) {
        return res.status(404).json({error: "No such item found!"});
    }
    //send response
    res.status(200).json(item);
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
    const {id} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such item found!"})
    }

    //update item
    const item = await Item.findOneAndUpdate({_id: id},{
        ...req.body
    });

    //check if item is available or not
    if (!item) {
        return res.status(404).json({error: "No such item found!"});
    }
    //send response
    res.status(200).json(true);
}

const deleteItem = async (req, res) => {
    const {id} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such item found!"})
    }

    //remove item
    const item = await Item.findOneAndDelete({_id: id});

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
const Order = require('../model/Order');

const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require("mongoose");

//return all orders
const getAllOrders = async (req, res) => {
    const orders = await Order.find({}).sort({createdAt: -1})
    res.status(200).json(orders);
}

const getOrderById = async (req, res) => {
    const {id} = req.params;
    const order = await Order.findById(id);

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such order found!"})
    }

    //check if order is available or not
    if (!order) {
        return res.status(404).json({error: "No such order found!"});
    }
    //send response
    res.status(200).json(order);
}


const saveOrder = async (req, res) => {
    const {o_id, date, customer_id, items, tot_discount_issued} = req.body;
    try {
        const order = await Order.create({
            o_id, date, customer_id, items, tot_discount_issued});
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateOrder = async (req, res) => {
    const {id} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such order found!"})
    }

    //update order
    const order = await Order.findOneAndUpdate({_id: id},{
        ...req.body
    });

    //check if order is available or not
    if (!order) {
        return res.status(404).json({error: "No such order found!"});
    }
    //send response
    res.status(200).json(true);
}

const deleteOrder = async (req, res) => {
    const {id} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such order found!"})
    }

    //remove order
    const order = await Order.findOneAndDelete({_id: id});

    //check if order is available or not
    if (!order) {
        return res.status(404).json({error: "No such order found!"});
    }
    res.status(200).json(true);
}

module.exports = {
    getOrderById,
    getAllOrders,
    saveOrder,
    updateOrder,
    deleteOrder
}
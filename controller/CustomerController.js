const Customer = require('../model/Customer');

const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require("mongoose");

//return all customers
const getAllCustomers = async (req, res) => {
    const customers = await Customer.find({}).sort({createdAt: -1})
    res.status(200).json(customers);
}

const getCustomerById = async (req, res) => {
    const {id} = req.params;
    const customer = await Customer.findById(id);

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such customer found!"})
    }

    //check if customer is available or not
    if (!customer) {
        return res.status(404).json({error: "No such customer found!"});
    }
    //send response
    res.status(200).json(customer);
}


const saveCustomer = async (req, res) => {
    const {id, name, address, contact} = req.body;
    try {
        const customer = await Customer.create({id, name, address, contact});
        res.status(200).json(customer);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateCustomer = async (req, res) => {
    const {id} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such customer found!"})
    }

    //update customer
    const customer = await Customer.findOneAndUpdate({_id: id},{
        ...req.body
    });

    //check if customer is available or not
    if (!customer) {
        return res.status(404).json({error: "No such customer found!"});
    }
    //send response
    res.status(200).json(customer);
}

const deleteCustomer = async (req, res) => {
    const {id} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such customer found!"})
    }

    //remove customer
    const customer = await Customer.findOneAndDelete({_id: id});

    //check if customer is available or not
    if (!customer) {
        return res.status(404).json({error: "No such customer found!"});
    }
    res.status(200).json(customer);
}

module.exports = {
    getCustomerById,
    getAllCustomers,
    saveCustomer,
    updateCustomer,
    deleteCustomer
}
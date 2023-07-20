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
    console.log(id);

    try {
        // Find the customer by the custom field 'id' and exclude the '_id' field
        const customer = await Customer.findOne({id: id}).select('-_id');

        //check if customer is available or not
        if (!customer) {
            return res.status(404).json({error: "No such customer found!"});
        }
        //send response
        res.status(200).json(customer);
    } catch (error) {
        // Handle any errors that occurred during the query
        console.error("Error fetching customer:", error);
        res.status(500).json({error: "Internal server error"});
    }
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
    const {objectId} = req.params;
    const {id, name, address, contact} = req.body;

    if (!mongoose.Types.ObjectId.isValid(objectId)) {
        return res.status(404).json({error: "Invalid ObjectId"});
    }

    try {
        const updatedCustomer = await Customer.findOneAndUpdate(
            {_id: objectId},
            {id, name, address, contact},
            {new: true, runValidators: true} // This will run the Mongoose validation
        );
        if (!updatedCustomer) {
            return res.status(404).json({error: "No such customer found!"});
        }
        return res.status(200).json(updatedCustomer);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
}

const deleteCustomer = async (req, res) => {
    const {objectId} = req.params;

    //check if the object id of the document is valid
    if (!mongoose.Types.ObjectId.isValid(objectId)) {
        return res.status(404).json({error: "Invalid ObjectId"});
    }

    //remove customer
    const customer = await Customer.findOneAndDelete({_id: objectId});

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
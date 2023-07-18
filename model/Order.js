const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    o_id: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    customer_id: {
        type: String,
        required: true
    },
    tot_discount_issued: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);
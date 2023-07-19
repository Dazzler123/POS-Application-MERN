const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetailsSchema = new Schema({
    item_code: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
    },
    qty_bought: {
        type: String,
        required: true
    }
});

const orderSchema = new Schema({
    o_id: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    customer_id: {
        type: String,
        required: true
    },
    //order details (nested schema)
    items: {
        type: [orderDetailsSchema],
        required: true
    },
    tot_discount_issued: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Order', orderSchema);
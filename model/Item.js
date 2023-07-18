const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    item_code: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    unit_price: {
        type: String,
        required: true
    },
    qty_on_hand: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Item', itemSchema);
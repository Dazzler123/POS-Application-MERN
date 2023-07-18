const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    contact: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', customerSchema);
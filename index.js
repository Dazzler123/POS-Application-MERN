const express = require('express');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/POS';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('!=== Connected to MongoDB ===!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

//middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/v1/customer', require('./routes/CustomerRoutesController'));
app.use('/api/v1/item', require('./routes/ItemRoutesController'));
app.use('/api/v1/order', require('./routes/OrderRoutesController'));

app.get('/', (req, res) => {
    res.json({mssg: "Welcome to Dazzler's POS System - Server"})
})

app.listen(port, () => {
    console.log(`API is running on Port ${port}`);
})



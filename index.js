const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
// app.use(express.json());

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/GDSE')
    .then(() => {
        app.listen(port, () => {
            console.log(`API is running on Port ${port}`);
        })
    })
    .catch((reason) => {
        console.error(reason);
    })


app.get('/', (req, res) => {  //get request
    console.log("Get request scope called.");
    res.status(200).send(`<h1>Hello Express!</h1>`);
})
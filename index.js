const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/GDSE';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser:true});
    // .then(() => {
    //     console.log("API is running on Port : Hello Java")
    // })
    // .catch((reason) => {
    //     console.error(reason);
    // })
const conn = mongoose.connection;
conn.on('open', function () {
    console.log("!== Connected ==!")
})

app.listen(port, () => {
    console.log(`API is running on Port ${port}`);
})

// app.get('/',(req,res) => {
//     res.send("Hi");
// })


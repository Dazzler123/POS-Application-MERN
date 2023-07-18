const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/GDSE';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser:true});

const conn = mongoose.connection;
conn.on('open', function () {
    console.log("!=== Connected ===!")
})

//routes
const studentRouter = require('./routes/StudentRoutes');
app.use('/student', studentRouter);

app.listen(port, () => {
    console.log(`API is running on Port ${port}`);
})



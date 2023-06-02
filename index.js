require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const users = require('./routes/users');
const orders = require('./routes/orders');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use('/api', users)
app.use('/api', orders)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
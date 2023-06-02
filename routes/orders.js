const express = require('express');
const Order = require('../models/order');

const router = express.Router()

module.exports = router;

router.post('/orders', async (req, res) => {
    const data = new Order({
        item: req.body.item,
        user: req.body.user
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/orders', async (req, res) => {
    try{
        const data = await Order.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/orders/:id', async (req, res) => {
    try{
        const data = await Order.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.patch('/orders/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Order.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/orders/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Order.findByIdAndDelete(id)
        res.send(`Document ${id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
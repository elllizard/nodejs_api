const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    item: {
        required: true,
        type: String
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', dataSchema)
const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
    poliName: {
        type: String,
        required: true,
        unique: true
    },
    currentNumber: {
        type: Number,
        default: 0
    },
    petugas: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Queue', queueSchema);

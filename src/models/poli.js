// src/models/poli.js

const mongoose = require('mongoose');

const PoliSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

const Poli = mongoose.model('Poli', PoliSchema);

module.exports = Poli;

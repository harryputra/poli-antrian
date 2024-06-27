// src/controllers/poliController.js

const Poli = require('../models/poli');

exports.getAllPolis = async (req, res) => {
    try {
        const polis = await Poli.find();
        res.json(polis);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createPoli = async (req, res) => {
    const { name } = req.body;
    const poli = new Poli({ name });

    try {
        const newPoli = await poli.save();
        res.status(201).json(newPoli);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

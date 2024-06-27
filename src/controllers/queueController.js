// src/controllers/queueController.js

const Poli = require('../models/poli');

let queues = {};

exports.getAllQueues = (req, res) => {
    res.json(Object.keys(queues).map(poliName => ({
        poliName,
        currentNumber: queues[poliName]
    })));
};

exports.getQueueByPoli = (req, res) => {
    const { poliName } = req.params;
    res.json({ poliName, currentNumber: queues[poliName] || 0 });
};

exports.incrementQueue = (req, res) => {
    const { poliName } = req.body;
    if (!queues[poliName]) {
        queues[poliName] = 0;
    }
    queues[poliName]++;
    req.app.get('io').emit('queueUpdated');
    res.json({ poliName, currentNumber: queues[poliName] });
};

exports.decrementQueue = (req, res) => {
    const { poliName } = req.body;
    if (!queues[poliName]) {
        queues[poliName] = 0;
    }
    queues[poliName] = Math.max(queues[poliName] - 1, 0);
    req.app.get('io').emit('queueUpdated');
    res.json({ poliName, currentNumber: queues[poliName] });
};

const Poli = require('../models/Poli');

// Add new poli
exports.addPoli = async (req, res) => {
    const { poliName } = req.body;
    try {
        const existingPoli = await Poli.findOne({ name: poliName });
        if (existingPoli) {
            return res.status(400).json({ error: 'Poli already exists' });
        }
        const newPoli = new Poli({ name: poliName });
        await newPoli.save();
        res.json({ message: 'Poli added successfully' });
    } catch (err) {
        console.error('Error adding poli:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// handlers/florHandler.js
const Flor = require('../models/flores');

exports.listFlores = async (req, res) => {
    try {
        const flores = await Flor.getFlores();
        res.json(flores);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertFlor = async (req, res) => {
    try {
        const newFlor = await Flor.insert(req.body);
        res.status(201).json(newFlor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateFlor = async (req, res) => {
    try {
        const updatedFlor = await Flor.update(req.body, req.params.id);
        res.json(updatedFlor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteFlor = async (req, res) => {
    try {
        await Flor.delete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

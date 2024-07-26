// handlers/jardinHandler.js
const Jardin = require('../models/jardines');

exports.listJardines = async (req, res) => {
    try {
        const jardines = await Jardin.getJardines();
        res.json(jardines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertJardin = async (req, res) => {
    try {
        const newJardin = await Jardin.insert(req.body);
        res.status(201).json(newJardin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateJardin = async (req, res) => {
    try {
        const updatedJardin = await Jardin.update(req.body, req.params.id);
        res.json(updatedJardin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteJardin = async (req, res) => {
    try {
        await Jardin.delete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

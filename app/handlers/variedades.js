// handlers/variedadHandler.js
const Variedad = require('../models/variedades');

exports.listVariedades = async (req, res) => {
    try {
        const variedades = await Variedad.getVariedades();
        res.json(variedades);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertVariedad = async (req, res) => {
    try {
        const newVariedad = await Variedad.insert(req.body);
        res.status(201).json(newVariedad);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateVariedad = async (req, res) => {
    try {
        const updatedVariedad = await Variedad.update(req.body, req.params.id);
        res.json(updatedVariedad);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteVariedad = async (req, res) => {
    try {
        await Variedad.delete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// handlers/especieHandler.js
const Especie = require('../models/especies');

exports.listEspecies = async (req, res) => {
    try {
        const especies = await Especie.getEspecies();
        res.json(especies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.insertEspecie = async (req, res) => {
    try {
        const newEspecie = await Especie.insert(req.body);
        res.status(201).json(newEspecie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateEspecie = async (req, res) => {
    try {
        const updatedEspecie = await Especie.update(req.body, req.params.id);
        res.json(updatedEspecie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteEspecie = async (req, res) => {
    try {
        await Especie.delete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

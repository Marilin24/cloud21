const Customer = require('../models/Customer');

const listCustomer = async (req, res) => {
    try {
        const customers = await Customer.getCustomers();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertCustomer = async (req, res) => {
    try {
        const customer = await Customer.insert(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.update(req.params.id, req.body);
        if (customer) {
            res.json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const result = await Customer.delete(req.params.id);
        if (result) {
            res.status(204).end(); // 204 No Content
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};

// models/Customer.js
const { Model } = require('objection');

class Customer extends Model {
    static get tableName() {
        return 'customer';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                email: { type: 'string', format: 'email' },
                age: { type: 'integer', minimum: 0 } // Asegura que la edad no sea negativa
            }
        };
    }

    static async getCustomers() {
        return await Customer.query();
    }

    static async insert(data) {
        return await Customer.query().insert(data);
    }

    static async update(id, data) {
        return await Customer.query().patch(data).where('id', id);
    }

    static async delete(id) {
        return await Customer.query().deleteById(id);
    }
}

module.exports = Customer;

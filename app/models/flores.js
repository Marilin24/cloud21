// models/Flor.js
const { Model } = require('objection');

class Flor extends Model {
    static get tableName() {
        return 'flores';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string' },
                tipo: { type: 'integer' }
            }
        };
    }

    static async getFlores() {
        return await Flor.query();
    }

    static async insert(data) {
        return await Flor.query().insert(data);
    }

    static async update(data, id) {
        return await Flor.query().patch(data).where('id', id);
    }

    static async delete(id) {
        return await Flor.query().deleteById(id);
    }
}

module.exports = Flor;

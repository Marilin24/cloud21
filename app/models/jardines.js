// models/Jardin.js
const { Model } = require('objection');

class Jardin extends Model {
    static get tableName() {
        return 'jardines';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'ubicacion'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                ubicacion: { type: 'string', minLength: 1 }
            }
        };
    }

    static async getJardines() {
        return await Jardin.query();
    }

    static async insert(data) {
        return await Jardin.query().insert(data);
    }

    static async update(data, id) {
        return await Jardin.query().patch(data).where('id', id);
    }

    static async delete(id) {
        return await Jardin.query().deleteById(id);
    }
}

module.exports = Jardin;

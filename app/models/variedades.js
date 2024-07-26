// models/Variedad.js
const { Model } = require('objection');

class Variedad extends Model {
    static get tableName() {
        return 'variedades';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'especies'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                especies: { type: 'string', minLength: 1 }
            }
        };
    }

    static async getVariedades() {
        return await Variedad.query();
    }

    static async insert(data) {
        return await Variedad.query().insert(data);
    }

    static async update(data, id) {
        return await Variedad.query().patch(data).where('id', id);
    }

    static async delete(id) {
        return await Variedad.query().deleteById(id);
    }
}

module.exports = Variedad;

// models/Variedad.js
const { Model } = require('objection');

class Variedad extends Model {
    static get tableName() {
        return 'variedades';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                especies: { type: 'string', minLength: 1 },
                grupo: { type: 'string', minLength: 1 },
                lugar: { type: 'string', minLength: 1 },
            }
        };
    }

    static async getVariedades() {
        return await Variedad.query();
    }

    static async getVariedadById(id) {
        return await Variedad.query().findById(id);
    }

    static async insert(data) {
        return await Variedad.query().insert(data);
    }

    static async updateVariedad(id, data) {
        return await Variedad.query().patch(data).where('id', id);
    }

    static async deleteVariedad(id) {
        return await Variedad.query().deleteById(id);
    }
}

module.exports = Variedad;

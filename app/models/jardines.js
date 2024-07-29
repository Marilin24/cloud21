// models/Garden.js
const { Model } = require('objection');

class jardines extends Model {
    static get tableName() {
        return 'jardines';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'ubicacion', 'encargado', 'tipo', 'descripcion'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                ubicacion: { type: 'string', minLength: 1 },
                encargado: { type: 'string', minLength: 1 },
                tipo: { type: 'string', minLength: 1 },
                descripcion: { type: 'string', minLength: 1 },
            }
        };
    }

    static async getJardines() {
        return await jardines.query();
    }

    static async getJardinesId(id) {
        return await jardines.query().findById(id);
    }

    static async insert(data) {
        return await jardines.query().insert(data);
    }

    static async updateGarden(id, data) {
        return await jardines.query().patch(data).where('id', id);
    }

    static async deleteGarden(id) {
        return await jardines.query().deleteById(id);
    }
}

module.exports = jardines;

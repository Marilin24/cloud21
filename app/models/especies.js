// models/Especie.js
const { Model } = require('objection');

class Especie extends Model {
    static get tableName() {
        return 'especies';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string' }
            }
        };
    }

    static async getEspecies() {
        return await Especie.query();
    }

    static async insert(data) {
        return await Especie.query().insert(data);
    }

    static async update(data, id) {
        return await Especie.query().patch(data).where('id', id);
    }

    static async delete(id) {
        return await Especie.query().deleteById(id);
    }
}

module.exports = Especie;

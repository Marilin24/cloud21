// models/Especie.js
const { Model } = require('objection');

class Especie extends Model {
    static get tableName() {
        return 'especies';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'familia'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                familia: { type: 'string', minLength: 1 },
                descripcion: { type: 'string', nullable: true },
                color: { type: 'string', nullable: true },
                temporada_floracion: { type: 'string', nullable: true },
            }
        };
    }

    static async getEspecies() {
        return await Especie.query();
    }

    static async getEspecieById(id) {
        return await Especie.query().findById(id);
    }

    static async insert(data) {
        return await Especie.query().insert(data);
    }

    static async update(id, data) {
        return await Especie.query().patch(data).where('id', id);
    }

    static async delete(id) {
        return await Especie.query().deleteById(id);
    }
}

module.exports = Especie;

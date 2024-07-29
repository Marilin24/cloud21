// models/Flower.js
const { Model } = require('objection');

class flores extends Model {
    static get tableName() {
        return 'flores';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                name_cientifico: { type: 'string', minLength: 1 },
                tipo: { type: 'string', minLength: 1 },
                lugar_origen: { type: 'string', minLength: 1 },
                familia: { type: 'string', minLength: 1 },
            }
        };
    }

    static async getFlores() {
        return await flores.query();
    }

    static async gerFloresById(id) {
        return await flores.query().findById(id);
    }

    static async insert(data) {
        return await flores.query().insert(data);
    }

    static async updateFlower(id, data) {
        return await flores.query().patch(data).where('id', id);
    }

    static async deleteFlower(id) {
        return await flores.query().deleteById(id);
    }
}

module.exports = flores;

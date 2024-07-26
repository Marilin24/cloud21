const { Model } = require('objection'); //Llamar a Model de la libreria 

class Customer extends Model { //Creo herencia del modelo
    static get tableName(){
        return 'customer';
    }
    static get jsonSchema(){//Especifica la estructura de la tabla
        return{
            type: 'object',//Object para un valor, array para una lista
            required: ['name', 'email'],//Campos requeridos

            properties: {//estructura de los campos
                id:{type: 'integer'},
                name:{type: 'string', minLength: 1},
                email:{type: 'string', format: 'email'},
                age: {type: 'integer'}
            }
        };
    }
    static async getCustomers(){
        return await Customer.query();
    }

    static async insert(data){
        return await Customer.query()
        .insert(data);
    }

    static async update(data,id){
        return await Customer.query()
        .patch(id,data);
    }

    static async delete(id){
        return await Customer.query()
        .deleteById(id);
    }
}

module.exports = Customer; 
const { TableBuilder } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    /**como exportar la tabla cliente y generar 5 tablas**/
    return knex.schema.createTable('customer', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.string('number').notNullable();
        table.string('genero').notNullable();
        table.date('fechaN', true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('customer')
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    /**como exportar la tabla cliente y generar 5 tablas**/
    return knex.schema.createTable('flores', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('name_cientifico').notNullable();
        table.string('tipo').notNullable();
        table.string('lugar_origen').notNullable();
        table.string('familia').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('flores')
};

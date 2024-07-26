/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    /**como exportar la tabla cliente y generar 5 tablas**/
    return knex.schema.createTable('flores', table =>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('Tipo').notNullable();
        table.timestamp(true, true);
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('flores')
};

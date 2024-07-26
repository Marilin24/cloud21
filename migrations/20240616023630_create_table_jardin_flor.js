/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('jardin_flor', table => {
      table.increments('id').primary();
      table.string('nombre').notNullable();
      table.integer('tipo').notNullable();
      
    });
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('jardin_flor')
};

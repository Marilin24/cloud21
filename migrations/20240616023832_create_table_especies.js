/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('especies', table => {
      table.increments('id').primary();
      table.string('nombre').notNullable();
      table.string('descripcion').nullable();

    });
  };
  
  
/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('especies')
};

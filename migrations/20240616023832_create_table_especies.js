/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('especies', table => {
    table.increments('id').primary();
    table.string('nombre').notNullable();
    table.string('familia').notNullable();
    table.string('descripcion').nullable();
    table.string('color').nullable();
    table.string('temporada_floracion').nullable();
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('especies');
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('variedades', table => {
    table.increments('id').primary();
    table.string('nombre').notNullable();
    table.string('especies').notNullable();    
    table.string('grupo').notNullable();  
    table.string('lugar').notNullable();

   
  });
};


/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
return knex.schema.dropTable('variedades')

};
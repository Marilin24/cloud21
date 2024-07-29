/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('especies', function(table) {
        // Agregar la columna
        table.integer('especies_id').unsigned().nullable();
        // Configurar la clave foránea
        table.foreign('especies_id').references('id').inTable('categoria');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('especies', function(table) {
        // Eliminar la clave foránea
        table.dropForeign('especies_id');
        // Eliminar la columna
        table.dropColumn('especies_id');
    });
};

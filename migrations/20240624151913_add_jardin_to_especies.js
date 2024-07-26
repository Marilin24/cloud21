
exports.up = function (knex) {
return knex.schema.table('especies', function (table) {
// Agregar la columna }
table.integer('especies_id').unsigned();
// Configurar la clave foránea
table.foreign('especies_id').references('id').inTable('categoria');
});
};
/**
* @param { import("knex"). Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
return knex.schema.table('jardin', function (table) {
// Eliminar la clave foránea
table.dropForeign('jardin_id');
// Eliminar la columna
table.dropColumn('jardin_id');
});
};

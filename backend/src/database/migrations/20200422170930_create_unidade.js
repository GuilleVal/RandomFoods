exports.up = function(knex) {
    return knex.schema.createTable('unidade', function (table) {
        table.increments();
        table.string('nome', 100).notNullable();
        table.string('sigla', 100).notNullable();
        table.integer('id_tipo_unidade').notNullable();
        table.integer('id_ingrediente');
        table.decimal('taxa_conversao', 8, 3).notNullable();

        table.unique(['nome', 'id_tipo_unidade']);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('unidade');
};
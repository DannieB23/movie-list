/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable(
        'movie_title', table => {
            table.increments();
            table.string("title", 256);
            table.boolean("userAdded").defaultTo(false);
            table.boolean("watched").defaultTo(false);
        }
    )
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists('movie_title');
};

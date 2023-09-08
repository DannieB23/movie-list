/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('movie_title').del();
  await knex('movie_title').insert([
    { title: 'Mean Girls', userAdded: false, watched: false },
    { title: 'Hackers', userAdded: false, watched: false },
    { title: 'The Grey', userAdded: false, watched: false },
    { title: 'Sunshine', userAdded: false, watched: false },
    { title: 'Ex Machina', userAdded: false, watched: false },
  ]);
};

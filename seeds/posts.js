
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('post').insert({Title: 'test1', content: 'just do it' }),
        knex('post').insert({Title: 'test2', content: 'i did it' }),
        knex('post').insert({Title: 'test3', content: 'it worked' })
      ]);
    });
};

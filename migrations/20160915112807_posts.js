exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table){
    table.increments();
    table.string('Title');
    table.string('content');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post')
};

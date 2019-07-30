
exports.up = function(knex) {
    return knex.schema.createTable('descriptions', descriptions => {
        descriptions.increments();
    
        descriptions
          .string('description')
          .notNullable();
        descriptions
          .integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('descriptions');
};

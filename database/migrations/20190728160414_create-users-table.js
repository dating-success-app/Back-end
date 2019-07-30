
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();

      users
        .string('username', 128)
        .notNullable()
        .unique();
      users
        .string('password', 255)
        .notNullable();
  })

  .createTable('descriptions', descriptions => {
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
  })

  .createTable('scores', scores => {
    scores.increments();

    scores
      .integer('score');

    scores
      .integer('desc_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('descriptions')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};



exports.up = function(knex) {
    return knex.schema.createTable('scores', scores => {
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
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('scores');
};

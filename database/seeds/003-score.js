
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {score: 20, desc_id: 0}
      ]);
    });
};

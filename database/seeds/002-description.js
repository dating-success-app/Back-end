
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('descriptions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('descriptions').insert([
        {id: 0, user_id: 0, description: "I like to go hiking and spending time outdoors. I'm also passionate about animals and have two dogs" },
      ]);
    });
};

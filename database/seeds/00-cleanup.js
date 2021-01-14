
exports.seed = async function(knex) {
  await knex("roles").truncate()
};

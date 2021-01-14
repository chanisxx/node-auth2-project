//hashed password for password
const hashedPassword = "eyJ1c2VySUQiOjUsInVzZXJuYW1lIjoiR3JlZyIsImlhdCI6MTYxMDMzNTE5OH0"

exports.seed = async function(knex) {
	await knex("users").insert([
		{ id: 1, username: "generaluser", password: hashedPassword, roles_id: 1 },
		{ id: 2, username: "administrator", password: hashedPassword, roles_id: 2 },
	])
}
 
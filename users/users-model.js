const db = require("../database/config");

module.exports = {
    add, 
    find, 
    findByUsername
}

async function add(user) {
    const [id] = await db("users").insert(user)
    return findByUsername(user.username)
}

function find() {
    return db("users")
    .innerJoin("roles", "roles.id", "users.roles_id")
    .select("users.id", "users.username", "roles.name as role")
}

function findByUsername(username) {
    return db("users")
    .innerJoin("roles", "roles.id", "users.roles_id")
    .where("users.username", username)
    .first("users.id", "users.username", "users.password", "roles.name as role")
}
const db = require('../data/db-config.js');

module.exports = {
    find,
    findBy,
    findById,
};

// async function add(project) {
//     const [ id ] = await db("projects").insert(project, "id");
//     return findById(id);
// }


function find() {
    return db("projects").select("id", "project_title");
}

function findById(id) {
    return db("projects")
            .where({ id })
            .select('id', 'project_title')
            .first();
}

function findBy(param) {
    return db("projects")
            .where(param);
}
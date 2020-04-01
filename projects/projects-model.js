const db = require('../data/db-config.js');

module.exports = {
    find,
    findBy,
    findById,
};

function find() {
    return db("projects").select(
        "id",
        "project_title",
        "img_url",
        "project_desc",
        "tech_used",
        "project_url",
        "github_repo"
        );
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
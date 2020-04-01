const db = require('../data/db-config.js');

module.exports = {
    find,
    findBy,
    findById,
};

function find() {
    return db("skills").select("id", 
    'skills_name',
    'img_url');
}

function findById(id) {
    return db("skills")
            .where({ id })
            .select('id',
                'skills_name',
                'img_url')
            .first();
}

function findBy(param) {
    return db("skills")
            .where(param);
}
const db = require('../data/db-config.js');

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove

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

function add(newSkill) {
    return db("skills")
    .insert(newSkill);
}

function update(changes, id) {
    return db("skills")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id)
    })
}

function remove(id){
    let toRemove = findById(id) || null;
    return db("skills")
    .where({ id })
    .del(id)
    .then(() => {
        return toRemove;
    })
}
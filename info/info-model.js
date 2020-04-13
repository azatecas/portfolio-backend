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
    return db("info")
        .select(
            'id', 
            'name',
            'bio',
            'github',
            'linkedin',
            'img_url'
        );
}

function findById(id) {
    return db("info")
            .where({ id })
            .select(
                'id', 
                'name',
                'bio',
                'github',
                'linkedin',
                'img_url'
            )
            .first();
}

function findBy(param) {
    return db("info")
            .where(param);
}

function add(newSkill) {
    return db("info")
    .insert(newSkill);
}

function update(changes, id) {
    return db("info")
    .where({ id })
    .update(changes)
    .then(() => {
        return findById(id)
    })
}

function remove(id){
    let toRemove = findById(id) || null;
    return db("info")
    .where({ id })
    .del(id)
    .then(() => {
        return toRemove;
    })
}
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findByOwner,
    add,
    update,
    remove,
}

// get al rows from restaurants table
function find(){
    const rows = db('restaurants')
    return rows;
}

// get specific data from restaurant table
function findById(id){
    return db('restaurants')
        .where({id})
        .first()
}

//get specific owner data from restaurant table
function findByOwner(owner_id) {
    return db('restaurants')
        .where({owner_id});
}

// insert a new restaurant data into the database

async function add(restaurant){
    const {id} = await db('restaurants');
    return db('restaurants')
    insert(restaurant);
    return findById(id);
}

//delete a restaurant
function remove(id){
    return db('restaurants')
        .where({id})
        .del();
}

//udpate a restaurant
function update(id, changes){
    return db('restaurants')
        .where({id})
        .udpate(changes, '*');
}

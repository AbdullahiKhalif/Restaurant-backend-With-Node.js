const db = require('../../data/dbConfig.js');

module.exports ={
    find,
    findById,
    add,
    update,
    remove
}

//get all owners table
function find(){
    const rows = db('owners')
    return rows;
}
//get single owner data from database
function findById(id){
    return db('owners')
        .where({id})
        .first();
};

// add new owner to database
async function add(owner){
    const {id} = await db('owners').insert(owner)
    return findById(id);
};

// delete owner from database
function remove(id){
    return db('owners')
        .where({id})
        .del();
}

//update owner from database
function update(id,changes){
    return db('owners')
        .where({id})
        .update(changes, '*');

}
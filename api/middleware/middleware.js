// WRITE A MIDDLEWARE HERE

// Function shaqo gooni ah kuu qabanaayo
// REQUEST IYO RESPONSE ayuu dhexda u galayaa - WAA BURCAD

const owners = require('../owners/owner-model');
// NEXT = Waa habka uu middleware-ka usii gudbinayaao request
module.exports = {
async requiredName(req, res, next) { 
    const name = req.body.name;

    if(!name) {
        return res.status(400).json({ message: 'Name Is required, don\'t miss.' });
    }

    next(); // waxay ka dhigan tahay Shaqadeydii waan dhameystay, horay usii soco - MACSALAMO
}
}
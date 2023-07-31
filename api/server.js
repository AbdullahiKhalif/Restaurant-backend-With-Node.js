const express = require('express');

//ROUTES
const restaurantRouter = require('./restaurants/restaurant-router.js')
const ratingRouter = require('./ratings/rating-router.js');
const ownerRouter = require('./owners/owner-router.js');

const server = express();
server.use(express.json());

server.use('/api/restaurants', restaurantRouter);
server.use('/api/ratings', ratingRouter);
server.use('/api/owners', ownerRouter);

server.use('*', (req, res) => {
    //catch all 404 errorrs middleware
    res.status(404).json({message: `${req.method} ${req.url} not found`});
});

module.exports = server;

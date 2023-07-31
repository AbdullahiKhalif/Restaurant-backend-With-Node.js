const express = require('express');
const restaurantsDB = require('./restaurant-model.js');

//create router url
const router = express.Router();

//All END POINTS (APIS)

// read All
router.get('/', async (req, res) =>{
    try{
        const restaurant = await restaurantsDB.find(req.query);
        res.status(200).json(restaurant);
    }catch(err){
        res.status(500).json({message: 'Failed to get restaurant'});
    }
});

//read or get single restaurant
router.get('/:id', async (req, res) =>{
    try{
        const restaurant = await restaurantsDB.findById(req.params.id);
        if(restaurant){
            res.status(200).json(restaurant)
        }else{
            res.status(404).json({message: 'restaurant not found'})
        }

    }catch(err){
        res.status(500).json({message: 'Failed to find restaurant'});
    }
});

//get restaurant by owner id
router.get('/owner/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const restaurant = await restaurantsDB.findByOwner(id);
        if(restaurant){
            res.status(200).json(restaurant);
        }else{
            res.status(404).json({message: 'restaurant not found'})
        }
    }catch(err){
       
        res.status(500).json({message: 'Failed to get restaurant'});
    }
});

//Add a new restaurant
router.post('/', async (req, res) => {
    try {
        const restaurant = await restaurantsDB.add(req.body);
        res.status(201).json(restaurant);
    } catch(err) {
        res.status(500).json({ message: 'Failed to add restaurant' });
    }
});

//update restaurant
router.put('/:id', async (req, res) =>{
    try{
        const {id} = req.params.id;
        const body = req.body;
        const restaurant = await restaurantsDB.update(id, body);

        if(restaurant){
            res.status(200).json({message: 'Successfully updated restaurant'}, restaurant);
        }else{
            res.status(404).json({message: 'restaurant not found'}, restaurant);
        }

    }catch(err){
        res.status(500).json({message: 'Failed to update restaurant'});
    }
});

//Delete restaurant
router.delete('/:id', async (req, res) =>{
    try{
        const id = req.params.id;
        const restaurant = await restaurantsDB.remove(id);
        if(restaurant){
            res.status(200).json({message:'Successflly Deleted. '},restaurant);
        }else{
            res.status(404).json({message: 'restaurant not found'}, restaurant);
        }
    }catch(err){
        res.status(500).json({message: 'Failed  to delete restaurant'});
    }
});

module.exports = router;
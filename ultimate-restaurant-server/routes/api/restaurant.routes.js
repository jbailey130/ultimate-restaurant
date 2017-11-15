var express = require('express')

var router = express.Router();

// Getting the Todo Controller

var RestaurantController = require('../../controllers/restaurant.controller');


// Map each API to the Controller FUnctions

router.get('/', RestaurantController.getRestaurants);

router.post('/', RestaurantController.createRestaurant);

// Export the Router

module.exports = router;
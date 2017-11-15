var RestaurantService = require('../services/restaurant.service');

_this = this;

exports.getRestaurants = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 100;

    try {
        var restaurants = await RestaurantService.getRestaurants({}, page, limit);
        return res.status(200).json({
            status: 200,
            data: restaurants,
            message: 'Success'
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.createRestaurant = async function(req, res, next) {
    var restaurant = {
        name: req.body.name,
        description: req.body.description,
        city: req.body.city,
        state: req.body.state,
        cuisine: req.body.cuisine,
        rating: req.body.rating
    };

    try {
        var createdRestaurant = await RestaurantService.saveRestaurant(restaurant);
        return res.status(201).json({
            status: 201,
            data: createdRestaurant,
            message: 'Success'
        });
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

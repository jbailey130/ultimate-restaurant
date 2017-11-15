var Restaurant = require('../models/restaurant.model');

_this = this;


exports.getRestaurants = async function(query, page, limit) {
    var options = {
        page, 
        limit
    }

    try {
        return await Restaurant.paginate(query, options);
    } catch (e) {
        throw Error('ERROR: Could not get restaurants.');
    }
}

exports.saveRestaurant = async function(restaurant) {
    var newRestaurant = new Restaurant({
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        state: restaurant.state,
        cuisine: restaurant.cuisine,
        rating: restaurant.rating
    });

    try {
        return await newRestaurant.save();
    } catch (e) {
        throw Error('ERROR: Could not save');
    }
}
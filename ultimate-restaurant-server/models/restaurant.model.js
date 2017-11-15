
var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var RestaurantSchema = new mongoose.Schema({
    name: String,
    description: String,
    city: String,
    state: String,
    cuisine: String,
    rating: String
})

RestaurantSchema.plugin(mongoosePaginate)
const Restaurant = mongoose.model('Restaurant', RestaurantSchema)

module.exports = Restaurant;
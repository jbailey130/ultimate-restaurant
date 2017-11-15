var express = require('express')
var router = express.Router()
var restaurants = require('./api/restaurant.routes')

router.use('/restaurants', restaurants);

module.exports = router;

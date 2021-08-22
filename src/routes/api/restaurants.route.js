const express = require('express');
const RestaurantsController = require('../../controllers/restaurants.controller');
const router = express.Router();

router
    .route('/')
    .get(RestaurantsController.getRestaurants)

module.exports = router;

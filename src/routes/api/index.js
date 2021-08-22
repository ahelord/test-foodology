require('dotenv').config();
const express = require('express');
const router = express.Router();
const restaurantsRoute = require('../api/restaurants.route');
router.get('/status', (req, res) => res.send('OK'));
router.use('/restaurants', restaurantsRoute);

module.exports = router;

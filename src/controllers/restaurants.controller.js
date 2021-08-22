const httpStatus = require('http-status');
const RappiDataSource = require('../datasources/rappi.datasource')
const LocationUtil = require('../utils/location.util');
const constants = require('../constants');

class RestaurantsController {
    constructor() {
    }

    async getRestaurants(req, res, next) {
        try {
            const rappiDataSource = new RappiDataSource();

            let coordinates = []
            for (let i = 0; i < 4; i++) {

                coordinates.push(LocationUtil.pointInCircle({latitude:constants.DARK_KITCHEN_CALI.lat, longitude:constants.DARK_KITCHEN_CALI.lng}, 3000))
                coordinates[i].restaurant=[]
                const {stores} = await rappiDataSource.getStores(coordinates[i].latitude, coordinates[i].longitude)
                for (let k = 0; k < constants.RESTAURANTS.length; k++) {
                    const index = stores.findIndex(store => store.brand_name === constants.RESTAURANTS[k]);
                    coordinates[i].restaurant.push({name:constants.RESTAURANTS[k],index})

                }
            }
            res.json(coordinates);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.BAD_REQUEST).json({message: httpStatus[httpStatus.BAD_REQUEST]});

        }
    };

}

module.exports = new RestaurantsController();
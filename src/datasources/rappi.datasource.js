const constants = require('../constants');
const fetch = require('../utils/fetch.util');

class RappiDatasource {
    async getStores(lat,lng) {
        let response;
        try {
            let headers={};
            headers['Content-Type']= 'application/json';
            headers['Accept']= 'application/json';
            headers['Authorization']= `Bearer ${constants.RAPPI_BEARER_TOKEN}`;

            response = await fetch.createFech(constants.RAPPI_API_STORES,
                headers,
                'post',
                JSON.stringify({
                    "lat": lat,
                    "lng": lng,
                    "store_type": "restaurant",
                    "is_prime": false,
                    "states": ["opened", "unavailable"]
                }));
        } catch (error) {
            throw new Error(error);
        }
        return response;
    }
}

module.exports = RappiDatasource;


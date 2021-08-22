'use strict';

const DARK_KITCHEN_CALI = {
	lat: 3.4242814233739614,
	lng: -76.54170365914733
};

const CUSTOMER_LOCATIONS = [
	{
		lat: 3.428717,
		lon: -76.541175
	},

	{
		lat: 3.429888,
		lon: -76.538313
	},
	{
		lat: 3.430335,
		lon: -76.539808

	},
	{
		lat: 3.419396,
		lon: -76.538491
	}
];

const RAPPI_API_STORES = 'https://services.grability.rappi.com/api/restaurant-bus/stores/catalog/home/v2';
const RAPPI_BEARER_TOKEN = 'd0RaVWlKdnhEbXo3QTBDeHduRHRITmtreTlmVDRH'
const RESTAURANTS = ['Avocalia','Brunch & Munch','Burritos & Co','Cacerola']
module.exports = {
	DARK_KITCHEN_CALI,
	CUSTOMER_LOCATIONS,
	RAPPI_API_STORES,
	RAPPI_BEARER_TOKEN,
	RESTAURANTS
};
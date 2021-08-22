
const EARTH_RADIUS = 6371000 /* meters  */
const DEG_TO_RAD =  Math.PI / 180.0
const THREE_PI = Math.PI*3
const TWO_PI = Math.PI*2


function getLocation(originalLat, originalLng, meters) {
    const r = meters / 111300 // = 100 meters
        , y0 = originalLat
        , x0 = originalLng
        , u = Math.random()
        , v = Math.random()
        , w = r * Math.sqrt(u)
        , t = 2 * Math.PI * v
        , x = w * Math.cos(t)
        , y1 = w * Math.sin(t)
        , x1 = x / Math.cos(y0)

    const lat = y0 + y1
    const lng = x0 + x1
    return {
        lat,
        lng
    }
}


function recursiveConvert(input, callback){
    if (input instanceof Array) {
        return input.map((el) => recursiveConvert(el, callback))
    }
    if  (input instanceof Object) {
        input = JSON.parse(JSON.stringify(input))
        for (let key in input) {
            if( input.hasOwnProperty(key) ) {
                input[key] = recursiveConvert(input[key], callback)
            }
        }
        return input
    }
    if (isFloat(input)) { return callback(input) }
}

function isFloat(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function toRadians(input){
    return recursiveConvert(input, (val) => val * DEG_TO_RAD)
}

function toDegrees(input){
    return recursiveConvert(input, (val) => val / DEG_TO_RAD)
}


function pointAtDistance(inputCoords, distance) {
    const result = {}
    const coords = toRadians(inputCoords)
    const sinLat = 	Math.sin(coords.latitude)
    const cosLat = 	Math.cos(coords.latitude)

    /* go fixed distance in random direction*/
    const bearing = Math.random() * TWO_PI
    const theta = distance/EARTH_RADIUS
    const sinBearing = Math.sin(bearing)
    const cosBearing = 	Math.cos(bearing)
    const sinTheta = Math.sin(theta)
    const cosTheta = 	Math.cos(theta)

    result.latitude = Math.asin(sinLat*cosTheta+cosLat*sinTheta*cosBearing);
    result.longitude = coords.longitude +
        Math.atan2( sinBearing*sinTheta*cosLat, cosTheta-sinLat*Math.sin(result.latitude )
        );
    /* normalize -PI -> +PI radians */
    result.longitude = ((result.longitude+THREE_PI)%TWO_PI)-Math.PI

    return toDegrees(result)
}

function pointInCircle(coord, distance) {
    const rnd =  Math.random()
    /*use square root of random number to avoid high density at the center*/
    const randomDist = Math.sqrt(rnd) * distance
    return pointAtDistance(coord, randomDist)
}



module.exports = {
    getLocation:getLocation,
    pointInCircle:pointInCircle
};
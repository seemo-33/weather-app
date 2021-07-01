const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2VlbW8tMTMiLCJhIjoiY2twd3JweWp2MDNyYTJybG95d2l4MzhweCJ9.y0UGqEkmZnEvsC6eEeHD5w'
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to access Geo Location Services!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location! Try with different name..', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
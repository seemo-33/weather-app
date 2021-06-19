const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=82d3a9bc9cab2405005c8750ccdd435a&query=' + latitude + ',' + longitude //40.7128,-74.0060' //weatherstack API
    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find Location!', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + 
            ' degrees out. There is a ' + body.current.precip + '% chance of rain')
        }
    })
}

module.exports = forecast
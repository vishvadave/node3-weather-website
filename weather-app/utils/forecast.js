const request = require('request')
const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/8a417e5e76892f34849a8d872f3e924b/' + lat + ',' + long

    request({url, json: true}, (error, {body}) => {
        if (error) {
             callback('Unable to connect to weather service', undefined)
        } else if (body.error){
            callback('Unable to find locationn', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently '+ body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast
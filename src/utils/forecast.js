const request = require('request')
const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=e6f08d938a20c4a43e7ea42552f10dca&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect...', undefined)
        }
        else if(body.error) { 
            callback('Unable to find Location', undefined)
        }
        else {
            callback(undefined,'Weather is: ' + body.current.weather_descriptions[0] + '.' + ' It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' )
        }

    }) 
}



module.exports = forecast

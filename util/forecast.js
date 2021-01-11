const request = require('request')

const forecast = (lat, long, place,  callback) => {
    const url = "http://api.weatherstack.com/current?access_key=3dfaf6929face8e730f465b194aeb3af&query=" + lat + "," + long;
    request({url: url, json: true}, (error,  response) => {
        if (error)
            callback(error);
        else if (response.body.error) {
            callback(response.body.error);
        } else {
            const currentData = response.body.current;
            callback("undefined", {
                "current temperature": currentData.temperature,
                "feels like": currentData.feelslike,
                "place": place
            });
        }
    })
}

module.exports = forecast;
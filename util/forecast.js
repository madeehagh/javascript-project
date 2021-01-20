const axios = require('axios')

const forecastURL = 'http://api.weatherstack.com/current?access_key=3dfaf6929face8e730f465b194aeb3af&query=';

const forecast =  (latitude, longitude, place) => {
    const url = `${forecastURL}${latitude},${longitude}`
    return axios.get(url);

}

module.exports = forecast;
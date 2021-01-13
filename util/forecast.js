const axios = require('axios')

const forecastURL = 'http://api.weatherstack.com/current?access_key=3dfaf6929face8e730f465b194aeb3af&query=';

const forecast =  (latitude, longitude, place) => {

    return axios.get(forecastURL+ latitude + ',' + longitude);

}

module.exports = forecast ;
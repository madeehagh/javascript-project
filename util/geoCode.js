const request = require('request')

const geoCode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
        + address + ".json?access_token=pk.eyJ1IjoibWFkZWVoYWciLCJhIjoiY2tqc2N2cGsxM3lhdzJ4bzdkMms2NmpzaCJ9.qRIlgedBiGGpXHb6AYDOjQ&limit=1";
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to server");
        } else if (response.body.message === "Not Found" || response.body.features.lemgth == 0) {
            callback("invalid location");
        } else {
            const features = response.body.features;
            const lat = features[0].center[0];
            const long = features[0].center[1];
            callback("undefined", {
                "latitude":  lat ,
                "longitude": long,
                "place": features[0].place_name
            });
        }
    })
}

module.exports = geoCode;
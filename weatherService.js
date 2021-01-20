const geoCode = require('./util/geoCode')
const forecast = require('./util/forecast')

weatherAPI = async (req, res) => {
    try {
        const geoResponse = await geoCode(req);
        const features = geoResponse.data.features[0];
        const [latitude, longitude] = features.center;
        const place = features.place_name;
        const {data} = await forecast(latitude, longitude, place);
        const currentData = data.current;
        res = {
            currentTemperature: currentData.temperature,
            feelsLike: currentData.feelslike,
            place   //Use to display exact/matching place for the input given
        };
        return res;
    } catch (error) {
        console.log(error);
        return { error: error.message };
    }

}

module.exports = weatherAPI;
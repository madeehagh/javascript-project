const geoCode = require('./util/geoCode')
const forecast = require('./util/forecast')
const apiError = require('./error/ApiError')

const weatherAPI = async (req) => {
    try {
        const geoResponse = await geoCode(req);
        const features = geoResponse.data.features[0];
        const [latitude, longitude] = features.center;
        const place = features.place_name;
        const {data} = await forecast(latitude, longitude);
        const currentData = data.current;
        if (undefined !== currentData) {
            return {
                code: 200,
                response: {
                    currentTemperature: currentData.temperature,
                    feelsLike: currentData.feelslike,
                    place   //Use to display exact/matching place for the input given
                }
            };
        } else {
            return (apiError.serverError(`Record not found for location ${req}. Please enter valid location`));
        }
    } catch (error) {
       return  ({
           code: 500,
           message: 'Internal server error',
       });
    }

}

module.exports = weatherAPI;
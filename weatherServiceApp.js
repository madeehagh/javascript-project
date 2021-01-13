const geoCode = require('./util/geoCode')
const forecast = require('./util/forecast')
/*
const url = "http://api.weatherstack.com/current?access_key=3dfaf6929face8e730f465b194aeb3af&query=25.600,77.200";
/!*
request({url: url, json : true}, (error, response) => {
    //console.log(response.body);
    const currentData = response.body.current;
    console.log("It is  " + currentData.weather_descriptions)
    console.log("Current Temperatue " + currentData.temperature);
    console.log("Feels Like Temperatue " + currentData.feelslike);

})*!/

const encodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/los.json?access_token=pk.eyJ1IjoibWFkZWVoYWciLCJhIjoiY2tqc2N2cGsxM3lhdzJ4bzdkMms2NmpzaCJ9.qRIlgedBiGGpXHb6AYDOjQ&limit=1";

request({url: encodeURL, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to server");
    } else if (response.body.message === "Not Found" || response.body.features.lemgth == 0) {
        console.log("invalid location");
    } else {
        //console.log(response.body);
        const features = response.body.features;
        const lat = features[0].center[0];
        const long = features[0].center[1];
        console.log("latitude: " + lat + " longitude " + long);
    }
})*/

 async function asyncCall() {
         try {
             const geoResponse = await geoCode(address);
             const features = geoResponse.data.features[0];
             const[latitude, longitude] = features.center;
             const place = features.place_name;
             const response = await forecast(latitude, longitude, place);
             const currentData = response.data.current;
             console.log({
                 'temperature' : currentData.temperature,
                 'feelsLike': currentData.feelslike,
                 'place': place
             });
         } catch (error) {
             console.log(new Error(error));
         }

 }

const address = process.argv[2];

if (!address) {
    console.log('Please provide the input');
} else {
    asyncCall();
}

const request = require("postman-request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1cb724f3671a1ff86d1368aacc02a097&query=" +
    latitude +
    "," +
    longtitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.");
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          " It is currently " +
          response.body.current.temperature +
          " degree out. There is a " +
          response.body.current.feelslike +
          " degress out."
      );
    }
  });
};

module.exports = forecast;

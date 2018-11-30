const request = require('request');

const keys = require('./keys');

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
      keys.apiKey
    }&location=1301%20lombard%20street%20philadelphia`,
    json: true
  },
  (error, response, body) => {
    const resBody = body.results[0].locations[0];
    console.log(
      `Address: ${resBody.street}, ${resBody.adminArea5}, ${
        resBody.adminArea3
      } ${resBody.postalCode}, ${resBody.adminArea1}`
    );
    console.log(`Lat: ${resBody.latLng.lat}`);
    console.log(`Lng: ${resBody.latLng.lng}`);
  }
);
// body.results[0].locations[0].latLng.lat;

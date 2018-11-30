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
    console.log(body);
  }
);

const request = require('request');

const keys = require('../keys');

const geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);

    request(
      {
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
          keys.apiKey
        }&location=${encodedAddress}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject('Unable to connect to MapQuest server');
        } else if (body.status === 'ZERO_RESULTS') {
          reject('Unable to find that address');
        } else {
          const resBody = body.results[0].locations[0];
          resolve({
            address: `${resBody.street}, ${resBody.adminArea5}, ${
              resBody.adminArea3
            } ${resBody.postalCode}, ${resBody.adminArea1}`,
            latitude: resBody.latLng.lat,
            longitude: resBody.latLng.lng
          });
        }
      }
    );
  });
};

geocodeAddress('19146').then(
  location => {
    console.log(JSON.stringify(location, undefined, 2));
  },
  errorMessage => {
    console.log(errorMessage);
  }
);

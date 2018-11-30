const request = require('request');
const yargs = require('yargs');

const keys = require('./keys');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

const encodedAddress = encodeURIComponent(argv.address);

request(
  {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=${
      keys.apiKey
    }&location=${encodedAddress}`,
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log('Unable to connect to MapQuest server');
    } else if (body.status === 'ZERO_RESULTS') {
      console.log('Unable to find that address');
    } else {
      const resBody = body.results[0].locations[0];
      console.log(
        `Address: ${resBody.street}, ${resBody.adminArea5}, ${
          resBody.adminArea3
        } ${resBody.postalCode}, ${resBody.adminArea1}`
      );
      console.log(`Lat: ${resBody.latLng.lat}`);
      console.log(`Lng: ${resBody.latLng.lng}`);
    }
  }
);
// body.results[0].locations[0].latLng.lat;

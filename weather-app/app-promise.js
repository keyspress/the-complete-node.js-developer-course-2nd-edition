const yargs = require('yargs');
const axios = require('axios');

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
const geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${
  keys.apiKey
}&location=${encodedAddress}`;

axios
  .get(geocodeUrl)
  .then(response => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    }
    const lat = response.results[0].locations[0].latLng.lat;
    const lng = response.results[0].locations[0].latLng.lng;
    const weatherUrl = `https://api.darksky.net/forecast/${
      keys.darkSkyKey
    }/${lat},${lng}`;
    console.log(
      `Address: ${response.results[0].locations[0].street}, ${
        response.results[0].locations[0].adminArea5
      }, ${response.results[0].locations[0].adminArea3} ${
        response.results[0].locations[0].postalCode
      }, ${response.results[0].locations[0].adminArea1}`
    );
    return axios.get(weatherUrl);
  })
  .then(response => {
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}`
    );
  })
  .catch(e => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.');
    } else {
      console.log(e.message);
    }
  });

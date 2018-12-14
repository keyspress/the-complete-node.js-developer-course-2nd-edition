const moment = require('moment');

const date = moment();
// date.add(100, 'year').subtract(2, 'hour');
console.log(date.format('MMM Do, YYYY h:mm a'));

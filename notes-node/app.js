console.log('starting app');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();
fs.appendFileSync('greetings.txt', `hello ${user.username}`);

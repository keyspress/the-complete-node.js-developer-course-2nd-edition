console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

// let user = os.userInfo();
// fs.appendFileSync(
//   'greetings.txt',
//   `hello ${user.username}. You are ${notes.age}.`
// );

let res = notes.addNote();
console.log(res);

console.log(notes.add(9, -2));

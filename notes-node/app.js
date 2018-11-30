console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('string'));
let filteredArray = _.uniq(['kyle', 'kyle', 1, 2, 1, 'kyle']);
console.log(filteredArray);

// let user = os.userInfo();
// fs.appendFileSync(
//   'greetings.txt',
//   `hello ${user.username}. You are ${notes.age}.`
// );

// let res = notes.addNote();
// console.log(res);

// console.log(notes.add(9, -2));

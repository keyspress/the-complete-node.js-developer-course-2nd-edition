const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findOneAndRemove({ _id: '5c0a9f5fbf2e062cb0912347' }).then;
Todo.findByIdAndRemove('5c0a9f5fbf2e062cb0912347').then(todo => {
  console.log(todo);
});

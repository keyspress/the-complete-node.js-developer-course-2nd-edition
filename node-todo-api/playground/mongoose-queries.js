const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5c0958c2a0ff4c950b36867a11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('ID not found');
//     }
//     console.log('Todo By ID', todo);
//   })
//   .catch(e => console.log(e));

const id = '5c082f55a7bdc4751ecf7d07';

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log('User not found');
    }
    console.log('User', user);
  })
  .catch(e => console.log(e));

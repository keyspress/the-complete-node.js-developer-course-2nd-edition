// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //   .deleteMany({ text: 'Eat Lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat Lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Users')
      .deleteMany({ name: 'Kyle' })
      .then(result => {
        console.log(result);
      });
    db.collection('Users')
      .findOneAndDelete({ _id: new ObjectID('5c0812ffb246152ac582d53f') })
      .then(result => {
        console.log(result);
      });
    // db.close();
  }
);

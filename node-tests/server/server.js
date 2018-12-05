const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Jim Bob',
      age: 87
    },
    {
      name: 'Wilma',
      age: 43
    },
    {
      name: 'Kyle',
      age: 42
    }
  ]);
});

app.listen(3000);

module.exports.app = app;

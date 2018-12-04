const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello from Express</h1>');
  res.send({
    name: 'Kyle',
    likes: ['Food', 'Drinking']
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle this request'
  });
});

app.listen(3000);

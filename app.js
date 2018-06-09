// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res, next) => {
  // send views/index.hbs for displaying in the browser
  res.render('index');
});

// app.js

app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    bootcamp: "IronHack WebDev"
  };

  res.render('index', data);
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});
const express = require('express'); // import express
const app = express(); // initialize express
const fakeWeatherData = require('./data'); // import fake data

app.get('/', function(req, res) {
  // if no city param exits
  if (!req.query.city) {
    res.send({
      'status': 'error',
      'message': 'Please enter a city name',
    })
  } else {
    res.send(fakeWeatherData[0])
  }
})

// Listen on port 3333
app.listen(3333, function() {
  console.log('listening on port 3333...');
})

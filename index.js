const express = require('express'); // import express
const app = express(); // initialize express
const fakeWeatherData = require('./data'); // import fake data

app.get('/weather', function(req, res) {
  let cityName = req.query.city.toLowerCase();

  for (let i = 0; i < fakeWeatherData.length; i++) {
      // if no city param exits
      if (!cityName) {
        return res.send({
          'status': 'error',
          'message': 'Please enter a city name',
        });
      } else if (cityName == fakeWeatherData[i].city.toLowerCase()) {
        return res.send(fakeWeatherData[i]);
      }
  }
  res.send({
    'status': 'error',
    'message': 'This city is not in our database',
  })
})

// Listen on port 3333
app.listen(3333, function() {
  console.log('listening on port 3333...');
})

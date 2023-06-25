// Imports
const app = require('express')();
const bodyParser = require('body-parser');
const getAccelerator = require('./routes/accelerator');
const getDistance = require('./routes/distance');

// Loading up nodes library for json
const fs = require('fs');

const server = () => {
  // including handling JSON data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Launch our server on port 8080.
  const server = app.listen(8080, () => {
    console.log('listening on port 8080', server.address().port);
  });

  // Sending data to the / endpoint to see if it's working
  app.get('/', (req, res) => {
    res.send('docker is awesome');
  });

  // calling our routes accelerator function
  getAccelerator(app, fs);

  // calling our routes distancefunction
  getDistance(app, fs);
};

module.exports = server;

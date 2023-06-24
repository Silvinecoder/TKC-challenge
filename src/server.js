// Imports
const app = require('express')();
const bodyParser = require('body-parser');
const accelerator = require('./routes/accelerator');

// Loading up nodes library for json
const fs = require('fs');

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
accelerator(app, fs);

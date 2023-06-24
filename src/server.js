// Imports
const app = require('express')();
const bodyParser = require('body-parser');

// Loading up nodes library for json
const fs = require('fs');

// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs);

// finally, launch our server on port 8080.
const server = app.listen(8080, () => {
  console.log('listening on port 8080', server.address().port);
});

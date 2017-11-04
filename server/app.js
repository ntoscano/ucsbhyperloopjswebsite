const express = require('express');

const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(__dirname + './../build'));
app.use("/assets", express.static(__dirname + './../assets'));

// Always return the main index.html, so react-router render the route in the client


module.exports = app;

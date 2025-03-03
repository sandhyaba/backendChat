/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes');

const app = express();

app.use(bodyParser.json());
function assignId(req, res, next) {
  req.startTime = new Date();
  next();
}
app.use(assignId);
app.use(routes);

module.exports = app;

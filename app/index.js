'use strict';

const express = require('express');
const app = express();

const { IS_A_TEST } = require('../config');

app.set('port', process.env.PORT || 3000);

app.get('/user/:id', (req, res) => {
  return res.status(200).send('ok');
});

app.get('/user', (req, res) => {
  return res.status(404).send('no-k');
});

if (!IS_A_TEST) {
  const server = app.listen(app.get('port'), (err) => {
    if (err) throw err;
    console.log(`App listening on Port ${server.address().port}`);
  });
}
module.exports = app;

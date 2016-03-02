'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const { IS_A_TEST, USERS_FILE } = require('../config');

// const USERS_FILE = path.resolve(__dirname, '..', 'users.json');

app.set('port', process.env.PORT || 3000);

console.log(USERS_FILE)

// const func = (id) => (name) => (age) => ({id, name, age});

// func(3)('satan')(666)

const getUser = (req, res) => {
  const { id } = req.params;
  fs.readFile(USERS_FILE, (err, data) => {
    const users = JSON.parse(data);
    const user = users.filter(user => user.id === parseInt(id))[0];
    console.log('user', user);
    return res.status(200).json(user || {message: 'User not found'});
  });
}

app.get('/user/:id', getUser);

app.get('/user', (req, res) => {
  return res.status(400).send('no-k');
});

if (!IS_A_TEST) {
  const server = app.listen(app.get('port'), (err) => {
    if (err) throw err;
    console.log(`App listening on Port ${server.address().port}`);
  });
}
module.exports = app;

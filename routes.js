const express = require('express');
const router = express.Router();
const User = require('./schema.js');

// Get request , to get all the users

router.get('/', (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving user.',
      });
    });
});

// Post request to save a user

router.post('/add', (req, res) => {
  const user = new User({
    name: req.body.name,
    country: req.body.country,
  });
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred ',
      });
    });
});
module.exports = router;

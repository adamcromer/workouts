require('dotenv').config();
const secret = require('../secret');
const secretToken = secret.token.id;

const db = require("../models");
const jwt = require('jsonwebtoken');

module.exports = {
  login: function(req, res) {
    const {username, email, password } = req.body;
    const user = new db.User({ username, email, password });
    user.save(function(err) {
      if (err) {
        res.status(500)
          .send('Error registering new user.');
      } else { 
        res.status(200)
          .send('Welcome to Workouts!');
      }
    });
  },
  auth: function(req, res) {
    const { username, email, password } = req.body;
    db.User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({ error: 'Internal error! Please try again later.' });
      } else if (!user) {
        res.status(401)
          .json({ error: 'Incorrect email/password combination.' });
      } else {
        user.isCorrectPassword(password, function(err, isMatch) {
          if (err) {
            res.status(500)
              .json({ error: 'Internal error! Please try again later.' });
          } else {
            const passToState = {
              id: user._id,
              email: user.email,
              workouts: user.workouts,
              isAuth: true
            }
            console.log(passToState);
            // issue token
            const payload = { email };
            const token = jwt.sign(payload, secretToken, { expiresIn: '3h' });
            res.cookie('token', token, { httpOnly: false, domain: false })
              .sendStatus(200);
          }
        });
      }
    });
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    console.log(req.params.email);
    db.User
    .find({ email: req.params.email})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
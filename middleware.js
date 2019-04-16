require('dotenv').config();
const secret = require('./secret.js');
const secretToken = secret.token.id;

const jwt = require('jsonwebtoken');

const withAuth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided.');
  } else {
    jwt.verify(token, secretToken, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token!');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
}

module.exports = withAuth;
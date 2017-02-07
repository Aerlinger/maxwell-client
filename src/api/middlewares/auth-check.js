const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../config');

/**
 *  Middleware to check for authentication token from a logged-in user
 *
 *  Reads an auth token from the authorization HTTP header, verifying and extracting the userId from that token if
 *  present. The user with that ID is then fetched from the database.
 *
 *  A 401 status code is dispatched if no auth token is present in the header, if the token is invalid, or if no user
 *  can be found with the token.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).end();

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err)
      return res.status(401).end();

    const userId = decoded.sub;

    // check if a user exists and return a 401 status code otherwise.
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user)
        return res.status(401).end();

      return next();
    });
  });
};

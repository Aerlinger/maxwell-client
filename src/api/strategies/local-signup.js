let mongoose = require('mongoose');
const User = mongoose.model('User');
const PassportLocalStrategy = require('passport-local').Strategy;


/**
 * Passport Local Strategy for local-signup.
 *
 * Create a new user from the provided name, email, and password hash.
 *
 * Passes an error if the email or password is invalid, or if the provided email already exists.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if (err)
      return done(err);

    return done(null);
  });
});

let express = require('express');
let router = express.Router();
let jwt = require('express-jwt');
let auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

let User = require('./models/users');

// let ctrlProfile = require('../controllers/profile');
let ctrlAuth = require('./controllers/authentication');

router.get('/test', function(req, res) {
  res.status(200);
  res.json({
    "test" : "test"
  });
});

// profile
router.get('/profile', auth, function(req, res) {
  res.status(200);
  res.json({
    "profile" : "profile"
  });
});

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

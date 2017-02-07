var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

// var ctrlProfile = require('../controllers/profile');
// var ctrlAuth = require('../controllers/authentication');

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
router.post('/register', function(req, res) {
  res.status(200);
  res.json({
    "register" : "register"
  });
});

router.post('/login', function(req, res) {
  res.status(200);
  res.json({
    "login" : "login"
  });
});

module.exports = router;

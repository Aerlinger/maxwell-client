const express = require('express');
const router = new express.Router();

const User = require('mongoose').model('User');
const DisplayPreferences = require('mongoose').model('DisplayPreferences');

router.post('/preferences', (req, res) => {
  let current_user = req.User;
  let preferences = req.body;

  let preferences_params = {};
  for (var field in preferences) {
    preferences_params['display_preferences.' + field] = preferences[field];
  }

  User.findByIdAndUpdate(current_user._id, {$set: preferences_params}, function(err, doc) {
    if (err) {
      res.status(400);
      res.json({err: err});
    } else {
      res.status(200);
      res.json(doc);
    }
  });
});

router.get('/preferences', (req, res) => {
  let current_user = req.User;

  res.status(200);
  res.json(current_user.display_preferences);
});

module.exports = router;

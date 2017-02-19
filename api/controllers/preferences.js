const express = require('express');
const router = new express.Router();

const User = require('mongoose').model('User');
const DisplayPreferences = require('mongoose').model('DisplayPreferences');

router.post('/preferences', (req, res) => {
  let current_user = req.User;

  let preferences = req.params.preferences;
  let preferences_id = current_user.display_preferences._id

  DisplayPreferences.findByIdAndUpdate(preferences_id, {$set: preferences}, function(err, doc) {
    if (err) {
      res.status(400);
      res.json({err: err});
    } else {
      res.status(200);
      res.json(doc);
    }
  });

  /*
  User.findOneAndUpdate({_id: current_user.display_preferences._id}, { $set: preferences }, function(err, result) {
    if (err) {
      res.status(400);
      res.json({err: err});
    } else {
      res.status(200);
      res.json(result);
    }
  });

  current_user.update()
  */
});

router.get('/preferences', (req, res) => {
  let current_user = req.User;

  res.status(200);
  res.json(current_user.display_preferences);
});

module.exports = router;

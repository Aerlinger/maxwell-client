const express = require('express');
const router = new express.Router();

const User = require('mongoose').model('User');

router.post('/preferences', (req, res) => {
  let current_user = req.User;

  let preferences = req.params.preferences;

  User.findOneAndUpdate({_id}, { $set: preferences }, function(err, result) {
    if (err) {
      res.status(400);
      res.json({err: err});
    } else {
      res.status(200);
      res.json(result);
    }
  });

  current_user.update()
});

router.get('/preferences', (req, res) => {
  let current_user = req.User;

  res.status(200);
  res.json(current_user.preferences);
});

module.exports = router;

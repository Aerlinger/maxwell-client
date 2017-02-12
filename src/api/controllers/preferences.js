const express = require('express');
const router = new express.Router();

let mongoose = require('mongoose');
const User = mongoose.model('DisplayPreferences');
let morgan = require("morgan");

router.post('/display_preferences', (req, res, next) => {

});

router.get('/display_preferences', (req, res, next) => {
  res.status(200);
  res.json(Object.keys(req));
});

module.exports = router;

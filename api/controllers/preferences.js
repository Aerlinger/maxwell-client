const express = require('express');
const router = new express.Router();

router.post('/display_preferences', (req, res, next) => {
  let req_params = req.body;


});

router.get('/display_preferences', (req, res, next) => {
  res.status(200);
  res.json(Object.keys(req));
});

module.exports = router;

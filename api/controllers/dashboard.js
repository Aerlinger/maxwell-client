const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  res.status(200).json({
    message: `You're authorized to see this secret message: ${token}`,
    user: req.User
  });
});

module.exports = router;

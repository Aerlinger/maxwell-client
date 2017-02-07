let express = require('express');
let router = express.Router();
let passport = require('passport');

// let ctrlProfile = require('../controllers/profile');
let dashboardRoutes = require('./controllers/dashboard');
let authRoutes = require('./controllers/auth');

router.get('/test', function(req, res) {
  res.status(200);
  res.json({
    "test" : "test"
  });
});

/*
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);
*/

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

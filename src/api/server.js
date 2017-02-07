let express = require('express');
let path = require('path');
const bodyParser = require('body-parser');
let passport = require('passport');
let logger = require('morgan');
const config = require('./config');

require('./models/db');
// require('./config/passport');

let dashboardRoutes = require('./controllers/dashboard');
let authRoutes = require('./controllers/auth');

const port = 8888;

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// Configure passport strategies
const localLoginStrategy = require('./strategies/local-login');
const localSignupStrategy = require('./strategies/local-signup');

passport.use('local-signin', localLoginStrategy);
passport.use('local-signup', localSignupStrategy);

// Configure authentication middleware
const authCheckMiddleware = require('./middlewares/auth-check');
app.use('/api/dashboard', authCheckMiddleware);

// Setup routes
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/auth/', authRoutes);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


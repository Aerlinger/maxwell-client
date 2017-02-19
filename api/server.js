/**
 * Maxwell API server entry point.
 *
 * Serves the server-side REST API.
 */

let cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let passport = require('passport');
let logger = require('morgan');
let config = require('config');
let db = require('./models/db').connect(config.dbUri);

let preferencesRoutes = require('./controllers/preferences');
let defaultCircuitRoutes = require('./controllers/default_circuits');
let dashboardRoutes = require('./controllers/dashboard');
let authRoutes = require('./controllers/auth');
let circuitRoutes = require('./controllers/circuits');

const localLoginStrategy = require('./strategies/local-login');
const localSignupStrategy = require('./strategies/local-signup');

// Configure authentication middleware
const authCheckMiddleware = require('./middlewares/auth-check');

module.exports = function (app) {

  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  // Initialise Passport before using the route middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Bind Passport strategies
  passport.use('local-login', localLoginStrategy);
  passport.use('local-signup', localSignupStrategy);

  app.use('/api/dashboard', authCheckMiddleware);
  app.use('/api/circuit', authCheckMiddleware);
  app.use('/api/circuits', authCheckMiddleware);
  app.use('/api/preferences', authCheckMiddleware);

  // Configure routes
  app.use('/api/', defaultCircuitRoutes);
  app.use('/api/', preferencesRoutes);
  app.use('/api/', dashboardRoutes);
  app.use('/api/', circuitRoutes);
  app.use('/auth/', authRoutes);
};

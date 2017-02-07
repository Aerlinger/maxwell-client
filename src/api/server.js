let express = require('express');
let path = require('path');
const bodyParser = require('body-parser');
let passport = require('passport');
let logger = require('morgan');

require('./models/db');
require('./config/passport');

let routesApi = require('./routes.js');

const port = 8888;

let app = express();
app.set('port', port);

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  console.log('URL:', req.url);

  next()
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

app.use('/api', routesApi);

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
*/

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


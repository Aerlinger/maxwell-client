var express = require('express');
var path = require('path');
let morgan = require('morgan');

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// We point to our static assets
app.use(express.static(publicPath));

if (!isProduction) {

  // We require the bundler inside the if block because it is only needed in a development environment.
  var dev_server = require('./dev-server.js');
  dev_server();

  // Any requests to localhost:3000/assets is proxied to webpack-dev-server
  app.all('/assets/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

// Setup API server
require("./api/server")(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...', e);
});

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});

module.exports = app;

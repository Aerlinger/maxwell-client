var express = require('express');
var path = require('path');

var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

// We point to our static assets
app.use(express.static(publicPath));

if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var dev_server = require('./dev-server.js');
  dev_server();

  // Any requests to localhost:3000/assets is proxied
  // to webpack-dev-server
  app.all('/assets/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

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

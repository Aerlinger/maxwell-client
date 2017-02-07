let express = require('express');
let path = require('path');
const bodyParser = require('body-parser');

let routesApi = require('./routes.js');

const port = 8888;

let app = express();
app.set('port', port);

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  console.log('URL:', req.url);

  next()
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routesApi);


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


let express = require('express');
let path = require('path');

let routesApi = require('./routes.js');

const port = 8888;

let app = express();
app.set('port', port);

app.use('/api', routesApi);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


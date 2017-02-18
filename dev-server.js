/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

module.exports = function () {
  /**
   * Flag indicating whether webpack compiled for the first time.
   * @type {boolean}
   */
  let isInitialCompilation = true;

  const compiler = Webpack(config);

  var bundleStart = null;
// We give notice in the terminal when it starts bundling and
// set the time it started
  compiler.plugin('compile', function () {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

// We also give notice when it is done compiling, including the
// time it took. Nice to have
  compiler.plugin('done', function () {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  let dev_server = new WebpackDevServer(compiler, config.devServer);

  dev_server.listen(config.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + config.port);
  });

  compiler.plugin('done', () => {
    if (isInitialCompilation) {
      // Ensures that we log after webpack printed its stats (is there a better way?)
      setTimeout(() => {
        console.log('\n✓ The bundle is now ready for serving!\n');
        console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/webpack-dev-server/');
        console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
        console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
      }, 350);
    }

    isInitialCompilation = false;
  });
};

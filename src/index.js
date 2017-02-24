import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import MaxwellTheme from './styles/CustomStyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './styles/App.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'jquery-ui';

/**
 * Render the root component into the DOM via ReactRouter
 *
 * This is theme customization goes.
 */
ReactDOM.render((
    <MuiThemeProvider muiTheme={MaxwellTheme}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
), document.getElementById('app'));

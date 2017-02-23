import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import darkBaseTheme from './styles/CustomStyle';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './styles/App.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'jquery-ui';

// Render the main component into the DOM
ReactDOM.render((
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
), document.getElementById('app'));

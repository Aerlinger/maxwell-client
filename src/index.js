import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';


// Render the main component into the dom

ReactDOM.render((
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
), document.getElementById('app'));

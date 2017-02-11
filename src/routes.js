import Base from './components/Base';
import Dashboard from './containers/SettingsPage';
import Main from './containers/Main';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import UiPage from './containers/UiPage';
import Auth from './modules/Auth';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Dashboard);
        } else {
          callback(null, Main);
        }
      }
    },
    {
      path: '/ui',
      component: UiPage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }
  ]
};

export default routes;

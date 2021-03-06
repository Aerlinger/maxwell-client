import Base from './components/Base';
import Dashboard from './containers/SettingsPage';
import RootContainer from './containers/RootContainer';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import Auth from './modules/Auth';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
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
    },
    {
      path: '/',
      onEnter: ({ params }, replace) => replace('/lrc')
    },
    {
      path: '/token',
      component: Dashboard
    },
    {
      path: '/:circuit_name',
      component: RootContainer
      // getComponent: (location, callback) => {
        // if (Auth.isUserAuthenticated()) {
        //   callback(null, Dashboard);
        // } else {
        //   callback(null, RootContainer);
        // }
      // }
    },
    {
      path: 'circuit/:circuit_id',
      component: RootContainer
      // getComponent: (location, callback) => {
      // if (Auth.isUserAuthenticated()) {
      //   callback(null, Dashboard);
      // } else {
      //   callback(null, RootContainer);
      // }
      // }
    }
  ]
};

export default routes;

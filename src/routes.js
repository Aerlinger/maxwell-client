import Base from './components/Base';
import Main from './components/Main';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: Main
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    }
  ]
};

export default routes;

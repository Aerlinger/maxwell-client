require('normalize.css/normalize.css');
require('styles/App.css');

import EditPane from '../components/EditPane';
import SignUpForm from '../components/SignUpForm';
// import CircuitToolbar from '../components/Toolbar';
import AlertDismissable from '../components/AlertDismissable';
import ModalDismissable from '../components/ModalDismissable';

import ElementPane from '../components/ComponentPane';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <ElementPane />

        <EditPane />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;

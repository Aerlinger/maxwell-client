require('normalize.css/normalize.css');
require('styles/App.css');

import EditPanel from '../components/EditPanel';

import ElementPanel from '../components/ElementPanel';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <ElementPanel />

        <EditPanel />
      </div>
    );
  }
}

export default AppComponent;

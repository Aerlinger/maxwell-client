require('normalize.css/normalize.css');
require('../styles/App.scss');
require("../styles/PrettyScroll.css");

import MaxwellView from '../components/MaxwellView';
import EditPanel from '../components/EditPanel';
import ElementPanel from '../components/ElementPanel';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <MaxwellView/>

        <ElementPanel />

        <EditPanel />
      </div>
    );
  }
}

export default AppComponent;

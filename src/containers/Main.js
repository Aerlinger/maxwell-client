require('normalize.css/normalize.css');
require('../styles/App.scss');
require('../styles/PrettyScroll.css');

import MaxwellView from '../components/MaxwellView';
import EditPanel from '../components/EditPanel';
import ElementPanel from '../components/ElementPanel';

import React from 'react';

class AppComponent extends React.Component {

  componentWillReceiveProps() {
    console.log('AppComponent wil receive props');
  }
  
  componentDidMount() {
    console.log('AppComponent mount');
  }

  render() {
    console.log('Circuit', this.props.params.circuit_name);

    return (
      <div className='index'>
        <MaxwellView circuit_name={this.props.params.circuit_name}/>

        <ElementPanel />

        <EditPanel />
      </div>
    );
  }
}

export default AppComponent;

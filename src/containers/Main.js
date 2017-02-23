require('normalize.css/normalize.css');
require('../styles/App.scss');
require('../styles/PrettyScroll.css');

import MaxwellCanvas from '../components/MaxwellCanvas';
import EditPanel from '../components/EditPanel';
import ElementPanel from '../components/ElementPanel';
import SelectedComponents from '../components/SelectedComponents';

import React from 'react';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedElements: []
    }
  }

  componentWillReceiveProps() {
    console.log('AppComponent wil receive props');
  }
  
  componentDidMount() {
    console.log('AppComponent mount');
  }

  selectionChanged(elements) {
    this.state.selectedElements = elements;
  }

  render() {
    console.log('Circuit', this.props.params.circuit_name);

    return (
      <div className='index'>
        <MaxwellCanvas
            circuit_name={this.props.params.circuit_name}
            onSelectionChanged={
              (changeObj) => this.state.selectedElements = changeObj.selection
            }
        />

        <ElementPanel/>



        <SelectedComponents />
      </div>
    );
  }
}

export default AppComponent;

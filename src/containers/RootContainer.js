import 'normalize.css/normalize.css';
import '../styles/App.scss';
import '../styles/PrettyScroll.css';

import MaxwellCanvas from '../components/MaxwellCanvas';
import ElementPanel from '../components/ElementPanel';
import RightPanel from '../components/RightPanel';
import MainToolbar from '../components/MainToolbar'
import Auth from '../modules/Auth';

import React from 'react';

class RootContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedElements: [],
      circuit: null
    }
  }

  saveCircuit() {
    if (!this.state.circuit) return;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/circuit');

    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.response);
      } else {
        console.log('Err', xhr.response);
      }
    });

    xhr.send(
        JSON.stringify(this.state.circuit.serialize())
    );
  }

  componentWillReceiveProps() {
    console.log('RootContainer wil receive props');
  }

  componentDidMount() {
    console.log('RootContainer mount');
  }

  selectionChanged(elements) {
    this.state.selectedElements = elements;
  }

  dump() {
    console.log(this.state.circuit.toString());
  }

  render() {
    console.log('Circuit', this.props.params.circuit_name);

    return (
        <div>
          <div className='index'>
            <MaxwellCanvas
                circuit_name={this.props.params.circuit_name}
                setCircuit={
                  (circuit) => this.setState({circuit: circuit})
                }
                onSelectionChanged={
                  (changeObj) => this.setState({selectedElements: changeObj.selection})
                }
            />

            <ElementPanel/>

            <RightPanel
                selectedElements={this.state.selectedElements}
            />
          </div>

          <MainToolbar
              circuit={this.state.circuit}
              dump={this.dump.bind(this)}
              saveCircuit={this.saveCircuit.bind(this)}
          />
        </div>
    );
  }
}

export default RootContainer;

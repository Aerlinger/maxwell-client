import 'normalize.css/normalize.css';
import '../styles/App.scss';

import MaxwellCanvas from '../components/MaxwellCanvas';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import MainToolbar from '../components/MainToolbar'
import Auth from '../modules/Auth';

import React from 'react';


class RootContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeElement: null,
      selectedElements: [],
      circuit: null
    }
  }

  bindKeyEvents() {
    function isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/i);
    }

    let setPlaceElement = this.setPlaceElement.bind(this);

    document.addEventListener('keydown', function (event) {
      let charCode = String.fromCharCode(event.which);
      let keycode = isLetter(charCode) ? charCode : event.which;

      switch (keycode) {
        case 'W':
          console.log('WireElm');
          setPlaceElement('WireElm');
          break;
        case 'R':
          setPlaceElement('ResistorElm');
          break;
        case 'G':
          setPlaceElement('GroundElm');
          break;
        case 'S':
          setPlaceElement('SwitchElm');
          break;
        case 'C':
          setPlaceElement('CapacitorElm');
          break;
        case 'I':
          setPlaceElement('InductorElm');
          break;
        case 'V':
          setPlaceElement('VoltageElm');
          break;
        case 'A':
          setPlaceElement('RailElm');
          break;
        case 'O':
          setPlaceElement('OpAmpElm');
          break;
        case 'D':
          setPlaceElement('DiodeElm');
          break;
        case 'T':
          setPlaceElement('TransistorElm');
          break;
        case 'M':
          setPlaceElement('MosfetElm');
          break;
        case 'Q':
          setPlaceElement(null);
          break;
      }
    })
  }

  setPlaceElement(placeElement) {
    this.setState({placeElement});
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

  componentWillReceiveProps(nextProps) {
    console.log('RootContainer will receive props:', nextProps);
  }

  componentDidMount() {
    this.bindKeyEvents();
  }

  selectionChanged(elements) {
    this.state.selectedElements = elements;
  }

  dump() {
    console.log(this.state.circuit.toString());
  }

  render() {
    let setPlaceElement = this.setPlaceElement.bind(this);

    let top = 50;

    return (
        <div className='index'>
          <MaxwellCanvas
              top={top}
              circuit_name={this.props.params.circuit_name}
              circuit_id={this.props.params.circuit_id}
              placeElement={this.state.placeElement}
              setCircuit={
                (circuit) => this.setState({circuit: circuit})
              }
              onSelectionChanged={
                (changeObj) => this.setState({selectedElements: changeObj.selection})
              }
          />

          <LeftPanel
              top={top}
              setPlaceElement={setPlaceElement}
              placeElement={this.state.placeElement}
          />

          <RightPanel
              top={top}
              selectedElements={this.state.selectedElements}
          />

          <MainToolbar
              top={top}
              circuit={this.state.circuit}
              dump={this.dump.bind(this)}
              saveCircuit={this.saveCircuit.bind(this)}
          />

        </div>

    );
  }
}

export default RootContainer;

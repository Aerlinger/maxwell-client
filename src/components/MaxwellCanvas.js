import React from 'react'

import Maxwell from 'maxwell'

class MaxwellCanvas extends React.Component {

  resizeCanvas(evt) {
    console.log('Window resize', evt, window.innerWidth, window.innerHeight);

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    /**
     * TODO: Force redraw
     */

    this.props.onResize && this.props.onResize()
  }

  bindCircuitEvents(circuitContext) {
    let props = this.props;

    circuitContext.onSelectionChanged = function (changeObj) {
      console.log(changeObj);

      props.onSelectionChanged(changeObj);
    };

    circuitContext.onComponentHover = function (component) {
      console.log('ON COMPONENT HOVER:', component.toString(), 'V:', component.volts);
    };

    circuitContext.onComponentUnhover = function (component) {
      console.log('ON COMPONENT UNHOVER:', component.toString());
    };

    circuitContext.onComponentClick = function (component) {
      console.log('ON COMPONENT CLICK:', component);

      //  TODO: Render Form
    };

    circuitContext.onComponentsDrag = function (components) {
      console.log('ON COMPONENTS DRAG:', components);
    };

    circuitContext.onNodeHover = function (node) {
      console.log('NODE HOVER: ', node.getVoltage());
    };

    circuitContext.onNodeUnhover = function (node) {
      console.log('NODE UNHOVER: ', node.getVoltage());
    };

    circuitContext.onNodeClick = function (node) {
      console.log('NODE CLICK: ', node.x, node.y);
    };

    circuitContext.onNodeDrag = function (node) {
      console.log('NODE DRAG: ', node.x, node.y);
    };
  }

  bindKeyEvents(circuitContext) {
    function isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/i);
    }

    document.addEventListener('keydown', function (event) {
      let charCode = String.fromCharCode(event.which);
      let keycode = isLetter(charCode) ? charCode : event.which;

      switch (keycode) {
        case 'W':
          console.log('WireElm');
          circuitContext.setPlaceComponent('WireElm');
          break;
        case 'R':
          circuitContext.setPlaceComponent('ResistorElm');
          break;
        case 'G':
          circuitContext.setPlaceComponent('GroundElm');
          break;
        case 'S':
          circuitContext.setPlaceComponent('SwitchElm');
          break;
        case 'C':
          circuitContext.setPlaceComponent('CapacitorElm');
          break;
        case 'I':
          circuitContext.setPlaceComponent('InductorElm');
          break;
        case 'V':
          circuitContext.setPlaceComponent('VoltageElm');
          break;
        case 'A':
          circuitContext.setPlaceComponent('RailElm');
          break;
        case 'O':
          circuitContext.setPlaceComponent('OpAmpElm');
          break;
        case 'D':
          circuitContext.setPlaceComponent('DiodeElm');
          break;
        case 'T':
          circuitContext.setPlaceComponent('TransistorElm');
          break;
        case 'M':
          circuitContext.setPlaceComponent('MosfetElm');
          break;
        case 'Q':
          circuitContext.clearPlaceComponent();
          break;
        case 27: // ESC
          circuitContext.resetSelection();
          break;
        case 8: // Backspace
          if (document.activeElement && document.activeElement.constructor.name != 'HTMLInputElement') {
            circuitContext.remove(circuitContext.getSelectedComponents());
          }
          break;
        case 32: // Space
          circuitContext.togglePause();
          break;
      }
    })
  }

  loadCircuit(circuit_name) {
    console.log('LOAD', this.props);

    let bindKeyEvents = this.bindKeyEvents.bind(this);
    let bindCircuitEvents = this.bindCircuitEvents.bind(this);

    let request = new XMLHttpRequest();
    let canvas = this.canvas;

    request.open('GET', `/api/default_circuits/${circuit_name}`, true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        let circuit_id = Math.floor(1024 * Math.random());

        Maxwell.createContext(circuit_name + circuit_id, data, canvas, function (circuitApplication) {
          circuitApplication.run();

          bindCircuitEvents(circuitApplication);
          bindKeyEvents(circuitApplication);
        });
      } else {
        // We reached our target server, but it returned an error
        console.log('Response', request.status, request.responseText);
      }
    };

    request.onerror = function (e) {
      // There was a connection error of some sort
      console.log('AJAX error', e);
    };

    request.send();
  }

  componentWillReceiveProps(nextProps) {
    let loadCircuit = this.loadCircuit.bind(this);
    let circuit_name = this.props.circuit_name || 'ohms';

    if (this.props.circuit_name !== nextProps.circuit_name) {
      loadCircuit(circuit_name);
    }
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);

    let loadCircuit = this.loadCircuit.bind(this);
    let circuit_name = this.props.circuit_name || 'ohms';

    loadCircuit(circuit_name);
  }

  render() {
    return (
        <div>
          <canvas id='performance_sparkline' width='200' height='40'></canvas>
          <canvas className='flexCanvas'
                  style={{display: 'block', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0'}}
                  ref={(canvasElm) => {
                    this.canvas = canvasElm;
                  }}>
            { this.props.children }

          </canvas>
        </div>
    )
  }
}

export default MaxwellCanvas;

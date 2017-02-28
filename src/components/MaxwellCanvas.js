import React from 'react'
import Auth from '../modules/Auth';

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
      props.onSelectionChanged(changeObj);
    };

    circuitContext.onComponentHover = function (component) {
      props.onComponentHover && props.onComponentHover(component);
    };

    circuitContext.onComponentUnhover = function (component) {
      props.onComponentHover && props.onComponentHover(component);
    };

    circuitContext.onComponentClick = function (component) {
      props.onComponentClick && props.onComponentClick(component);
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

  loadPresetCircuit(circuit_name) {
    let props = this.props;

    let bindKeyEvents = this.bindKeyEvents.bind(this);
    let bindCircuitEvents = this.bindCircuitEvents.bind(this);

    let request = new XMLHttpRequest();
    let canvas = this.canvas;

    let canvasComponent = this;

    request.open('GET', `/api/default_circuits/${circuit_name}`, true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        let circuit_id = Math.floor(1024 * Math.random());

        Maxwell.createContext(circuit_name + circuit_id, data, canvas, function (circuitApplication) {
          circuitApplication.run();

          canvasComponent.setPlaceElement = circuitApplication.setPlaceComponent.bind(circuitApplication);

          props.setCircuit && props.setCircuit(circuitApplication.Circuit);

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

  loadUserCircuit(circuit_id) {
    let props = this.props;

    let bindKeyEvents = this.bindKeyEvents.bind(this);
    let bindCircuitEvents = this.bindCircuitEvents.bind(this);

    let request = new XMLHttpRequest();
    let canvas = this.canvas;

    let canvasComponent = this;

    request.open('GET', `/api/circuit/${circuit_id}`, true);
    request.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);

        let circuit_data = {
          params: data['params'],
          components: data['components']
        };

        Maxwell.createContext(data["_id"], circuit_data, canvas, function (circuitApplication) {
          circuitApplication.run();

          canvasComponent.setPlaceElement = circuitApplication.setPlaceComponent.bind(circuitApplication);

          props.setCircuit && props.setCircuit(circuitApplication.Circuit);

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
    console.log('MaxwellCanvas received props', nextProps);

    if (this.props.circuit_name && (this.props.circuit_name !== nextProps.circuit_name)) {
      let loadPresetCircuit = this.loadPresetCircuit.bind(this);
      let circuit_name = this.props.circuit_name || 'ohms';

      loadPresetCircuit(circuit_name);
    }

    if (nextProps.circuit_id && (this.props.circuit_id !== nextProps.circuit_id)) {
      let loadUserCircuit = this.loadUserCircuit.bind(this);

      loadUserCircuit(nextProps.circuit_id);
    }

    if (nextProps.placeElement && (this.props.placeElement !== nextProps.placeElement)) {
      this.setPlaceElement(nextProps.placeElement);
    }
  }

  componentDidMount() {
    console.log('MaxwellCanvas mounted', this.props);

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);

    let circuit_name = this.props.circuit_name || 'ohms';
    let circuit_id = this.props.circuit_id;

    if (circuit_id) {
      let loadUserCircuit = this.loadUserCircuit.bind(this);
      loadUserCircuit(circuit_id);
    }
    else if(circuit_name) {
      let loadPresetCircuit = this.loadPresetCircuit.bind(this);
      loadPresetCircuit(circuit_name);
    }
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

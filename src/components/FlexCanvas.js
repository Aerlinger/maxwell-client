import React from 'react'

import Maxwell from 'maxwell'

class FlexCanvas extends React.Component {

  getContext() {
    return this.canvas.getContext('2d');
  }

  resizeCanvas(evt) {
    console.log('Window resize', evt, window.innerWidth, window.innerHeight);

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    /**
     * Your drawings need to be inside this function otherwise they will be reset when
     * you resize the browser window and the canvas goes will be cleared.
     */
    this.redraw();

    this.props.onResize && this.props.onResize()
  }

  redraw() {
    let context = this.getContext();

    let topMargin = this.props.topMargin || 0;
    let leftMargin = this.props.leftMargin || 0;

    let spacing = 20;

    for (let i = 0; i < this.canvas.width; i += spacing) {
      for (let j = 0; j < this.canvas.height; j += spacing) {

        context.beginPath();
        context.arc(i, j, 1, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
      }
    }

    context.arc(leftMargin, topMargin, 2, 0, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();
  }

  componentDidMount() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.redraw.bind(this)();

    window.addEventListener('resize', this.resizeCanvas.bind(this), false);

    function isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/i);
    }

    function bindCircuitEvents(circuitContext) {
      circuitContext.onSelectionChanged = function (changeObj) {
        console.log('SELECTION CHANGED:', changeObj);
      };

      circuitContext.onComponentHover = function (component) {
        console.log('ON COMPONENT HOVER:', component.toString(), 'V:', component.volts);
        /*
         var form = Maxwell.renderEdit(component);

         console.log('renderEdit\n', form);

         window.editInfo = form;
         */
      };

      circuitContext.onComponentUnhover = function (component) {
        console.log('ON COMPONENT UNHOVER:', component.toString());
      };

      circuitContext.onComponentClick = function (component) {
        console.log('ON COMPONENT CLICK:', component);

        /*
         var form = Maxwell.renderEdit(component);
         console.log('renderEdit\n', form);

         document.getElementById('edit_component_pane').innerHTML = '';
         document.getElementById('edit_component_pane').append(form);

         $('#edit_component_pane').foundation('open');
         */
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

    function bindKeyEvents(circuitContext) {
      document.addEventListener('keydown', function (event) {
        var charCode = String.fromCharCode(event.which);
        var keycode = isLetter(charCode) ? charCode : event.which;

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

            // ESC
          case 27:
            circuitContext.resetSelection();
            break;

            // Backspace
          case 8:
            if (document.activeElement && document.activeElement.constructor.name != 'HTMLInputElement') {
              circuitContext.remove(circuitContext.getSelectedComponents());
            }
            break;

            // Space
          case 32:
            circuitContext.togglePause();
            break;
        }
      })
    }

    let request = new XMLHttpRequest();
    let circuit_name = this.props.circuit_name || 'ohms';

    request.open('GET', `/api/default_circuits/${circuit_name}`, true);

    let canvas = this.canvas;

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);

        Maxwell.createContext("#{circuit_name}", data, canvas, function (circuitContext) {
          window.circuitContext = circuitContext;

          $('.component-item').click(function (evt) {
            var componentName = $(this).data("name");

            circuitContext.setPlaceComponent(componentName);
          });

          bindCircuitEvents(circuitContext);
          bindKeyEvents(circuitContext);
        });
      } else {
        // We reached our target server, but it returned an error
        console.log("Response", request.status);
        console.log(request.responseText);
      }
    };

    request.onerror = function(e) {
      // There was a connection error of some sort
      console.log("AJAX error", e);
    };

    request.send();
  }

  render() {
    return (
        <canvas className='flexCanvas'
                style={{display: 'block', position: 'absolute', left: '0', right: '0', top: '0', bottom: '0'}}
                ref={(canvasElm) => {
                  this.canvas = canvasElm;
                }}>
          { this.props.children }

        </canvas>
    )
  }
}

export default FlexCanvas;


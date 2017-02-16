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
    let topMargin = this.props.topMargin || 0;
    let leftMargin = this.props.leftMargin || 0;


    // do your drawing stuff here
    let context = this.getContext();

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

    function bindCircuitEvents(circuitContext) {
      circuitContext.onSelectionChanged = function (changeObj) {
        console.log("SELECTION CHANGED:", changeObj);

        if (changeObj.selection.length == 0) {
          $("#edit_component_pane").foundation('close');
        }
      };

      circuitContext.onComponentHover = function (component) {
        console.log("ON COMPONENT HOVER:", component.toString(), "V:", component.volts);
        var form = Maxwell.renderEdit(component);

        console.log("renderEdit\n", form);

        window.editInfo = form;
      };

      circuitContext.onComponentUnhover = function (component) {
        console.log("ON COMPONENT UNHOVER:", component.toString());
      };

      circuitContext.onComponentClick = function (component) {
        console.log("ON COMPONENT CLICK:", component);

        var form = Maxwell.renderEdit(component);
        console.log("renderEdit\n", form);

        document.getElementById("edit_component_pane").innerHTML = "";
        document.getElementById("edit_component_pane").append(form);

        $("#edit_component_pane").foundation('open');
      };

      circuitContext.onComponentsDrag = function (components) {
        console.log("ON COMPONENTS DRAG:", components);
      };

      circuitContext.onNodeHover = function (node) {
        console.log("NODE HOVER: ", node.getVoltage());
      };

      circuitContext.onNodeUnhover = function (node) {
        console.log("NODE UNHOVER: ", node.getVoltage());
      };

      circuitContext.onNodeClick = function (node) {
        console.log("NODE CLICK: ", node.x, node.y);
      };

      circuitContext.onNodeDrag = function (node) {
        console.log("NODE DRAG: ", node.x, node.y);
      };

      circuitContext.onUpdateComplete = function (context) {
        console.log("UPDATE COMPLETE");
      };
    }

    Maxwell.createContext('ohms', [
      {
        'type': 'voltdivide.txt',
        'timeStep': 0.000005,
        'simSpeed': 172,
        'currentSpeed': 63,
        'voltageRange': 10,
        'powerRange': 62,
        'flags': 1
      },
      {
        'name': 'VoltageElm',
        'pos': [112, 368, 112, 48],
        'flags': 0,
        'params': {
          'waveform': 0,
          'frequency': 40,
          'maxVoltage': 10,
          'bias': 0,
          'phaseShift': 0,
          'dutyCycle': 0.5
        }
      },
      {
        'name': 'WireElm',
        'pos': [112, 48, 240, 48],
        'flags': 0,
        'params': {}
      },
      {
        'name': 'ResistorElm',
        'pos': [240, 48, 240, 208],
        'flags': 0,
        'params': {
          'resistance': 10000
        }
      },
      {
        'name': 'ResistorElm',
        'pos': [240, 208, 240, 368],
        'flags': 0,
        'params': {
          'resistance': 10000
        }
      },
      {
        'name': 'WireElm',
        'pos': [112, 368, 240, 368],
        'flags': 0,
        'params': {}
      },
      {
        'name': 'WireElm',
        'pos': [240, 48, 432, 48],
        'flags': 0,
        'params': {}
      },
      {
        'name': 'WireElm',
        'pos': [240, 368, 432, 368],
        'flags': 0,
        'params': {}
      },
      {
        'name': 'ResistorElm',
        'pos': [432, 48, 432, 128],
        'flags': 0,
        'params': {
          'resistance': 10000
        }
      },
      {
        'name': 'ResistorElm',
        'pos': [432, 128, 432, 208],
        'flags': 0,
        'params': {
          'resistance': 10000
        }
      },
      {
        'name': 'ResistorElm',
        'pos': [432, 208, 432, 288],
        'flags': 0,
        'params': {
          'resistance': 10000
        }
      },
      {
        'name': 'ResistorElm',
        'pos': [432, 288, 432, 368],
        'flags': 0,
        'params': {
          'resistance': 10000
        }
      }
    ], this.canvas, function (circuitContext) {
      console.log(circuitContext);

      bindCircuitEvents(circuitContext);
    });
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


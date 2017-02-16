import React from 'react'
import Maxwell from 'maxwell'

import FlexCanvas from './FlexCanvas'

class MaxwellView extends React.Component {

  componentDidMount() {
    /*
     Maxwell.createContext("ohms", "../circuits/v4/#{circuit_name}.json", canvas, function (circuitContext) {

     });
     */
  }

  render() {
    return (
        <div>
          <canvas id="performance_sparkline" width="200" height="40"></canvas>

          <FlexCanvas topMargin={50} leftMargin={100} onResize={() => {
            console.log("RESIZE")
          }} ref={(component) => {
            this.canvas = component
          }}/>

        </div>
    )
  }
}

export default MaxwellView;


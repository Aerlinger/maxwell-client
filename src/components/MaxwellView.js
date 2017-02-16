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
      <FlexCanvas topMargin={50} leftMargin={100} onResize={() => {console.log("RESIZE")}} ref={(component) => {this.canvas = component}}/>
    )
  }
}

export default MaxwellView;


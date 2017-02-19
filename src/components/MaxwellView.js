import React from 'react'

import FlexCanvas from './FlexCanvas'

class MaxwellView extends React.Component {

  componentWillReceiveProps() {
    console.log('MaxwellView wil receive props');
  }

  componentDidMount() {
    console.log('MaxwellView mount');

    /*
     Maxwell.createContext('ohms', '../circuits/v4/#{circuit_name}.json', canvas, function (circuitContext) {

     });
     */
  }

  render() {
    return (
        <div>
          <canvas id='performance_sparkline' width='200' height='40'></canvas>

          <FlexCanvas topMargin={50} leftMargin={100} circuit_name={this.props.circuit_name} onResize={() => {
            console.log('RESIZE')
          }} ref={(component) => {
            this.canvas = component
          }}/>

        </div>
    )
  }
}

export default MaxwellView;

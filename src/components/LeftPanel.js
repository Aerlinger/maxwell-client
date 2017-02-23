import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import ElementList from './ElementList';
import SampleCircuits from './SampleCircuits';

const styles = {
  borderRight: '2px solid #989797',
  display: 'block',
  position: 'absolute',
  width: '200px',
  left: 0,
  bottom: 0
};

class LeftPanel extends React.Component {
  render() {
    let setPlaceElement = this.props.setPlaceElement.bind(this);

    return (
        <Paper className='element-panel' style={
          Object.assign(styles, {top: this.props.top})
        }>
          <Tabs>

            <Tab label='Elements'>
              <ElementList
                  setPlaceElement={setPlaceElement}
                  placeElement={this.props.placeElement}
              />
            </Tab>

            <Tab label='Presets'>
              <SampleCircuits />
            </Tab>

          </Tabs>
        </Paper>
    );
  }
}

export default LeftPanel;

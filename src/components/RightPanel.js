import React from 'react';
import Paper from 'material-ui/Paper';

import EditElement from './EditElement';
import SelectedElements from './SelectedElements';

class RightPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  subPanel() {
    if (this.props.selectedElements == 1) {
      return <EditElement
          selectedElement={this.props.selectedElements[0]}
      />
    } else {
      return <SelectedElements
          selectedElements={this.props.selectedElements}
      />
    }
  }

  render() {
    return (
        <Paper
            className='side-panel'
            style={{display: 'block', position: 'absolute', width: '296px', right: 0, top: 50, bottom: 0, overflowY: 'scroll'}}
        >
          {this.subPanel()}
        </Paper>
    );
  }
}

export default RightPanel;

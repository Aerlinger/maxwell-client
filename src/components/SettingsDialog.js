import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


const styles = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: '#ffcccc'
  },
  trackOff: {
    backgroundColor: '#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red'
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d'
  },
  labelStyle: {
    color: 'red'
  }
};

class SettingsDialog extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
      />,
      <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
      />
    ];

    return (
        <div>
          <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
          <Dialog
              title="Dialog With Actions"
              actions={actions}
              modal={false}
              open={true}
              onRequestClose={this.handleClose}
          >
            <form>

              <TextField
                  hintText="Hint Text"
                  floatingLabelText="Fixed Floating Label Text"
                  floatingLabelFixed={true}
              />
              <br />


              <SelectField
                  floatingLabelText="Frequency"
                  value={1}
              >
                <MenuItem value={1} primaryText="Never"/>
                <MenuItem value={2} primaryText="Every Night"/>
                <MenuItem value={3} primaryText="Weeknights"/>
                <MenuItem value={4} primaryText="Weekends"/>
                <MenuItem value={5} primaryText="Weekly"/>
              </SelectField>
              <br />

              <Toggle label="Label on the right" labelPosition="right" style={styles.toggle}/>
              <br />
            </form>
          </Dialog>
        </div>
    );
  }
}

SettingsDialog.defaultProps = {};

export default SettingsDialog;

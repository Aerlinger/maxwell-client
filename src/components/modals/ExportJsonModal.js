import React from 'react';

import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {CardText} from 'material-ui/Card';
import {Link} from 'react-router';

const customContentStyle = {
  width: '500px',
  maxWidth: 'none'
};

class ExportJsonModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.textarea.select();
  }

  render() {
    const actions = [
      <FlatButton
          label="Close"
          secondary={true}
          onTouchTap={this.handleClose}
      />,
      <FlatButton
          label="Copy to clipboard"
          primary={true}
          keyboardFocused={true}
      />
    ];

    return (
        <div>
          <Dialog
              contentStyle={customContentStyle}
              title="JSON"
              actions={actions}
              modal={true}
              open={this.state.open}
              onRequestClose={this.props.closeModal}
          >

            <textarea readOnly ref={(input) => { this.textarea = input; }} style={{width: '100%', height: 600, fontFamily: 'Courier New', color: 'black', fontSize: 12}}>
              Inner text
            </textarea>

            <Divider />

          </Dialog>
        </div>
    );
  }
}

export default ExportJsonModal;

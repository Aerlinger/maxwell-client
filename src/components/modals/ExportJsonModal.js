import React from 'react';

import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '500px',
  maxWidth: 'none'
};

export default class ExportJsonModal extends React.Component {
  constructor(props) {
    super(props);

    this.selectText = this.selectText.bind(this);
  }

  selectText() {
    this.textarea && this.textarea.select();
  }

  componentDidMount() {
    this.selectText()
  }

  render() {
    const actions = [
      <FlatButton
          label="Close"
          secondary={true}
          onTouchTap={this.props.closeModal}
      />,
      <FlatButton
          label="Copy to clipboard"
          primary={true}
          keyboardFocused={true}
      />
    ];

    let circuit = this.props.circuit;

    return (
        <Dialog
            contentStyle={customContentStyle}
            title="JSON"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={this.props.closeModal}
        >

            <textarea
                readOnly
                ref={(input) => this.textarea = input}
                style={{width: '100%', height: 600, fontFamily: 'Courier New', color: 'black', fontSize: 12}}
                defaultValue={circuit && JSON.stringify(circuit.serialize(), null, 2)}
            />

          <Divider />

        </Dialog>
    );
  }
}


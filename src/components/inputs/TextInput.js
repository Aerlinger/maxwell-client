import React from 'react';
import TextField from 'material-ui/TextField';
import {blueGrey900, green100, green200} from 'material-ui/styles/colors';

let styles = {
  textField: {
    fontSize: '13px',
    fontFamily: 'Courier New',
    color: '#FFF'
  },
  floatingLabelStyle: {
    fontSize: '16px',
    //color: '#0FF'
  },

  // Unused for now...
  underlineStyle: {
    color: green100,
    borderColor: green100
  },
  underlineFocusStyle: {
    borderColor: '#bf4f00',
    color: '#ff9c00'
  },
  errorStyle: {
    color: '#F00'
  }
};

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  render() {
    return (
        <TextField
            key={name}

            inputStyle={styles.textField}
            //textareaStyle={styles.textField}
            //hintStyle={styles.textField}
            //underlineFocusStyle={styles.underlineFocusStyle}
            //underlineStyle={styles.underlineStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            //floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            //errorStyle={styles.errorStyle}

            //errorText={props.errorText}
            floatingLabelText={this.props.labelText}
            floatingLabelFixed={true}

            value={this.state.value}
            onChange={this.handleChange}
        />
    );
  }
};

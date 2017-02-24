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

module.exports = function (props) {
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
          floatingLabelText={props.labelText}
          floatingLabelFixed={true}
          value={props.value}

      />
  );
};

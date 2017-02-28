import * as React from 'react';
import NumberInput from 'material-ui-number-input';
import {blueGrey900, green100, green200} from 'material-ui/styles/colors';

let styles = {
  input: {
    marginLeft: 16,
    marginRight: 16
  },
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

class NumberField extends React.Component {
  setValue(value) {
    this.setState({ value: value });
  }

  onChange(event, value) {
    this.setValue(value);
  }

  onValid(valid) {
    this.setState({ valid: valid });
  }

  constructor(props) {
    super(props);
    this.state = { value: '', valid: 0 };
  }

  render() {
    const { value, valid, errorText } = this.state;
    return (
        <div style={styles.input}>
          <NumberInput
              floatingLabelText="NumberInput"
              floatingLabelFixed={true}
              value={value}
              onChange={this.onChange.bind(this)}
              onValid={this.onValid.bind(this)}
              inputStyle={styles.textField}
              floatingLabelStyle={styles.floatingLabelStyle}
              strategy="ignore"
              min={0}
              max={100}
              required
          />
          <NumberInput value={String(valid)} floatingLabelText="Valid number" />
        </div>
    );
  }
}

export default NumberField;

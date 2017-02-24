import * as React from 'react';
import NumberInput from 'material-ui-number-input';

let styles = {
  input: {
    marginLeft: 16,
    marginRight: 16
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

  onRequestValue(value) {
    this.setValue(value);
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
              value={value}
              onChange={this.onChange.bind(this)}
              onValid={this.onValid.bind(this)}
              onRequestValue={this.onRequestValue.bind(this)}
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

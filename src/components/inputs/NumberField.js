import React from 'react';
import NumberInput from 'material-ui-number-input';
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

export default class NumberField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      valid: 1
    };
  }

  setValue(value) {
    this.setState({ value: value });
  }

  handleChange(event, value) {
    this.setValue(value);
  };

  onValid(valid) {
    this.setState({valid: valid});
  }

  onRequestValue(value) {
    this.setValue(value);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  render() {
    let unitText = this.props.unit ? ` (${this.props.unit})` : '';

    return (
        <div>
          <NumberInput
              key={name}

              inputStyle={styles.textField}
              floatingLabelStyle={styles.floatingLabelStyle}

              strategy="ignore"
              floatingLabelText={this.props.labelText + unitText}
              floatingLabelFixed={true}
              min={this.props.min}
              max={this.props.max}

              value={this.state.value}
              onRequestValue={this.onRequestValue.bind(this)}
              onChange={this.handleChange.bind(this)}
              onValid={this.onValid.bind(this)}
          />
        </div>
    );
  }
};

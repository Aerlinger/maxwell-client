import React from 'react';
import SelectField from 'material-ui/SelectField';

let styles = {
  label: {
    fontSize: '12px',
    fontFamily: 'Courier New',
  }
};

export default class SelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event, index, value) => {
    this.setState({value: value});
  };

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  render() {
    return (
        <SelectField
            floatingLabelText={this.props.floatingLabelText}
            errorText={this.props.errorText}
            labelStyle={styles.label}
            value={this.state.value}
            onChange={this.handleChange}
        >
          {this.props.children}
        </SelectField>
    );
  }
};

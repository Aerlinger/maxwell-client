import React from 'react';
import Toggle from 'material-ui/Toggle';

let styles = {
  label: {
    fontSize: '12px',
    fontFamily: 'Courier New',
  }
};

export default class ToggleInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: true
    };
  }

  handleChange = (event, value) => {
    this.setState({toggled: value});
  };

  componentWillReceiveProps(nextProps) {
    this.setState({toggled: nextProps.toggled});
  }

  render() {
    return <Toggle label={this.props.label}
                   labelPosition='right'
                   toggled={this.state.toggled}
                   defaultToggled={this.props.defaultToggled}
                   onToggle={this.handleChange.bind(this)}/>
  }
};

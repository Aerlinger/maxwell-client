import React from 'react';
import Toggle from 'material-ui/Toggle';
import {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';

let styles = {
  innerDiv: {
    paddingTop: 10,
    paddingBottom: 6
  },
  iconStyle: {
    width: 18,
    height: 18,
    opacity: 0.5
  },
  iconButtonStyle: {
    right: 24,
    top: -8
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

    this.props.selectedElement.update({[this.props.name]: value});
  };

  componentWillReceiveProps(nextProps) {
    this.setState({toggled: nextProps.toggled});
  }

  description(text) {
    return <IconButton iconStyle={styles.iconStyle}
                       tooltip={text}
                       touch={true}
                       tooltipPosition="top-left"
                       style={styles.iconButtonStyle}>
      <InfoIcon />
    </IconButton>
  }

  render() {
    let description = this.props.description ? this.description(this.props.description) : null;

    return <ListItem
        innerDivStyle={styles.innerDiv}
        disableTouchRipple={true}
        rightIcon={description}
    >
      <Toggle label={this.props.label}
              labelPosition='right'
              toggled={this.state.toggled}
              defaultToggled={this.props.defaultToggled}
              onToggle={this.handleChange.bind(this)}/>
    </ListItem>
  }
}

import React from 'react';
import SelectField from 'material-ui/SelectField';
import {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';

let styles = {
  label: {
    fontSize: '12px',
    fontFamily: 'Courier New'
  }
};

export default class SelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value'
    };
  }

  handleChange = (event, index, value) => {
    this.setState({value: value});

    this.props.selectedElement.update({[this.props.name]: value});
  };

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
  }

  description(text) {
    return <IconButton iconStyle={{width: 18, height: 18, opacity: 0.5}}
                       tooltip={text}
                       touch={true}
                       tooltipPosition="top-left"
                       style={{right: 24, top: -6}}>
      <InfoIcon />
    </IconButton>
  }

  render() {
    let description = this.props.description ? this.description(this.props.description) : null;

    return (
        <ListItem
            key={this.props.name}
            innerDivStyle={{paddingTop: 0, paddingBottom: 0}}
            disableTouchRipple={true}
            rightIcon={description}
        >
          <SelectField
              key={this.props.name}
              floatingLabelText={this.props.floatingLabelText}
              errorText={this.props.errorText}
              labelStyle={styles.label}
              value={this.state.value}
              onChange={this.handleChange}
          >
            {this.props.children}
          </SelectField>
        </ListItem>
    );
  }
}

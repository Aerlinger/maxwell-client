import React from 'react';
import {List, ListItem} from 'material-ui/List';
import NumberInput from 'material-ui-number-input';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import UnitIcon from 'material-ui/svg-icons/action/check-circle';
import {blueGrey900, green100, green200, indigo900, blue300, transparent} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

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
    this.setState({value: value});

    this.props.selectedElement.update({[this.props.name]: value});
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

  rightSymbol(symbol) {
    return <Avatar size={24}
                   color={blue300}
                   backgroundColor={transparent}
                   style={{position: 'absolute', right: 15, top: 20, marginTop: 20, marginRight: 5}}>
      {symbol}
    </Avatar>
  }

  description(text) {
    return <IconButton iconStyle={{width: 18, height: 18, opacity: 0.5}}
                       tooltip={text}
                       touch={true}
                       tooltipPosition="top-left"
                       style={{right: 16, top: -6}}>
      <InfoIcon />
    </IconButton>
  }

  render() {
    let unitText = this.props.unit ? ` (${this.props.unit})` : '';
    let symbol = this.props.symbol ? this.rightSymbol(this.props.symbol) : null;
    let description = this.props.description ? this.description(this.props.description) : null;

    return (
        <ListItem
            innerDivStyle={{paddingTop: 0, paddingBottom: 0}}
            disableTouchRipple={true}
            rightIcon={description}
            rightAvatar={symbol}
        >
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
        </ListItem>
    );
  }
};

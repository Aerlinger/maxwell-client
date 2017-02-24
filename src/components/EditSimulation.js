import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Subheader from 'material-ui/Subheader';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {CardText} from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import {blueGrey900} from 'material-ui/styles/colors';

import NumberField from './NumberField';

import componentImg from '../images/components/v1/bjt.png';

let styles = {
  input: {
    // marginLeft: 16,
    // marginRight: 16,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 0,
    height: 67
  },
  cardText: {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'absolute',
    right: 0,
    left: 0,
    paddingBottom: 104,
    backgroundColor: '#444'
  }
};

/**
 * Component to
 *
 * Params:
 */
class EditSimulation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'name',
      description: 'description',
      params: {
        timeStep: 'timestep',
        simSpeed: 'simSpeed',
        currentSpeed: 'currentSpeed',
        voltageRange: 'voltageRange',
        powerRange: 'powerRange',
        flags: 'flags',
        scope_speed: 'scopeSpeed'
      }
    }
  }

  textInput(title, value) {
    return <TextField
        style={styles.input}
        inputStyle={{fontFamily: 'Courier'}}
        floatingLabelText={title}
        floatingLabelFixed={true}
        value={value}
    />;
  }

  selectInput(title, value) {
    const items = [
      <MenuItem key={1} value={1} primaryText="Never"/>,
      <MenuItem key={2} value={2} primaryText="Every Night"/>,
      <MenuItem key={3} value={3} primaryText="Weeknights"/>,
      <MenuItem key={4} value={4} primaryText="Weekends"/>,
      <MenuItem key={5} value={5} primaryText="Weekly"/>,
    ];

    return <SelectField
        style={styles.input}
        floatingLabelText={title}
        value={value}
        errorText={'Should be Night'}
    >
      {items}
    </SelectField>;
  }

  toggleInput(title, value) {
    return <ListItem primaryText={title} rightToggle={<Toggle />}/>;
  }

  slider() {
    return <Slider
        style={styles.input}
        min={0}
        max={100}
        step={5}
        defaultValue={50}
        value={20}
    />;
  }

  onChange(event, value) {
    console.log(value);
  }

  onValid(valid) {
    console.log(value);
  }

  onRequestValue(value) {
    console.log(value);
  }

  numberInput(title, value) {
    return <NumberInput
        floatingLabelText={title}
        value={value}
        strategy="ignore"
        min={0}
        max={100}
        required
    />;
  }

  render() {
    return (
        <List
            style={{
              overflow: 'hidden'
            }}
        >

          <ListItem
              primaryText='Simulation Settings'
              leftAvatar={<Avatar src={componentImg}/>}
              secondaryText={this.state.name}
              style={{backgroundColor: blueGrey900}}
          />
          <Divider />


          <ListItem

              rightAvatar={
                <Avatar size={20}>
                  Right
                </Avatar>
              }
          >
            <TextField
                floatingLabelText={'title'}
                floatingLabelFixed={true}
                value={'value'}
            />
          </ListItem>

          <div style={styles.cardText}>

            <NumberField/>

            {this.textInput('text title', 'val')}
            {this.toggleInput('text title', 'val')}
            {this.textInput('text title', 'val')}

            {this.selectInput('text title', 'val')}
            {this.slider()}
          </div>


        </List>
    );
  }
}

export default EditSimulation;

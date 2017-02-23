import React from 'react';
import update from 'immutability-helper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {CardText} from 'material-ui/Card';

import TextInput from './inputs/TextInput';

import componentImg from '../images/components/v1/bjt.png';

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
        inputStyle={{fontFamily: 'Courier'}}
        floatingLabelText={title}
        floatingLabelFixed={true}
        value={value}
    />
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
          />

          <Divider />
          <CardText
              style={{
                height: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
                position: 'absolute',
                right: 0,
                left: 0,
                paddingBottom: 104
              }}
          >

            {this.textInput('Time Step', '<value>')}
            {this.textInput('Sim Speed', '<value>')}
            {this.textInput('Current Speed', '<value>')}
            {this.textInput('Voltage Range', '<value>')}
            {this.textInput('Power Range', '<value>')}
            {this.textInput('Scope Speed', '<value>')}

            <TextField
                key={'name2'}
                inputStyle={{fontFamily: 'Courier'}}
                hintText={'name'}
                errorText={'hint'}
                floatingLabelText={'title'}
                floatingLabelFixed={true}
                value={'value'}
            />

            <Slider
                min={0}
                max={100}
                step={5}
                defaultValue={50}
                value={20}
            />

            <TextField
                key={'name3'}
                inputStyle={{fontFamily: 'Courier'}}
                hintText={'name'}
                errorText={'hint'}
                floatingLabelText={'title'}
                floatingLabelFixed={true}
                value={'value'}
            />


            <RaisedButton label='Update' fullWidth={true} primary={true}/>
          </CardText>

        </List>
    );
  }
}

export default EditSimulation;

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Slider from 'material-ui/Slider';

import SidePaneStyles from '../styles/SidePane.css';


const styles = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: '#ffcccc'
  },
  trackOff: {
    backgroundColor: '#ff9d9d'
  },
  thumbSwitched: {
    backgroundColor: 'red'
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d'
  },
  labelStyle: {
    color: 'red'
  }
};

const fields = {
  name: "Resistor",
  icon: "Resistor.png",
  description: "Description of component",
  voltage: 10,
  current: 5,
  power: 1,
  params: [

    {
      name: "Polarity",
      value: 1,
      description: "Current multiplier",
      default_value: -1,
      data_type: Math.sign,
      field_type: "select",
      select_values: {"NPN": -1, "PNP": 1}
    },
    {
      name: "VBE",
      value: 1,
      unit: "Voltage",
      symbol: "V",
      default_value: 0,
      data_type: parseFloat
    },
    {
      name: "Beta",
      value: 100,
      description: "Current gain",
      default_value: 100,
      data_type: parseFloat,
      range: [0, Infinity]
    },
    {
      name: "Show current",
      value: true,
      description: "Show current through gate",
      default_value: true,
      data_type: (val) => { !!val },
      range: [0, Infinity]
    }
  ]
};

// TODO: need to update state on <SelectField> to set value on MenuItem
const ParamSelectField = ({
    name,
    select_values,
    value
}) => (
    <SelectField
        floatingLabelText={name}
        value={value}
    >
      {
        Object.keys(select_values).map((key, index) => (
          <MenuItem value={select_values[key]} key={index} primaryText={key}/>
        ))
      }
    </SelectField>
);

const ParamTextField = ({
    name,
    value
}) => (
    <TextField
        hintText={name}
        floatingLabelText={name}
        floatingLabelFixed={true}
        value={value}
    />
);

const ParamBooleanField = ({
    name,
    value
}) => (
  <Toggle label={name} labelPosition="right" value={value}/>
);


class EditPane extends React.Component {
  render() {
    return (
        <Drawer width={300} openSecondary={true} open={true}>
          <List>
            <ListItem
                primaryText="ResistorElm"
                leftAvatar={<Avatar src="images/yeoman.png"/>}
                secondaryText="Description"
            />

            <Divider />
            <Table selectable={false}>
              <TableBody displayRowCheckbox={false}>
                <TableRow>
                  <TableRowColumn>Voltage</TableRowColumn>
                  <TableRowColumn>10</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>Current</TableRowColumn>
                  <TableRowColumn>1</TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <Divider />

            { ParamBooleanField({name: "Sample", value: true}) }
            { ParamTextField({name: "Sample", value: "Text value"}) }
            { ParamSelectField({name: "Sample", select_values: {"NPN": -1, "PNP": 1}, value: 1}) }

          </List>
        </Drawer>
    );
  }
}

EditPane.defaultProps = {};

export default EditPane;

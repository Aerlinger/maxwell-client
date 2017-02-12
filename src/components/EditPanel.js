import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Slider from 'material-ui/Slider';

import update from 'immutability-helper';


const fields = {
  name: 'BJT',
  icon: 'BJT.png',
  description: 'Description of component',
  label: 'user_label',
  voltage: 10,
  current: 5,
  power: 1,
  params: [
    {
      name: 'polarity',
      title: 'Polarity',
      value: 1,
      default_value: -1,
      data_type: Math.sign,
      field_type: 'select',
      select_values: {'NPN': -1, 'PNP': 1}
    },
    {
      name: 'vbe',
      title: 'Base-Emitter voltage',
      value: 1,
      unit: 'Voltage',
      symbol: 'V',
      default_value: 0,
      data_type: parseFloat
    },
    {
      name: 'vbc',
      title: 'Base-Collector voltage',
      value: 0.05,
      unit: 'Voltage',
      symbol: 'V',
      default_value: 0,
      data_type: parseFloat
    },
    {
      name: 'beta',
      title: 'Current gain',
      hint: 'Ratio of collector current to base current',
      value: 100,
      description: 'Current gain',
      default_value: 100,
      data_type: parseFloat,
      range: [0, Infinity]
    },
    {
      name: 'show_current',
      title: 'Show current',
      value: true,
      description: 'Show current through gate',
      default_value: true,
      field_type: 'boolean',
      data_type: (val) => {
        !!val
      },
      range: [0, Infinity]
    },
    {
      name: 'duty_cycle',
      title: 'Duty Cycle',
      hint: 'Percentage of high voltage at output',
      value: 50,
      step: 1,
      description: 'Show current through gate',
      default_value: true,
      field_type: 'slider',
      toVal: (x) => x / 100,
      range: [0, 100]
    }
  ]
};

class EditPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = fields;
  }

  findParam(name) {
    return this.state.params.findIndex((item) => item['name'] == name);
  }

  handleChange(key, changeObj, value) {
    let paramIdx = this.findParam(key);

    var changeObj = {};
    changeObj[paramIdx] = {value: {$set: value}};

    if (paramIdx >= 0) {
      this.setState({
        params: update(this.state.params, changeObj)
      }, () => console.log("change:", this.state, key, paramIdx, changeObj, value));
    }
  }

  addSelectField({
      name,
      title,
      hint,
      value,
      default_value,
      data_type,
      field_type,
      select_values
  }) {
    let raw_value = value ? value : default_value;

    return (
        <SelectField
            key={name}
            floatingLabelText={title}
            value={raw_value}
            onChange={this.handleChange.bind(this, name)}
        >
          {
            Object.keys(select_values).map((key, index) => (
                <MenuItem value={select_values[key]} key={index} primaryText={key}/>
            ))
          }
        </SelectField>
    )
  }

  addTextField({
      name,
      title,
      hint,
      value,
      default_value,
      data_type,
      field_type
  }) {
    return (<TextField
        key={name}
        hintText={name}
        floatingLabelText={name}
        floatingLabelFixed={true}
        value={value}
        onChange={this.handleChange.bind(this, name)}
    />);
  }

  addBooleanField({
      name,
      title,
      hint,
      value,
      default_value,
      data_type
  }) {
    return (<Toggle label={title} key={name} labelPosition='right' value={value}
                    onChange={this.handleChange.bind(this, name)}/>);
  }

  addField(obj) {
    if (obj['field_type'] == 'select')
      return this.addSelectField(obj);
    else if (obj['field_type'] == 'boolean')
      return this.addBooleanField(obj);
    else
      return this.addTextField(obj);
  }

  getParams() {
    let params = this.state.params;

    var paramsObj = {};

    params.map((param) => {
      paramsObj[param['name']] = param['value']
    });

    return paramsObj;
  }

  render() {
    let addField = this.addField.bind(this);

    return (
        <Drawer width={300} openSecondary={true} open={true}>
          <List>
            <ListItem
                primaryText='ResistorElm'
                leftAvatar={<Avatar src='images/yeoman.png'/>}
                secondaryText='Description'
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

            {
              this.state.params.map((paramObj) => (
                  addField(paramObj)
              ))
            }

          </List>
        </Drawer>
    );
  }
}

export default EditPanel;
